import { Wrapper, Title, Value } from "./Info.style";


const Info= ({title, value})=>{
    return <Wrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
    </Wrapper>
}

export default Info;