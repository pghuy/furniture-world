import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";

const BrandLogo = () => {
  return (
    <BrandLogoWrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <div>
          Furniture<span>World</span>
        </div>
      </Link>
    </BrandLogoWrapper>
  );
};

const BrandLogoWrapper = styled.div`
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      height: 2rem;
      width: 2rem;
      color: var(--clr-primary-5);
      margin-right: 0.2rem;
    }
    div {
      color: var(--clr-font);
      font-size: 1.5rem;
      text-decoration: none;
    }
    span {
      font-weight: bold;
      color: var(--clr-primary-5);
    }
  }
`;

export default BrandLogo;
