import { glob } from "solid-styled-components";

(() => glob`
.Typography-Root {
    margin: 0;
}

.Typography-Body2 {
    font-size: var(--theme-typography-body2-font-size);
    font-family: var(--theme-typography-body2-font-family);
    font-weight: var(--theme-typography-body2-font-weight);
    line-height: var(--theme-typography-body2-line-height);
    letter-spacing: var(--theme-typography-body2-letter-spacing);
}

.Typography-Body1 {
    font-size: var(--theme-typography-body1-font-size);
    font-family: var(--theme-typography-body1-font-family);
    font-weight: var(--theme-typography-body1-font-weight);
    line-height: var(--theme-typography-body1-line-height);
    letter-spacing: var(--theme-typography-body1-letter-spacing);
}

.Typography-Caption {
    font-size: var(--theme-typography-caption-font-size);
    font-family: var(--theme-typography-caption-font-family);
    font-weight: var(--theme-typography-caption-font-weight);
    line-height: var(--theme-typography-caption-line-height);
    letter-spacing: var(--theme-typography-caption-letter-spacing);
}

.Typography-Button {
    font-size: var(--theme-typography-button-font-size);
    font-family: var(--theme-typography-button-font-family);
    font-weight: var(--theme-typography-button-font-weight);
    line-height: var(--theme-typography-button-line-height);
    letter-spacing: var(--theme-typography-button-letter-spacing);
    text-transform: var(--theme-typography-button-text-transform);
}

.Typography-H1 {
    font-size: var(--theme-typography-h1-font-size);
    font-family: var(--theme-typography-h1-font-family);
    font-weight: var(--theme-typography-h1-font-weight);
    line-height: var(--theme-typography-h1-line-height);
    letter-spacing: var(--theme-typography-h1-letter-spacing);
}

.Typography-H2 {
    font-size: var(--theme-typography-h2-font-size);
    font-family: var(--theme-typography-h2-font-family);
    font-weight: var(--theme-typography-h2-font-weight);
    line-height: var(--theme-typography-h2-line-height);
    letter-spacing: var(--theme-typography-h2-letter-spacing);
}

.Typography-H3 {
    font-size: var(--theme-typography-h3-font-size);
    font-family: var(--theme-typography-h3-font-family);
    font-weight: var(--theme-typography-h3-font-weight);
    line-height: var(--theme-typography-h3-line-height);
    letter-spacing: var(--theme-typography-h3-letter-spacing);
}

.Typography-H4 {
    font-size: var(--theme-typography-h4-font-size);
    font-family: var(--theme-typography-h4-font-family);
    font-weight: var(--theme-typography-h4-font-weight);
    line-height: var(--theme-typography-h4-line-height);
    letter-spacing: var(--theme-typography-h4-letter-spacing);
}

.Typography-H5 {
    font-size: var(--theme-typography-h5-font-size);
    font-family: var(--theme-typography-h5-font-family);
    font-weight: var(--theme-typography-h5-font-weight);
    line-height: var(--theme-typography-h5-line-height);
    letter-spacing: var(--theme-typography-h5-letter-spacing);
}

.Typography-H6 {
    font-size: var(--theme-typography-h6-font-size);
    font-family: var(--theme-typography-h6-font-family);
    font-weight: var(--theme-typography-h6-font-weight);
    line-height: var(--theme-typography-h6-line-height);
    letter-spacing: var(--theme-typography-h6-letter-spacing);
}

.Typography-Subtitle1 {
    font-size: var(--theme-typography-subtitle1-font-size);
    font-family: var(--theme-typography-subtitle1-font-family);
    font-weight: var(--theme-typography-subtitle1-font-weight);
    line-height: var(--theme-typography-subtitle1-line-height);
    letter-spacing: var(--theme-typography-subtitle1-letter-spacing);
}

.Typography-Subtitle2 {
    font-size: var(--theme-typography-subtitle2-font-size);
    font-family: var(--theme-typography-subtitle2-font-family);
    font-weight: var(--theme-typography-subtitle2-font-weight);
    line-height: var(--theme-typography-subtitle2-line-height);
    letter-spacing: var(--theme-typography-subtitle2-letter-spacing);
}

.Typography-Overline {
    font-size: var(--theme-typography-overline-font-size);
    font-family: var(--theme-typography-overline-font-family);
    font-weight: var(--theme-typography-overline-font-weight);
    line-height: var(--theme-typography-overline-line-height);
    letter-spacing: var(--theme-typography-overline-letter-spacing);
    text-transform: var(--theme-typography-overline-text-transform);
}

.Typography-SrOnly {
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
}

.Typography-Align-Left {
    text-align: left;
}

.Typography-Align-Center {
    text-align: center;
}

.Typography-Align-Right {
    text-align: right;
}

.Typography-Align-Justify {
    text-align: justify;
}

.Typography-NoWrap {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.Typography-GutterBottom {
    margin-bottom: 0.35em;
}

.Typography-Paragraph {
    margin-bottom: 16px;
}

.Typography-Color-Inherit {
    color: inherit;
}

.Typography-Color-Primary {
    color: var(--theme-palette-primary-main);
}

.Typography-Color-Secondary {
    color: var(--theme-palette-secondary-main);
}

.Typography-Color-TextPrimary {
    color: var(--theme-palette-text-primary);
}

.Typography-Color-TextSecondary {
    color: var(--theme-palette-text-secondary);
}

.Typography-Color-Error {
    color: var(--theme-palette-error-main);
}

.Typography-Display-Inline {
    display: inline;
}

.Typography-Display-Block {
    display: block;
}
`)();
