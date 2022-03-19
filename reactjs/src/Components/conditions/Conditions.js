import { useState } from 'react'
import {Wrapper, Content, Input} from './Conditions.style'


const Conditions= ({title, from, to, onChangeMinValue, onChangeMaxValue, type})=>{
    
    return <Wrapper>
        <Content>
            <div className='conditions-title'>{title}: </div>
            <Input value={from} type={type} min="0"  onChange={onChangeMinValue} /> đến
            <Input value={to} type={type} min="0"  onChange={onChangeMaxValue} />
        </Content>
    </Wrapper>
}

export default Conditions