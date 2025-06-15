import axios, { type AxiosResponse } from "axios"
import {type AxiosInstance} from 'axios'
import type { PostType } from "../types/post"
import type { CommentType } from "../types/Comment"



const API_URL : string = import.meta.env.VITE_URL_API as string

const instance : AxiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 5000,
    headers : {'content-type':'application/json'}
})



export async function fetchPosts():Promise<PostType[]>{
    const response : AxiosResponse  = await instance.get(`${API_URL}db`)
    const result : PostType[] = response.data.posts
    return result
}

export async function fetchPost(id:number):Promise<PostType | undefined>{
    const response :AxiosResponse<{ posts: PostType[] }>  = await instance.get(`${API_URL}db`)
    const result = response.data.posts.find((post)=>post.id===id)
    return result
}

export async function deletePost(id:number):Promise<void>{
    const response : AxiosResponse = await instance.delete(`${API_URL}posts/${id}`)
    console.log(response)
}


export async function fetchComments(postId : number):Promise<CommentType[]>{
    const response : AxiosResponse<{ comments: CommentType[]}>  = await instance.get(`${API_URL}db`)
    const result : CommentType[] = response.data.comments.filter((comment)=>comment.postId === postId)
    return result
}