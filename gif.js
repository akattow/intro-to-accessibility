import React, { useState } from 'react'
import styled from "@emotion/styled";

export const GifContext = React.createContext({});

export const GifProvider = ({ children }) => {
    const [isGifs, setIsGifs] = useState(true);

    return (
        <GifContext.Provider value={{ gifState: isGifs, toggleState: () => setIsGifs(!isGifs) }}>
            {children}
        </GifContext.Provider>
    )
}

export const Gif = props => {
    const [isAnimated, setIsAnimated] = useState(true);
    const source = isAnimated ? props.gifImg : props.staticImg
    return (
        <>
            <StyledImg src={source} alt={props.alt} />
            <StyledButton onClick={() => setIsAnimated(!isAnimated)}>
                {isAnimated ? 'Turn off animation' : 'Turn on animation'}
            </StyledButton>
        </>
    )
}

const StyledImg = styled.img`
      max-width: 70vw;
      max-height: 40vh;
      margin: 0 auto;
      margin-bottom: 2rem;
`

const StyledButton = styled.button`
    appearance: none;
    width: fit-content;
    display: inline-block;
    text-decoration: none;
    font-size: inherit;
    margin: 0 auto;
    padding: .75rem;
    font-family: 'Montserrat', system-ui,  sans-serif;
    border: 1px solid ${props => props.theme.colors.dark};
    &:hover, &:focus {
        background: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.background};
    }
`