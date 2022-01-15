import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Color,
  Size,
  Typography,
  TypographyVariant,
} from "solid-material-ui";

export function CardSample() {
  return (
    <Card style={{ "max-width": "345px" }}>
      <CardActionArea>
        <CardMedia
          style={{ height: "140px" }}
          image="https://skclusive.github.io/Skclusive.Material.Docs/_content/Skclusive.Material.Docs.App.View/images/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant={TypographyVariant.H5}
            component="h2"
          >
            Lizard
          </Typography>
          <Typography
            variant={TypographyVariant.Body2}
            color={Color.TextSecondary}
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size={Size.Small} color={Color.Primary}>
          Share
        </Button>
        <Button size={Size.Small} color={Color.Primary}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
