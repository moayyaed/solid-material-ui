import { JSX } from "solid-js";
import { createGlobalStyles } from "solid-styled-components";

// currently these are generated style css variable values from default theme.
// having them copied here to get started. can be replaced with dynamic theming based on theme value input later.
// TODO: to implement dynamic theming css variable generators

export const ThemeCommonStyle = createGlobalStyles`
:root {
    --theme-palette-common-white: #fff;
    --theme-palette-common-black: #000;
    --theme-spacing: 8;
    --theme-shape-border-radius: 4;
    --theme-transition-box-shadow: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    --theme-font-size: 14;
    --theme-html-font-size: 16;
    --theme-zindex-appbar: 1100;
    --theme-zindex-drawer: 1200;
    --theme-zindex-modal: 1300;
    --theme-zindex-snackbar: 1400;
    --theme-zindex-tooltip: 1500;
    --theme-zindex-speed-dial: 1050;
    --theme-zindex-mobile-stepper: 1000;
    --theme-font-size-coef: calc(var(--theme-font-size) / 14);
    --theme-font-size-rem-factor: calc(var(--theme-font-size-coef) / var(--theme-html-font-size));
    --theme-breakpoints-values-xs: 0;
    --theme-breakpoints-values-sm: 600;
    --theme-breakpoints-values-md: 960;
    --theme-breakpoints-values-lg: 1280;
    --theme-breakpoints-values-xl: 1920;
    --theme-shadow0: none;
    --theme-shadow1: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    --theme-shadow2: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    --theme-shadow3: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
    --theme-shadow4: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    --theme-shadow5: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
    --theme-shadow6: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
    --theme-shadow7: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
    --theme-shadow8: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
    --theme-shadow9: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
    --theme-shadow10: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
    --theme-shadow11: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
    --theme-shadow12: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
    --theme-shadow13: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
    --theme-shadow14: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
    --theme-shadow15: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
    --theme-shadow16: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
    --theme-shadow17: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
    --theme-shadow18: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
    --theme-shadow19: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
    --theme-shadow20: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
    --theme-shadow21: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
    --theme-shadow22: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
    --theme-shadow23: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
    --theme-shadow24: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
    --theme-typography-font-size: var(--theme-font-size);
    --theme-typography-html-font-size: var(--theme-html-font-size);
    --theme-typography-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-font-size-medium: 1.25rem;
    --theme-typography-font-size-normal: 0.75rem;
    --theme-typography-font-weight-light: 300;
    --theme-typography-font-weight-regular: 400;
    --theme-typography-font-weight-medium: 500;
    --theme-typography-font-weight-bold: 700;
    --theme-typography-body1-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-body1-font-size: 1rem;
    --theme-typography-body1-font-weight: 400;
    --theme-typography-body1-line-height: 1.5;
    --theme-typography-body1-letter-spacing: 0.00938em;
    --theme-typography-body2-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-body2-font-size: 0.88rem;
    --theme-typography-body2-font-weight: 400;
    --theme-typography-body2-line-height: 1.43;
    --theme-typography-body2-letter-spacing: 0.01071em;
    --theme-typography-caption-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-caption-font-size: 0.75rem;
    --theme-typography-caption-font-weight: 400;
    --theme-typography-caption-line-height: 1.66;
    --theme-typography-caption-letter-spacing: 0.03333em;
    --theme-typography-h1-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-h1-font-size: 6rem;
    --theme-typography-h1-font-weight: 300;
    --theme-typography-h1-line-height: 1;
    --theme-typography-h1-letter-spacing: -0.01562em;
    --theme-typography-h2-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-h2-font-size: 3.75rem;
    --theme-typography-h2-font-weight: 300;
    --theme-typography-h2-line-height: 1;
    --theme-typography-h2-letter-spacing: -0.00833em;
    --theme-typography-h3-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-h3-font-size: 3rem;
    --theme-typography-h3-font-weight: 400;
    --theme-typography-h3-line-height: 1.04;
    --theme-typography-h3-letter-spacing: 0em;
    --theme-typography-h4-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-h4-font-size: 2.12rem;
    --theme-typography-h4-font-weight: 400;
    --theme-typography-h4-line-height: 1.17;
    --theme-typography-h4-letter-spacing: 0.00735em;
    --theme-typography-h5-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-h5-font-size: 1.5rem;
    --theme-typography-h5-font-weight: 400;
    --theme-typography-h5-line-height: 1.33;
    --theme-typography-h5-letter-spacing: 0em;
    --theme-typography-h6-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-h6-font-size: 1.25rem;
    --theme-typography-h6-font-weight: 500;
    --theme-typography-h6-line-height: 1.6;
    --theme-typography-h6-letter-spacing: 0.0075em;
    --theme-typography-subtitle1-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-subtitle1-font-size: 1rem;
    --theme-typography-subtitle1-font-weight: 400;
    --theme-typography-subtitle1-line-height: 1.75;
    --theme-typography-subtitle1-letter-spacing: 0.00938em;
    --theme-typography-subtitle2-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-subtitle2-font-size: 0.88rem;
    --theme-typography-subtitle2-font-weight: 500;
    --theme-typography-subtitle2-line-height: 1.57;
    --theme-typography-subtitle2-letter-spacing: 0.00714em;
    --theme-typography-overline-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-overline-font-size: 0.75rem;
    --theme-typography-overline-font-weight: 400;
    --theme-typography-overline-line-height: 2.66;
    --theme-typography-overline-letter-spacing: 0.08333em;
    --theme-typography-overline-text-transform: uppercase;
    --theme-typography-button-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-button-font-size: 0.88rem;
    --theme-typography-button-font-weight: 500;
    --theme-typography-button-line-height: 1.75;
    --theme-typography-button-letter-spacing: 0.02857em;
    --theme-typography-button-text-transform: uppercase;
}
`;

export function ThemeLightStyle(): JSX.Element {
  return (
    <style
      textContent={`
        :root {
            --theme-mode-dark: 0;
            --theme-palette-common-background: #000;
            --theme-palette-text-primary: rgba(0, 0, 0, 0.87);
            --theme-palette-text-secondary: rgba(0, 0, 0, 0.54);
            --theme-palette-text-disabled: rgba(0, 0, 0, 0.38);
            --theme-palette-text-hint: rgba(0, 0, 0, 0.38);
            --theme-palette-background-paper: #fff;
            --theme-palette-background-default: #fff;
            --theme-palette-background-custom-level1: #fff;
            --theme-palette-background-custom-level2: #f5f5f5;
            --theme-palette-background-custom-appbar-color: var(--theme-palette-primary-contrast-text);
            --theme-palette-background-custom-appbar-background-color: var(--theme-palette-primary-main);
            --theme-palette-action-active: rgba(0, 0, 0, 0.54);
            --theme-palette-action-hover: rgba(0, 0, 0, 0.08);
            --theme-palette-action-hover-opacity: 0.08;
            --theme-palette-action-selected: rgba(0, 0, 0, 0.14);
            --theme-palette-action-disabled: rgba(0, 0, 0, 0.26);
            --theme-palette-action-disabled-background: rgba(0, 0, 0, 0.12);
            --theme-palette-primary-main: #1976d2;
            --theme-palette-primary-light: rgb(71, 145, 219);
            --theme-palette-primary-dark: rgb(17, 82, 147);
            --theme-palette-primary-contrast-text: #fff;
            --theme-palette-primary-alternate: rgb(17, 82, 147);
            --theme-palette-primary-hover: rgba(25, 118, 210, 0.08);
            --theme-palette-primary-background: rgb(167, 202, 237);
            --theme-palette-secondary-main: rgb(220, 0, 78);
            --theme-palette-secondary-light: rgb(227, 51, 113);
            --theme-palette-secondary-dark: rgb(154, 0, 54);
            --theme-palette-secondary-contrast-text: #fff;
            --theme-palette-secondary-hover: rgba(220, 0, 78, 0.08);
            --theme-palette-secondary-border: rgba(220, 0, 78, 0.5);
            --theme-palette-secondary-background: rgb(241, 158, 187);
            --theme-palette-secondary-alternate: rgb(154, 0, 54);
            --theme-palette-error-main: #f44336;
            --theme-palette-error-light: #e57373;
            --theme-palette-error-dark: #d32f2f;
            --theme-palette-error-contrast-text: #fff;
            --theme-palette-divider: rgba(0, 0, 0, 0.12);
            --theme-palette-grey50: #fafafa;
            --theme-palette-grey50-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey100: #f5f5f5;
            --theme-palette-grey100-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey200: #eeeeee;
            --theme-palette-grey200-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey300: #e0e0e0;
            --theme-palette-grey300-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey400: #bdbdbd;
            --theme-palette-grey400-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey500: #9e9e9e;
            --theme-palette-grey500-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey600: #757575;
            --theme-palette-grey600-contrast-text: #fff;
            --theme-palette-grey700: #616161;
            --theme-palette-grey700-contrast-text: #fff;
            --theme-palette-grey800: #424242;
            --theme-palette-grey800-contrast-text: #fff;
            --theme-palette-grey900: #212121;
            --theme-palette-grey900-contrast-text: #fff;
            --theme-palette-greyA100: #d5d5d5;
            --theme-palette-greyA100-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-greyA200: #aaaaaa;
            --theme-palette-greyA200-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-greyA400: #303030;
            --theme-palette-greyA400-contrast-text: #fff;
            --theme-palette-greyA700: #616161;
            --theme-palette-greyA700-contrast-text: #fff;
            --theme-palette-grey-contrast-text-default: rgba(0, 0, 0, 0.87);
            --theme-palette-grey-background-default: #f5f5f5;
            --theme-custom-light-or-dark: #e0e0e0;
            --theme-custom-light-or-dark-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-custom-content-background-color: #f4f6f8;
            --theme-custom-content-background-default: #f5f5f5;
            --theme-custom-palette-common-alternate: #000;
            --theme-custom-palette-opacity: 0.38;
            --theme-custom-layout-backward: #f5f5f5;
            --theme-custom-layout-forward: #fff;
            --theme-custom-palette-primary-main: #1976d2;
            --theme-custom-palette-primary-contrast-text: #fff;
            --theme-component-button-border-outlined: rgba(0, 0, 0, 0.23);
            --theme-component-divider-background-color: rgba(0, 0, 0, 0.08);
            --theme-component-avatar-background: #bdbdbd;
            --theme-component-chip-color: rgba(0, 0, 0, 0.87);
            --theme-component-chip-background-color: #e0e0e0;
            --theme-component-chip-clickable-focus: rgb(206, 206, 206);
            --theme-component-chip-clickable-active: rgb(197, 197, 197);
            --theme-component-chip-clickable-primary-focus: rgb(43, 128, 213);
            --theme-component-chip-clickable-primary-active: rgb(52, 134, 215);
            --theme-component-chip-clickable-secondary-focus: rgb(222, 20, 92);
            --theme-component-chip-clickable-secondary-active: rgb(224, 30, 99);
            --theme-component-chip-deletable-focus: rgb(206, 206, 206);
            --theme-component-chip-deletable-primary-focus: rgb(71, 145, 219);
            --theme-component-chip-deletable-secondary-focus: rgb(227, 51, 113);
            --theme-component-chip-outlined-focus: rgba(0, 0, 0, 0.08);
            --theme-component-chip-outlined-primary-focus: rgba(25, 118, 210, 0.08);
            --theme-component-chip-outlined-secondary-focus: rgba(220, 0, 78, 0.08);
            --theme-component-chip-avatar-color: #616161;
            --theme-component-chip-icon-color: #616161;
            --theme-component-chip-delete-icon-color: rgba(0, 0, 0, 0.26);
            --theme-component-chip-delete-icon-color-hover: rgba(0, 0, 0, 0.4);
            --theme-component-chip-delete-icon-primary-color: rgba(255, 255, 255, 0.7);
            --theme-component-chip-delete-icon-secondary-color: rgba(255, 255, 255, 0.7);
            --theme-component-chip-delete-icon-outlined-primary-color: rgba(25, 118, 210, 0.7);
            --theme-component-chip-delete-icon-outlined-secondary-color: rgba(220, 0, 78, 0.7);
            --theme-component-chip-border-outlined: rgba(0, 0, 0, 0.23);
            --theme-component-switch-color: #fafafa;
            --theme-component-switch-disabled-color: #bdbdbd;
            --theme-component-switch-disabled-opacity: 0.12;
            --theme-component-table-row-background-selected: rgba(0, 0, 0, 0.04);
            --theme-component-table-row-background-hover: rgba(0, 0, 0, 0.07);
            --theme-component-table-cell-border-bottom: rgba(224, 224, 224, 1);
            --theme-palette-error-color: rgb(97, 26, 21);
            --theme-palette-error-background: rgb(253, 236, 234);
            --theme-palette-success-main: #4caf50;
            --theme-palette-success-light: #81c784;
            --theme-palette-success-dark: #388e3c;
            --theme-palette-success-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-success-alternate: #388e3c;
            --theme-palette-success-color: rgb(30, 70, 32);
            --theme-palette-success-background: rgb(237, 247, 237);
            --theme-palette-warning-main: #ff9800;
            --theme-palette-warning-light: #ffb74d;
            --theme-palette-warning-dark: #f57c00;
            --theme-palette-warning-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-warning-alternate: #f57c00;
            --theme-palette-warning-color: rgb(102, 60, 0);
            --theme-palette-warning-background: rgb(255, 244, 229);
            --theme-palette-info-main: #2196f3;
            --theme-palette-info-light: #64b5f6;
            --theme-palette-info-dark: #1976d2;
            --theme-palette-info-contrast-text: #fff;
            --theme-palette-info-alternate: #1976d2;
            --theme-palette-info-color: rgb(13, 60, 97);
            --theme-palette-info-background: rgb(232, 244, 253);
            --theme-docs-palette-border-color: rgba(0, 0, 0, 0.12);
        }`}
    />
  );
}

export function ThemeDarkStyle(): JSX.Element {
  return (
    <style
      textContent={`
        :root {
            --theme-mode-dark: 1;
            --theme-palette-common-background: #fff;
            --theme-palette-text-primary: #fff;
            --theme-palette-text-secondary: rgba(255, 255, 255, 0.7);
            --theme-palette-text-disabled: rgba(255, 255, 255, 0.5);
            --theme-palette-text-hint: rgba(255, 255, 255, 0.5);
            --theme-palette-background-paper: #424242;
            --theme-palette-background-default: #121212;
            --theme-palette-background-custom-level1: #212121;
            --theme-palette-background-custom-level2: #333;
            --theme-palette-background-custom-appbar-color: #fff;
            --theme-palette-background-custom-appbar-background-color: #333;
            --theme-palette-action-active: #fff;
            --theme-palette-action-hover: rgba(255, 255, 255, 0.1);
            --theme-palette-action-hover-opacity: 0.1;
            --theme-palette-action-selected: rgba(255, 255, 255, 0.2);
            --theme-palette-action-disabled: rgba(255, 255, 255, 0.3);
            --theme-palette-action-disabled-background: rgba(255, 255, 255, 0.12);
            --theme-palette-primary-main: #90caf9;
            --theme-palette-primary-light: rgb(166, 212, 250);
            --theme-palette-primary-dark: rgb(100, 141, 174);
            --theme-palette-primary-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-primary-alternate: rgb(166, 212, 250);
            --theme-palette-primary-hover: rgba(144, 202, 249, 0.1);
            --theme-palette-primary-background: rgb(72, 101, 124);
            --theme-palette-secondary-main: #f48fb1;
            --theme-palette-secondary-light: rgb(246, 165, 192);
            --theme-palette-secondary-dark: rgb(170, 100, 123);
            --theme-palette-secondary-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-secondary-hover: rgba(244, 143, 177, 0.1);
            --theme-palette-secondary-border: rgba(244, 143, 177, 0.5);
            --theme-palette-secondary-background: rgb(122, 71, 88);
            --theme-palette-secondary-alternate: rgb(246, 165, 192);
            --theme-palette-error-main: #f44336;
            --theme-palette-error-light: #e57373;
            --theme-palette-error-dark: #d32f2f;
            --theme-palette-error-contrast-text: #fff;
            --theme-palette-divider: rgba(255, 255, 255, 0.12);
            --theme-palette-grey50: #fafafa;
            --theme-palette-grey50-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey100: #f5f5f5;
            --theme-palette-grey100-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey200: #eeeeee;
            --theme-palette-grey200-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey300: #e0e0e0;
            --theme-palette-grey300-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey400: #bdbdbd;
            --theme-palette-grey400-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey500: #9e9e9e;
            --theme-palette-grey500-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-grey600: #757575;
            --theme-palette-grey600-contrast-text: #fff;
            --theme-palette-grey700: #616161;
            --theme-palette-grey700-contrast-text: #fff;
            --theme-palette-grey800: #424242;
            --theme-palette-grey800-contrast-text: #fff;
            --theme-palette-grey900: #212121;
            --theme-palette-grey900-contrast-text: #fff;
            --theme-palette-greyA100: #d5d5d5;
            --theme-palette-greyA100-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-greyA200: #aaaaaa;
            --theme-palette-greyA200-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-greyA400: #303030;
            --theme-palette-greyA400-contrast-text: #fff;
            --theme-palette-greyA700: #616161;
            --theme-palette-greyA700-contrast-text: #fff;
            --theme-palette-grey-contrast-text-default: #fff;
            --theme-palette-grey-background-default: #212121;
            --theme-custom-light-or-dark: #616161;
            --theme-custom-light-or-dark-contrast-text: #fff;
            --theme-custom-content-background-color: rgb(18, 18, 18);
            --theme-custom-content-background-default: #333;
            --theme-custom-palette-common-alternate: #fff;
            --theme-custom-palette-opacity: 0.3;
            --theme-custom-layout-backward: #333;
            --theme-custom-layout-forward: #424242;
            --theme-custom-palette-primary-main: #333;
            --theme-custom-palette-primary-contrast-text: #fff;
            --theme-component-button-border-outlined: rgba(255, 255, 255, 0.23);
            --theme-component-divider-background-color: rgba(255, 255, 255, 0.08);
            --theme-component-avatar-background: #757575;
            --theme-component-chip-color: #fff;
            --theme-component-chip-background-color: #616161;
            --theme-component-chip-clickable-focus: rgb(109, 109, 109);
            --theme-component-chip-clickable-active: rgb(115, 115, 115);
            --theme-component-chip-clickable-primary-focus: rgb(132, 185, 229);
            --theme-component-chip-clickable-primary-active: rgb(126, 177, 219);
            --theme-component-chip-clickable-secondary-focus: rgb(244, 151, 183);
            --theme-component-chip-clickable-secondary-active: rgb(245, 156, 186);
            --theme-component-chip-deletable-focus: rgb(109, 109, 109);
            --theme-component-chip-deletable-primary-focus: rgb(115, 161, 199);
            --theme-component-chip-deletable-secondary-focus: rgb(246, 165, 192);
            --theme-component-chip-outlined-focus: rgba(255, 255, 255, 0.1);
            --theme-component-chip-outlined-primary-focus: rgba(144, 202, 249, 0.1);
            --theme-component-chip-outlined-secondary-focus: rgba(244, 143, 177, 0.1);
            --theme-component-chip-avatar-color: #e0e0e0;
            --theme-component-chip-icon-color: #e0e0e0;
            --theme-component-chip-delete-icon-color: rgba(255, 255, 255, 0.26);
            --theme-component-chip-delete-icon-color-hover: rgba(255, 255, 255, 0.4);
            --theme-component-chip-delete-icon-primary-color: rgba(0, 0, 0, 0.7);
            --theme-component-chip-delete-icon-secondary-color: rgba(0, 0, 0, 0.7);
            --theme-component-chip-delete-icon-outlined-primary-color: rgba(144, 202, 249, 0.7);
            --theme-component-chip-delete-icon-outlined-secondary-color: rgba(244, 143, 177, 0.7);
            --theme-component-chip-border-outlined: rgba(255, 255, 255, 0.23);
            --theme-component-switch-color: #bdbdbd;
            --theme-component-switch-disabled-color: #424242;
            --theme-component-switch-disabled-opacity: 0.1;
            --theme-component-table-row-background-selected: rgba(255, 255, 255, 0.08);
            --theme-component-table-row-background-hover: rgba(255, 255, 255, 0.14);
            --theme-component-table-cell-border-bottom: rgba(81, 81, 81, 1);
            --theme-palette-error-color: rgb(250, 179, 174);
            --theme-palette-error-background: rgb(24, 6, 5);
            --theme-palette-success-main: #4caf50;
            --theme-palette-success-light: #81c784;
            --theme-palette-success-dark: #388e3c;
            --theme-palette-success-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-success-alternate: #81c784;
            --theme-palette-success-color: rgb(183, 223, 185);
            --theme-palette-success-background: rgb(7, 17, 8);
            --theme-palette-warning-main: #ff9800;
            --theme-palette-warning-light: #ffb74d;
            --theme-palette-warning-dark: #f57c00;
            --theme-palette-warning-contrast-text: rgba(0, 0, 0, 0.87);
            --theme-palette-warning-alternate: #ffb74d;
            --theme-palette-warning-color: rgb(255, 213, 153);
            --theme-palette-warning-background: rgb(25, 15, 0);
            --theme-palette-info-main: #2196f3;
            --theme-palette-info-light: #64b5f6;
            --theme-palette-info-dark: #1976d2;
            --theme-palette-info-contrast-text: #fff;
            --theme-palette-info-alternate: #64b5f6;
            --theme-palette-info-color: rgb(166, 213, 250);
            --theme-palette-info-background: rgb(3, 15, 24);
            --theme-docs-palette-border-color: rgba(255, 255, 255, 0.12);
        }`}
    />
  );
}
