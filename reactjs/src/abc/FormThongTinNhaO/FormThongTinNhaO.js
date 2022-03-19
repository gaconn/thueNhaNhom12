import {Wrapper, Form, Input, Info, Title, TextArea, Submit} from "./FormThongTinNhaO.style"

const FormThongTinNhaO = ({data, handleChange, handleSubmit}) =>{
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="title">Thông tin nhà ở</div>
                <Info>
                    <Title>Tiêu đề</Title>
                    <Input type="text" name="tieude" placeholder="Tiêu đề" value={data.tieude} onChange={handleChange} required/>
                </Info>
                <Info>
                    <Title>Địa chỉ</Title>
                    <Input type="text" name="diachi" placeholder="Địa chỉ" value={data.diachi} onChange={handleChange} required/>
                </Info>
                <Info>
                    <Title>Giá thuê (vnd)</Title>
                    <Input type="number" name="giathue" placeholder="Giá thuê (vnd)" value={data.giathue} onChange={handleChange}/>
                </Info>
                <Info>
                    <Title>Diện tích</Title>
                    <Input type="number" name="dientich" placeholder="Diện tích (m2)" value={data.dientich} onChange={handleChange}/>
                </Info>
                
                <Info>
                    <Title>mô tả</Title>
                    <TextArea name="mota" rows={4} cols={50} placeholder="Nhập mô tả" value={data.mota} onChange={handleChange}>

                    </TextArea>
                </Info>
                <Info>
                    <Title>Hình ảnh</Title>
                    <Input type="file" name="hinhanh" multiple placeholder="Diện tích (m2)" onChange={handleChange} required/>
                </Info>
                <Info>
                    
                    <Submit type="submit" name="submit" value="Đăng tin" />
                </Info>
            </Form>
        </Wrapper>
    )
}

export default FormThongTinNhaO