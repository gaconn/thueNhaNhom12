import { useState } from "react";
import API from "../../API";
import { domain } from "../../constant"
import {Wrapper, Form, Input, Info, Title, TextArea, Submit, Image, ImageWrapper, ImageDelete} from "./FormThongTinNhaOChange.style"

const FormThongTinNhaO = ({info, handleSubmit}) =>{
    const [data, setData]= useState(info);
    const [alert, setAlert]= useState({success: true, message: "", show: false})
    const handleChangeInput= (e)=>{
        if(e.target.name==="hinhanh"){
            setData(data=>({...data, hinhanh: e.target.files}))
        }else{
            setData(data => ({...data, [e.target.name]: e.target.value}))
        }
    }
    const handleSubmitInput= (e)=>{
        e.preventDefault();
        const listKeys= Object.keys(data)
        const dataform= new FormData()
        for(let i=0;i<listKeys.length; i++){
            if(listKeys[i] ==="images"){
                dataform.append(listKeys[i], data.images.images)
                continue
            }
            if(listKeys[i]!=="hinhanh"){
                dataform.append(listKeys[i], data[listKeys[i]])
            }
        }
        if(data.hinhanh){
            for(let i=0;i<data.hinhanh.length;i++){
                dataform.append("files", data.hinhanh[i])
            }
        }
        API.updateNhaThue(dataform).then((res)=>{
            window.location.href= "/mypost"
        })    
    }
    const deleteImageHandler= (index,e)=>{
        e.preventDefault()
        
        setData((data)=>{
            data.images.images.splice(index,1)
            return {...data}
        })
    }
    return (
        <Wrapper>
            <Form onSubmit={handleSubmitInput} encType="multipart/form-data">
                <div className="title">Thông tin nhà ở</div>
                <Info>
                    <Title>Tiêu đề</Title>
                    <Input type="text" name="tieude" placeholder="Tiêu đề" value={data.tieude} onChange={handleChangeInput} required/>
                </Info>
                <Info>
                    <Title>Địa chỉ</Title>
                    <Input type="text" name="diachi" placeholder="Địa chỉ" value={data.diachi} onChange={handleChangeInput} required/>
                </Info>
                <Info>
                    <Title>Giá thuê (vnd)</Title>
                    <Input type="number" name="giathue" placeholder="Giá thuê (vnd)" value={data.giathue} onChange={handleChangeInput}/>
                </Info>
                <Info>
                    <Title>Diện tích</Title>
                    <Input type="number" name="dientich" placeholder="Diện tích (m2)" value={data.dientich} onChange={handleChangeInput}/>
                </Info>
                
                <Info>
                    <Title>mô tả</Title>
                    <TextArea name="mota" rows={4} cols={50} placeholder="Nhập mô tả" value={data.mota} onChange={handleChangeInput}>

                    </TextArea>
                </Info>
                <Info>
                    <Title>Hình ảnh</Title>
                    {
                        data.images && data.images.images&&data.images.images.map((image, index)=>{
                            return (
                                <ImageWrapper key={index}>
                                    <ImageDelete onClick={(e)=> deleteImageHandler(index,e)}>X</ImageDelete>
                                    <Image src={domain+"/"+image} alt="ảnh" />
                                </ImageWrapper>
                            )
                        })
                    }
                    <Input className="image-input" type="file" name="hinhanh" multiple  onChange={handleChangeInput}/>
                </Info>
                <Info>
                    
                    <Submit type="submit" name="submit" value="Đăng tin" />
                </Info>
            </Form>
        </Wrapper>
    )
}

export default FormThongTinNhaO