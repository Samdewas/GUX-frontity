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
import GoogleAds from "../ads/GoogleAds";

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
  useEffect(() => {
    actions.source.fetch("/");
  }, [actions.source]);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".rt_header_main");
    const scrollTop = window.scrollY;
    scrollTop >= 150
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


  const ondownloadhover = () => {
    const d = new Date();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if (!((min % 2 == 0) && (sec < 30))) {
      setDownloadhover(true);
    } else {
      setDownloadhover(false);
    }
  }
  //true me band hojayega or false me chalega 
  // var hovered = false;
  // var rightstoclick = true;
  // document.getElementsByClassName(".wp-block-button").hover(
  //   function () {
  //     // 2mint me 30 second chalega total 1 ghante me 15 mint //
  //     

  //     if (hovered == false) {
  //       console.log("unhover")
  //       document.getElementsByClassName('.code-block-13').addClass("sameer-hover").css({ "margin": "-60px 0px 0px 0px", "opacity": "0" }).off('hover');
  //       if (rightstoclick) {
  //         rightstoclick = false;
  //         const myTimeout = window.setTimeout(function () {
  //           window.location.href = document.getElementsByClassName('.wp-block-button__link').attr('href'); clearTimeout(myTimeout);
  //         }, 3000);
  //       }
  //       hovered = true;
  //     }else{
  //       console.log("hover")
  //       hovered = false;
  //     }
  //   }
  // );
  // setInterval(function () { $('.code-block-13').removeClass('box-hover').css({ "margin": "8px auto 8px 0px", "opacity": "1" }) }, 15000);


  // Load the post, but only if the data is ready.
  return data.isReady ? (

    <>

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
                    <button> Lightroom </button>
                  </div>


                </DetailsTextInner>
              </DetailsText>

              <PostDetailsImg>

                {state.theme.featuredMedia.showOnPost && (
                  <FeaturedImage id={post.featured_media} isSinglePost={true} />
                )}

              </PostDetailsImg>

              <PostDiscription>

                {post.content && (
                  <>
                    <EntryContent>
                      <Html2React html={post.content.rendered} />
                      <UXdownload onMouseOver={ondownloadhover} onMouseLeave={() => setDownloadhover(false)}>
                        {/* <Button style={{ zIndex: downloadhover ? 9999 : 99 }} className="d_innerbtn">Download</Button> */}
                      </UXdownload>
               
                        <Adwrapper className={downloadhover ? "chalu" : ""}>
                        <GoogleAds />
                        </Adwrapper>
                    
                    </EntryContent>

                    {post.tags && <PostTags tags={tags} />}
                  </>
                )}

                <div>
                  <h4>Related Searches</h4>
                  <TagsList>
                    {posttags?.map(val =>
                      <li>  <Link link={val.link}>{val.name}</Link> </li>
                    )}
                  </TagsList>
                </div>

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

                <SideCateItem>
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
                    <GoogleAds />
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
display:flex;
margin-top:10px;
list-style:none;
li{background: #e4faf0;
  padding: 10px 15px;
  margin: 1px 10px;
  border-radius: 7px;
  font-size: 15px;}
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
    background: green;
    display: block;
    width: 236px;
    height: 86px;
button {       position: relative;
  top: -4px;
  background: red;
  padding: 16px 53px;
  opacity: 1;
  z-index: 99;
  left: 11px;}

`;
const Adwrapper = styled.adwrapper`
  display: inline-block;
  transform: translate(-34px, -58px);
.chalu{
  transform: translate(-50px, -187px);
  position: relative;
  z-index: 9999;
  opacity: 0;
}

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
}

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
  font-family: "Hoefler Text", Garamond, "Times New Roman", serif;
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
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
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









