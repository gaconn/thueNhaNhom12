import {Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./LoginForm.css"
const LoginForm= ({handleSwitch, handleLoginSubmit, info, handleLoginInput})=>{
    return(
        <div className="form-wrapper">

            <Form className="form" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" name="username" value={info.username} onChange={handleLoginInput} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={info.password} onChange={handleLoginInput} name="password"/>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit" className="login-btn">
                        Đăng nhập
                    </Button>
                    <div  onClick={handleSwitch} className="auth-other">Chưa có tài khoản</div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default LoginForm