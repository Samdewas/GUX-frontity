import { connect, fetch, styled } from "frontity";
import Link from "../link";
import { useEffect, useState } from "react";
import Skelton from "../Skelton.js";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Navigation = ({ state, actions }) => {
  useEffect(() => {
    fetch(`${state.source.url}/wp-json/wp-api-menus/v2/menus/13`)
      .then(response => response.text())
      .then(result => {
        var newdata = JSON.parse(result);
        state.theme.menu = newdata;
        // newdata?.items?.map((val) => {
        // actions.source.fetch(val);
        // });
      })
      .catch(error => console.log('error', error));
  }, [])
  return (
    <NavWrapper>



      <MenuNav>
        <ul>
        {state.theme.menu?.items ? 
        state.theme.menu?.items.map(val => 

        <li className="dropdown">
          <Link link={val.url}>{val.title} </Link>

          <ul className={val.children?.length ? "dropdown-menu multi-level" :""}>
            {val.children?.map(subval => 

            <li className={subval.children?.length ? "dropdown-submenu" : ""}>
              <Link link={subval.url}>{subval.title}</Link>

              <ul className="dropdown-menu">
                {subval.children?.map(value => 
                <li> <Link link={value.url}>{value.title}</Link> </li>
                )}

              </ul>
            </li>
            )}
          </ul>

        </li>
        )
        
        :
        <>
        <li className="dropdown">
        <Skelton height={30} width={100} radius={10}/>
        </li>
        <li className="dropdown">
        <Skelton height={30} width={100} radius={10}/>
        </li>
        <li className="dropdown">
        <Skelton height={30} width={100} radius={10}/>
        </li>
        <li className="dropdown">
        <Skelton height={30} width={100} radius={10}/>
        </li>
        <li className="dropdown">
        <Skelton height={30} width={100} radius={10}/>
        </li>
        <li className="dropdown">
        <Skelton height={30} width={100} radius={10}/>
        </li>
        <li className="dropdown">
        <Skelton height={30} width={100} radius={10}/>
        </li>
        </>
        }
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




