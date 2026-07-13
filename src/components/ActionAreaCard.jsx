import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({
  title,
  description,
  image,
  slug,
  basePath,
}) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        component={Link}
        to={`${basePath}/${slug}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "stretch",
        }}
      >
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#6e1707" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#6e1707" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
