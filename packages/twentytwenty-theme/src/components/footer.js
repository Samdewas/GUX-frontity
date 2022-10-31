import { styled, connect } from "frontity";
import Link from "./link";
import NwsIcon from "../assets/img/nws_icn.png"
import Notification from "../assets/img/noti.png"
import fb1 from "../assets/img/fb1.png"
import fb2 from "../assets/img/social/fb2.png"
import i1 from "../assets/img/social/i1.png"
import i2 from "../assets/img/social/i2.png"
import p1 from "../assets/img/social/p1.png"
import p2 from "../assets/img/social/p2.png"
import t1 from "../assets/img/social/t1.png"
import t2 from "../assets/img/social/t2.png"
import buy from "../assets/img/buy.svg"
import eml from "../assets/img/email.png"
import topimg from "../assets/img/goto.svg"
import Lazyload from "./lazyloading/lazyload";
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
    <p href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer", position: "fixed", right: "30px", bottom: "20px", color: "white" }}>
      <span style={{ marginRight: 8 }}><Lazyload alt="gototop" width="88px" height="88px" src={topimg} /></span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </p>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">


      <SectionContainer>
       

        <Footerlink>

          <FooterBox1>
          <h3> <Link link="/"> Logo </Link> </h3>
          <ul>
            <p> Graphicux.com is well known for saving money for customers but with our free fonts and Photoshop action section, we have gone one step further</p>

            <Link target="_blank" link="https://www.buymeacoffee.com/graphicux"> <Lazyload alt="buymecoffee"  src={buy} /> </Link>
         

          </ul>
          </FooterBox1>

          <FooterBox2>
          <h3> Quick Links </h3>
          <ul>
            <li> <Link link="/"> About </Link> </li>
            <li> <Link link="/"> Categories </Link> </li>
            <li> <Link link="/"> Privacy Policy </Link> </li>
            <li> <Link link="/"> Dmca</Link> </li>
            <li> <Link link="contact-us/"> Contact us</Link> </li>
          </ul>
          </FooterBox2>

          <FooterBox3>
          <h3> Categories </h3>
          <ul>
            <li> <Link link="category/fonts/"> Premium Fonts </Link> </li>
            <li> <Link link="category/add-ons/photoshop-action/"> Photoshop Action </Link> </li>
            <li> <Link link="category/add-ons/lightroom-preset/"> Lightroom Preset </Link> </li>
            <li> <Link link="category/graphics/"> Graphics and Mockups</Link> </li>
            <li> <Link link="category/themes/"> Website Themes</Link> </li>
          </ul>
          </FooterBox3>

          <FooterBox4>
          <h3> Subscribe Newsletter </h3>
          <ul>
          <NewsLetterInput>
              <input type="text" placeholder="Email address" />
              <button> Subscribe  <Lazyload alt="notification" src={Notification} /> </button>
            </NewsLetterInput>
          </ul>
         
            <SocialMedia>
          <li> <Link link="/"> <Lazyload alt="fb"  className="socialimg1" src={fb1} />
          <Lazyload alt="facebook"  className="socialimg2" src={fb2} />
          </Link> </li>

          <li> <Link link="/"> <Lazyload alt="insta"  className="socialimg1" src={i1} />
          <Lazyload alt="instagram"  className="socialimg2" src={i2} />
          </Link> </li>

          <li> <Link link="/"> <Lazyload alt="pinterest"   className="socialimg1" src={p1} />
          <Lazyload alt="pin"  className="socialimg2" src={p2} />
          </Link> </li>

          <li> <Link link="/"> <Lazyload alt="twitt"  className="socialimg1" src={t1} />
          <Lazyload alt="twitter"  className="socialimg2" src={t2} />
          </Link> </li>
          <p><Link link="mailto:graphicgux@gmail.com"> <Lazyload alt="email" src={eml} /> graphicgux@gmail.com </Link> </p>
          </SocialMedia>
      
          </FooterBox4>
        </Footerlink>


        
       

      </SectionContainer>

      <Credits>
          {/* <Copyright>
            &copy; {currentYear}{" "}
            <Link link={state.frontity.url}>{state.frontity.title}</Link>
          </Copyright> */}
          <PoweredBy>@2022 GraphicUX All Right Reserved</PoweredBy>
        </Credits>

   
            <BackToTop />
    
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
  width:100%;
  float:left;


  :after{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 30px;
    width: 250px;
    height: 300px;
    background: rgba(21, 190, 119, 0.35);
    -webkit-filter: blur(125.5px);
    filter: blur(125.5px);
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

const FooterBox1 = styled.footerbox1`
width:23%;
float:left;
margin-right:80px;
text-align:left;

ul{margin:0px;}
p{color:#fff; font-weight:400; font-family:inherit; font-display:swap; font-size:15px;}
li{font-size:18px; line-height:40px; }
img{    width: 210px;
  height: 62px;}

@media (max-width:767px){
  width:100%;
  margin-bottom:30px;
}

`;

const FooterBox2 = styled.footerbox2`
width:19%;
float:left;
text-align:left;

ul{margin:0px;}
li{font-size:18px; line-height:40px; }

@media (max-width:767px){
  width:100%;
  margin-bottom:30px;
  h3{margin-top:20px;}
  li{font-size:18px;}
}

`;

const FooterBox3 = styled.footerbox3`
width:19%;
float:left;
text-align:left;

ul{margin:0px;}
li{font-size:18px; line-height:40px; }
li:nth-of-type(1):hover{color:#15BE77;}
li:nth-of-type(2):hover{color:#2BBBFA;}
li:nth-of-type(3):hover{color:#F8A64C;}
li:nth-of-type(4):hover{color:#ED56A3;}
li:nth-of-type(5):hover{color:#A259FF;}

@media (max-width:767px){
  width:100%;
  margin-bottom:30px;
  li{font-size:18px;}
}

`;

const FooterBox4 = styled.footerbox4`
width:30%;
float:left;
text-align:left;

ul{margin:0px;}
li{font-size:16px; line-height:40px;  }

@media (max-width:767px){
  width:100%;
  margin-bottom:30px;

button{width: 45%;
  font-size: 15px;
  right: 7px;}

}

`;

const SocialMedia = styled.socialmedia`
position:relative;
list-style:none;
top:25px;

li{position:relative; 
  padding: 0px 10px;
  display:inline-block; padding:0px 10px;}

.socialimg1{position:relative; transition: all 0.4s}
img{width:35px; height:35px;}

.socialimg2{ position: absolute;
  top: 0px;
  transition: all 0.4s;
  transform: translate(-5px, 8px);}

 li img:hover{
  transition: all 0.4s;
  transform: translate(0px, 0px);
 }
 p{   margin-top: 21px;
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  -webkit-background-clip: text;
  margin-top: 30px;
  margin-bottom: 80px;
  -webkit-text-fill-color: transparent;
  font-size: 22px;
  font-weight: 700;
a{display:flex;
img{margin-right:10px; padding:7px; width:35px; height:35px;}
}
}
@media (max-width:767px){
  width:100%;
  margin-bottom:30px;
  li{padding:0 4px;}
}

`;



const Credits = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid #ffffff42;
    padding-top: 30px;
    clear:left;
    
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
  display: block;
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
  width: 93%;
}

@media (max-width:320px){
  font-size: 19px;
  p{font-size:13px;
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
  border-radius: 10px;
  border: none;
  padding: 0px 10px;
    width: 96%;
    height: 56px;
    border: none;
    outline: none;
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
  padding: 12px 17px;
  border-radius: 15px;
  right: 14px;
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  color: white;
  height: 84%;
  width: 41%;
  font-size: 16px;
  top: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

img{
  margin-left: 6px;
  width: 20px;
  height: 20px;

}

@media (max-width:575px){
  button{
    width: 45%;
    font-size: 15px;
    right: 0px;
  }
  input{width:100%;}
}
@media (max-width:320px){
  button{
  padding:0px;
  }
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

const Footerlink = styled.footerlink`
  text-align: center;

    h3{
      color: white;
      margin-bottom: 25px;
      font-weight: 500;
      font-size: 25px;
      margin-top:0px;
  }
  ul{
    list-style: none;
  }
  li{
    display:block;
    color: white;
    margin: 0px;
  }
  @media (max-width:575px){
    margin:0px;
    li{
    margin: 0px 15px;
    font-size: 16px;
    }
  }
 
`;

