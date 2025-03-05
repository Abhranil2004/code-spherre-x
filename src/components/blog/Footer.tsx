import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  margin: 0 !important;
  padding: 3vh calc(5vw + 3vh);
  display: flex;
  padding: 3vh;
  font-size: 1.3vw;
  background: #2e2e2e;
  color: white;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 0vh 1vw;
    font-size: 4vw;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <div>© 2025 Code-Spherre</div>
    </FooterWrapper>
  );
}
