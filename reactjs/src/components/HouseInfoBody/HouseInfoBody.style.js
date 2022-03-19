import styled from "styled-components";


export const Wrapper= styled.div`
    
    width: 100%;
`;

export const Content= styled.div`
    display: flex;
    justify-content: space-around;
    @media only screen and ( max-width: 1100px) {
        flex-direction: column;
    }
`;

export const Des= styled.div`
    margin: 20px auto;
    max-width: 1280px;
    border-top: 1px solid #ddd;
    padding: 10px;
    background: #fff ;
    .info{
        padding: 10px 30px;
        display: flex;

        .info-title{
            font-size: 1.2rem;
            font-weight: 500;
            padding-right: 15px;
        }
        .info-value{
            align-self: center;
            font-size: 1rem;
            color: #666;
        }
    }
`;
export const Title= styled.div`
    margin: 20px auto;
    max-width: 1280px;
    font-size: 1.5rem;
    font-weight: 500;
`