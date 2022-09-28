import { styled, connect } from "frontity";
import Link from "./link";
import NwsIcon from "../assets/img/nws_icn.png"
import Notification from "../assets/img/noti.png"
// Component that provides scroll to top functionality

// const BackToTop = () => {


//   // scroll to top function
//   const scrollToTop = (event) => {
//     // prevent the default behaviors
//     event.preventDefault();
//     // scroll to the top smoothly
//     scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   };


  
// const BackToTop = styled.BackToTop`
//   position:fixed;
// bottom:0;
// right:20px;
// z-index:99;
// `;

//   return (
//     <p href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer", position: "fixed", right: "30px", bottom: "20px", color: "white" }}>
//       <span style={{ marginRight: 8 }}>To the top</span>
//       <span className="arrow" aria-hidden="true">
//         ↑
//       </span>
//     </p>
//   );
// };

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">


      <SectionContainer>
        <NewsLetter>
          <NewsImg>
          <img src={NwsIcon} />
          </NewsImg>
         
          <NewsLetterBox>
            <h2> Stay In Touch </h2>
            <p> Subscribe Our Newsletter to get updated! </p>
            <NewsLetterInput>
              <input type="text" placeholder="Email address" />
              <button> Subscribe  <img src={Notification} /> </button>
            </NewsLetterInput>
          </NewsLetterBox>
        </NewsLetter>

        <FooterLink>
          <h3> <Link to="/"> Logo </Link> </h3>
          <ul>
            <li> <Link to="/"> About </Link> </li>
            <li> <Link to="/"> Categories </Link> </li>
            <li> <Link to="/"> Privacy Policy </Link> </li>
            <li> <Link to="/"> Dmca</Link> </li>
            <li> <Link to="/"> Contact us</Link> </li>
          </ul>
        </FooterLink>


        
       

      </SectionContainer>

      <Credits>
          {/* <Copyright>
            &copy; {currentYear}{" "}
            <Link link={state.frontity.url}>{state.frontity.title}</Link>
          </Copyright> */}
          <PoweredBy>@2022 GraphicUX All Right Reserved</PoweredBy>
        </Credits>

   
            {/* <BackToTop /> */}
    
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
  position:relative;


  :after{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 30px;
    width: 450px;
    height: 450px;
    background: rgba(21, 190, 119, 0.35);
    -webkit-filter: blur(125.5px);
    filter: blur(125.5px);
  }

  :before{
    content: "";
    position: absolute;
    bottom: 20px;
    right: 0px;
    width: 450px;
    height: 450px;
    background: rgba(21, 190, 119, 0.35);
    -webkit-filter: blur(125.5px);
    filter: blur(125.5px);
    margin: auto 0;
  }

  @media (min-width: 700px) {
    margin-top: 15rem;
    font-size: 1.8rem;
    padding: 8rem 0 4.3rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

@media (max-width:767px){
  :after{display:none;}
  :before{display:none};
}

`;

const Credits = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid #ffffff42;
    padding-top: 30px;
    
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
padding: 90px 0px;
width: 100%;
display: block;
display: flex;
justify-content: center;
align-items: center;
position:relative;
overflow: hidden;
margin-top: -17rem;
margin-bottom: 30px;

:after{
  content: "";
  position: absolute;
  width: 455px;
  height: 454px;
  background: rgba(255, 227, 80, 0.2);
  filter: blur(125.5px);
  left: -180px;
  bottom: -150px;
}
:before{
  content: "";
  position: absolute;
  width: 455px;
  height: 454px;
  background: rgba(255, 227, 80, 0.2);
  filter: blur(125.5px);
  right: -180px;
  top: -150px;
}
`;

const NewsImg = styled.newsImg`
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;

img{
  position:absolute;
  width:100%;
  left:0px;
  z-index: 88
}


`;

const NewsLetterBox = styled.newsbox`
    width: 65%;
    text-align: center;
    z-index: 99;
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
  padding-top: 10px;
  color: #FFFFFF;
}
@media (max-width:575px){
  h2{font-size:32px;}
  p{font-size:14px;}
  width: 80%;
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
  border-radius: 15px;
  border: none;
  padding: 0px 10px;
  width: 80%;
  height: 65px;
  border: none;
  outline:none;
  box-shadow: none;
  font-size: 17px;
  color: #141414;
}

input::placeholder{
  font-size: 16px;
  color: #9f9f9f;
  position: relative;
  top: 0px;
}

button{
  position: absolute;
  padding: 14px 20px;
  border-radius: 15px;
  right: 80px;
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  color: white;
  height: 93%;
  width: 20%;
  font-size: 18px;
  top: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

img{
  margin-left: 6px;
}

@media (max-width:575px){
  button{
    width: 60%;
    font-size: 18px;
    right:0px;
  }
  input{width:100%;}
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

const FooterLink = styled.footerlink`
  text-align: center;

    h3{
      color: white;
      margin-bottom: 10px;
      font-weight: 200;
      4rem auto 3rem
  }
  ul{
    list-style: none;
  }
  li{
    display: inline-block;
    color: white;
    margin: 0rem 0 0 5rem;
  }
  @media (max-width:575px){
    margin:0px;
    li{
    margin: 0px 15px;
    font-size: 16px;
    }
  }
`;

