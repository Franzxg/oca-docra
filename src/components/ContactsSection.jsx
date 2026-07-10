export default function ContactsSection() {
  return (
    <>
      <div className="contacts-div">
        <p>Email: ocadocra.illustrazioni@gmail.com</p>
        <p>Telefono: +39 334 813 9839</p>
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="cognome">Cognome:</label>
          <input type="text" id="cognome" name="cognome" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="subject">Oggetto:</label>
          <input type="text" id="subject" name="subject" required />
          <label htmlFor="message">Messaggio:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Invia</button>
        </form>
      </div>
    </>
  );
}
