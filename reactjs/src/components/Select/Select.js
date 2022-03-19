import {Wrapper, Base, Content, List, Item, SwitchButton, SwitchCheckbox, CloseButton} from "./Select.style"

const Select = ({switchId, listItem, handleChoose, value, title})=>{
    return (
        <Wrapper>
            <SwitchButton for={switchId}>{value ? value: title}</SwitchButton>
            <SwitchCheckbox type='checkbox' id={switchId} />
            <Base for={switchId} className="select-base">
                <Content className="select-content">
                    <CloseButton for={switchId}>Đóng</CloseButton>
                    <List>
                        <Item key={0} onClick={()=>handleChoose(null)}>Tùy chọn</Item>
                        {
                            listItem.map((item,index)=>{
                                return <Item key={index+1} onClick={()=>handleChoose(item)}>{item}</Item>
                            })
                        }
                    </List>
                </Content>
            </Base>
        </Wrapper>
    )
}

export default Select 