import React from "react";
import styled from "styled-components";
import BrandLogo from "./BrandLogo";
import CartAndLogInOutButton from "./CartAndLogInOutButton";
import { AiOutlineClose } from "react-icons/ai";
import { useUserContext } from "../../contexts/user-context";
import { useProductsContext } from "../../contexts/products-context";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
const SlideBar = () => {
  const { isSlideBarOpen, closeSlideBar } = useProductsContext();
  const { currentUser } = useUserContext();
  console.log(isSlideBarOpen);
  return (
    <SlideBarContainer>
      <aside
        className={`${isSlideBarOpen ? "slideBar slideBar-open" : "slideBar"}`}
      >
        <div className="nav-container">
          <div className="nav-center">
            <div className="nav-header">
              <BrandLogo />
              <div className="toggle-btn" onClick={closeSlideBar}>
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path} onClick={closeSlideBar}>
                {link.text}
              </Link>
            </li>
          ))}
          {currentUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <div className="cartAndLogInOutButtonContainer">
          <CartAndLogInOutButton className="cartAndLogInOutButton" />
        </div>
      </aside>
    </SlideBarContainer>
  );
};

const SlideBarContainer = styled.div`
  .nav-container{  
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
      .nav-header {
      display: flex;
      justify-content: space-between;
      }
      .toggle-btn {
        cursor: pointer;
        font-size: 2rem;
        }
        &:hover ,  &:focus{
          color: red;
        }
        
      }
    }
  }
  .slideBar {
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    transform: translate(-100%); 
    background: var(--clr-white); 
    transition: var(--transition);
    z-index: -1;
  }
  .slideBar-open {
    transform: translate(0);
    z-index: 999;
  }
  .nav-links {
      display: flex;
      flex-direction: column; 
      justify-content: center;
      cursor: pointer;
      li {
        margin: 0rem ;
        padding: 1rem;
        color: var(--clr-font);
        &:hover {
         background: var(--clr-grey-10)
        }
      } 
      a {
        display: inline-block;
        color: var(--clr-grey-3);
        font-size: 1.2rem;
        width: 100%;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
         transform: translateX(2vh);
         transform-origin:bottom left;
         transition: var(--transition);
        }
      }
    }
    .cartAndLogInOutButtonContainer{
      width:100%;
      display: flex;
      justify-content: center;  
    }
    .cartAndLogInOutButton{
      padding: 1.5rem;
      font-size: 1.5rem;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  @media screen and (min-width: 992px) {
    .slideBar {
      display: none;
    }
  }
`;

export default SlideBar;
