import axios from "axios"
import {type AxiosInstance} from 'axios'
import { useState,useEffect } from "react"

const API_URL : string = import.meta.env.VITE_URL_API as string

const instance : AxiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 5000,
    headers : {'content-type':'application/json'}
})


export function HomePage(){
    const [posts,setPosts] = useState<object[]>([])

    async function fetch():Promise<void>{
        const response = await axios(`${API_URL}db`)
        console.log(response.data.posts)
        setPosts([...response.data.posts])
    }

    useEffect(()=>{fetch()},[])

    return( <div>
        <ul>
            {posts.map((post)=><li key={post.id}>
                <h1>post.id</h1>
                <p>post.title</p>
            </li>)}
        </ul>
        
        </div>)
}