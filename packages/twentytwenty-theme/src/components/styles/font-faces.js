import { Global, css, connect } from "frontity";
import Regular from "../../fonts/Poppins/Poppins-Regular.ttf";
import Thin from "../../fonts/Poppins/Poppins-Thin.ttf";
import Light from "../../fonts/Poppins/Poppins-Light.ttf";
import Mediumn from "../../fonts/Poppins/Poppins-Medium.ttf";
import Bold from "../../fonts/Poppins/Poppins-Bold.ttf";
import ExtraBold from "../../fonts/Poppins/Poppins-ExtraBold.ttf";
import ExtraLightItalic from "../../fonts/Poppins/Poppins-ExtraLightItalic.ttf";



const FontFace = ({ state }) => {

  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 400;
          font-display: "swap";
          src: url(${Regular}) format("woff2");
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 100;
          font-display: "swap";
          src: url(${Thin}) format("woff2");
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 300;
          font-display: "swap";
          src: url(${Light}) format("woff2");
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 500;
          font-display: "swap";
          src: url(${Mediumn}) format("woff2");
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 700;
          font-display: "swap";
          src: url(${Bold}) format("woff2");
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 800;
          font-display: "swap";
          src: url(${ExtraBold}) format("woff2");
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 300;
          font-display: "swap";
          src: url(${ExtraLightItalic}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);
