import { type CommentType } from "../types/Comment"
import { create } from "zustand"
import { fetchComments } from "../apis/apis"

export interface CommentsState {
    comments : CommentType[]
    setComments : (id:number) => Promise<void>
}


export const useComments = create<CommentsState>((set)=>({
        comments : [],
        setComments: async (id:number) =>{
            const comments = await fetchComments(id)
            set({comments})
        }    
    }))