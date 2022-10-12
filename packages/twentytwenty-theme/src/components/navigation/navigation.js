import { connect, styled } from "frontity";
import Link from "../link";
import Arrow from "../../assets/img/down-arrow.png"
import { useEffect, useState } from "react";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Navigation = ({ state, actions }) => {
  useEffect(() => {
    fetch(`https://graphicux.com/wp-json/wp-api-menus/v2/menus/13`)
      .then(response => response.text())
      .then(result => {
        var newdata = JSON.parse(result);
        state.theme.menu = newdata;
        newdata?.items?.map((val) => {
        actions.source.fetch(val);
        });
      })
      .catch(error => console.log('error', error));
  }, [])
  return (
    <NavWrapper>



      <MenuNav>
        {/* <Menu>
          {state.theme.menu?.items && state.theme.menu?.items.map(val => {
            // Check if the link matched the current page url
            return (
              <MenuItem key={val.id}>

                <MenuLink
                  link={val.url}
                >
                  {val.title}
                </MenuLink>
              </MenuItem>
            );
          })}
        </Menu> */}


        <ul>
        <li>
          <Link to="">
            Home
          </Link>
        </li>

        <li>
          <Link to=""> Fonts  </Link>
        </li>

        <li>
          <Link to=""> Add-Ons  </Link>
        </li>

        <li>
          <Link to=""> Templates  </Link>
        </li>

        <li className="dropdown">
          <Link to=""> Graphics  </Link>

          <ul className="dropdown-menu multi-level">
            <li><Link to="#">Category 1</Link></li>
          

            <li className="dropdown-submenu ">

              <Link to="#">Category 3</Link>

              <ul className="dropdown-menu">
                <li> <Link to="#">Sub menu 1</Link> </li>
                <li> <Link to="#">Sub menu 2</Link> </li>

                <li> <Link to="#">Sub menu 3</Link> </li>

              </ul>

            </li>

            <li><Link to="#">Category 2</Link></li>

          </ul>

        </li>
        <li>
          <Link to=""> Themes  </Link>
        </li>
        <li>
          <Link to=""> Stock Image  </Link>
        </li>


      </ul>
      </MenuNav>
    </NavWrapper>
  );
}

export default connect(Navigation);

const NavWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }

  ul {
    list-style:none;
    display: flex;
  }

  li:hover{

  }

`;

const UXHeader = styled.uxheader`



`;

const Menu = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;

  @media (min-width: 1220px) {
    margin-top: -0.8rem;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;
  }
`;

const MenuItem = styled.li`
  font-size: inherit;
  line-height: 1.25;
  position: relative;
  margin: 0.8rem 0 0 1.6rem !important;

  @media (min-width: 1220px) {
    margin: 0.8rem 0 0 2.5rem !important;
  }
  :last-child{display:none;}
`;

const MenuLink = styled(Link)`
  display: block;
  line-height: 1.2;
  text-decoration: none;

  &:hover,
  &[aria-current="page"] {
    text-decoration: underline;
  }
`;


const SubMenu = styled.submenu`
  display:none
`;

const SubMenuChild = styled.submenuchild`
  
`;




