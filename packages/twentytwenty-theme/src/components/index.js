import { connect, Global, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import { useRef, useState, useEffect } from "react";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import FontFaces from "./styles/font-faces";
import Header from "./header";
import Archive from "./archive";
import Loading from "./loading";
import Post from "./post";
import SearchResults from "./search/search-results";
import SkipLink from "./styles/skip-link";
import MetaTitle from "./page-meta-title";
import PageError from "./page-error";
import '../assets/css/custome.css';
import BannerBg from "../assets/img/hero.svg"
import searchicon from "../assets/img/search.svg"
import Cate_img1 from "../assets/img/front/font_active.svg"
import Cate_img2 from "../assets/img/front/psd.svg"
import Cate_img3 from "../assets/img/front/lr.svg"
import Cate_img4 from "../assets/img/front/gr.svg"
import Cate_img5 from "../assets/img/front/web.svg"
import Cate_img11 from "../assets/img/front/font.svg"
import Cate_img12 from "../assets/img/front/psd_active.svg"
import Cate_img13 from "../assets/img/front/lr_active.svg"
import Cate_img14 from "../assets/img/front/gr_active.svg"
import Cate_img15 from "../assets/img/front/web_active.svg"
import ticon  from "../assets/img/home/t.gif"
import ps_icon  from "../assets/img/home/pen.gif"
import graphics  from "../assets/img/home/graphics.svg"
import ficon1  from "../assets/img/home/high.svg"
import ficon2  from "../assets/img/home/ready.svg"
import ficon3  from "../assets/img/home/Guarantee.svg"
import ficon4  from "../assets/img/home/fresh.svg"
import arrowicon  from "../assets/img/right.svg"
import { useTransition, animated } from "react-spring";
import useFocusTrap from "./hooks/use-trap-focus";
import useFocusEffect from "./hooks/use-focus-effect";
import Contact from "./contact";
import Link from "@frontity/components/link"
import Lazyload from "./lazyloading/lazyload";
import AboutUs from "./about-us";
import PrivacyPolicy from "./privacy-policy";
import Dmca from "./Dmca";
import AdSense from 'react-adsense';


const SectionContainer = styled.div`
margin-left: auto;
margin-right: auto;
width: calc(100% - 4rem);
max-width: 130rem;

@media (min-width: 700px) {
  width: calc(100% - 8rem);
}
`;

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  
  const data = state.source.get(state.router.link);
  const [ishover, setIshover] = useState("");
  const { searchQuery } = state.source.get(state.router.link);

  const { isSearchModalOpen } = state.theme;
  const { closeSearchModal } = actions.theme;
  const { primary } = state.theme.colors;

  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();
  const containerRef = useRef();

  const transitions = useTransition(isSearchModalOpen, null, {
    from: { transform: "translate3d(0,-100%,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-100%,0)" },
  });
  useFocusEffect(inputRef, isSearchModalOpen);
  useFocusTrap(containerRef, isSearchModalOpen);

  // Format the query to remove trailing spaces and replace space with "+"
  const formatQuery = (query) => query.trim().replace(" ", "+").toLowerCase();

  const handleSubmit = (event) => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(`/?s=${formatQuery(searchString)}`);

      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      closeSearchModal();
    }
  };
  const [adblockerActive, setAdblockerActive] = useState(false);
  useEffect(() => {
    actions.source.fetch("/");
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.onerror = (err) => err.type == "error" ? adBlockFunction() : "";
    document.body.appendChild(script);
  }, [actions.source]);

  const adBlockFunction = () => {
    // Google Analytics End
    setAdblockerActive(true);
  }
  return (
    <>
     {adblockerActive ?
        <Adblock>
          <h2>Adblock Detected !<br />
            Please disable adblock  to use our site.</h2>
        </Adblock>
        : ""}
      {/* Add global styles for the whole site, like body or a's or font-faces. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors)} />
      <FontFaces />

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>
        {/* Add the header of the site. */}
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main id="main">

          {data.isHome ?
            <BannerSection>
              {/* {data.isHome ?
               <img className="banner_img" alt="heroimg" width="1903px" height="726px" src={BannerBg} /> :   
                <img className="banner_img" alt="heroimg2"  width="1903px" height="726px" src={BannerBg} />} */}
              <SectionContainer size="large">

                <BannerInner>

                  <div>
                    <h2> Your One-stop Shop For Fonts, Photoshop Action,<br />
                    And Every Graphic Resource You Will Ever Need </h2>
                    <p>GraphicUX is an evolution that brings the finest designs and creatives<br />
                    at unbeatable prices. Create designs that outbid others.</p>
                  </div>
                </BannerInner>


                <div>
                  <SearchForm
                    role="search"
                    aria-label="Search for:"
                    onSubmit={handleSubmit}
                  >
                    <SearchInput
                      ref={inputRef}
                      type="search"
                      autoComplete="off"
                      defaultValue={searchQuery || ""}
                      placeholder="Search for Photoshop Action, Lightroom Preset, Fonts etc..."
                      name="search"
                    />
                    <img className="srch_icon" alt="search" src={searchicon} />
                    <SearchButton bg={primary}>Search</SearchButton>
                  </SearchForm>
                </div>

                <div>
                  {data.isHome ?
                    <Uxcategory>

                      <li onMouseLeave={() => setIshover("")} onMouseOver={() => setIshover(5)}> <Link link="category/fonts/"> <img alt="fonts" src={ishover == 5 ? Cate_img1 : Cate_img11} />  </Link><h3>Premium Fonts </h3>
                      </li>
                      <li onMouseLeave={() => setIshover("")} onMouseOver={() => setIshover(1)}> <Link link="category/add-ons/"> <img alt="psaction" src={ishover == 1 ? Cate_img12 : Cate_img2}  /></Link>  <h3>Photoshop Action </h3></li>
                      <li onMouseLeave={() => setIshover("")} onMouseOver={() => setIshover(2)}> <Link link="category/add-ons/lightroom-preset/"> <img alt="lightroom" src={ishover == 2 ? Cate_img13 : Cate_img3}  /> </Link> <h3>Lightroom Preset </h3></li>
                      <li onMouseLeave={() => setIshover("")} onMouseOver={() => setIshover(3)}> <Link link="category/graphics/"> <img alt="graphics" src={ishover == 3 ? Cate_img14 : Cate_img4}  /> </Link> <h3>Graphic & Mockups </h3></li>
                      <li onMouseLeave={() => setIshover("")} onMouseOver={() => setIshover(4)}> <Link link="category/themes/"> <img alt="themes" src={ishover == 4 ? Cate_img15 : Cate_img5}  /> </Link> <h3>Website Themes </h3></li>


                    </Uxcategory> : ""}

                </div>

                 

              </SectionContainer>

              <Uxfeatured>

<SectionContainer>
 {/* <h6> Ad </h6> */}

 <AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='5764423148'
                      style={{ width: 728, height: 90, display: "inline-block" }}
                      format=''
                    />
                    {/* <h6> Ad </h6> */}
  
  <h4>The Ideal Choices For Creatives Like you! All Under One Roof</h4>  
  <p>From designs to photographs you will find all the right things to make the perfect creatives on GraphicUX.</p>

    <ul>
      <li> 
        <div className="fimgmob"> <img alt="quality" width="100px" height="100px"  src={ficon1} /></div>
        <div className="fimg">
          
       <img alt="quality" src={ficon1} />
       </div>
       <div className="fcaption">
        <h5>Premium Quality Content</h5>
        <p>Download the finest quality resources to give every project a professional edge.</p>
          </div>
      </li>

      <li> 
      <div className="fimgmob"> <img alt="Ready-to-use" width="100px" height="100px"src={ficon2} /></div>
        <div className="fimg">
       <img alt="Ready-to-use" src={ficon2} />
       </div>
       <div className="fcaption">
        <h5>Ready-to-use Asset</h5>
        <p>Along with quality you can find a variety of free ready to use digital assets.</p>
          </div>
      </li>

      <li> 
      <div className="fimgmob"> <img alt="Guaranteed" width="100px" height="100px" src={ficon3} /></div>
        <div className="fimg">
       <img alt="Guaranteed" src={ficon3} />
       </div>
       <div className="fcaption">
        <h5>Hassle-Free Navigation</h5>
        <p>Whatever you are looking for, find the best digital asset for your project with the ease of search and download.</p>
          </div>
      </li>

      <li> 
      <div className="fimgmob"> <img alt="Fresh" width="100px" height="100px" src={ficon4} /></div>
        <div className="fimg">
       <img alt="Fresh"  src={ficon4} />
       </div>
       <div className="fcaption">
        <h5>New Content Everyday</h5>
        <p>Something new every time you visit GraphicUX! New content uploaded everyday to help you think big and create better.</p>
          </div>
      </li>
    </ul>
    </SectionContainer>

  </Uxfeatured> 


     </BannerSection> : ""}
     {data.isHome ?
<Recentitem id="archivetop">
  Recent Published
</Recentitem>
:""}
          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={data.isSearch} />
            <Archive when={data.isArchive} />
            <Post when={data.isPostType && data.isPost} />
            <PageError when={data.isError} />
            <Contact when={state.router.link.includes("/contact-us")} />
            <AboutUs when={state.router.link.includes("/about-us")} />
            <PrivacyPolicy when={state.router.link.includes("/privacy-policy")} />
            <Dmca when={state.router.link.includes("/dmca")} />
          </Switch>

      
                  {/* <Trendingfonts>
<SectionContainer>
  <div className="font_wrapper">
    <img className="ticon" src={ticon} />
  <h4>Top Trending Fonts <span><Link link="/category/fonts/"> View All  </Link></span></h4>
  <div className="fontlist">
 
     <Link link="/category/fonts/serif/"> <img className="f_hover" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Serif1.webp" /> 
     <img className="ux_fview1" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Serif3.webp" /> 
     <img className="ux_fview" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Serif2.webp" /> 
 
     </Link> 
     <div>
      <span className="fname">Serif</span>
      <span className="fcount">100 + Fonts</span>
     </div>
  </div>
  <div className="fontlist">
     <Link link="/category/fonts/sans-serif/"> <img className="f_hover" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Calligraphy.webp" />
     <img className="ux_fview1" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Calligraphy3.webp" /> 
     <img className="ux_fview" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Calligraphy2.webp" /> 
     
      </Link> 
     <div>
      <span className="fname"> Sans Serif</span>
      <span className="fcount">100 + Fonts</span>
     </div>
  </div>
  <div className="fontlist">
     <Link link="/category/fonts/caligraphy"> <img className="f_hover" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Calligraphy.webp" />
     <img className="ux_fview1" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Calligraphy3.webp" /> 
     <img className="ux_fview" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Calligraphy2.webp" /> 
      </Link> 
     <div>
      <span className="fname">Caligraphy </span>
      <span className="fcount">100 + Fonts</span>
     </div>
  </div>

  <div className="fontlist">
     <Link link="/category/fonts/blackletter"> <img className="f_hover" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Blackletter1.webp" /> 
     <img className="ux_fview1" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Blackletter3.webp" /> 
     <img className="ux_fview" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Blackletter2.webp" /> 
     </Link> 
     <div>
      <span className="fname">Blackletter</span>
      <span className="fcount">100 + Fonts</span>
     </div>
  </div>

  </div>
  </SectionContainer>

</Trendingfonts> */}
 {data.isHome ?
 <>
<Photoshopaction>

<SectionContainer>

        <div className="ux_action1">
        <h4>Photoshop Actions</h4>
        <p> Photoshop actions offer a virtually limitless opportunity to create digital art that are indeed masterpieces. 
          The advanced programming helps save time throughout the editing process and also ensures that the final product is aesthetic and visually appealing.
           Photoshop Actions is a collection of HDR effects, color correction, matte effects, winter effects and more.</p>  
<div className="d_btn"><Link link="/category/add-ons/photoshop-action/"> Download Now </Link><img alt="arrow" src={arrowicon} /></div>
<img className="_psgif" alt="psactions" src={ps_icon} />
        </div>

        <div className="ux_action2">
        
           <img alt="action"  src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/action.webp" />  </div>
        </SectionContainer>

</Photoshopaction>

<Lightroompreset>
      <div className="overlay1">
<SectionContainer>
<div className="ux_lightroom2"> <img alt="light" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/light.webp" />  </div>            
<div className="ux_lightroom1">
<h4>Lightroom Preset</h4>
<p>  With Lightroom Preset at your disposal you can conveniently edit images at a great speed alongside having fun while doing it.
   It allows you to experiment with different visual looks and apply them uniformly across images, so that you can have a clear vision of what you want.
   You can also create a signature look, for any platform ( i.e Instagram, Youtube etc) across the internet. </p>  
<div className="d_btn"><Link link="/category/add-ons/lightroom-preset/"> Download Now </Link><img alt="arrows" src={arrowicon} /></div>
</div>


</SectionContainer>
</div>
</Lightroompreset>

<Graphics>

<SectionContainer>

        <div className="ux_action1">
        <h4>Graphics & Mockups</h4>
        <p>  Take any design up a notch with impeccable graphics! The use of graphics is a key component in making the
           outcome of any design look more professional and sophisticated. Even when the use of graphics can make a lot of difference
            to your design it can sometimes feel heavy on your pocket. To ensure that you don’t have to compromise,
           we have accumulated a wide range of graphics & mockups that you can download and use cost free at GraphicUX.  </p>  
<div className="d_btn"><Link link="/category/graphics/"> Download Now </Link><img alt="arrow" src={arrowicon} /></div>
        </div>

        <div className="ux_action2"> <img alt="graphics" src={graphics} />  </div>
        </SectionContainer>

</Graphics>


<Uxtheme>

<SectionContainer>
<div className="ux_lightroom2"> <img alt="web" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/website.webp" />  </div>            
<div className="ux_lightroom1">
<h4>Website Themes</h4>
<p> Every website that exists today is an amalgamation of impeccable web development, 
  noteworthy content and most importantly spotless design. Our website themes are created
   to help you build a website that exudes perfection at zero cost. Every website theme that you will find on
    GraphicUX can be used by any user free of cost.
   So, what are you waiting for? Make your websites fabulous without burning a hole in your pocket.</p>  
<div className="d_btn"><Link link="category/themes/"> Download Now </Link> <img alt="arrow" src={arrowicon} /></div>
</div>


</SectionContainer>

</Uxtheme> </> :""}

        </Main>

      </div>

    

      <Footer />
    </>
  );
};

export default connect(Theme);

const Adblock = styled.adblock`
h2 {
    width: 1888px;
    position: fixed;
    top: -59px;
    left: 0px;
    right: 0px;
    background: rgb(116 112 112 / 94%);
    height: 100vh;
    text-align: center;
    padding-top: 20%;
    color: #ffffff;
    z-index: 999999999;
  }

`;

const Main = styled.main`
  display: block;
`;


const BannerSection = styled.bannersection`
  padding: 40px 0px;
  background: linear-gradient(180deg, #C1FFC1 0%, #FFFFFF 64.88%);
  display:block;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.04);
  border-radius: 0px 0px 190px 190px;
  h2{  color: #084523;
    font-size:38px;}
  p{font-size: 20px;}

  @media (min-width:992px){
    h2{
    width: 900px;
    height: 120px;
    line-height: 50px;
    margin:3rem auto 1rem;
  }
  }
  @media (max-width:767px){
    background: linear-gradient(180deg, #25C97C -178.6%, #FFFFFF 100.5%);
    display: block;
    img{display:none;}
  }
`;


const BannerInner = styled.div`
text-align: center;
padding-top: 120px;
width: 70%;
margin: auto;

@media (max-width:575px){
  padding-top: 100px;
  width:80%;
  h2{font-size:22px; margin: 0px;
    height: 130px;}
  p{font-size:15px; font-weight:500; display:none;}
  width: 100%;
  
}

`;

const Recentitem = styled.h4`
clear: left;
text-align: center;
margin-bottom: -25px;
font-size: 30px;
color: #077A3A;
@media (max-width:767px){
  margin-bottom: 0px;
}
`;

const Uxcategory = styled.ul`
list-style: none;
margin-top: 140px;
display: flex;
justify-content: center;
margin-left:0px;


li:nth-child(1):hover a{
  background: #15be77 !important;
   transition:all 0.2s ease-in-out 0s;  
}
li:nth-child(2):hover a {
  background: #2bbbfa !important;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-child(3):hover a {
  background: #f8a64c !important;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-child(4):hover a {
  background: #ed56a3 !important;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-child(5):hover a {
  background: #a259ff !important;
   transition:all 0.2s ease-in-out 0s;
}


li{
  text-align:center;
  cursor:pointer !important;
  :hover a{
    color: #47e087;
  }
}
a{
  text-decoration: none;
  color: #121212;
  display: inline-block;
  padding: inherit;
  border-radius: 50%;
  width: 210px;
  height: 210px;
  text-align: center;
  margin:0px 10px;
}

h3{
  margin: 20px 0px;
    font-size: 19px;
    font-weight: 600;
}
img{ margin: 45px auto; width: 120px;
  height: 120px;}


li:nth-of-type(1) a {
  background: #15be7754;
}

li:nth-of-type(2) a {
  background: #2bbbfa57;
}

li:nth-of-type(3) a {
  background: #f8a64c63;
}
li:nth-of-type(4) a {
  background: #ed56a352;
}
li:nth-of-type(5) a {
  background: #a259ff59;
}
li:nth-of-type(1):hover h3{ color:#15be77;   transition:all 0.2s ease-in-out 0s;}
li:nth-of-type(1) a:hover {
  background: #15be77;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-of-type(2) a:hover {
  background: #2bbbfa;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-of-type(2):hover h3{ color:#2bbbfa;   transition:all 0.2s ease-in-out 0s;}
li:nth-of-type(3) a:hover {
  background: #f8a64c;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-of-type(3):hover h3{ color:#f8a64c;  transition:all 0.2s ease-in-out 0s;}
li:nth-of-type(4) a:hover {
  background: #ed56a3;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-of-type(4):hover h3{ color:#ed56a3;  transition:all 0.2s ease-in-out 0s;}
li:nth-of-type(5) a:hover {
  background: #a259ff;
   transition:all 0.2s ease-in-out 0s;
}
li:nth-of-type(5):hover h3{ color:#a259ff;}

@media (min-width:992px){
  width: 1298px;
  height: 297px;
  margin-bottom: 30px;
}

@media (max-width:575px){

  margin-top:50px;
  display: none;
  grid-template-columns: repeat(5,2fr);
  gap: 0px 0px;
  overflow-x: auto;

  h3{ margin: -14px 0px;
    font-size: 15px;}
    img{    margin: 24px auto;
      width: 59px;}
      li h3{color:#000 !important;}
      li:nth-of-type(3):hover{ background: #f8a64c63;}

      li{    width: 100px;
        height: 110px;
        margin: 0px 10px;
        border-radius: 50%;
      img{margin: 19px auto;
        width: 35px;}
      }
      

}


`;



const SearchForm = styled.form`
max-width: 949px;
height: 62px;
  margin: 0;
  position: relative;
  width: 100%;
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 50px;

  @media (min-width: 700px) {
    position: relative;
    width: 73%;
    margin: 0px auto;
    top: 25px;
    left: 9px;
  }

  @media (min-width:579) and (max-width:700px){
    width: 73%;
  }

  @media (max-width:575px){
    width: 80%;
    margin: 0 auto;
    font-size: 18px;

    button{
      right: -3px;
      padding: 15px 28px;
      
    }
  }
  
img {
  width: 24px;
  position: absolute;
  top: 19px;
  left:0px;
}
@media (max-width:320px){
  width: 95%;
}

`;

const SearchInput = styled.input`
  background: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 31.5px;
  font-size: 2rem;
  height: 100%;
  padding: 20px 20px;
  position:relative;
  border: none;
  color: inherit;
  display: block;
  letter-spacing: -0.0277em;
  margin: 0 0 0 -2rem;
  max-width: calc(100% + 2rem);
  padding: 0 0 0 2rem;
  width: calc(100% + 2rem);
  appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }




  @media (min-width: 700px) {
    border: none;
    font-size: 1.9rem;
    word-spacing: 2px;
    height: 100%;
    padding: 20px 56px;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }
::placeholder{
  opacity: 0.6;
}



@media (max-width:575px){
  padding: 20px 56px;
  width:82%;
  font-size:14px;

}




`;


const SearchButton = styled.button`
background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
border-radius: 31.5px;
padding: 17px 49px;
cursor: pointer;
height: 88%;
right: 6px;
color: white;
font-weight: 500;
font-size: 20px;
margin: 0 0 0.8rem 0.8rem;
border-color: #dcd7ca;
position: absolute;
top: 0;
bottom: 0;
margin: auto 0;
  &:focus {
    right: 0;
  }
`;

const Photoshopaction = styled.photoshopaction`
background:linear-gradient(180deg, #E2F6FF 0%, rgba(226, 246, 255, 0) 100%);
width:100%;
padding-bottom: 50px;
float: left;
padding: 80px 0px;
margin-top:80px;

.ux_action1{width:38%;
margin-left:70px;
margin-right:50px;
float:left;
position:relative;
._psgif {
  position: absolute;
  right: -110px;
  width: 129px;
  bottom: -127px;
}
.d_btn{display:flex;
  :hover img{transform: translate(10px, 0px);
    transition: all 0.4s; cursor:pointer;}
  img {
    margin-left: 10px;
}
}
}
a{text-decoration:none;}

  @media (max-width:767px){
    display:none;
      width: 90%;
      margin-left: 20px;
      margin-right: 0px;
      padding-bottom: 0px;
      .ux_action1{width:95%; margin-left:0px;
        ._psgif {
          position: absolute;
          width: 129px;
          bottom: -335px;
          left: 0px;
      }
        
      }

}
h4{color:#2BBBFA;}
p{font-size:16px; line-height:30px; }
}

.ux_action2{width:50%;
  float:left;}

`;

const Lightroompreset = styled.lightroompreset`
background: linear-gradient(0deg, #FDE4C9 0%, rgba(253, 228, 201, 0) 100%, rgba(253, 228, 201, 0) 100%);
width:100%;
padding-bottom: 50px;
float: left;
.d_btn{display:flex;
  a{text-decoration:none;}
  :hover img{transform: translate(10px, 0px);
    transition: all 0.4s; cursor:pointer;}
  img {
    margin-left: 10px;
}
}
padding:45px 0px;
.ux_lightroom2{width: 41%;
  float: left;
  margin-left: 30px;}
.ux_lightroom1{width:45%;
margin-left:70px;
margin-right:50px;
float:left;
}
h4{color:#F8A64C;}
p{font-size:16px; line-height:30px; }

@media (max-width:767px){
  display:none;
  margin-top:20px;
  .ux_lightroom2{width: 90%;
    float: left;
    margin-left: 30px;}
  .ux_lightroom1{width:90%;
  margin-left:20px;
  margin-right:0px;
  float:left;
  }

}

}


`;

const Graphics = styled.graphics`
width:100%;
padding-bottom: 50px;
display:block;
padding: 80px 0px;
float:left;
position:relative;
&:after {
  content:"";
  background: #ED56A3;
opacity: 0.35;
filter: blur(125.5px);
transform: matrix(-1, 0, 0, 1, 0, 0);
width:200px;
height:200px;
display:block;
z-index:999;
position:absolute;
left: 0px;
top: 110px;
}
.d_btn{display:flex;
  a{text-decoration:none;}
  :hover img{transform: translate(10px, 0px);
    transition: all 0.4s; cursor:pointer;}
  img {
    margin-left: 10px;
}
}
padding-bottom:0px;

.ux_action1{width:38%;
margin-left:70px;
margin-right:50px;
float:left;
}
h4{color:#ED56A3;}
p{font-size:16px; }


@media (max-width:767px){
  display:none;
  .ux_action1{width:90%;
     margin-left:20px;
     margin-right:0px;
     }
     .ux_action2{width:90%;}
 }

}

.ux_action2{width:50%;
  float:left;}


`;

const Uxtheme = styled.uxtheme`
background: #e3cdff6b;
width:100%;
padding-bottom: 50px;
float: left;
.d_btn{display:flex;
  a{text-decoration:none;}
  :hover img{transform: translate(10px, 0px);
    transition: all 0.4s; cursor:pointer;}
  .d_btn img {
    margin-left: 10px;
}
}
padding:45px 0px;
.ux_lightroom2{width: 41%;
  float: left;
  margin-left: 30px;}
.ux_lightroom1{width:45%;
margin-left:70px;
margin-right:50px;
float:left;
}
h4{color:#A259FF;}
p{font-size:16px; line-height:30px; }

@media (max-width:767px){
  display:none;
  .ux_lightroom2{width: 90%;
    float: left;
    margin-left: 30px;}
  .ux_lightroom1{width:90%;
  margin-left:20px;
  margin-right:0px;
  }

}

}
`;

const Trendingfonts = styled.trendingfonts`
width: 100%;
float: left;
background:#EDF9F5;
border-top-right-radius: 190px;
border-top-left-radius: 190px;
padding:30px 0px;
position:relative;
&:after {
  content:"";
  background: rgba(21, 190, 119, 0.35);
opacity: 0.8;
filter: blur(125.5px);
width:330px;
height:329px;
display:block;
z-index:999;
position:absolute;
right:0px;
top:110px;
}
.font_wrapper{margin-left: 50px;
  position: relative;
  margin-top: 60px;
  float: left;
  width: 100%;
  margin-bottom: 66px;
}
   .ticon {
    position: absolute;
    left: -117px;
    top: 3px;
    width: 100px;
}
h4{color:#15BE77;  margin-bottom:50px;
  span{text-align: right;
    display: block;
    font-size: 19px;
    margin-right:50px;
  }
}
.fontlist{display:inline-block; width: 22%;
  margin: 0px 15px;
  position:relative;
    div{ margin-top: 20px;
    display: flex;
    justify-content: space-between;
  .fname{font-size: 20px;
    font-weight: 700;}
    span:last-child{font-size: 14px;
      color: #9f9f9f;}

  }

.ux_fview{ position: absolute;
  top: -7px;
  z-index: 999;
  width: 87%;}


  .ux_fview1{position: absolute;
    top: -13px;
    z-index: 99;
    width: 79%;} 
    .f_hover{
      position: relative;
      top: -16px;
      z-index:9999999;
      width:100%;
    }
    :hover .ux_fview1 {transform: translate(0px, -6px); transition: all 0.4s;}

:hover .ux_fview {transform: translate(0px, -4px); transition: all 0.4s;}
  } 
    






 

@media (max-width:767px){
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
    .font_wrapper{margin-left:0px;
      .fontlist{
        width:90%;
        margin-top: 30px;
      }
   }
}

`;

const Uxfeatured = styled.uxfeatured`

list-style: none;
    text-align: center;
    float: left;
    width: 100%;
    margin-top: 0px;
    margin-bottom: 50px;
    position:relative;

&:after {
  content:"";
  background: rgba(255, 227, 80, 0.35);
  opacity: 0.8;
  filter: blur(125.5px);
  transform: matrix(-1, 0, 0, 1, 0, 0);
width:378px;
height:377px;
display:block;
z-index:999;
position:absolute;
right:0px;
top:0px;
}

ul{margin-top:50px;}
p{font-size:16px;}
li{display: inline-block;
  width: 44%;
  margin-bottom: 40px;
  margin-right: 50px;}
h4{color:#077A3A;
   font-size:30px;
   margin-bottom: 15px;
   letter-spacing:0.1px;
    font-weight:600;}

    .fimgmob {
      width: 100px;
      height:100px;
      float: left;
      display:none;
  }
    .fimg {
      width: 100px;
      height:100px;
      float: left;
  }
  .fcaption {
    float: right;
    width: 76%;
    text-align: left;
    margin-top: -50px;
}
.fcaption p{font-size:16px;}
.fcaption h5{margin-bottom:10px; font-weight:600; font-size:22px;}


@media (max-width:767px){
  display:block;
  margin-top:0px;
  margin-bottom:0px;
  &:after {
    content:"";
  width:1px;
  height:1px;
  z-index:999;
  position:absolute;
  right:0px;
  top:0px;
  }
  ul{margin-left: 0px;}
  h4{font-size:19px;}
  p{font-size:13px;}

  .fimgmob {
    width: 100px;
    display:block;
    height: 100px;
    float: none !important;
    margin: 29px auto;
    img{display:block;}
}
li{display: inline-block;
  width: 100%;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 0px;

  .fcaption{  
    width: 95%;
    text-align:center;
    margin-top: -36px;
  h5{    margin-bottom: 10px;
    font-weight: 600;
    font-size: 19px;}
  }
}

  .fimg{    width: 100px;
    float: none;
    display:none;
    margin: 25px auto; 

  ul{margin: 0px; }
  
}

`;






