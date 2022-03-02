import ImageSlider from "../ImageSlider/ImageSlider"
import "./HouseInfoBody.css"
import image from '../../images/house_ikun.jpg';
import image1 from "../../images/banner.png"
import Contact from "../Contact/Contact";
const HouseInfoBody = () =>{
    const images= [image, image1, image, image1]
    return <div className="house-info-body-container">
        <div className="house-info-image-container">
            <ImageSlider images={images} />
            <Contact name={"Đồng Đình Quân"} phone="0327881340" style={{marginLeft:"20px"}}/>
        </div>
    </div>
}

export default HouseInfoBody