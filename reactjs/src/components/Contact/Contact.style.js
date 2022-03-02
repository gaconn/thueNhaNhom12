import styled from "styled-components";
import userImage from "../../images/user.png"

export const Wrapper= styled.div`
    width: 300px;
    height: 300px;
    min-width: 300px;
    box-shadow: 3px 2px 3px 3px  #ccc;
    padding: 10px;
`;
export const Content= styled.div`
    text-align: center;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    background: #f3f3f3;
`;
export const Avatar= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(avatarUrl=>(avatarUrl? `url(${avatarUrl})`: userImage))};
    background-color: #ccc;
    background-position: center;
    line-height: 40px;
`;
export const User= styled.div`
    .contact-username{
        font-size: 1rem;
        font-weight: bold;
    }
    .contact-activity{
        font-size: 0.8rem;
        color: #999;
    }
`;
export const Details= styled.a`
    font-size: 0.8rem;
    color: orange;
    padding: 5px 12px;
    width: 50px;
    border: 1px solid orange;
    text-decoration: none;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        border-color: blue;
    }
`;
export const Params= styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    .contact-param-item-title{
        font-size: 1rem;
        color: #000;
        font-weight: bold;
    }
    .contact-param-item-value{
        font-size: 0.8rem;
        color: #666;
    }
    
`;
export const Call= styled.div`
    background: #29b45a;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 20px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    :hover{
        cursor: pointer;
        background: #14833b;
    }
    .contact-phone-icon{
        width: 50px;
        height: 50px;
        img{
            width: 50px;
            height: 50px;
        }
    }
`;
export const Chat= styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .contact-chat-title{
        color: #29b45a;
    }
    .contact-chat-icon{
        img{
            width: 50px;
            height: 50px;
        }
    }
    :hover{
        color: #14833b;
        cursor: pointer;
        border-color: #14833b;
    }
`;
