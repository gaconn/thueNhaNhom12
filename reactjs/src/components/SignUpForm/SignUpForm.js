import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./SignUpForm.css"
const SignUpForm= ({handleSwitch, handleSignUp, handleSignUpInput, info})=>{
    return (
        <div className="form-wrapper">

            <Form className="form" onSubmit={handleSignUp}>
                <Form.Group className="mb-3" >
                    <Form.Label>Tên tài khoản</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleSignUpInput} value={info.username} required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleSignUpInput} value={info.password} required/>                    
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Re- Password</Form.Label>
                    <Form.Control type="password" placeholder="re-Password" name="repassword" onChange={handleSignUpInput} value={info.repassword} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Họ tên</Form.Label>
                    <Form.Control type="text" placeholder="Nguyễn Văn A" name="fullname" onChange={handleSignUpInput} value={info.fullname} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="phone" placeholder="0987654321" name="phonenumber" onChange={handleSignUpInput} value={info.phonenumber} required/>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit" className="login-btn">
                        Đăng ký
                    </Button>
                    <div className="auth-other" onClick={handleSwitch}>Đã có tài khoản</div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignUpForm