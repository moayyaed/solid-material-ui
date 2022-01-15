﻿import { glob } from "solid-styled-components";

(() => glob`
.LinearProgress-Root {
    height: 4px;
    overflow: hidden;
    position: relative;
}

.LinearProgress-Color-Primary {
    background-color: var(--theme-palette-primary-background);
}

.LinearProgress-Color-Secondary {
    background-color: var(--theme-palette-secondary-background);
}

.LinearProgress-Buffer {
    background-color: transparent;
}

.LinearProgress-Query {
    transform: rotate(180deg);
}

.LinearProgress-Dashed {
    width: 100%;
    height: 100%;
    position: absolute;
    animation: linearProgress-keyframes-buffer 3s infinite linear;
    margin-top: 0;
}

.LinearProgress-Dashed-Color-Primary {
    background-size: 10px 10px;
    background-image: radial-gradient(
        var(--theme-palette-primary-background, rgb(167, 202, 237)) 0%,
        var(--theme-palette-primary-background, rgb(167, 202, 237)) 16%,
        transparent 42%
    );
    background-position: 0px -23px;
}

.LinearProgress-Dashed-Color-Secondary {
    background-size: 10px 10px;
    background-image: radial-gradient(
        var(--theme-palette-secondary-background, rgb(241, 158, 187)) 0%,
        var(--theme-palette-secondary-background, rgb(241, 158, 187)) 16%,
        transparent 42%
    );
    background-position: 0px -23px;
}

.LinearProgress-Bar {
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    position: absolute;
    transition: transform 0.2s linear;
    transform-origin: left;
}

.LinearProgress-Bar-Color-Primary {
    background-color: var(--theme-palette-primary-main);
}

.LinearProgress-Bar-Color-Secondary {
    background-color: var(--theme-palette-secondary-main);
}

.LinearProgress-Bar1-Indeterminate {
    width: auto;
    animation: linearProgress-keyframes-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.LinearProgress-Bar1-Determinate {
    transition: transform 0.4s linear;
}

.LinearProgress-Bar1-Buffer {
    z-index: 1;
    transition: transform 0.4s linear;
}

.LinearProgress-Bar2-Indeterminate {
    width: auto;
    animation: linearProgress-keyframes-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

.LinearProgress-Bar2-Buffer {
    transition: transform 0.4s linear;
}

@keyframes linearProgress-keyframes-indeterminate1 {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}

@keyframes linearProgress-keyframes-indeterminate2 {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}

@keyframes linearProgress-keyframes-buffer {
    0% {
        opacity: 1;
        background-position: 0px -23px;
    }
    50% {
        opacity: 0;
        background-position: 0px -23px;
    }
    100% {
        opacity: 1;
        background-position: -200px -23px;
    }
}
`)();