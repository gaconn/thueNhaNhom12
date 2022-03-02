import MenuItem from './MenuItem'
import "./Menu.css"
import logo from "../../images/png-transparent-logo-contracting-photography-logo-symbol.png"
import {Wrapper, Content, Logo, List, Account} from "./Menu.style"
const Menu = () =>{
    const list ={}
    return (
        <Wrapper>
            <Content>
                <Logo src={logo} alt='logo' />
                <List>
                    <li>Home</li>
                    <li>About</li>
                    <li>Sales</li>
                    <li>Properties</li>
                </List>
                <Account>
                    <a href='/login'>Login</a>
                </Account>
            </Content>
        </Wrapper>
    )
}

export default Menu;