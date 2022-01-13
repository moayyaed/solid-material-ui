import { Paper, Typography, TypographyVariant } from "solid-material-ui";

export function PaperSample() {
  return (
    <div>
      <Paper style={{ padding: "24px 16px" }}>
        <Typography variant={TypographyVariant.H5} component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    </div>
  );
}
