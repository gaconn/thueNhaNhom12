import Styled from "styled-components"

export const Wrapper= Styled.div`

    width: 100%;
    margin: 0 auto;
    h1{
        font-size: 1rem;
        color: #333;
    }
`;

export const Content= Styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
`;