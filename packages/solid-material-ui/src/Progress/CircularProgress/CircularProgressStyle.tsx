import { glob } from "solid-styled-components";

(() => glob`
.CircularProgress-Root {
    display: inline-block;
}

.CircularProgress-Static {
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.CircularProgress-Indeterminate {
    animation: circularProgress-keyframes-circular-rotate 1.4s linear infinite;
}

.CircularProgress-Color-Primary {
    color: var(--theme-palette-primary-main);
}

.CircularProgress-Color-Secondary {
    color: var(--theme-palette-secondary-main);
}

.CircularProgress-Svg {
    display: block;
}

.CircularProgress-Circle {
    stroke: currentColor;
}

.CircularProgress-Circle-Static {
    transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.CircularProgress-Circle-Indeterminate {
    animation: circularProgress-keyframes-circular-dash 1.4s ease-in-out
        infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px;
}

.CircularProgress-Circle-DisableShrink {
    animation: none;
}

@keyframes circularProgress-keyframes-circular-rotate {
    100% {
        transform: rotate(360deg);
    }
  }
  
  @keyframes circularProgress-keyframes-circular-dash {
    0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0px;
    }
    50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
    }
    100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
    }
  }
`)();
