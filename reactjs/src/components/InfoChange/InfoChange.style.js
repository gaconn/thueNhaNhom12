import styled from "styled-components";

export const Wrapper= styled.div`
    position: relative;
    
`;

export const Content= styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 500px;
    background: #eee;
    height: 90vh;
    border-radius: 5px;
    padding: 10px;
    .confirm-message{
        font-size: 1.2rem;
        padding: 30px 10px;
        color: #333;
    }
    .confirm-back,.confirm-con{
        width: 100px;
        padding: 10px;
        border-radius: 5px;
        margin: 20px 10px;
        border: 1px solid #999;
        :hover{
            cursor: pointer;
        }
    }
    .confirm-back{
        color: #666;
        :hover{
            color: #000;
        }
    }
    .confirm-con{
        background: #d8253e;
        color: #fff;
        :hover{
            background: #ea1b38;
        }
    }
`;
export const Base= styled.label`
    display: none;
    z-index: 1;
    position: fixed;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    animation: fadeIn 0.3s linear;
    @keyframes fadeIn{
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`;

export const SwitchButton= styled.label`
    border: 1px solid #eee;
    min-width: 100px ;
    padding: 10px 30px;
    border-radius: 5px;
    background: #33c689 ;
    color: #fff;
    :hover{
        background: #1ce08f ;
        cursor: pointer ;
    }
`;
export const SwitchCheckbox= styled.input`
    display: none;
    :checked ~ .select-base{
        display: block;
    }
`;
export const CloseButton= styled.label`
    padding: 10px 20px;
    width: 100px;
    color: #ccc;
    border-radius: 5px;
    background: #f67777;
    align-self: start;
    :hover{
        background:#e64747;
        color: #eee;
    }
`;