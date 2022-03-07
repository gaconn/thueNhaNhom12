import BodyContent from "./bodyContent/BodyContent";
import Menu from "./menu/Menu";
import Loading from "./Loading/Loading"
import API from "../API"
import { useEffect, useState } from "react";
function Home(){
  const [loading, setLoading]= useState(false)
  const [nhaThue, setNhaThue]= useState([]);
  const [size, setSize]= useState({min:0, max:10000000})
  useEffect(()=>{
    try {
      setLoading(true)
      API.getAllChuNha().then((response)=>{
        
      })
      API.getAllNhaThue().then(res=>{
        setNhaThue(res.data.result);
      })
    } catch (error) {
      
    }finally{
      setLoading(false)
    }
  },[])
  if(loading) return <Loading />
    return <div className='container'>
    <Menu />
    {loading===true && <Loading />}
    {nhaThue.length>0 && <BodyContent listData={nhaThue} />}
    
  </div>
}

export default Home