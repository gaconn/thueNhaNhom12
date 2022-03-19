import styled from "styled-components";


export const Wrapper= styled.div`
    
    width: 100%;
    background: ${({type})=>(type==="success"?"#28f19c": "#fd7300")} ;
`;
export const Content= styled.div`
    display: flex;
    padding: 10px 30px;
    max-width: 1280px;
    margin: 0 auto;
`;
export const Text= styled.div`
    color: #fff ;
    font-size: 1.2rem;
    flex-grow: 1;
`;
export const Icon= styled.div`
    background: url(${({icon}) => icon});
    width: 100px;
    line-height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
`;