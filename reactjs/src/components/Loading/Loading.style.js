import styled from "styled-components";

export const Wrapper= styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    margin: 30px 0;
`;

export const Spinner= styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid #66b12e;
    border-bottom:5px solid #b4dc97;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    @keyframes spin{
         0%{
            transform: rotate(0deg);
        }100%{
            transform: rotate(360deg);
        }
    }
`;