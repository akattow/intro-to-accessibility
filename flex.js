import styled from "@emotion/styled";

export const FlexCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const FlexColumn = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const FlexSplit = styled.div`
    width: 100%;
    @media screen and (min-width: 600px) {
        display: flex;
    }
`