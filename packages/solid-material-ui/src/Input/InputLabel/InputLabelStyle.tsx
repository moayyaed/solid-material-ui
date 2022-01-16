﻿import { glob } from "solid-styled-components";

(() => glob`
.InputLabel-Root {
    display: block;
    transform-origin: top left;
}

.InputLabel-FormControl {
    top: 0;
    left: 0;
    position: absolute;
    transform: translate(0, 24px) scale(1);
}

.InputLabel-Margin-Dense {
    transform: translate(0, 21px) scale(1);
}

.InputLabel-Shrink {
    transform: translate(0, 1.5px) scale(0.75);
    transform-origin: top left;
}

.InputLabel-Animated {
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
}

.InputLabel-Filled {
    z-index: 1;
    transform: translate(12px, 20px) scale(1);
    pointer-events: none;
}

.InputLabel-Filled.InputLabel-Margin-Dense {
    transform: translate(12px, 17px) scale(1);
}

.InputLabel-Filled.InputLabel-Shrink {
    transform: translate(12px, 10px) scale(0.75);
}

.InputLabel-Filled.InputLabel-Shrink.InputLabel-Margin-Dense {
    transform: translate(12px, 7px) scale(0.75);
}

.InputLabel-Outlined {
    z-index: 1;
    transform: translate(14px, 20px) scale(1);
    pointer-events: none;
}

.InputLabel-Outlined.InputLabel-Margin-Dense {
    transform: translate(14px, 12px) scale(1);
}

.InputLabel-Outlined.InputLabel-Shrink {
    transform: translate(14px, -6px) scale(0.75);
}
`)();