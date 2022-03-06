import ImageSlider from "../ImageSlider/ImageSlider"
import Contact from "../Contact/Contact";
import noimage from "../../images/noimage.jpg"
import {Wrapper, Content} from "./HouseInfoBody.style"
const HouseInfoBody = ({images}) =>{
    return <Wrapper>
        <Content>
            <ImageSlider images={images ? images : {noimage}} />
            <Contact name={"Đồng Đình Quân"} phone="0327881340" style={{marginLeft:"20px"}}/>
        </Content>
    </Wrapper>
}

export default HouseInfoBody