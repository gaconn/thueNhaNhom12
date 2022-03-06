import {Wrapper, Content, Image, Info} from "./Thumb.style"
import {Link} from 'react-router-dom'


const Thumb= ({src, price, address, size, thumbId})=>{
    return <Link to={`${thumbId}`} style={{textDecoration:"none"}}>
        <Wrapper>
            <Content>
                <Image src={src} alt="house"  />
                <Info>
                    {price &&<div className="thumb-price">Giá: {price}</div>}
                    {address&&<div className="thumb-address">Địa chỉ: {address}</div>}
                    {size&&<div className="thumb-size">Rộng: {size}</div>}
                </Info>
            </Content>
        </Wrapper>
    </Link>
}

export default Thumb