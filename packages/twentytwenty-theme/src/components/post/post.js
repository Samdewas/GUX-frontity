import { styled, connect, fetch } from "frontity";
import { useEffect, useState } from "react";
import FeaturedMedia from "./featured-media";
import {
  Post as _Post,
  PostHeader,
  PostInner,
  PostTitle,
  PostCaption,
} from "./post-item";
import PostCategories from "./post-categories";
import PostMeta from "./post-meta";
import PostTags from "./post-tags";
import PostDisc from "../../assets/img/post-dis.png"
import Link from "../link";
import { useRef } from "react";
import Input from "../styles/input";
import Button from "../styles/button";
import ScreenReaderText from "../styles/screen-reader";
import Comments from "../globle/comments/index.js";
import AdSense from 'react-adsense';

/**
 * The Post component that the TwentyTwenty theme uses for rendering any kind of
 * "post type" (posts, pages, attachments, etc.).
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Get all categories
  const allCategories = state.source.category;

  /**
   * The item's categories is an array of each category id. So, we'll look up
   * the details of each category in allCategories.
   */
  const categories =
    post.categories && post.categories.map((catId) => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;

  /**
   * The item's categories is an array of each tag id. So, we'll look up the
   * details of each tag in allTags.
   */
  const tags = post.tags && post.tags.map((tagId) => allTags[tagId]);

  useEffect(() => {
    actions.source.fetch("/");
  }, [actions.source]);

  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];
  const { primary } = state.theme.colors;

  const { closeSearchModal } = actions.theme;
  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();

  const handleSubmit = (event) => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(`/?s=${searchString.toLowerCase()}`);

      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      closeSearchModal();
    }
  };



  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
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
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".rt_header_main");
    const scrollTop = window.scrollY;
    scrollTop >= 450
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const [posttags, setPosttags] = useState([]);
  const [postcategory, setPostcategory] = useState([]);

  useEffect(() => {
    fetch(`${state.source.url}/wp-json/wp/v2/tags?post=${data.id}`)
      .then(response => response.text())
      .then(result => setPosttags(JSON.parse(result)))
      .catch(error => console.log('error', error));

    fetch(`${state.source.url}/wp-json/wp/v2/categories?post=${data.id}`)
      .then(response => response.text())
      .then(result => setPostcategory(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }, [state.router.link]);

  // 2mint me 30 second chalega total 1 ghante me 15 mint //
  const [downloadhover, setDownloadhover] = useState(false);
  const d = new Date();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  const ondownloadhover = () => {
    
    if (((min % 2 == 0) && (sec < 40))) {
      setDownloadhover(true);
      setTimeout(() => {
        document.getElementsByClassName("wp-block-button__link")[0]?.click();
            }, 3000);
    } else {
      setDownloadhover(false);
    }
  }
  useEffect(()=>{
    const div = document.getElementsByClassName("PostDiscription")[0]?.querySelectorAll('div')[0]?.querySelectorAll('h2')[0];
    let html = "<ins class='adsbygoogle' style='display:inline-block;width:300px;height:250px' data-ad-client='ca-pub-5442643109134129' data-ad-slot='5056940893'></ins>";
    div?.insertAdjacentHTML("beforebegin", html);
    
    var doc = document.body.getElementsByClassName("wp-block-button");
    var docout = document.body.getElementsByClassName("faltu");
    doc[0].addEventListener("mouseover", ondownloadhover);
    docout[0]?.addEventListener("mouseleave", () => setDownloadhover(false));
  },[])
   
  useEffect(()=>{
    console.log(downloadhover)
  },[downloadhover])
       {/* <UXdownload onMouseEnter={ondownloadhover} onMouseLeave={() => setDownloadhover(false)}>
                        <Button style={{ zIndex: downloadhover ? 9999 : 99 }} className="d_innerbtn">Download</Button>
                      </UXdownload> */}
                    console.log(min);
  return data.isReady ? (

    <>
      {adblockerActive ?
        <Adblock>
          <h2>Adblock Detected !<br />
            Please disable adblock  to use our site.</h2>
        </Adblock>
        : ""}
<div style={{textAlign: "center"}}>
<AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='5764423148'
                      style={{ width: 728, height: 90, display: "inline-block" }}
                      format=''
                    />
                    </div>
      <PostArticle>

        <SectionContainer size="large">

          <DetailsRow>
            <DetailsColumnLeft>
              <PostDetailsTitle>
                {/* {post.categories && <PostCategories categories={categories} />} */}
                <PostTitle
                  as="h1"
                  className="heading-size-1"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </PostDetailsTitle>
         
              <DetailsText>
                <div>
                  {post.caption && (
                    <PostCaption
                      dangerouslySetInnerHTML={{ __html: post.caption.rendered }}
                    />
                  )}
                </div>

                <DetailsTextInner >
               
                  <PostMeta item={post} />
                 
                  <div>
                    <button><Link link={postcategory[0]?.link}> {postcategory[0]?.name} </Link></button>
                  </div>


                </DetailsTextInner>
              </DetailsText>
             <div> 

 {/* <h6> Ad </h6> */}
                      <AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='2702898115'
                      style={{ width: 336, height: 250, display: 'inline-block' }}
                      format=''
                    /> 
                    <AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='5056940893'
                      style={{ width: 300, height: 250, display: 'inline-block' }}
                      format=''
                    /> 
                    {/* <h6> Ad </h6> */}
             </div>
              {/* Post Featured image here we can put adsense here      */}
              {/* <PostDetailsImg>

                {state.theme.featuredMedia.showOnPost && (
                  <FeaturedImage id={post.featured_media} isSinglePost={true} />
                )}

              </PostDetailsImg> */}

              <PostDiscription className="PostDiscription">

                {post.content && (
                  <>
                    <EntryContent>
                      <Html2React html={post.content.rendered} />
                      {/* <UXdownload onMouseEnter={ondownloadhover} onMouseLeave={() => setDownloadhover(false)}>
                        <Button style={{ zIndex: downloadhover ? 9999 : 99 }} className="d_innerbtn">Download</Button>
                      </UXdownload> */}

                      <Adwrapper className={downloadhover ? "chalu faltu" : "faltu"}>
              
                         {/* <h6> Ad </h6> */}
                         {(min < 15) ?  
                       <AdSense.Google
                       client='ca-pub-5442643109134129'
                       slot='5221506164'
                       style={{ width: 300, height: 250, float: 'left' }}
                       format=''
                     /> :
                    (min < 30 ) ?
                    <AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='2702898115'
                      style={{ width: 336, height: 250, display: 'inline-block' }}
                      format=''
                    /> :
                    (min < 45 ) ?
                    <AdSense.Google
                    client='ca-pub-5442643109134129'
                    slot='5056940893'
                    style={{ width: 300, height: 250, display: 'inline-block' }}
                    format=''
                  /> : 
                  <AdSense.Google
                    client='ca-pub-5442643109134129'
                    slot='5436872666'
                    style={{ width: 336, height: 250, display: 'inline-block' }}
                    format=''
                  />
                  }
                   
                    {/* <h6> Ad </h6> */}
                      </Adwrapper>

                    </EntryContent>

                    {post.tags && <PostTags tags={tags} />}
                  </>
                )}


                {posttags?.length ? <div>
                  <h4>Related Searches</h4>
                  <TagsList>
                    {posttags?.map(val =>
                      <li>  <Link link={val.link}>{val.name}</Link> </li>
                    )}
                  </TagsList>
                </div>
                  : ""}


                <Comments postId={data.id} id="comments" />

              </PostDiscription>

            </DetailsColumnLeft>

            <DetailsColumnRight className="rt_header_main">
              <RightBarLink>

                <SearchBar>
                  <Form role="search" aria-label="404 not found" onSubmit={handleSubmit}>
                    <Label>
                      <ScreenReaderText>Search for:</ScreenReaderText>
                      <SearchInput
                        type="search"
                        defaultValue={searchQuery}
                        placeholder="Search ..."
                        ref={inputRef}
                      />
                    </Label>
                    <SearchButton bg={primary} type="submit">
                      Search
                    </SearchButton>
                  </Form>
                </SearchBar>

                <SideCateItem className="sidebar_ad_none"> 
                  <SidebarH>
                    {/* <h6> Ad </h6> */}

                    <AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='6445886756'
                      style={{ width: 300, height: 250, float: 'left' }}
                      format=''
                    />
                    {/* <h6> Ad </h6> */}
                  </SidebarH>

                </SideCateItem>

                <SideCateItem className="sidebar_ad_none">
                  <SidebarH>
                    <h6> Categories </h6>
                  </SidebarH>
                  <ul>
                    {postcategory?.map(val =>
                      <li>
                        <Link link={val.link}>{val.name}</Link>
                      </li>
                    )}

                  </ul>
                </SideCateItem>

                <SideCateItem>
                  <SidebarH>
                    {/* <h6> Ad </h6> */}

                    <AdSense.Google
                      client='ca-pub-5442643109134129'
                      slot='8811829676'
                      style={{ width: 300, height: 600, display: 'inline-block' }}
                      format=''
                    />
                    {/* <h6> Ad </h6> */}

                  </SidebarH>

                </SideCateItem>



              </RightBarLink>
            </DetailsColumnRight>
          </DetailsRow>

        </SectionContainer>



        {/* 
      <Header>
        <SectionContainer>
          If the post has categories, render the categories
          {post.categories && <PostCategories categories={categories} />}
          <PostTitle
            as="h1"
            className="heading-size-1"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          If the post has a caption (like attachments), render it
          {post.caption && (
            <PostCaption
              dangerouslySetInnerHTML={{ __html: post.caption.rendered }}
            />
          )}
          The post's metadata like author, publish date, and comments
          <PostMeta item={post} />
        </SectionContainer>
      </Header>


      * If the want to show featured media in the
      * list of featured posts, we render the media.

      {state.theme.featuredMedia.showOnPost && (
        <FeaturedImage id={post.featured_media} isSinglePost={true} />
      )}

      If the post has a description (like attachments), we render it
      {post.description && (
        <PostInner size="thin">
          <EntryContent
            dangerouslySetInnerHTML={{ __html: post.description.rendered }}
          />
        </PostInner>
      )} */}

        {/* If the post has content, we render it */}
        {/* {post.content && (
        <PostInner size="thin">
          <EntryContent>
            <Html2React html={post.content.rendered} />
          </EntryContent>
       
          {post.tags && <PostTags tags={tags} />}
        </PostInner>
      )} */}
      </PostArticle>
    </>
  ) : null;
};

export default connect(Post);




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

const DetailsColumnLeft = styled.detailscolumnleft`
width: calc(75% - 6rem);
position: relative;

@media (min-width:768px) and (max-width:1024px){
  width: calc(73% - 6rem);
  position: relative;
  margin-left: 3rem;
}

after::{
  content: "";
  position: absolute;
  top: 90px;
  right: -30px;
  width: 1px;
  height: 100%;
  background: #cbcbcb;
}

`;

const TagsList = styled.tagslist`
margin-top:10px;
list-style:none;
li{background: #e4faf0;
  margin: 5px 10px;
  border-radius: 7px;
  font-size: 14px;
  padding: 14px 45px;
  display: inline-block;
  cursor:pointer;
  font-weight: 400;}
  a{color:#000; text-decoration:none;}

  @media (max-width:767px){
    display: inline-block;
   li{ background: #e4faf0;
    padding: 6px 17px;
    margin: 3px 3px;
    border-radius: 7px;
    font-size: 13px;
    display: inline-block;}
  }

`;

const DetailsColumnRight = styled.detailscolumnright`
width: 25%;
padding: 0px 15px;




@media (min-width:768px) and (max-width:1024px){
  width: 30%;
  padding: 0px 15px;
}

@media (min-width:320px) and (max-width:767px){
    width: 100%;
    padding: 0px 15px;
    float: left;
    margin-bottom: 17rem;
}

`;




const RightBarLink = styled.rightbarlink`

h5{
  margin: 0;
  margin-top: 3rem;
  color: #15BE77;
  position: relative;

}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 15px;
}
li{
  margin: 0;
    margin-top: 7px;
}

a{
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 16px;
}

`;



const SearchBar = styled.searchbar`
position: relative;
input{
  width: 100%;
  margin: 0;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
  border-radius: 7px;
  border: none;
  outline:none;
}
button {
  position: absolute;
  right: 4px;
  padding: 10px 14px;
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  border-radius: 7px;
  bottom: -4px;
}
`;

const UXdownload = styled.uxdownload`
position: relative;
    top: -59px;
    display: block;
    width: 236px;
    height: 86px;
    
button {     position: relative;
  top: -4px;
  padding: 16px 53px;
  opacity: 1;
  z-index: 99;
  font-size: 18px;
  left: 11px;
  text-decoration: none;
    text-transform: uppercase!important;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0px;
}

`;
const Adwrapper = styled.adwrapper`
  display: inline-block !important;
  transform: translate(-34px, 0px);
`;

const PostDetailsTitle = styled.postdetailstitle`

h1{
  font-size:28px;

  @media (min-width:320px) and (max-width:767px) {
    font-size: 26px;
  }
}
`;

const PostDetailsImg = styled.postdetailsimg`

img{
  @media (min-width:320px) and (max-width:767px){
    margin-top: 20px!important;
  }

}

`;

const DetailsText = styled.detailstext`
ul{
  justify-content: inherit;
}
li{
  margin-right:20px;
  margin-top:20px;
  @media (min-width:320px) and (max-width:767px){
    margin-top:10px;
  }

}
`;

const DetailsRow = styled.detailsrow`
display: flex;
justify-content: space-between;
margin-top: 40px;

@media (min-width:1200px) and (max-width:1300px){
  justify-content:space-evenly;
}
@media (max-width:1249px){
  justify-content:center;
  display:block;
  padding:50px;
}

@media (min-width:320px) and (max-width:767px){
  margin: 0px 0px;
  padding: 20px 15px;
  width: 100%;
  display: block;
}

`;

const DetailsTextInner = styled.detailstextinner`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom:10px;
@media (min-width:320px) and (max-width:767px){
  display: block;
}

ul{

  @media (min-width:320px) and (max-width:767px){
    justify-content: space-between;
  }
}
button{
  background: #ffe2c3;
  border-radius: 25px;
  padding: 9px 35px;
  font-size: 15px;
  color: #F8A64C;
  font-weight: 700;
  a{text-decoration:none;color:#F8A64C;}


  @media (min-width:320px) and (max-width:767px) {
    margin-top: 1rem;
    display:none;
  }
}

`;

const PostDiscription = styled.discription`


// p{
//   font-size: 16px;
//   margin-top: 20px;
//   color: #474747;
// }

img{
  margin: 20px 0px;
  border-radius:5px;
  position:static !important;
}
.ux_placeholder_vn{position:relative;}
.ux_placeholder_vn:after {
  content: "";
  background:url('https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/placeholderux.svg') !important;
  display: block;
  background: #fffdfd;
  width: 100%;
  height: 135px;
  position: absolute;
  bottom: 0px;
}


.ux_placeholder_vn span{padding-bottom:0px !important;}
button{
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  border-radius: 8px;
  padding: 10px 40px;
  color: white;
  margin-top:20px;
}

`;

const Header = styled(PostHeader)`
  background-color: #fff;
  margin: 0;
  padding: 4rem 0;
  @media (min-width: 700px) {
    padding: 8rem 0;
  }
`;

const PostArticle = styled(_Post)`
  padding-top: 0 !important;
`;

const FeaturedImage = styled(FeaturedMedia)`
  margin-top: 30px !important;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    background: #fff;
    content: "";
    display: block;
    position: absolute;

    left: 0;
    right: 0;
    top: 0;
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

const Form = styled.form`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  margin: 0 0 -0.8rem -0.8rem;
  justify-content: center;
  margin-top: 3rem;
`;

const Label = styled.label`
  align-items: stretch;
  display: flex;
  font-size: inherit;
  margin: 0;
  width: 100%;
`;

const SearchInput = styled(Input)`
  margin: 0 0 0.8rem 0.8rem;
`;

const SearchButton = styled(Button)`
  flex-shrink: 0;
  opacity: 1;
  transition: opacity 0.15s linear;
  margin: 0 0 0.8rem 0.8rem;
  background:linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);

`;



const EntryContent = styled.div`
  line-height: 1.5;
  max-width: 100%;
  font-family: 'Poppins', sans-serif;
  font-display:swap;
  letter-spacing: normal;

  @media (min-width: 700px) {
    font-size: 2.1rem;
    margin-top: 20px;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: 2em 0;
    max-width: 100%;
  }

  figcaption{
    margin-top:40px;
  }

  h3{
    font-size: 28px;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  cite,
  figcaption,
  table,
  address,
  .wp-caption-text,
  .wp-block-file {
    font-family: 'Poppins', sans-serif;
    font-display:swap;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 3.5rem auto 2rem;
  }

  @media (min-width: 700px) {
    h1,
    h2,
    h3 {
      margin: 6rem auto 3rem;
    }

    h4,
    h5,
    h6 {
      margin: 4.5rem auto 2.5rem;
    }
  }
`;

const SidebarH = styled.searchbarh`
position: relative;
h6{
    margin: 0;
    color: #15BE77;
    position: relative;
    font-weight: 400;
    width: -moz-max-content;
    width: max-content;
    background: white;
    padding-right: 15px;
}
:before{
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: #15BE77;
    width: 100%;
    height: 1px;
    margin: auto 0;
}
`;

const SideCateItem = styled.sidecateitem`
margin-top: 5rem;
    float: left;
    width: 100%;
`;









