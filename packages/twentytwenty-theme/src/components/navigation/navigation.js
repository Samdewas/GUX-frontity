import { connect, styled } from "frontity";
import Link from "../link";
import {useEffect, useState} from "react";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = ({ state }) => {
  const [menudata, setMenudata] = useState([]);
  useEffect(()=>{
    fetch(`https://graphicux.com/wp-json/wp-api-menus/v2/menus/13`)
    .then(response => response.text())
    .then(result => setMenudata(JSON.parse(result)))
    .catch(error => console.log('error', error));
  },[])
  console.log(typeof(menudata))
  return (


    

    <NavWrapper>



 <MenuNav>
        <Menu>
          {menudata.items && menudata.items.map(val => {
          
            console.log(val);
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
        </Menu>
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
