import "./Menu.css"
import {Navbar, Container, Nav } from "react-bootstrap"
const Menu = () =>{
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Container>
            <Navbar.Brand href="#home">Nhóm 12</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/post">Đăng bài</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav className="">
                <Nav.Link href="/login">Đăng nhập</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu;