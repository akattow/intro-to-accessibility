import React from "react";
import { useDeck, Head } from "mdx-deck";
import styled from "@emotion/styled";

export default props => {
  const state = useDeck();
  const currentSlide = state.index + 1;

  return (
    <>
      <Head>
        <title>Intro to Accessibility</title>
      </Head>
      <Wrapper>
        <Header>
          {currentSlide} / {state.length}
        </Header>
        <Main>{props.children}</Main>
        <Footer>
          Intro to Accessibility{" "}
          <span role="img" title="wheelchair emoji">
            ♿️
          </span>{" "}
          by <a href="https://www.twitter.com/akattow">@akattow</a>
        </Footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > * {
    padding: 1rem;
    box-sizing: border-box;
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fonts.body};
`;

const Main = styled.main`
flex-grow: 1;
  > div {
    width: 100%;
    height: 100%;
  }
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.fonts.body};
`;
