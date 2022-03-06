import {Wrapper, Content, Text, Icon} from "./Alert.style"
import successIcon from "../../images/check.png"
import failIcon from "../../images/system.png"
const Alert= ({message, type})=>{
    return (
        <Wrapper type={type}>
            <Content>
                <Icon icon={type==="success"?successIcon:failIcon}  />
                <Text>{message}</Text>
            </Content>
        </Wrapper>
    )
}

export default Alert