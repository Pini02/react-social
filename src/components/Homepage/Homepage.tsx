import axios, { type AxiosResponse } from "axios"
import {type AxiosInstance} from 'axios'
import { useState,useEffect } from "react"
import { Posts } from "../Posts/Posts"
import {type PostType } from "../../types/post"

const API_URL : string = import.meta.env.VITE_URL_API as string

const instance : AxiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 5000,
    headers : {'content-type':'application/json'}
})


export function HomePage(){
    const [posts,setPosts] = useState<PostType[]>([])

    async function fetch():Promise<void>{
        const response : AxiosResponse  = await axios(`${API_URL}db`)
        const result : PostType[] = response.data.posts
        setPosts(result)
    }

    useEffect(()=>{fetch()},[])

    return( <div>
                <Posts posts={posts} />
            </div>)
}