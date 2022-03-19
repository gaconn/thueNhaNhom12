import styled from "styled-components";

export const Wrapper = styled.div`
    background: #fff;
    max-width: 1000px;
    display:flex;
    margin: 30px auto;
    border-radius: 5px;
    height: 80vh;
    overflow-y: scroll ;
`;

export const Form= styled.form`
    padding: 10px;
    width: 100%;
    .title{
        font-size: 1.5rem;
        color: #333;
        font-weight: bold;
    }
`;

export const Info= styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    .image-input{
        width: 200px ;
        margin: auto;
        flex-basis: 100%;
    }
    @media only screen and (max-width: 768px){
        display: block;
    }
`;

export const Title= styled.div`
    font-size: 1.2rem;
    color: #444;
    width: 200px;

`;
export const Input= styled.input`
    border: 1px solid #999;
    border-radius: 5px;
    flex-grow: 1;
    margin: 0 40px;
    padding: 0 10px;
    font-size: 1.2rem;
`;

export const TextArea= styled.textarea`
border: 1px solid #999;
    border-radius: 5px;
    flex-grow: 1;
    margin: 0 40px;
`;

export const Submit = styled.input`
    width: 300px;
    font-size: 1.4rem;
    border: none;
    background:#64b22c ;
    color: #fff;
    padding: 7px 10px;
    border-radius: 10px;
    margin: 20px auto;
    cursor:pointer;
    :hover{
        background: #8ac261;
    }

`;
export const Image= styled.img`
    width: 100%;
    height: 100% ;
    object-fit: cover;
`;
export const ImageWrapper= styled.div`
    position: relative;
    width: 160px ;
    margin: 0 5px;
    height: 120px;
    overflow: hidden;
`;
export const ImageDelete= styled.button`
    position: absolute;
    width:100% ;
    height: 100%;
    opacity: 0;
    border: none;
    color: red;
    :hover{
        opacity: 0.7;
    }
`;