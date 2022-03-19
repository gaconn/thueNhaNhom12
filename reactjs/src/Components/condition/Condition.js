import {Wrapper, Content} from "./Condition.style"
const Condition = ({options, type,title}) =>{
    return <Wrapper>
        <Content>
            <div className="condition-title">{title}: </div>
            <select required>
                <option value="">Chọn</option>
                {options.map(item=>{
                    return <option key={item[type]} value={item[type]}>{item[type]}</option>
                })}
            </select>
        </Content>
    </Wrapper>
}

export default Condition