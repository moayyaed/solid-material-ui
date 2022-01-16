import {
  Color,
  FontSize,
  Radio,
  RadioButtonCheckedIcon,
  RadioButtonUncheckedIcon,
} from "solid-material-ui";
import { createSignal } from "solid-js";
import { css } from "solid-styled-components";

const green = css`
  color: #66bb6a;
  &.Radio-Checked {
    color: #43a047;
  }
`;

export function RadioSample() {
  const [value, setValue] = createSignal("a");
  const handleChange = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      <Radio
        checked={value() == "a"}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        checked={value() == "b"}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ "aria-label": "B" }}
      />
      <Radio
        checked={value() == "c"}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ "aria-label": "C" }}
        color={Color.Default}
        class={green}
      />
      <Radio
        checked={value() == "d"}
        onChange={handleChange}
        value="d"
        name="radio-button-demo"
        inputProps={{ "aria-label": "D" }}
        color={Color.Default}
      />
      <Radio
        checked={value() == "e"}
        onChange={handleChange}
        value="e"
        name="radio-button-demo"
        inputProps={{ "aria-label": "E" }}
        color={Color.Primary}
        icon={<RadioButtonUncheckedIcon fontSize={FontSize.Small} />}
        checkedIcon={<RadioButtonCheckedIcon fontSize={FontSize.Small} />}
      />
    </div>
  );
}
