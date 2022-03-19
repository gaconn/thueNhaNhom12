import { useEffect, useState } from "react";
import API from "../API";
import { domain } from "../constant";
import ContentMid from "./Content_mid";
import "./NhaO.css"
import Select from "./Select/Select";
import Loading from "./Loading/Loading"
import Alert from "./Alert/Alert";
function NhaO(){
    const [product, setProduct] = useState([]);
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(false)
    const [searchTerm, setSearchTerm] = useState(0);
    const [show, setShow]= useState(false);
    const [district, setDistrict]= useState(null);
    const [message, setMessage]= useState()
    const [price, setPrice]= useState("")
    const [data, setData]= useState();
    const [alert, setAlert]= useState({success: true, message: "", show: false});
    //lấy 10
    useEffect(()=>{
        try {
            setLoading(true)
            setError(false)
            API.getAllNhaThue(searchTerm).then((res)=>{
                if(res.data.success){
                    if(searchTerm>0){
                        setProduct((p)=>([...p, ...res.data.result]))
                        setData((d)=>([...d, ...res.data.result]))
                    }else{
                        setProduct(res.data.result)
                        setData(res.data.result)
                    }
                }else{
                    setAlert({success: false, message: res.data.message, show: true})
                }
            })
            
        } catch (error) {
            setError(true)
        }finally{
            setLoading(false)
        }
    },[searchTerm])
    //lấy theo địa chỉ 
    useEffect(()=>{
        try {
            setLoading(true)
            setError(false)
            if(district !=null){
                API.getNhaThueByAddress(district).then((res)=>{
                    if(res.data.success===true){
                        setProduct(res.data.result)
                        setMessage({success: true, message: ""})
                        setData(res.data.result)
                    }else if(district){
                        setMessage({success: false, message: "Không có dữ liệu"})
                        setProduct([])
                    }
                })
            }else{
                API.getAllNhaThue(0).then((res)=>{
                    if(res.data.success){
                        setProduct(res.data.result)
                        setData(res.data.result)
                    }
                })
            }
        } catch (error) {
            setError(true)
        }finally{
            setLoading(false)
        }
    },[district])
    //lấy theo giá
    const priceFilter= ({minPrice, maxPrice})=>{
        var newList=data.filter((item)=>item.giathue>=minPrice && item.giathue<=maxPrice)
        setProduct(newList)
    }
    const handleLoading = () =>{
        setSearchTerm(searchTerm+1);
    }
    const handleShow= ()=>{
        setShow(!show)
    }
    const handleClose= ()=>{
        setShow(false)
    }
    const ds= ['Quận 1', 'Quận 3', 'Quận 4','Quận 5', 'Quận 6', 'Quận 7','Quận 8', 'Quận 10', 'Quận 11', 'Quận Bình Tân', 'Quận Bình Thạnh',
        'Quận Gò Vấp', 'Quận Phú Nhuận', 'Quận Tân Bình', 'Quận Tân Phú', 'Huyện Bình Chánh', 'Huyện Cần Giờ', 'Huyện Củ Chi', 'Huyện Hóc Môn', 'Huyện Nhà Bè'    
    ];
    const pr=["dưới 1 triệu", "1 triệu - 2 triệu", "2 triệu - 3 triệu", '3 triệu - 5 triệu', 'trên 5 triệu'];
    // handle choose
    const chooseHandler= (item)=>{
        setDistrict(item)
    }
    const choosePriceHandler= (p)=>{
        setPrice(p)
        switch (p) {
            case pr[0]:
                priceFilter({minPrice:0,maxPrice: 1000000})
                break;
            case pr[1]:
                priceFilter({minPrice:1000000,maxPrice: 2000000})
                break;
            case pr[2]:
                priceFilter({minPrice:2000000,maxPrice: 3000000})
                break;
            case pr[3]:
                priceFilter({minPrice:3000000,maxPrice: 5000000})
                break;
            case pr[4]:
                priceFilter({minPrice:5000000,maxPrice: 100000000})
            break;
            default:
                break;
        }
    }
    return (
        <div className="nha-container">
            <div className="nha-filter-title">Lọc</div>
            <div className="nha-filter">
                <Select switchId={"district"} listItem={ds} handleChoose={chooseHandler} value={district} title="Quận/huyện"/>
                <Select switchId={"price"} listItem={pr} handleChoose={choosePriceHandler} value={price} title="Giá"/>
            </div>
            {message && !message.success && <Alert type={message.success ?"success":"fail" } message="Không tìm thấy" />}
            <div className="mid-popular">
            {
                product&&product.map((item,index)=>{
                    return <ContentMid
                              key={item.mant}
                              name={item.tieude}
                              priceNew={item.giathue}
                              priceOld={0}
                              image={domain+"/" +item.images.images[0]}
                              type={item.type}
                              mant= {item.mant}
                    ></ContentMid>})
            }
        
            <div className="clearfix"></div>
        </div>
        {
            alert.success?<button className="btn-loading-more" onClick={handleLoading}>Xem thêm</button>:""}
        
        { loading && <Loading />}
        </div>
    )
}
export default NhaO