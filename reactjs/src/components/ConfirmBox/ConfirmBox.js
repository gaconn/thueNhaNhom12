import {Wrapper, Base, Content, SwitchButton, SwitchCheckbox} from "./ConfirmBox.style"

const ConfirmBox = ({switchId, handleDelete, title})=>{
    return (
        <Wrapper>
            <SwitchButton for={switchId}>{title}</SwitchButton>
            <SwitchCheckbox type='checkbox' id={switchId} />
            <Base for={switchId} className="select-base">
                <Content className="select-content">
                    <div className="confirm-message">Bạn có chắc chắn muốn xóa?</div>
                    <label for={switchId} className="confirm-back">Quay lại</label>
                    <label for={switchId} className="confirm-con" onClick={handleDelete}>Chắc chắn</label>
                </Content>
            </Base>
        </Wrapper>
    )
}

export default ConfirmBox 