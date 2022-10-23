import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: S2-12 | 🏁 Entrega - Projeto: Hamburgueria da Kenzie
    Description: Atividade Avaliativa
    ~ *   Root CSS - Global styles   * ~

            Version: 1.0

    ****************************************/

  :root{
    /* Colors */
    --color-primary: #27AE60;
    --color-secondary: #93D7AF;
    --color-tertiary: #EB5757;
    --color-quartenary: #F54C41;
    --color-quinternary: #772F1A;
    --color-senary: #00FFCB;

    --color-feedback-negative: #E60000;
    --color-feedback-warning: #ffcd07;
    --color-feedback-success: #168821;
    --color-feedback-info: #155bcb;

    --color-grey-ex-1: #DEE2E6;
    --color-grey-ex-2: #EDF2FF;
    --color-grey-0: #F5F5F5;
    --color-grey-20: #E0E0E0;
    --color-grey-50: #828282;
    --color-grey-100: #333333;
    --color-grey-opacity: rgba(33, 37, 41, 0.5);
    
    --color-navigation: #22252A;
    --blur-effect-01: rgba( 31, 38, 135, 0.37 );
    --blur-effect-02: rgba( 2, 2, 2, 0.6 );
    --button-color-green: #69F579;
    --button-color-red: #EB4946;
    --color-github: #6E5494;
    --color-facebook: #4267B2;
    --color-google: #DB4437;

    --color-shadow-box: rgba(0, 0, 0, 0.05);
    --color-shadow-box-01: #FF0;
    --color-shadow-box-02: red;
    --color-shadow-box-03: #FF8000;
    --color-shadow-box-04: #FFF;
    --color-black-mode: #000000;
    --color-white-mode: #FFFFFF;
    --color-transparent: #00000090;
    --color-transparent-01: rgba( 255, 255, 255, 0.18 );

    
    /* Size Elements */
    --button-height-default: 48px;
    --button-height-medium: 40px;
    --button-height-little: 32px;
    --container-width: 1200px;

    /* Font Family */

    --font-primary-nunito: 'Nunito';
    --font-secondary-inter: 'Inter';
    --font-tertiary-roboto: 'Roboto';
    --font-quartenary-andika: 'Andika';

    
    /*  Text Sizes */
    --font-grand-60: 60px;
    --font-grand-58: 58px;
    --font-grand-56: 56px;
    --font-grand-54: 54px;
    --font-grand-52: 52px;
    --font-grand-50: 50px;
    --font-title-48: 48px;
    --font-title-46: 46px;
    --font-title-44: 44px;
    --font-title-42: 42px;
    --font-title-40: 40px;
    --font-subtitle-38: 38px;
    --font-subtitle-30: 30px;
    --font-subtitle-28: 28px;
    --font-subtitle-24: 24px;
    --font-subtitle-20: 20px;
    --font-subtitle-18: 18px;
    --font-text-16: 16px;
    --font-text-14: 14px;
    --font-text-12: 12px;

    /* Line-Height */

    --font-line-height-40: 40px;
    --font-line-height-38: 38px;
    --font-line-height-32: 32px;
    --font-line-height-28: 28px;
    --font-line-height-24: 24px;
    --font-line-height-20: 20px;
    --font-line-height-16: 16px;


    /*  Text Weight */
    --font-weight-700: 700;
    --font-weight-600: 600;
    --font-weight-500: 500;
    --font-weight-400: 400;
    --font-weight-500: 300;
    
    /*  Border Radius */
    --radius-16: 16px;
    --radius-12: 12px;
    --radius-10: 10px;
    --radius-8: 8px;
    --radius-6: 6px;
    --radius-4: 4px;
    --radius-2: 2px;
    --radius-half: 50%;

    /* Gap */
    --gap-32: 32px;
    --gap-28: 28px;
    --gap-24: 24px;
    --gap-20: 20px; 
    --gap-16: 16px; 
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }
`;
export default GlobalStyle;