﻿import { glob } from "solid-styled-components";

(() => glob`
@media print {
    .Dialog-Root {
        position: absolute !important;
    }
}

.Dialog-Scroll-Paper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.Dialog-Scroll-Body {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
}

.Dialog-Scroll-Body:after {
    width: 0;
    height: 100%;
    content: "";
    display: inline-block;
    vertical-align: middle;
}

.Dialog-Container {
    height: 100%;
    outline: 0;
}

@media print {
    .Dialog-Container {
        height: auto;
    }
}

.Dialog-Paper {
    margin: 32px;
    position: relative;
    overflow-y: auto;
}

@media print {
    .Dialog-Paper {
        box-shadow: none;
        overflow-y: visible;
    }
}

.Dialog-Paper-Scroll-Paper {
    display: flex;
    max-height: calc(100% - 64px);
    flex-direction: column;
}

.Dialog-Paper-Scroll-Body {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
}

.Dialog-Paper-Width-False {
    max-width: calc(100% - 64px);
}

.Dialog-Paper-Width-ExtraSmall {
    max-width: 444px;
}

@media (max-width: 507.95px) {
    .Dialog-Paper-Width-ExtraSmall.Dialog-Paper-Scroll-Body {
        max-width: calc(100% - 64px);
    }
}

.Dialog-Paper-Width-Small {
    max-width: 600px;
}

@media (max-width: 663.95px) {
    .Dialog-Paper-Width-Small.Dialog-Paper-Scroll-Body {
        max-width: calc(100% - 64px);
    }
}

.Dialog-Paper-Width-Medium {
    max-width: 960px;
}

@media (max-width: 1023.95px) {
    .Dialog-Paper-Width-Medium.Dialog-Paper-Scroll-Body {
        max-width: calc(100% - 64px);
    }
}

.Dialog-Paper-Width-Large {
    max-width: 1280px;
}

@media (max-width: 1343.95px) {
    .Dialog-Paper-Width-Large.Dialog-Paper-Scroll-Body {
        max-width: calc(100% - 64px);
    }
}

.Dialog-Paper-Width-ExtraLarge {
    max-width: 1920px;
}

@media (max-width: 1983.95px) {
    .Dialog-Paper-Width-ExtraLarge.Dialog-Paper-Scroll-Body {
        max-width: calc(100% - 64px);
    }
}

.Dialog-Paper-FullWidth {
    width: calc(100% - 64px);
}

.Dialog-Paper-FullScreen {
    width: 100%;
    height: 100%;
    margin: 0;
    max-width: 100%;
    max-height: none;
    border-radius: 0;
}

.Dialog-Paper-FullScreen.Dialog-Paper-Scroll-Body {
    margin: 0;
    max-width: 100%;
}
`)();