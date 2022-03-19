import { useState } from "react"
import Condition from "../condition/Condition"
import Conditions from "../conditions/Conditions"
import Grid from "../Grid/Grid"
import Thumb from "../thumb/Thumb"
import { Wrapper } from "./BodyContent.style"
import {domain} from "../../constant"
import noimage from "../../images/noimage.jpg"
// images
import testHouse from "../../images/house_ikun.jpg"
const data= [{name: "abc", address:"HCM"}, {name: "abc", address:"Hà Nội"}, {name: "abc", address:"Đà Nẵng"}]
const data1= [{name: "abc", address:"HCM", size: "<"}, {name: "abc", address:"Hà Nội"}, {name: "abc", address:"Đà Nẵng"}]
const BodyContent = ({listData}) =>{
    const [price, setPrice]= useState({minPrice:0, maxPrice: 10000000});
    const handleMinPriceChange= (e)=>{
        setPrice((price)=>({...price, minPrice: e.target.value}))
    }
    const handleMaxPriceChange= (e)=>{
        setPrice((price)=>({...price, maxPrice: e.target.value}))
    }
    //size
    const [size, setSize]= useState({minSize: 0, maxSize: 20});
    const handleMinSizeChange = (e)=>{
        setSize((size)=>({...size, minSize: e.target.value}))
    }
    const handleMaxSizeChange = (e)=>{
        setSize((size)=>({...size, maxSize: e.target.value}))
    }
    return <Wrapper>
        <Grid header="Lọc tìm kiếm">
            <Condition options={data} type="address" title="Địa chỉ" />
            <Conditions type="number" title="Giá" from={price.minPrice} to={price.maxPrice} onChangeMinValue={handleMinPriceChange} onChangeMaxValue={handleMaxPriceChange} />
            <Conditions type="number" title="Kích thước (m2)" from={size.minSize} to={size.maxSize} onChangeMinValue={handleMinSizeChange} onChangeMaxValue={handleMaxSizeChange} />
        </Grid>
        <Grid header="Lựa chọn cho bạn">
            {
                listData.map((item, index)=>{
                    return <Thumb key={index} value={item}/>

                })
            }
        </Grid>
    </Wrapper>
}

export default BodyContent