import "./MenuItem.css"
const MenuItem = (props)=>{
    return (
        <div className="menu-item">
            {props.img && <img src={props.img} alt="img" className="menu-item-logo"/>}
            {props.icon &&<box-icon className="menu-item-icon" color="#fff" name={props.icon} size={props.size?props.size:"sm"}></box-icon> }
            <div className="menu-item-title">{props.title}</div>
        </div>
    )
}

export default MenuItem;