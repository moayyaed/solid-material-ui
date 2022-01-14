import { glob } from "solid-styled-components";

(() => glob`
.Badge-Root {
    display: inline-flex;
    position: relative;
    vertical-align: middle;
    flex-shrink: 0;
}

.Badge-Badge {
    font-family: var(--theme-typography-font-family);
    font-size: var(--theme-typography-font-size-normal);
    font-weight: var(--theme-typography-font-weight-medium);
    height: 20px;
    display: flex;
    padding: 0 6px;
    z-index: 1;
    position: absolute;
    flex-wrap: wrap;
    min-width: 20px;
    box-sizing: border-box;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    line-height: 1;
    align-content: center;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
}

.Badge-Color-Primary {
    color: var(--theme-palette-primary-contrast-text);
    background-color: var(--theme-palette-primary-main);
}

.Badge-Color-Secondary {
    color: var(--theme-palette-secondary-contrast-text);
    background-color: var(--theme-palette-secondary-main);
}

.Badge-Color-Error {
    color: var(--theme-palette-error-contrast-text);
    background-color: var(--theme-palette-error-main);
}

.Badge-Dot {
    height: 6px;
    padding: 0;
    min-width: 6px;
}

.Badge-Top-Right-Rectangle {
    top: 0;
    right: 0;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
}

.Badge-Top-Right-Rectangle.Badge-Invisible {
    transform: scale(0) translate(50%, -50%);
}

.Badge-Bottom-Right-Rectangle {
    right: 0;
    bottom: 0;
    transform: scale(1) translate(50%, 50%);
    transform-origin: 100% 100%;
}

.Badge-Bottom-Right-Rectangle.Badge-Invisible {
    transform: scale(0) translate(50%, 50%);
}

.Badge-Top-Left-Rectangle {
    top: 0;
    left: 0;
    transform: scale(1) translate(-50%, -50%);
    transform-origin: 0% 0%;
}

.Badge-Top-Left-Rectangle.Badge-Invisible {
    transform: scale(0) translate(-50%, -50%);
}

.Badge-Bottom-Left-Rectangle {
    left: 0;
    bottom: 0;
    transform: scale(1) translate(-50%, 50%);
    transform-origin: 0% 100%;
}

.Badge-Bottom-Left-Rectangle.Badge-Invisible {
    transform: scale(0) translate(-50%, 50%);
}

.Badge-Top-Right-Circle {
    top: 14%;
    right: 14%;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
}

.Badge-Top-Right-Circle.Badge-Invisible {
    transform: scale(0) translate(50%, -50%);
}

.Badge-Bottom-Right-Circle {
    right: 14%;
    bottom: 14%;
    transform: scale(1) translate(50%, 50%);
    transform-origin: 100% 100%;
}

.Badge-Bottom-Right-Circle.Badge-Invisible {
    transform: scale(0) translate(50%, 50%);
}

.Badge-Top-Left-Circle {
    top: 14%;
    left: 14%;
    transform: scale(1) translate(-50%, -50%);
    transform-origin: 0% 0%;
}

.Badge-Top-Left-Circle.Badge-Invisible {
    transform: scale(0) translate(-50%, -50%);
}

.Badge-Bottom-Left-Circle {
    left: 14%;
    bottom: 14%;
    transform: scale(1) translate(-50%, 50%);
    transform-origin: 0% 100%;
}

.Badge-Bottom-Left-Circle.Badge-Invisible {
    transform: scale(0) translate(-50%, 50%);
}

.Badge-Invisible {
    transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
`)();
