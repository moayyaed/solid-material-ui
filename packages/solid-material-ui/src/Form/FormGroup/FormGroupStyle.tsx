import { glob } from "solid-styled-components";

(() => glob`
.FormGroup-Root {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.FormGroup-Row {
    flex-direction: row;
}
`)();