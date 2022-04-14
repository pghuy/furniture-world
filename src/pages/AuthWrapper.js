import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <h4>Loading...</h4>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h4>Error...</h4>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
