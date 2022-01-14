﻿import { glob } from "solid-styled-components";

(() => glob`
@media (min-width:0px) and (max-width:599.95px) {
    .Hidden-ExtraSmallOnly {
        display: none;
    }
}

@media (min-width:0px) {
    .Hidden-ExtraSmallUp {
        display: none;
    }
}

@media (max-width:599.95px) {
    .Hidden-ExtraSmallDown {
        display: none;
    }
}

@media (min-width:600px) and (max-width:959.95px) {
    .Hidden-SmallOnly {
        display: none;
    }
}

@media (min-width:600px) {
    .Hidden-SmallUp {
        display: none;
    }
}

@media (max-width:959.95px) {
    .Hidden-SmallDown {
        display: none;
    }
}

@media (min-width:960px) and (max-width:1279.95px) {
    .Hidden-MediumOnly {
        display: none;
    }
}

@media (min-width:960px) {
    .Hidden-MediumUp {
        display: none;
    }
}

@media (max-width:1279.95px) {
    .Hidden-MediumDown {
        display: none;
    }
}

@media (min-width:1280px) and (max-width:1919.95px) {
    .Hidden-LargeOnly {
        display: none;
    }
}

@media (min-width:1280px) {
    .Hidden-LargeUp {
        display: none;
    }
}

@media (max-width:1919.95px) {
    .Hidden-LargeDown {
        display: none;
    }
}

@media (min-width:1920px) {
    .Hidden-ExtraLargeOnly {
        display: none;
    }
}

@media (min-width:1920px) {
    .Hidden-ExtraLargeUp {
        display: none;
    }
}

@media (min-width:0px) {
    .Hidden-ExtraLargeDown {
        display: none;
    }
}
`)();