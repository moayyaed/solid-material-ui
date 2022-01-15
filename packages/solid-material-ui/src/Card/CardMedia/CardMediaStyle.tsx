﻿import { glob } from "solid-styled-components";

(() => glob`
.CardMedia-Root {
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.CardMedia-Media {
    width: 100%;
}

.CardMedia-Imgage {
    object-fit: cover;
}
`)();