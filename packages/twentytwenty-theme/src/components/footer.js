import { styled, connect } from "frontity";
import Link from "./link";

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>To the top</span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
    
      
      <SectionContainer>
        <NewsLetter>
          <NewsLetterBox>
            <h2> Stay In Touch </h2>
            <p> Subscribe Our Newsletter to get updated! </p>
            <NewsLetterInput>
              <input type="text" placeholder="Email address" />
              <button> Subscribe </button>
            </NewsLetterInput>
          </NewsLetterBox>
        </NewsLetter>


        <Credits>
          <Copyright>
            &copy; {currentYear}{" "}
            <Link link={state.frontity.url}>{state.frontity.title}</Link>
          </Copyright>
          <PoweredBy>Powered by Frontity</PoweredBy>
        </Credits>
        {/* <BackToTop /> */}
        </SectionContainer>

     
    </SiteFooter>
  );
};

export default connect(Footer);

// const SiteFooterInner = styled(siteFooterInner)`
//   align-items: baseline;
// `;

const SiteFooter = styled.footer`
  margin-top: 5rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background-color: #151B27;
  color: #000000;

  @media (min-width: 700px) {
    margin-top: 8rem;
    font-size: 1.8rem;
    padding: 8rem 0 4.3rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Credits = styled.div`
  @media (min-width: 700px) {
    display: flex;
  }
`;

const Copyright = styled.p`
  font-weight: 600;
  margin: 0;

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;

const PoweredBy = styled.p`
  color: #6d6d6d;
  display: none;
  margin: 0 0 0 2.4rem;

  @media (min-width: 700px) {
    display: block;
  }
`;

const NewsLetter = styled.newsLletter`
background: #084523;
box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
border-radius: 30px;
height: 325px;
width: 100%;
display: block;
display: flex;
justify-content: center;
align-items: center;
`;

const NewsLetterBox = styled.newsbox`
width: 75%;
    text-align: center;
h2{
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 0;
  text-align: center;
  color: #FFFFFF;
  margin: 30px 0px;
}

p{
  font-size: 18px;
  color: #FFFFFF;
}

`;

const NewsLetterInput = styled.newsinput`
position: relative;
height: 100%;
width: 100%;
display: flex;
justify-content: center;

input{
  background: #FFFFFF;
  border-radius: 50px;
  border: none;
  padding: 0px 10px;
  width: 80%;
  height: 65px;
  border: none;
  box-shadow: none;
}

button{
  position: absolute;
  padding: 14px 20px;
  border-radius: 50px;
  right: 92px;
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  color: white;
  height: 93%;
  width: 20%;
  font-size: 18px;
  top: 2px;
  cursor: pointer;
}
`;


const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "120rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

