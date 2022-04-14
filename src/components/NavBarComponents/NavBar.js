import React from "react";
import styled from "styled-components";
import BrandLogo from "./BrandLogo";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { links } from "../../utils/constants";
import { useProductsContext } from "../../contexts/products-context";
import { useUserContext } from "../../contexts/user-context";
import CartAndLogInOutButton from "./CartAndLogInOutButton";
const NavBar = () => {
  const { openSlideBar } = useProductsContext();
  const { currentUser } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <BrandLogo />
          <div className="toggle-btn" onClick={openSlideBar}>
            <AiOutlineMenu />
          </div>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
          {currentUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartAndLogInOutButton className="CartAndLogInOutButtonWrapper" />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header{
    display: flex;
    justify-content: space-between;
    .toggle-btn{
      cursor: pointer;
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .CartAndLogInOutButtonWrapper{
    display:none
  }
  
  @media (min-width: 992px) {
    .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
    .toggle-btn{
     display: none;    
    }
    .nav-links {
      display: flex;
      justify-content: center;
      cursor: pointer;
      li {
        margin: 0px 0.5rem;
        color: var(--clr-font);
      } 
      a {
        color: var(--clr-grey-3);
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-5);
        }
      }
    }
    .CartAndLogInOutButtonWrapper{
      display: grid;
    }
`;

export default NavBar;
