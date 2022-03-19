import {Link} from 'react-router-dom'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { domain } from "../../constant"
import {formatCurrency} from "../../utils/formatUtils" 
import "./Thumb.css"
const Thumb= ({value})=>{
    return <Link to={`nhathue/${value.mant}`} style={{textDecoration:"none"}}>
        <Card style={{ width: '18rem' }} className="listCard">
            <Card.Img variant="top" className='imageCard' src={domain+"/"+value.images.images[0]} />
            <Card.Body>
                <Card.Title>{value.tieude}</Card.Title>
                <ListGroup variant="flush" className='listGroup'>
                    <ListGroup.Item>{value.diachi}</ListGroup.Item>
                    <ListGroup.Item>Diện tích: {value.dientich} m2</ListGroup.Item>
                    <ListGroup.Item>{formatCurrency(value.giathue)}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    </Link>
}

export default Thumb