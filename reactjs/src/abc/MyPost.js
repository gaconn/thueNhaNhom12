import { useEffect, useState } from "react"
import API from "../API";
import "./MyPost.css"
import ConfirmBox from "./ConfirmBox/ConfirmBox"
import Alert from "./Alert/Alert";
import InfoChange  from "./InfoChange/InfoChange"
const MyPost = ()=>{
    const [posts, setPosts]= useState();
    const [alert, setAlert]= useState({success: false, message:"", show: false});
    const macn= sessionStorage.getItem("iduser")
    if(!macn){
        window.location.href= "/login"
    }
    useEffect(()=>{
        try {
            API.getNhaThueByChuNha(macn).then((res)=>{
                setPosts(res.data.result)
            })
        } catch (error) {

        }
    },[macn])
    const deleteHandler= (mant)=>{
        API.deleteNhaThue(mant).then(res=>{
            if(res.data.success){
                setAlert({success: true, message: "Xóa thành công", show: true})
                setTimeout(()=>{
                    setAlert({...alert, show: false})
                },4000)
                setPosts((posts)=>{
                    return posts.filter(item=>item.mant !== mant)
                })
            }else{
                setAlert({success: false, message: res.data.message, show: true})
            }
        })
    }
    return <div className="mypost-container">
        { alert.show && <Alert type={alert.success?"success": "fail"} message={alert.message} />}
        <table className="table table-striped" >
            <thead>
                <tr>
                    <th>Mã nhà thuê</th>
                    <th>Tiêu đề</th>
                    <th>Địa chỉ</th>
                    <th>Giá thuê</th>
                    <th>Diện tích</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts && 
                    posts.map((post, index)=>{
                        return <tr key={index}>
                                    <td>{post.mant}</td>
                                    <td>{post.tieude}</td>
                                    <td>{post.diachi}</td>
                                    <td>{post.giathue}</td>
                                    <td>{post.dientich}</td>
                                    <td className="btn-action">
                                        <ConfirmBox switchId={post.mant} handleDelete={()=>deleteHandler(post.mant)} title="Xóa"/>
                                        <InfoChange title="Sửa" switchId={post.mant+"change"} data={post}/>
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </table>

    </div>
}

export default MyPost