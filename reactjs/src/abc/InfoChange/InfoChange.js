import {Wrapper, Base, Content, SwitchButton, SwitchCheckbox} from "./InfoChange.style"
import FormThongTinNhaOChange from "../FormThongTinNhaOChange/FormThongTinNhaOChange"
import { useState } from "react"
const InfoChange = ({switchId, title, data})=>{
    
    return (
        <Wrapper>
            <SwitchButton for={switchId}>{title}</SwitchButton>
            <SwitchCheckbox type='checkbox' id={switchId} />
            <Base for={switchId} className="select-base">
                <Content className="select-content">
                    <FormThongTinNhaOChange  info={data}/>
                </Content>
            </Base>
        </Wrapper>
    )
}

export default InfoChange 