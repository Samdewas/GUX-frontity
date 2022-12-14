import { css } from "frontity";

const cssReset = css`
  html,
  body {
    border: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  address,
  big,
  cite,
  code,
  em,
  font,
  img,
  small,
  strike,
  sub,
  sup,
  li,
  ol,
  ul,
  fieldset,
  form,
  label,
  legend,
  button,
  table,
  caption,
  tr,
  th,
  td {
    border: none;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
  }

  blockquote::before,
  blockquote::after {
    content: "";
  }

  a,
  path {
    transition: all 0.15s linear;
  }
`;

/**
 * Styles for Document Setup.
 *
 * See `1. Document Setup` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const documentSetup = (colors) => css`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    // background: ${colors.bodyBg};
    box-sizing: border-box;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-display:swap;
    font-size: 1.8rem;
    letter-spacing: -0.015em;
    text-align: left;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    word-wrap: break-word;
  }

  #site-content {
    overflow: hidden;
  }
  .wp-block-button {
    z-index: 999;
    position: relative;
    display: inherit;
    left: 0px;
    margin-bottom : 18px;
}
.wp-block-button a {
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  border-radius: 8px;
  padding: 10px 50px;
  color: white;
  margin-left: 0px;
  margin-top: 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform:uppercase !important;
  font-weight: 500;
  font-size: 18px;
}
 
`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

/**
 * Styles for Element Base.
 *
 * See `2. Element Base` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const elementBase = (colors) => css`
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .faux-heading {
    font-feature-settings: "lnum";
    font-variant-numeric: lining-nums;
    font-weight: 700;
    letter-spacing: -0.0415625em;
    line-height: 1.25;
    margin: 3.5rem 0 2rem;
    font-display: "swap";
  }

  h1,
  .heading-size-1 {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.138888889;
  }

  h2,
  .heading-size-2 {
    font-size: 3.2rem;
  }

  h3,
  .heading-size-3 {
    font-size: 2.8rem;
  }

  h4,
  .heading-size-4 {
    font-size: 2.4rem;
  }

  h5,
  .heading-size-5 {
    font-size: 2.1rem;
  }

  h6,
  .heading-size-6 {
    font-size: 1.6rem;
    letter-spacing: 0.03125em;
    text-transform: uppercase;
  }

  p {
    line-height: 1.5;
    margin: 0 0 1em 0;
  }

  em,
  i,
  q,
  dfn {
    font-style: italic;
  }

  em em,
  em i,
  i em,
  i i,
  cite em,
  cite i {
    font-weight: bolder;
  }

  big {
    font-size: 1.2em;
  }

  small {
    font-size: 0.75em;
  }

  b,
  strong {
    font-weight: 700;
  }

  ins {
    text-decoration: underline;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  abbr,
  acronym {
    cursor: help;
  }

  address {
    line-height: 1.5;
    margin: 0 0 2rem 0;
  }

  hr {
    border-style: solid;
    border-width: 0.1rem 0 0 0;
    border-color: ${colors.gray.light};
    margin: 4rem 0;
  }

  a {
    color: ${colors.primary};
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }
`;

const elementBase700 = css`
  @media (min-width: 700px) {
    h1,
    .heading-size-1,
    h2,
    .heading-size-2,
    h3,
    .heading-size-3 {
      margin: 6rem auto 3rem;
    }

    h4,
    .heading-size-4,
    h5,
    .heading-size-5,
    h6,
    .heading-size-6 {
      margin: 4.5rem auto 2.5rem;
    }

    h1,
    .heading-size-1 {
      font-size: 6.4rem;
    }

    h2,
    .heading-size-2 {
      font-size: 4.8rem;
    }

    h3,
    .heading-size-3 {
      font-size: 4rem;
    }

    h4,
    .heading-size-4 {
      font-size: 3.2rem;
    }

    h5,
    .heading-size-5 {
      font-size: 2.4rem;
    }

    h6,
    .heading-size-6 {
      font-size: 1.8rem;
    }
  }
`;

const elementBase1220 = css`
  @media (min-width: 1220px) {
    h1,
    .heading-size-1 {
      font-size: 8.4rem;
    }
  }
`;

const listStyle = css`
  ul,
  ol {
    margin: 0 0 3rem 3rem;
  }

  ul {
    list-style: disc;
  }

  ul ul {
    list-style: circle;
  }

  ul ul ul {
    list-style: square;
  }

  ol {
    list-style: decimal;
  }

  ol ol {
    list-style: lower-alpha;
  }

  ol ol ol {
    list-style: lower-roman;
  }

  li {
    line-height: 1.5;
    margin: 0.5rem 0 0 2rem;
  }

  li > ul,
  li > ol {
    margin: 1rem 0 0 2rem;
  }

  .reset-list-style,
  .reset-list-style ul,
  .reset-list-style ol {
    list-style: none;
    margin: 0;
  }

  .reset-list-style li {
    margin: 0;
  }

  dt,
  dd {
    line-height: 1.5;
  }

  dt {
    font-weight: 700;
  }

  dt + dd {
    margin-top: 0.5rem;
  }

  dd + dt {
    margin-top: 1.5rem;
  }
`;

/**
 * Styles for blockquotes.
 *
 * See `2. Element Base / Quotes` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const quoteStyle = (colors) => css`
  blockquote {
    border-color: ${colors.primary};
    border-style: solid;

    /*rtl:ignore*/
    border-width: 0 0 0 0.2rem;
    color: inherit;
    font-size: 1em;
    margin: 4rem 0;

    /*rtl:ignore*/
    padding: 0.5rem 0 0.5rem 2rem;
  }

  cite {
    color: ${colors.gray};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
  }

  blockquote cite {
    display: block;
    margin: 2rem 0 0 0;
  }

  blockquote p:last-child {
    margin: 0;
  }
`;

/**
 * Styles for code elements.
 *
 * See `2. Element Base / Code` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const codeStyle = (colors) => css`
  code,
  kbd,
  pre,
  samp {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9em;
    padding: 0.4rem 0.6rem;
    font-display:swap;
  }

  code,
  kbd,
  samp {
    background: rgba(0, 0, 0, 0.075);
    border-radius: 0.2rem;
  }

  pre {
    border: 0.1rem solid ${colors.gray.light};
    line-height: 1.5;
    margin: 4rem 0;
    overflow: auto;
    padding: 3rem 2rem;
    text-align: left;
  }

  pre code {
    background: transparent;
    padding: 0;
  }
`;

/**
 * Styles for media elements.
 *
 * See `2. Element Base / Media` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const mediaStyle = (colors) => css`
  figure {
    display: block;
    margin: 0;
  }

  iframe {
    display: block;
    max-width: 100%;
  }

  video {
    display: block;
  }

  svg,
  img,
  embed,
  object {
    display: block;
    height: auto;
    max-width: 100%;
  }

  figcaption,
  .wp-caption-text {
    color: ${colors.gray.base};
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
  }

  figcaption a,
  .wp-caption-text a {
    color: inherit;
  }
`;

/**
 * Styles for tables.
 *
 * See `2. Element Base / Tables` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const tableStyles = (colors) => css`
  table {
    border: 0.1rem solid ${colors.gray.light};
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    font-size: 1.6rem;
    margin: 4rem 0;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
  }

  .alignleft > table {
    margin: 0;
  }

  .alignright > table {
    margin: 0;
  }

  th,
  td {
    border: 0.1rem solid ${colors.gray.light};
    line-height: 1.4;
    margin: 0;
    overflow: visible;
    padding: 0.5em;
  }

  caption {
    background: ${colors.gray.light};
    font-weight: 600;
    padding: 0.5em;
    text-align: center;
  }

  thead {
    vertical-align: bottom;
    white-space: nowrap;
  }

  th {
    font-weight: 700;
  }



  img.logo {
    max-width: 180px;
}

button.header_btn a {
  text-decoration: none;
  color: white;
  font-weight:600;
}
button.header_btn a {
  font-weight: 600 !important;
}

.header_btn {
  margin: 0px 20px;
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 12px 29px;
}
header#site-header {
  position: absolute;
  width: 100%;
  top: 0;
  background: transparent;
}
header#site-header li a:hover {
  color: #1ac178;
}
img.banner_img {
  position: absolute;
  top: 0;
  z-index: -9;
  width:100%;
}
section.banner_section {
  padding: 40px 0px;
  height: 950px;
}

// adblocker css here
#main postmain > h2 {
  width: 1888px;
  position: fixed;
  top: -59px;
  left: 0px;
  right: 0px;
  background: #747070b5;
  height: 100vh;
  text-align: center;
  padding-top: 20%;
  color: #fff;
  z-index: 999999999;
}
.chalu{
  transform: translate(-50px, -187px) !important;
  position: relative;
  z-index: 999999;
  opacity: 0 !important;
}

.wp-block-button {
  z-index: 999;
  position: relative;
}




header#site-header a {
  color: black;
  text-decoration: none;
  padding: 0px 7px;
}
.header_btn a {
  color: white !important;
}

header#site-header  li{
  margin: 0.8rem 0 0 3rem!important;
}
header#site-header ul{
  margin: 0px 30px 0px 10px;
}

ul.category_front {
  list-style: none;
  margin-top: 140px;
  display: flex;
  justify-content: center;
  margin-left:0px;
}
ul.category_front li {
  display: inline-block;
  padding: inherit;
  border-radius: 50%;
  width: 210px;
  height: 210px;
  text-align: center;
  margin:0px 10px;
}
ul.category_front li a {
  text-decoration: none;
  color: #121212;
}
ul.category_front li a img {
  margin: 45px auto;
}
ul.category_front li a h3 {
  margin: 60px 0px;
  font-size: 20px;
}

li.sub_menu_child_li_outer:hover .SubMenuChild_main {
  display: block;
  transition: all 0.5s;
}
.SubMenuChild_main {
  // position: absolute;
  // right: -150px;
  // top: 5px;
  margin-left: 5px;
  background: white;
  display: none;
  // box-shadow: 0px 0px 4px 0px #d6d6d6;
  border-radius: 3px;
  transition: all 0.5s;
}
// .SubMenuChild_main ul:before {
//   content: "";
//   position: absolute;
//   top: 4px;
//   left: -32px;
//   width: 20px;
//   height: 20px;
//   background: white;
//   transform: rotate(45deg);
// }

// .SubMenuChild_main ul {
//   position: relative;
// }

li.sub_menu_child_li_outer:before {
  content: "";
  position: absolute;
  top: 5px;
  right: -6px;
  width: 20px;
  height: 20px;
  background: white;
  transform: rotate(45deg);
  opacity:0;
}


li.sub_menu_child_li_outer:hover:before {
  opacity:1
}

li.sub_menu_child_li_outer {
    position: relative;
}



discription figure span img {
  position: relative !important;
  height:auto !important;
}
discription figure span{
 padding-bottom:0px !important;
}
discription h2{
font-size:27px !important;
}
discription h3{
  font-size:27px !important;
  }
  discription h4{
    font-size:27px !important;
    }
    discription h1{
      font-size:27px !important;
      }

discription p {
  font-size:17px !important;
  }
  discription ul {
    margin-left:0px; list-style:none;
    }
  discription li {
    font-size:17px !important;
    margin-left:0px;
    }


.dropdown, .dropup {
  position: relative;
}

header#site-header a{
  position: relative;
  display: block;
  font-weight: 500;
  font-size:20px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
}

.dropdown:hover>.dropdown-menu {
  display: block !important;
}


.dropdown-submenu>.dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
  margin-left: -1px;
  -webkit-border-radius: 0 6px 6px 6px;
  -moz-border-radius: 0 6px 6px;
  border-radius: 0 6px 6px 6px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none !important;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);

}

ul.dropdown-menu.multi-level li a {
  font-weight: 600 !important;
  font-size:15px !important;
}

ul.dropdown-menu.multi-level li {
  padding: 0px 5px;
}
header#site-header .dropdown-menu li {
  margin-left: 1px !important;
  padding: 4px 4px;
}


.dropdown-submenu:hover>.dropdown-menu {
  display: block;
}
.dropdown-submenu {
  position: relative;
}


.dropdown-submenu:hover>.dropdown-menu {
  display: block !important;
  margin: 0 !important;
}


header#site-header .SubMenu ul {
  display: initial !important;
  margin:0px !important;
}

header#site-header .SubMenu ul li{
  margin:0px !important; 
}

li.submenu-main-item .SubMenu a {
  font-weight: 300 !important;
  font-size: 15px;
}
.SubMenu h6 {
  margin: 0 !important;
  text-transform: capitalize;
}


.css-td2tg-PostBox:hover .css-1rvpis8-PostTextBox {
  background:  linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  
}
.css-td2tg-PostBox:hover .css-1rvpis8-PostTextBox a,.css-td2tg-PostBox:hover .css-1rvpis8-PostTextBox span,.css-td2tg-PostBox:hover .css-1rvpis8-PostTextBox h2 {
  color:#fff;
}

.css-1tgnbxy-UXCategory:after {
  background: rgba(255, 227, 80, 0.35);
  content: "";
  width: 484px;
  display: block;
  position: absolute;
  left: -194px;
  z-index: 999999999;
  height: 485px;
  opacity: 0.8;
  filter: blur(125.5px);
}
.css-1tgnbxy-UXCategory:after {
  background: rgba(255, 227, 80, 0.35);
  content: "";
  width: 475px;
  display: block;
  position: absolute;
  left: -194px;
  z-index: 999999999;
  height: 443px;
  opacity: 0.8;
  filter: blur(125.5px);
  top: 47em;
}

.rt_header_main.is-sticky {
  position: fixed;
  width: 15%;
  right: 370px;
  top: 76px;
  padding: 0px 15px;
}
.is-sticky .sidebar_ad_none{
  display:none;
}
#site-header.hd_fixed {
  position: fixed !important;
  top: 0px !important;
  width: 100%;
  z-index: 9999;
  background: #fff !important;
  transition:all 0.2s ease-in-out 0s;
  box-shadow: rgb(149 157 165 / 18%) 0px 8px 24px;
}
.hd_fixed div{padding:6px 0px !important;}





header#site-header.inner_header{
  background: #084523 !important;
  position: inherit;
}

#site-header.inner_header .dropdown > a {
  color: white !important;
}
.dropdown .dropdown-menu li a{color:#000 !important;}


.submenu-main-item:hover .SubMenu {
  display: block;
  transition: all 0.5s;
}
header#site-header .SubMenu ul li {
  margin: 6px 0px!important;
  padding: 0px 10px;
}

.SubMenu {
  display: none;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  position: absolute;
  width: max-content;
  background: white;
  padding: 0px 0px;
  margin-left: 5px;
  border-radius: 3px;
}

@media (min-width:1600px) and (max-width:1800px){
  .rt_header_main.is-sticky {
    position: fixed;
    width: 18%;
    right: 231px;
    top: 41px;
}
}

@media (min-width:1400px) and (max-width:1600px){
  .rt_header_main.is-sticky {
    width: 21%;
    right: 126px;
    top: 0px;
    padding: 0px 15px;
  }
}

@media (min-width:1250px) and (max-width:1300px){
  .rt_header_main.is-sticky {
    width: 21%;
    right: 39px;
    top: 0px;
    padding: 0px 15px;
  }
}

@media (max-width:1249px){
  .rt_header_main.is-sticky {
    width: 90%;
    position:sticky;
    padding: 0px 15px;
  }
}

position: fixed;
    width: 15%;
    right: 370px;
    top: 0px;
    padding: 0px 15px;




@media (min-width:768px) and (max-width:1024px){
.rt_header_main.is-sticky {
  width: 29%;
  right: 0px;
}

}

@media (min-width:320px) and (max-width:767px){
.rt_header_main.is-sticky {
  position: inherit;
  right: 0;
  top: 0px;
  width:100%;
  padding: inherit;
}
header#site-header a {
  color: black ;
  padding: 20px 0px 10px 0px;
  font-size: 16px;
  font-weight: 500;
}
header#site-header.inner_header {
  background: #084523;
}

header#site-header li {
  margin: 0.8rem 0 0 0rem!important;
}
#site-header.inner_header a {
  color: black!important;
}
header#site-header.inner_header span {
  color: #fff !important;
}
header#site-header.inner_header button svg {
  fill: #fff;
}

header#site-header.inner_header {
  position: relative;
}
header#site-header.inner_header svg {
  fill: white;
}
header#site-header.inner_header span {
  color: white;
}


}
`;


/**
 * Global styles for the TwentyTwenty theme.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const globalStyle = (colors) =>
  css([
    cssReset,
    documentSetup(colors),
    accessibilitySettings,
    elementBase(colors),
    elementBase700,
    elementBase1220,
    listStyle,
    quoteStyle(colors),
    codeStyle(colors),
    mediaStyle(colors),
    tableStyles(colors),
  ]);

export default globalStyle;
