import { createSignal } from "solid-js";
import {
  Margin,
  TextField,
  TextFieldVariant,
  useStyles,
} from "solid-material-ui";

export function toNumber(value: string, def: number = 0): number {
  return value ? Number(value) : def;
}

export function TextFieldFilledSample() {
  const styles = useStyles({
    demoTextField: {
      width: "200px",
      "margin-left": "8px",
      "margin-right": "8px",
    },
  });
  const [name, setName] = createSignal("Max Length 12");
  const [multiline, setMultiline] = createSignal("Multiline");
  const [age, setAge] = createSignal(10);
  return (
    <form
      style="display: flex;
    flex-wrap: wrap;"
      noValidate
      autocomplete="off"
    >
      <TextField
        id="standard-name"
        label="Name"
        class={styles.demoTextField}
        value={name()}
        onChange={setName}
        maxLength={12}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        required={true}
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        error
        id="standard-error"
        label="Error"
        defaultValue="Hello World"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-password-input"
        label="Password"
        class={styles.demoTextField}
        type="password"
        autoComplete="current-password"
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        class={styles.demoTextField}
        margin={Margin.Normal}
        readOnly
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-dense"
        label="Dense"
        class={styles.demoTextField}
        style={{ "margin-top": "19px" }}
        margin={Margin.Dense}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax={4}
        value={multiline()}
        onChange={setMultiline}
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        class={styles.demoTextField}
        helper="Some important text"
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Placeholder"
        multiline
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-number"
        label="Number"
        value={age.toString()}
        onChange={(v) => setAge(toNumber(v, 0))}
        type="number"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        class={styles.demoTextField}
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: "8px" }}
        placeholder="Placeholder"
        helper="Full width!"
        fullWidth
        shrink
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
      <TextField
        id="standard-bare"
        class={styles.demoTextField}
        defaultValue="Bare"
        margin={Margin.Normal}
        variant={TextFieldVariant.Filled}
      />
    </form>
  );
}
