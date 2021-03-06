import { glob } from "solid-styled-components";

(() => glob`
.Backdrop-Root {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    touch-action: none;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
}

.Backdrop-Invisible {
    background-color: transparent;
}
`)();