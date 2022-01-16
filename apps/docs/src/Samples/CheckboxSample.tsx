import { Checkbox, Color } from 'solid-material-ui';
import { createSignal } from 'solid-js';

export function CheckboxSample() {
  const [checked, setChecked] = createSignal(true);
  return (
    <div>
      <Checkbox color={Color.Primary} />
      <Checkbox
        checked={checked()}
        onChange={() => setChecked((checked) => !checked)}
      />
      <Checkbox indeterminate />
    </div>
  );
}
