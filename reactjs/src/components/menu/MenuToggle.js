const MenuToggle = (props)=>{
    return <div className={props.className} onClick={props.onClick}>
        <box-icon name='menu' color={props.color} size={props.size}></box-icon>
    </div>
}

export default MenuToggle