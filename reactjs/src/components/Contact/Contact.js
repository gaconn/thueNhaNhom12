import { Content, Wrapper, Avatar, User, Details, Params, Call, Chat } from "./Contact.style"
import call from "../../images/telephone-call.png"
import chatIcon from "../../images/chat.png"
const Contact = ({name, phone}) =>{
    return <Wrapper>
        <Content>
            <Avatar>
                <box-icon name='user'></box-icon>
            </Avatar>
            <User>
                <div className="contact-username">{name}</div>
                <div className="contact-activity">Hoạt động 19 giờ trước</div>
            </User>
                <Details href="/detail">Chi tiết</Details>
        </Content>
        <Params>
            <div  className="contact-param-item">
                <div className="contact-param-item-title">Đánh giá</div>
                <div className="contact-param-item-value">--</div>
            </div>
            <div  className="contact-param-item">
                <div className="contact-param-item-title">Phản hồi</div>
                <div className="contact-param-item-value">--</div>
            </div>
        </Params>
        <Call>
            <div className="contact-phone-number">0123456789</div>
            <div className="contact-phone-icon">
                <img src={call} alt="phone"></img>
            </div>
        </Call>
        <Chat>
            <div className="contact-chat-title">Chat với người bán</div>
            <div className="contact-chat-icon">
                <img src={chatIcon} alt="chat-icon" />
            </div>
        </Chat>
    </Wrapper>
}

export default Contact