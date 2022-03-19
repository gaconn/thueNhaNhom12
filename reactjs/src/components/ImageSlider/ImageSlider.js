import { Wrapper, Content, Image } from "./ImageSlider.style"
import noimage from "../../images/noimage.jpg"
import 'boxicons'
import { useState } from "react";
import { domain } from "../../constant";
const ImageSlider = ({images}) =>{
    var numberImage=0;
    if(images !==null){
        numberImage= images.length ;

    }
    const [index, setIndex]= useState(0);

    const handlePreIndex = (e) =>{
        if(index ===0){
            setIndex(images.length-1)
        }else{
            setIndex(index-1)
        }
    }

    const handleNextIndex = ()=>{
        if(index===images.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    return <Wrapper>
        <Content>

            <span className="image-slider-pre" onClick={handlePreIndex}>
                <box-icon type='solid' name='left-arrow'></box-icon>
            </span>
            <span className="image-slider-next" onClick={handleNextIndex}> 
                <box-icon type='solid' name='right-arrow'></box-icon>
            </span>
            <span className="number-image">{index+1}/{numberImage}</span>
            { 
                numberImage>0 ? <Image src={domain+"/"+images[index]} alt="house image"/>
                : <Image src={noimage} alt="house image"/>
            }
        </Content>
    </Wrapper>
}

export default ImageSlider