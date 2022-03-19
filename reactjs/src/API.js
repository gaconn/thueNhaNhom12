import { domain } from "./constant";
import axios from "axios"

class API{
    getAllChuNha(){
        const url= domain+ "/chuNha/getAll";
        return axios.get(url);
    }
    getAllNhaThue(searchTerm){
        const url= domain+`/nhaThue/getAll/${searchTerm}`;
        return axios.get(url)
    }
    getNhaThue(id){
        const url= domain+"/nhaThue/getById/"+id;
        return axios.get(url)
    }
    getNhaThueByChuNha(macn){
        const url= domain+ "/nhaThue/getNhaThueByChuNha/"+macn
        return axios.get(url)
    }
    addNhaThue(req){
        const url= domain+"/nhaThue/addOne"
        return axios.post(url, req);
    }
    getNhaThueByAddress(address){
        const url= domain+ `/nhaThue/getByAddress/${address}`
        return axios.get(url);
    }
    signUp(info){
        const url= domain+ "/chuNha/signup"
        return axios.post(url, info)
    }
    login(info){
        const url= domain+"/chunha/login"
        return axios.post(url, info)
    }
    deleteNhaThue(mant){
        const url= domain+"/nhaThue/delete/"+mant
        return axios.delete(url)
    }
    getChuNhaById(macn){
        const url= domain+"/chuNha/getById/"+ macn
        return axios.get(url)
    }
    updateNhaThue(data){
        const url= domain+ "/nhaThue/updateNhaThue"
        return axios.post(url, data)
    }
}

export default new API()