import { connect, styled } from "frontity";
import Link from "./link";
import Navigation from "./navigation/navigation";
import {useEffect} from "react";
import SearchButton from "./search/search-button";
import SearchModal from "./search/search-modal";
import MobileSearchButton from "./mobile/search-button";
import MobileMenuButton from "./mobile/menu-button";
import MobileMenuModal from "./mobile/menu-modal";
import { useLocation } from 'react-router-dom';
import Lazyload from "./lazyloading/lazyload";



const Header = ({ state }) => {

  const { title, description } = state.frontity;
  const { headerBg } = state.theme.colors;

  // useEffect(() => {
  //   (function (w, d, s, id) {
  //     if (typeof (w.webpushr) !== 'undefined') return; w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) }; var js, fjs = d.getElementsByTagName(s)[0]; js = d.createElement(s); js.id = id; js.async = 1; js.src = "https://cdn.webpushr.com/app.min.js";
  //     fjs.parentNode.appendChild(js);
  //   }(window, document, 'script', 'webpushr-jssdk'));
  //   webpushr('setup', { 'key': 'BIl49VgR5u3yAHL3HfwpxaWCOpLsK_5nXWmPUBD9hFks77sPaMdfbgCgDnVjnVPL0uT9GyFqrDwnXzlyQIPWx8c' });
  // }, [])

  return (

    
    <PageHeader bg={headerBg} id="site-header" className={state.router.link === "/" ? "home_header" : "inner_header"}>
      <HeaderInner>
        <TitleWrapper>
          {/* Search button on mobile */}
          {state.theme.showSearchInHeader && <MobileSearchButton />}

          {/* Heading and Description of the site */}
          <TitleGroup>
            <SiteTitle>
              <StyledLink link="/">
                {/* {title}  */}
                <Lazyload className="logo" src="https://webnetny.s3.us-west-2.amazonaws.com/wp-ftt/logo.webp" alt="graphicux" />
                {/* <span> Logo </span> */}
              </StyledLink>
            </SiteTitle>
            {/* <SiteDescription>{description}</SiteDescription> */}
          </TitleGroup>

          {/* Mobile menu button and modal */}
          <MobileMenuButton />
          <MobileMenuModal />
        </TitleWrapper>

        <HeaderNavigationWrapper>
          {/* Desktop navigation links */}

          {/* <img src={Logo} /> */}
          <Navigation className="nav_link_color" />
          <button className="header_btn"> <Link link="contact-us/"> Contact Us  </Link>  </button>
          {/* Desktop search button */}
          {/* {state.theme.showSearchInHeader && <SearchButton />} */}
        </HeaderNavigationWrapper>
      </HeaderInner>
      {/* Global search modal */}
      <SearchModal />
    </PageHeader>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const TitleGroup = styled.div`
  @media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: -1rem 0 0 -2.4rem;
  }
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  text-align: center;
  width: 100%;

  @media (min-width: 1000px) {
    width: auto;
    margin-right: 4rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
  }
`;

const PageHeader = styled.header`
  z-index: 1;
  background: ${(props) => props.bg};
  position: relative;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 0;
  max-width: 168rem;
  justify-content: center;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: calc(100% - 6rem);
  }
`;

const SiteTitle = styled.h1`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

const SiteTitleImg = styled.img`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;


const SiteDescription = styled.div`
  margin: 0;
  margin-top: 1rem;
  color: #6d6d6d;
  font-size: 1.8rem;
  font-weight: 500;
  display: none;
  letter-spacing: -0.0311em;
  transition: all 0.15s linear;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }

  @media (min-width: 700px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderNavigationWrapper = styled.div`
  display: none;
  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
   
  }
`;






