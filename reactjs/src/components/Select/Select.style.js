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
    overflow: scroll;
`;
export const Base= styled.label`
    display: none;
    z-index: 1;
    position: fixed;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    animation: fadeIn 0.3s linear;
    @keyframes fadeIn{
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`;

export const List= styled.ul`
    list-style: none;
    margin-top: 30px;
`;

export const Item= styled.li`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    :hover{
        background: #47e6ba;
        cursor: pointer;
    }
`;
export const SwitchButton= styled.label`
    border: 1px solid #eee;
    min-width: 100px ;
    padding: 10px 30px;
    border-radius: 5px;
    background: #ccc ;
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