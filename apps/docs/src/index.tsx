import { render } from "solid-js/web";

import "reflect-metadata";
import "tslib";
import "typeface-roboto";

import { App } from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
