import React,{Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Auth from "../Components/Auth";

import Content from "../Components/Content";
import NhaO from "../Components/NhaO";
import Post from "../Components/Post";
import HouseInfoBody from "../Components/HouseInfoBody/HouseInfoBody";
import MyPost from "../Components/MyPost";
 
class DieuHuong extends Component{ 
    render(){
        return(
            <Router>
                    <Routes>
                        <Route path='/' element={<Content />} />
                        <Route path='/detail/:mant' element={<HouseInfoBody />} />
                        <Route path="/dsnhao" element={<NhaO />} />
                        <Route path="/login" element={<Auth type='login' />} />
                        <Route exact path="/post" element={<Post/>} />
                        <Route path="/mypost" element={<MyPost />} />
                    </Routes>
            </Router>

        );
    }
}
export default DieuHuong;