import { createSignal } from "solid-js";
import { Color, Switch } from "solid-material-ui";

export function SwitchSample() {
  const [checked, setChecked] = createSignal(true);
  return (
    <div>
      <Switch color={Color.Primary} />
      <Switch
        checked={checked()}
        color={Color.Secondary}
        onChange={() => setChecked((checked) => !checked)}
      />
    </div>
  );
}
