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
          src: url(${Regular});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 100;
          font-display: "swap";
          src: url(${Thin});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 300;
          font-display: "swap";
          src: url(${Light});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 500;
          font-display: "swap";
          src: url(${Mediumn});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 700;
          font-display: "swap";
          src: url(${Bold});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 800;
          font-display: "swap";
          src: url(${ExtraBold});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 300;
          font-display: "swap";
          src: url(${ExtraLightItalic});
        }
      `}
    />
  );
};

export default connect(FontFace);
