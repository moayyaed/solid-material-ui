import { CircularProgress, Color, LinearProgress } from "solid-material-ui";

export function ProgressSample() {
  return (
    <div style="flex-grow: 1;">
      <div>
        <CircularProgress style={{ margin: "16px" }} color={Color.Primary} />
        <CircularProgress style={{ margin: "16px" }} color={Color.Secondary} />
      </div>
      <div>
        <LinearProgress color={Color.Primary} />
        <br />
        <LinearProgress color={Color.Secondary} />
      </div>
    </div>
  );
}
