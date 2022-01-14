import { glob } from "solid-styled-components";

(() => glob`
.Grid-Container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.Grid-Item {
  margin: 0;
  box-sizing: border-box;
}

.Grid-ZeroMinWidth {
  min-width: 0;
}

.Grid-Direction-XS-Column {
  flex-direction: column;
}

.Grid-Direction-XS-ColumnReverse {
  flex-direction: column-reverse;
}

.Grid-Direction-XS-RowReverse {
  flex-direction: row-reverse;
}

.Grid-Wrap-XS-Nowrap {
  flex-wrap: nowrap;
}

.Grid-Wrap-XS-WrapReverse {
  flex-wrap: wrap-reverse;
}

.Grid-AlignItems-XS-Center {
  align-items: center;
}

.Grid-AlignItems-XS-FlexStart {
  align-items: flex-start;
}

.Grid-AlignItems-XS-FlexEnd {
  align-items: flex-end;
}

.Grid-AlignItems-XS-Baseline {
  align-items: baseline;
}

.Grid-AlignContent-XS-Center {
  align-content: center;
}

.Grid-AlignContent-XS-FlexStart {
  align-content: flex-start;
}

.Grid-AlignContent-XS-FlexEnd {
  align-content: flex-end;
}

.Grid-AlignContent-XS-SpaceBetween {
  align-content: space-between;
}

.Grid-AlignContent-XS-SpaceAround {
  align-content: space-around;
}

.Grid-Justify-XS-Center {
  justify-content: center;
}

.Grid-Justify-XS-FlexEnd {
  justify-content: flex-end;
}

.Grid-Justify-XS-SpaceBetween {
  justify-content: space-between;
}

.Grid-Justify-XS-SpaceAround {
  justify-content: space-around;
}

.Grid-Justify-XS-SpaceEvenly {
  justify-content: space-evenly;
}

.Grid-Spacing-XS-1 {
  width: calc(100% + calc(var(--theme-spacing) * 1px));
  margin: calc(calc(var(--theme-spacing) * 1 / 2) * -1px);
}

.Grid-Spacing-XS-1 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 1 / 2) * 1px);
}

.Grid-Spacing-XS-2 {
  width: calc(100% + calc(var(--theme-spacing) * 2px));
  margin: calc(calc(var(--theme-spacing) * 2 / 2) * -1px);
}

.Grid-Spacing-XS-2 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 2 / 2) * 1px);
}

.Grid-Spacing-XS-3 {
  width: calc(100% + calc(var(--theme-spacing) * 3px));
  margin: calc(calc(var(--theme-spacing) * 3 / 2) * -1px);
}

.Grid-Spacing-XS-3 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 3 / 2) * 1px);
}

.Grid-Spacing-XS-4 {
  width: calc(100% + calc(var(--theme-spacing) * 4px));
  margin: calc(calc(var(--theme-spacing) * 4 / 2) * -1px);
}

.Grid-Spacing-XS-4 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 4 / 2) * 1px);
}

.Grid-Spacing-XS-5 {
  width: calc(100% + calc(var(--theme-spacing) * 5px));
  margin: calc(calc(var(--theme-spacing) * 5 / 2) * -1px);
}

.Grid-Spacing-XS-5 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 5 / 2) * 1px);
}

.Grid-Spacing-XS-6 {
  width: calc(100% + calc(var(--theme-spacing) * 6px));
  margin: calc(calc(var(--theme-spacing) * 6 / 2) * -1px);
}

.Grid-Spacing-XS-6 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 6 / 2) * 1px);
}

.Grid-Spacing-XS-7 {
  width: calc(100% + calc(var(--theme-spacing) * 7px));
  margin: calc(calc(var(--theme-spacing) * 7 / 2) * -1px);
}

.Grid-Spacing-XS-7 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 7 / 2) * 1px);
}

.Grid-Spacing-XS-8 {
  width: calc(100% + calc(var(--theme-spacing) * 8px));
  margin: calc(calc(var(--theme-spacing) * 8 / 2) * -1px);
}

.Grid-Spacing-XS-8 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 8 / 2) * 1px);
}

.Grid-Spacing-XS-9 {
  width: calc(100% + calc(var(--theme-spacing) * 9px));
  margin: calc(calc(var(--theme-spacing) * 9 / 2) * -1px);
}

.Grid-Spacing-XS-9 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 9 / 2) * 1px);
}

.Grid-Spacing-XS-10 {
  width: calc(100% + calc(var(--theme-spacing) * 10px));
  margin: calc(calc(var(--theme-spacing) * 10 / 2) * -1px);
}

.Grid-Spacing-XS-10 > .Grid-Item {
  padding: calc(calc(var(--theme-spacing) * 10 / 2) * 1px);
}

.Grid-XS-Auto {
  flex-grow: 0;
  max-width: none;
  flex-basis: auto;
}

.Grid-XS-True {
  flex-grow: 1;
  max-width: 100%;
  flex-basis: 0;
}

.Grid-XS-1 {
  flex-grow: 0;
  max-width: 8.333333%;
  flex-basis: 8.333333%;
}

.Grid-XS-2 {
  flex-grow: 0;
  max-width: 16.666667%;
  flex-basis: 16.666667%;
}

.Grid-XS-3 {
  flex-grow: 0;
  max-width: 25%;
  flex-basis: 25%;
}

.Grid-XS-4 {
  flex-grow: 0;
  max-width: 33.333333%;
  flex-basis: 33.333333%;
}

.Grid-XS-5 {
  flex-grow: 0;
  max-width: 41.666667%;
  flex-basis: 41.666667%;
}

.Grid-XS-6 {
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
}

.Grid-XS-7 {
  flex-grow: 0;
  max-width: 58.333333%;
  flex-basis: 58.333333%;
}

.Grid-XS-8 {
  flex-grow: 0;
  max-width: 66.666667%;
  flex-basis: 66.666667%;
}

.Grid-XS-9 {
  flex-grow: 0;
  max-width: 75%;
  flex-basis: 75%;
}

.Grid-XS-10 {
  flex-grow: 0;
  max-width: 83.333333%;
  flex-basis: 83.333333%;
}

.Grid-XS-11 {
  flex-grow: 0;
  max-width: 91.666667%;
  flex-basis: 91.666667%;
}

.Grid-XS-12 {
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
}

@media (min-width: 600px) {
  .Grid-SM-Auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }

  .Grid-SM-True {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }

  .Grid-SM-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }

  .Grid-SM-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }

  .Grid-SM-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }

  .Grid-SM-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }

  .Grid-SM-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }

  .Grid-SM-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }

  .Grid-SM-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }

  .Grid-SM-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }

  .Grid-SM-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }

  .Grid-SM-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }

  .Grid-SM-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }

  .Grid-SM-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}

@media (min-width: 960px) {
  .Grid-MD-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }

  .Grid-MD-True {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }

  .Grid-MD-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }

  .Grid-MD-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }

  .Grid-MD-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }

  .Grid-MD-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }

  .Grid-MD-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }

  .Grid-MD-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }

  .Grid-MD-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }

  .Grid-MD-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }

  .Grid-MD-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }

  .Grid-MD-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }

  .Grid-MD-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }

  .Grid-MD-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}

@media (min-width: 1280px) {
  .Grid-LG-Auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }

  .Grid-LG-True {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }

  .Grid-LG-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }

  .Grid-LG-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }

  .Grid-LG-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }

  .Grid-LG-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }

  .Grid-LG-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }

  .Grid-LG-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }

  .Grid-LG-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }

  .Grid-LG-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }

  .Grid-LG-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }

  .Grid-LG-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }

  .Grid-LG-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }

  .Grid-LG-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}

@media (min-width: 1920px) {
  .Grid-XL-Auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }

  .Grid-XL-True {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }

  .Grid-XL-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }

  .Grid-XL-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }

  .Grid-XL-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }

  .Grid-XL-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }

  .Grid-XL-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }

  .Grid-XL-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }

  .Grid-XL-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }

  .Grid-XL-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }

  .Grid-XL-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }

  .Grid-XL-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }

  .Grid-XL-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }

  .Grid-XL-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
`)();
