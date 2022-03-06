import styled from "styled-components";


export const Wrapper= styled.div`
    padding: 10px;
    width: 100%;
`;

export const Content= styled.div`
    display: flex;
    justify-content: space-around;
    @media only screen and ( max-width: 1100px) {
        flex-direction: column;
    }
`;