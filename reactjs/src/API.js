import { domain } from "./constant";
import axios from "axios"

class API{
    getAllChuNha(){
        const url= domain+ "/chuNha/getAll";
        return axios.get(url);
    }
    getAllNhaThue(){
        const url= domain+"/nhaThue/getAll";
        return axios.get(url)
    }
    addNhaThue(req){
        const url= domain+"/nhaThue/addOne"
        return axios.post(url, req);
    }
}

export default new API()