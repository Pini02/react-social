import {type PostType } from "../../src/types/Post"
import { deletePost, fetchPosts,fetchPost } from "../apis/apis"
import { create } from "zustand"

export interface PostsState {
  posts : PostType[]
  setPosts: () => Promise<void>
  deletePost: (id:number)=> Promise <void>
}

export interface PostState {
    post : PostType 
    setPost : (id:number) => Promise <void>
}

export const usePosts = create<PostsState>((set)=>({
        posts:[],
        setPosts :async ()=> {
            const posts = await fetchPosts()
            set({posts})
        },
        deletePost: async(id:number) =>{
            await deletePost(id)
            const posts = await fetchPosts()
            set({posts}) 
        }
    }))

export const usePost = create <PostState>((set)=>({
    post : {
        id: 0,
        title: '',
    },
    setPost: async (id:number) =>{
        const post = await fetchPost(id)
        set({post})
    }
}))