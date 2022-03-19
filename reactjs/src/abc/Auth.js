import { useState } from "react"
import LoginForm from "./LoginForm/LoginForm"
import SignUpForm from "./SignUpForm/SignUpForm";
import API from "../API"
import Alert from "./Alert/Alert";
const Auth = ({type})=>{
    const [isLogin, setIsLogin]= useState(type==="login");
    const [info, setInfo] = useState({username: "", password:"", repassword: "", fullname: "", phonenumber: ""})
    const [login, setLogin]= useState({username:"", password: ""})
    const [alert,setAlert]= useState({show: false, success: true, message:""})
    var form;

    const handleSwitch = (e)=>{
        e.preventDefault();
        setIsLogin(!isLogin)
    }
    const handleSignUpSubmit= (e)=>{
        e.preventDefault();
        if(info.username!=="" && info.password === info.repassword){
            API.signUp(info).then(res=>{
                if(res.data.success){
                    setAlert({show: true, success: res.data.success, message:"Tạo tài khoản thành công"})
                }else{
                    setAlert({show: true, success: res.data.success, message:res.data.message})
                }
            });
        }
        
    }
    const handleSignUpInput= (e)=>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    //login
    const handleLoginSubmit= (e)=>{
        e.preventDefault();
        API.login(login).then(res=>{
            if(!res.data.success){
                setAlert({show: true, success: res.data.success, message:res.data.message})
            }else{
                sessionStorage.setItem("username", res.data.result[0].username)
                sessionStorage.setItem("iduser", res.data.result[0].macn)
                window.location.href="/";
            }
        })
    }
    const handleLoginInput= (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }
    
    if(isLogin){
        form=<LoginForm handleSwitch={handleSwitch} handleLoginSubmit={handleLoginSubmit} handleLoginInput={handleLoginInput} info={login}/>
    }else{
        form=<SignUpForm handleSwitch={handleSwitch} handleSignUp={handleSignUpSubmit} handleSignUpInput={handleSignUpInput} info={info}/>
    }
    return (
        <>
            <div className="space-split"></div>
            {
                alert.show && <Alert type={alert.success?"success": "fail"} message={alert.message} />
            }
            {form}
        </>
    )
}

export default Auth