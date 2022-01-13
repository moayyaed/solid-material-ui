import { JSX } from "solid-js";
import { Theme } from "./Theme";
import { MaterialSamples } from "./Samples/MaterialSamples";

export function App(): JSX.Element {
  return (
    <Theme>
      <div>solid-material-ui docs</div>
      <MaterialSamples />
    </Theme>
  );
}
