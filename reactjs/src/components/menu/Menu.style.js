import styled from "styled-components";

export const Wrapper= styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    background: #f9f9f9;
`;

export const Content= styled.div`
    width: 1280px;
    max-width: 1280px;
    display: flex;

`;

export const Logo= styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
`;

export const List= styled.ul`
    list-style: none;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    li{
        min-width: 60px;
        text-align: center;
        padding: 0 20px;
        :hover{
            cursor: pointer;
            color: orange;
        }
    }
`;

export const Account= styled.div`
    a{
        display: block;
        text-decoration: none;
        line-height: 60px;
        :hover{
            color: orange;
        }
    }
`;
