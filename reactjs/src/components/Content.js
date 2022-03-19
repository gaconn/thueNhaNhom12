import React,{Component, useEffect, useState} from 'react'
import ContentMid from './Content_mid';
import API from "../API"
import { domain } from '../constant';
import Loading from './Loading/Loading';
function Content(){
    const [product, setProduct] = useState([]);
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(false)
    const [searchTerm, setSearchTerm] = useState(0);
    useEffect(()=>{
        try {
            setLoading(true)
            setError(false)
            API.getAllNhaThue(searchTerm).then((res)=>{
                if(res.data.success){
                    if(searchTerm>0){
                        setProduct((p)=>([...p, ...res.data.result]))
                    }else{
                        setProduct(res.data.result)
                    }
                }
            })
            
        } catch (error) {
            setError(true)
        }finally{
            setLoading(false)
        }
    },[searchTerm])
    console.log(product);
    const handleLoading = () =>{
        setSearchTerm(searchTerm+1);
    }
    return(
        <div className="content">
        <div className="container">
            <div className="content-top">
                <div className="col-md-6 col-md">
                    <div className="col-1">
                     <a href="/" className="b-link-stroke b-animate-go  thickbox">
       <img src="https://maunhadephp.com/wp-content/uploads/2020/12/mau-nha-1-tang-dep-gia-re.jpg" className="img-responsive2" alt=""/><div className="b-wrapper1 long-img"><p className="b-animate b-from-right    b-delay03 ">AAAA</p><label className="b-animate b-from-right    b-delay03 "></label><h3 className="b-animate b-from-left    b-delay03 ">Thịnh hành</h3></div></a>

                    </div>
                    <div className="col-2">
                        <span>Ưu đãi lớn</span>
                        <h2><a href="/">Sang trọng &amp; Hợp thời trang</a></h2>
                        <p>Trái với suy nghĩ của nhiều người, Fashion Sport không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, đã tồn tại hơn 2000 năm</p>
                        <a href="/" className="buy-now">Mua ngay</a>
                        
                       
      
      
                    </div>
                    <div className="col-3">
                    <img src="https://imgs.vietnamnet.vn/Images/2017/01/10/15/20170110153106-nha-cap-4-1.jpg" className="img-responsive2" alt=""/>
      
                    </div>
                </div>
                <div className="col-md-6 col-md1">
                    <div className="col-3">
                        <a href="/"><img src="https://noithattrevietnam.com/uploaded/Kien-thuc-nha-dep/hinh-anh-nha-2-tang-mai-thai/19-images-about-houses-casas-on-pinterest-house-design-luxury-beautiful-home-design-1024x619.jpg" className="img-responsive2" alt=""/>
                        <div className="col-pic">
                            <p>AAAA</p>
                            <label></label>
                            <h5>Biệt thự</h5>
                        </div></a>
                    </div>
                    <div className="col-3">
                        <a href="/"><img src="https://i.pinimg.com/originals/70/5c/24/705c248800445e4d2c6e9aec772cb7c6.jpg" className="img-responsive2" alt=""/>
                        <div className="col-pic">
                            <p>AAAA</p>
                            <label></label>
                            <h5>Biệt Thự</h5>
                        </div></a>
                    </div>
                    <div className="col-3">
                        <a href="/"><img src="http://duythinh.net/wp-content/uploads/2021/04/06c2b8abc5e82cb675f9.jpeg" className="img-responsive2" alt=""/>
                        <div className="col-pic">
                            <p>AAAA</p>
                            <label></label>
                            <h5>Biệt thự</h5>
                        </div></a>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
          
        </div>
        <div className="content-mid">
        <h3>Trending Items</h3>
        <label className="line"></label>
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
                loading ? 
                <Loading />:
                <button className='btn-loading-more' onClick={handleLoading}>Xem thêm</button>
            }
    </div>
    </div>
      );
}
export default Content;