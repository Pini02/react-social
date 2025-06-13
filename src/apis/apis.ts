import axios  from "axios";

const instance = axios.create({
    baseURL : import.meta.env.VITE_URL_API,
    timeout : 5000,
    headers : {'content-type':'application/json'}
})

export function api(){

    async function create(){}
//db
    async function fetch(){
        

    }

    async function delete(){

    }
}
