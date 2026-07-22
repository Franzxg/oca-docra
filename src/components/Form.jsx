import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, ValidationError } from "@formspree/react";

const initialValues = {
  nome: "",
  cognome: "",
  email: "",
  subject: "",
  message: "",
};

const validators = {
  nome: (v) => v.trim().length > 0,
  cognome: (v) => v.trim().length > 0,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  subject: (v) => v.trim().length > 0,
  message: (v) => v.trim().length > 0,
};

const fieldSx = {
  backgroundColor: "#fff",
  borderRadius: "4px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: "transparent" },
    "&.Mui-focused fieldset": { borderColor: "#c0a400" },
    "&.Mui-error fieldset": { borderColor: "#6e1707" },
  },
  "& .MuiInputLabel-root": { color: "#6e1707" },
  "& .MuiInputLabel-root.Mui-error": { color: "#6e1707" },
  "& .MuiFormHelperText-root": { color: "#6e1707" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#6e1707" },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #fff inset",
    WebkitTextFillColor: "#08060d",
    transition: "background-color 5000s ease-in-out 0s",
  },
  "& input:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0 1000px #fff inset",
  },
  "& input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0 1000px #fff inset",
  },
};

export default function Form() {
  const [formspreeState, handleFormspreeSubmit, resetFormspree] = useForm("xdaqlkdr");
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  function handleChange(field) {
    return (event) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
      setTouched((prev) => ({ ...prev, [field]: true }));
    };
  }

  function isFieldValid(field) {
    return validators[field](values[field]);
  }

  function showError(field) {
    return Boolean(touched[field]) && !isFieldValid(field);
  }

  const isFormValid = Object.keys(validators).every((field) =>
    validators[field](values[field]),
  );

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid) return;

    await handleFormspreeSubmit(event);
  }

  function handleSendAnother() {
    setValues(initialValues);
    setTouched({});
    resetFormspree();
  }

   if (formspreeState.succeeded) {
    return (
      <div>
        <p>Grazie per il tuo messaggio! Ti risponderò il prima possibile.</p>
        <Button onClick={handleSendAnother}>Invia un altro messaggio</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label="Nome"
        name="nome"
        required
        value={values.nome}
        onChange={handleChange("nome")}
        error={showError("nome")}
        helperText={showError("nome") ? "Il nome è obbligatorio" : ""}
        sx={fieldSx}
      />
      <TextField
        label="Cognome"
        name="cognome"
        required
        value={values.cognome}
        onChange={handleChange("cognome")}
        error={showError("cognome")}
        helperText={showError("cognome") ? "Il cognome è obbligatorio" : ""}
        sx={fieldSx}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        required
        value={values.email}
        onChange={handleChange("email")}
        error={showError("email")}
        helperText={showError("email") ? "Inserisci un'email valida" : ""}
        sx={fieldSx}
      />
      <TextField
        label="Oggetto"
        name="oggetto"
        required
        value={values.subject}
        onChange={handleChange("subject")}
        error={showError("subject")}
        helperText={showError("subject") ? "L'oggetto è obbligatorio" : ""}
        sx={fieldSx}
      />
      <TextField
        label="Messaggio"
        name="messaggio"
        required
        multiline
        rows={4}
        value={values.message}
        onChange={handleChange("message")}
        error={showError("message")}
        helperText={showError("message") ? "Il messaggio è obbligatorio" : ""}
        sx={fieldSx}
      />
      <ValidationError prefix="Messaggio" field="message" errors={formspreeState.errors} />
      <Button type="submit" disabled={!isFormValid || formspreeState.submitting}>
        {formspreeState.submitting ? "Invio in corso..." : "Invia"}
      </Button>
    </form>
  );
}
