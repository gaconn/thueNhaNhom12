import ImageSlider from "../ImageSlider/ImageSlider"
import Contact from "../Contact/Contact";
import {Wrapper, Content, Des, Title} from "./HouseInfoBody.style"
import Info from "../Info/Info";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../API";
const HouseInfoBody = ({}) =>{
    const {mant}= useParams();
    const [info, setInfo]= useState()
    const [user, setUser]= useState([]);
    useEffect(()=>{
        API.getNhaThue(mant).then((res)=>{
            if(res.data.success){
                setInfo(res.data.result[0])
            }
        })
    },[mant])
    useEffect(()=>{
        if(info){
            API.getChuNhaById(info.macn).then(res=>{
                if(res.data.success){
                    setUser(res.data.result[0])
                }
            })
        }
    },[info])
    if(!info){
        return <div>Data not found</div>
    }
    return <Wrapper>
        {info.tieude &&<Title>{info.tieude}</Title>}
        <Content>
            
            <ImageSlider images={info.images.images} />
            {
                user && 
                <Contact name={user.username} phone={user? user.sdt: "chưa có sdt"} style={{marginLeft:"20px"}}/>
            }
        </Content>
        <Des>
            <Info title={"Địa chỉ"} value={info.diachi} />
            <Info title={"Diện tích"} value={info.dientich} />
            <Info title={"Giá thuê"} value={info.giathue} />
            <Info title={"Mô tả"} value={info.mota} />
        </Des>
    </Wrapper>
}

export default HouseInfoBody