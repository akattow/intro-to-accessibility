import React from "react";
import { useDeck, Head } from "mdx-deck";
import styled from "@emotion/styled";

const Layout = props => {
  const deck = useDeck();
  const currentSlide = deck.index + 1;

  return (
    <>
      <Head>
        <title>Intro to Accessibility</title>
      </Head>
      <Wrapper>
        <Header>
          {currentSlide} / {deck.length}
        </Header>
        <Main>{props.children}</Main>
        <Footer>
          Intro to Accessibility{" "}
          <span role="img" aria-label="wheelchair emoji">
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
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > * {
    padding: 1em 2em;
    box-sizing: border-box;
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: ${props => props.theme.fonts.body};
  font-size: 50%;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.fonts.body};
  font-size: 60%;
`;

export default Layout