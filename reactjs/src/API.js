import { domain } from "./constaint";
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
}

export default new API()