import styled from "styled-components";

export const Wrapper= styled.div`

    min-width: 200px;
    height: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.07);
    :hover{
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.15);
        cursor: pointer;
    }
`;
export const Content= styled.div`

`;

export const Image= styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
export const Info= styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin: 10px 0;
    .thumb-price{
        font-size: 0.8rem;
        color: #666;
        padding-top: 10px;
    }
    .thumb-address, .thumb-size{
        font-size: 0.7;
        color: #000;
        padding-top: 10px;
    }
`;