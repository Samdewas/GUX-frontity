import { connect, Global, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import { useRef } from "react";
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
import BannerBg from "../assets/img/banner.png"
import searchicon from "../assets/img/search.png"
import Cate_img1 from "../assets/img/front/font.png"
import Cate_img2 from "../assets/img/front/psd.png"
import Cate_img3 from "../assets/img/front/lr.png"
import Cate_img4 from "../assets/img/front/gr.png"
import Cate_img5 from "../assets/img/front/web.png"


import { useTransition, animated } from "react-spring";
import useFocusTrap from "./hooks/use-trap-focus";
import useFocusEffect from "./hooks/use-focus-effect";

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

  return (
    <>
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


          <section className="banner_section" >
            <img className="banner_img" src={BannerBg} />
            <SectionContainer size="large">
              <div className="banner_content">
                <h2> Discover Free Premium Fonts,<br/>
                  Photoshop Action & All Graphic Resources </h2>
                <p>Graphicux.com is well known for saving money for customers but with our
                  free fonts and Photoshop action section, we have gone one step further</p>
              </div>

              <div>
                <SearchForm
                  role="search"
                  aria-label="Search for:"
                  onSubmit={handleSubmit}
                >
                  <SearchInput
                    ref={inputRef}
                    type="search"
                    defaultValue={searchQuery || ""}
                    placeholder="Search for Photoshop Action, Lightroom Preset, Fonts etc..."
                    name="search"
                  />
                  <img className="srch_icon" src={searchicon} />
                  <SearchButton bg={primary}>Search</SearchButton>
                </SearchForm>
              </div>

              <div>
            <ul className="category_front">
              <li> <a href=""> <img src={Cate_img1} /> <h3>Premium Fonts </h3> </a></li>
              <li> <a href=""> <img src={Cate_img2} /> <h3>Photoshop Action </h3> </a></li>
              <li> <a href=""> <img src={Cate_img3} /> <h3>Lightroom Preset </h3> </a></li>
              <li> <a href=""> <img src={Cate_img4} /> <h3>Graphic & Mockups </h3> </a></li>
              <li> <a href=""> <img src={Cate_img5} /> <h3>Website Themes </h3> </a></li>
            
            </ul>

              </div>
            </SectionContainer>
          </section>
          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={data.isSearch} />
            <Archive when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
      </div>

      <Footer />
    </>
  );
};

export default connect(Theme);



const Main = styled.main`
  display: block;
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






