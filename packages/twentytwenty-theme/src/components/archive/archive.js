import { connect, decode, fetch, styled } from "frontity";
import { Fragment, useEffect, useRef, useState } from "react";
import Article from "../post/post-item";
import ArchiveHeader from "./archive-header";
import Pagination from "./archive-pagination";
import PostSeparator from "../post/post-separator";
import Post from "../post";
import BannerBg from "../../assets/img/banner.svg"
import searchicon from "../../assets/img/search.svg"
import { useTransition, animated } from "react-spring";
import useFocusTrap from "../hooks/use-trap-focus";
import useFocusEffect from "../hooks/use-focus-effect";
import Link from "../link";
import AdSense from 'react-adsense';
import Skelton from "../Skelton";
import GoogleAds from "../ads/GoogleAds";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Archive = ({ state, showExcerpt, showMedia, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const { primary } = state.theme.colors;

  // Whether the show the excerpt instead of the full content
  // If passed as prop, we'll respect that. Else, we'll use the theme settings
  const _showExcerpt = showExcerpt || !state.theme.showAllContentOnArchive;

  const { searchQuery } = state.source.get(state.router.link);

  const { isSearchModalOpen } = state.theme;
  const { closeSearchModal } = actions.theme;
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


  const [subcategory, setSubcategory] = useState([]);
  const [loadingcategory, setLoadingcategory] = useState(true);

  useEffect(() => {
    Post.preload();
  }, []);
  useEffect(() => {
    setLoadingcategory(true)
    if (state.router.link != "/") {
      fetch(`${state.source.url}/wp-json/wp/v2/categories?parent=${data.id}`)
        .then(response => response.text())
        .then(result => {
          setSubcategory(JSON.parse(result))
          setLoadingcategory(false)
        })
        .catch(error => console.log('error', error));
    }
  }, [state.router.link]);

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
      {!data.isHome ?
        <BannerSection>
          {data?.isHome || !data?.isSearch ?
            <>
            {/* <h6> Ad </h6> */}
            <div className="header_adwrapper">
            <AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='7406912261'
                      style={{ width: 728, height: 90, display: "inline-block" }}
                      format=''
                    />


                    </div>
                    {/* <h6> Ad </h6> */}
            <BredCrumb>
              <ul>
                <li>
                  <Link link="/"> Home </Link>
                </li>
                <li>
                  -
                </li>
                <li>
                  <Link link="/"> <span> {decode(state.source[data.taxonomy][data.id].name).toUpperCase()} </span></Link>
                </li>
              </ul>
            </BredCrumb>  </> : ""
          }
          {data.isHome ?
            <img className="banner_img" src={BannerBg} /> :
            state.router.link?.includes("/category/fonts/") ?
              <img className="banner_img" alt="addon" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-font.webp" /> :
              state.router.link?.includes("/category/add-ons/") ?
                <img className="banner_img" alt="ps" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Photoshop.webp"  /> :
                state.router.link?.includes("/category/graphics/") ?
                  <img className="banner_img" alt="graphic" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Graphics.webp"  /> :
                  state.router.link?.includes("/category/themes/") ?
                    <img className="banner_img" alt="web" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Website.webp"  /> :
                    state.router.link?.includes("/category/add-ons/photoshop-action/") ?
                      <img className="banner_img" alt="pss" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Photoshop.webp"  /> :
                      state.router.link?.includes("/category/templates/") ?
                      <img className="banner_img" alt="pss" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Graphics.webp"  /> :
                      state.router.link?.includes("/category/stock-image/") ?
                      <img className="banner_img" alt="pss" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Website.webp"  /> :
                      state.router.link?.includes("/category/add-ons/lightroom-preset/") ?
                        <img className="banner_img" alt="light" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/px-Lightroom.webp"  /> :
                        <img className="banner_img" src={BannerBg} />
          }
          <SectionContainer size="large">

            <BannerInner>
              <div>
                {/* {data.isTaxonomy && (
            <ArchiveHeader labelColor={primary} label={data.taxonomy}>
              <span>{decode(state.source[data.taxonomy][data.id].name)}</span>
            </ArchiveHeader>
          )} */}
                {data.isTaxonomy && (<>
                  <h2>{data.taxonomy.toUpperCase()} : {decode(state.source[data.taxonomy][data.id].name).toUpperCase()} </h2>
                  <p dangerouslySetInnerHTML={{ __html: decode(state.source[data.taxonomy][data.id].description) }} ></p></>
                )}
                {data.isAuthor && (<><h2>AUTHOR : {decode(state.source.author[data.id].name).toUpperCase()}</h2>
                  <p dangerouslySetInnerHTML={{ __html: decode(state.source.author[data.id].description) }} ></p></>

                )}
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

            </div>
          </SectionContainer>
        </BannerSection> : ""
      }

      <SectionContainer size="large">



        {state.router.link.includes("/category") ?


          <CategoryMain>

            {!loadingcategory ?
              subcategory?.map(val =>
                <CategoryCircle key={val.id}>
                  <Link link={val?.link?.replaceAll(state.source.url, "")}>
                    <div>
                      <img alt="category-image" width="210px" height="210px" src={val?.acf?.cate_image} />
                    </div>
                    <p> {val.name} </p>
                  </Link>
                </CategoryCircle>
              )
              :
              <>
              
                <Skelton height={220} width={220} radius="50%" />
                <Skelton height={220} width={220} radius="50%" />
                <Skelton height={220} width={220} radius="50%" />
                <Skelton height={220} width={220} radius="50%" />
                <Skelton height={220} width={220} radius="50%" />
              </>
            }
          </CategoryMain>
          : <CategoryMain></CategoryMain>}
        <PostMain>


          {/* Iterate over the items of the list. */}
          {data?.items?.map(({ type, id }, index) => {
            const isLastArticle = index === data.items.length - 1;
            const item = state.source[type][id];
            // Render one Item component for each one.
            return (
              <>
                {index == 4 ?
                  <Fragment key={item.id}>
                    <GoogleAds  slot='7479301206' width="300" heigth="250" key="534535" />
                    <Article
                      key={item.id}
                      item={item}
                      showExcerpt={_showExcerpt}
                      showMedia={item.jetpack_featured_media_url}
                    />
                  </Fragment> :
                  index == 9 ?
                  <Fragment key={item.id}>
                    <GoogleAds  slot='8300401193' width="300" heigth="250" key="58284" />
                    <Article
                      key={item.id}
                      item={item}
                      showExcerpt={_showExcerpt}
                      showMedia={item.jetpack_featured_media_url}
                    />
                  </Fragment> :
                  <Fragment key={item.id}>
                    <Article
                      key={item.id}
                      item={item}
                      showExcerpt={_showExcerpt}
                      showMedia={item.jetpack_featured_media_url}
                    />
                  </Fragment>
                }
              </>
            )
          })}


        </PostMain>
        {data.totalPages > 1 && (
          <>
            <PostSeparator />
            <Pagination size="thin" />
          </>
        )}
      </SectionContainer>
    </>
  );
};

export default connect(Archive);

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
export const PostMain = styled.postmain`
display: grid;
grid-template-columns: repeat(3,2fr);
gap: 20px 20px;
clear:left;

@media (min-width:768px) and (max-width:1024px){
  display: grid;
  grid-template-columns: repeat(2,2fr);
  gap: 20px 20px;
  margin: 0px 15px;
}

@media (min-width:320px) and (max-width:767px){
  grid-template-columns: repeat(1,2fr);
  gap: 20px 0px;
  margin: 0px 0px;
  padding:0px 20px;

}


`;

const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem",
  large: "120rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

export const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 0rem);
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 0rem);
  }

`;

export const CategoryMain = styled.categorymain`
display: grid;
grid-template-columns: repeat(5, 2fr);
gap: 10px 10px;
margin-bottom: 5rem;
margin-top: 7rem;

@media (max-width:767px){
  grid-template-columns: repeat(2, 2fr);
  a{color:#000; text-decoration:none;}
}

@media (max-width:575px){
  margin-bottom: 90px;
}
`;

export const CategoryCircle = styled.categorycircle`
text-align: center;


img{
    box-shadow: 0px 0px 10px 0px #e9dede;
    margin: auto;
    border-radius: 50%;
    border: 2px solid #bcd8c8;
    border: 8px solid #fff;
}
a{color:#000; text-decoration:none;}
p{
  margin-top: 15px;
}
`;



const BannerSection = styled.bannersection`
  padding: 40px 0px;
  height: 620px;

  h2{  color: #084523;
    font-size:45px;}
  p{font-size: 20px;
  h1{font-size: 5.4rem;
    color: #084523;}
  }

  .header_adwrapper{text-align:center;}
`;


const BannerInner = styled.div`
text-align: center;
padding-top: 50px;
width: 70%;
margin: auto;

@media (max-width:575px){
  padding-top: 85px;
  width:80%;
  h2{font-size:25px;}
  p{font-size:15px;}
  
}



`;

const UXCategory = styled.uxcategory`

list-style: none;
margin-top: 140px;
display: flex;
justify-content: center;
margin-left:0px;
margin-bottom: 100px;

li{

  display: inline-block;
  padding: inherit;
  border-radius: 50%;
  width: 210px;
  height: 210px;
  text-align: center;
  margin:0px 10px;
}
a{
  text-decoration: none;
  color: #121212;
}

h3{
  margin: 60px 0px;
  font-size: 20px;
}
img{ margin: 45px auto;}

li:nth-of-type(1) {
  background: #15be7754;
}
li:nth-of-type(2) {
  background: #2bbbfa57;
}

li:nth-of-type(3) {
  background: #f8a64c63;
}
li:nth-of-type(4) {
  background: #ed56a352;
}
li:nth-of-type(5) {
  background: #a259ff59;
}

@media (max-width:575px){

  margin-top:50px;

}

`;

const SearchForm = styled.form`
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
  @media (max-width:575px){
    width: 80%;
    margin: 0 auto;
    font-size: 18px;
  }
  
img {
  width: 24px;
  position: absolute;
  top: 19px;
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

const BredCrumb = styled.bredcrumb`
background: #dedede38;
    width: 100%;
    float: left;
    padding: 18px 0px;

ul{
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

li{
  line-height: normal;
}

a{
  text-decoration: none;
  color: inherit;
  font-size: 16px;
}

span{
  color: #15BE77;
}

`;