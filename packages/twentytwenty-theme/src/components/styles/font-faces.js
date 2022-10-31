import { Global, css, connect } from "frontity";
import Regular from "../../fonts/Poppins/Poppins-Regular.ttf";
import Mediumn from "../../fonts/Poppins/Poppins-Medium.ttf";
import Bold from "../../fonts/Poppins/Poppins-Bold.ttf";



const FontFace = ({ state }) => {

  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 400;
          font-display:swap;
          src: url(${Regular});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 500;
          font-display:swap;
          src: url(${Mediumn});
        }
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
          font-weight: 700;
          font-display:swap;
          src: url(${Bold});
        }
      `}
    />
  );
};

export default connect(FontFace);
