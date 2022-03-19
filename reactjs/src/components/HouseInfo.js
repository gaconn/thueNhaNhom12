import Menu from "./menu/Menu"
import HouseInfoBody from "./HouseInfoBody/HouseInfoBody"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import API from "../API";
import Loading from "./Loading/Loading";
import Alert from "./Alert/Alert";
const HouseInfo = () =>{
  const {id}= useParams();
  const [loading, setLoading]= useState(false);
  const [error, setError]= useState(false)
  const [info, setInfo]= useState();
  useEffect(()=>{
    try {
      setLoading(true);
      setError(false)
      API.getNhaThue(id).then((res)=>{
        setInfo(res.data)
      })
    } catch (error) {
      setError(true)
    }finally{
      setLoading(false)
    }
  },[])
  console.log(info);
    return <div className='container'>
        <Menu />
        {loading && <Loading />}
        {error && <Alert type="fail" message="Có lỗi xảy ra" />}
        {info && <HouseInfoBody images={info.result[0].images?.images? info.result[0].images.images : null} info={info.result[0]}/>}
  </div>
}

export default HouseInfo