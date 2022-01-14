﻿import { glob } from "solid-styled-components";

(() => glob`
.Ripple-Root {
    opacity: 0;
    position: absolute;
}

.Ripple-Visible {
    opacity: 0.3;
    transform: scale(1);
    animation: Ripple-Keyframes-Enter 550ms cubic-bezier(0.4, 0, 0.2, 1);
}

.Ripple-Pulsate {
    animation-duration: 200ms;
}

.Ripple-Child {
    width: 100%;
    height: 100%;
    opacity: 1;
    display: block;
    border-radius: 50%;
    background-color: currentColor;
}

.Ripple-Child-Leaving {
    opacity: 0;
    animation: Ripple-Keyframes-Exit 550ms cubic-bezier(0.4, 0, 0.2, 1);
}

.Ripple-Child-Pulsate {
    top: 0;
    left: 0;
    position: absolute;
    animation: Ripple-Keyframes-Pulsate 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms
        infinite;
}

@keyframes Ripple-Keyframes-Enter {
    0% {
        opacity: 0.1;
        transform: scale(0);
    }
    100% {
        opacity: 0.3;
        transform: scale(1);
    }
}

@keyframes Ripple-Keyframes-Exit {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes Ripple-Keyframes-Pulsate {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.92);
    }
    100% {
        transform: scale(1);
    }
}
`)();