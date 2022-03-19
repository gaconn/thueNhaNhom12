import styled, { keyframes } from "styled-components";

export const Wrapper= styled.div`

    border: 1px solid #ccc;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
    width: 500px;
    height: 400px;
    text-align: center;
    @media only screen and (min-width: 768px){
        width: 700px;
        height: 700px;
    }
    `;
    
    
export const Content= styled.div`
    position: relative;
    overflow: hidden;
    .image-slider-pre,.image-slider-next{
        position: absolute;
        top: 50%;
        text-align:center;
        padding: 10px 20px;
        color:#333;
        background: rgba(0,0,0,0.09);
        transform: translateY(-50%);
        :hover{
            color: #000;
            cursor: pointer;
            background: rgba(0,0,0,0.3);
        }
    }
    .image-slider-pre{
        left: 10px;
    }
    .image-slider-next{
        right: 10px;
    }
    .number-image{
        position: absolute;
        bottom: 10px;
        left: 50%;
        color: orange;
        font-size: 1.5rem;
    }
`;
const slideIn= keyframes`
    from{
        transform: translateX(100%);
    }to{
        transform: translateX(0);
    }
`
export const Image= styled.img`
    margin: auto;
    display: block;
    height: 400px;
    max-width: 100%;
    object-fit: contain;
    padding: 0 50px;
    animation: ${slideIn} 0.3s linear ;

    @media only screen and (min-width: 768px){
        max-width: 600px;
        height: 700px;

    }
`;