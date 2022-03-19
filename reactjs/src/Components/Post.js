import { useState } from "react"
import FormThongTinNhaO from "./FormThongTinNhaO/FormThongTinNhaO"
import Alert from "./Alert/Alert"
import API from "../API"

const Post = ()=>{
    if(!sessionStorage.getItem("username")&&!sessionStorage.getItem("iduser"))
    {
        window.location.href= "/login"
    }
    const postDefault= {macn: sessionStorage.getItem("iduser"),tieude: "", diachi:"", giathue:0, dientich: 0, mota: "", hinhanh: null};
    const [post, setPost]= useState(postDefault)
    const [success, setSuccess]= useState({show: false, state: null, message: ""});
    const handleChangeInput= (e)=>{
        if(e.target.name==="hinhanh"){
            setPost(post=>({...post, hinhanh: e.target.files}))
        }else{
            setPost(post => ({...post, [e.target.name]: e.target.value}))
        }
    }
    const handleSubmitInput= (e)=>{
        e.preventDefault();
        const listKeys= Object.keys(post)
        const data= new FormData()
        for(let i=0;i<listKeys.length; i++){
            if(listKeys[i]!=="hinhanh"){
                data.append(listKeys[i], post[listKeys[i]])
            }
        }
        for(let i=0;i<post.hinhanh.length;i++){
            data.append("files", post.hinhanh[i])
        }
        API.addNhaThue(data).then((res)=>{
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
            setPost(postDefault)
        })    
    }
    return <div className="container">
        {   success.show &&
            <Alert message={success.message} type={success.state ? "success": "fail"} />
        }
        <FormThongTinNhaO data={post} handleChange={handleChangeInput} handleSubmit={handleSubmitInput} />
    </div>
}

export default Post