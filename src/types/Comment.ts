type CommentType={
    id:number,
    body:string,
    postId : number
}

export type CommentProps={
    comment : CommentType,
} 

export type CommentListProps={
   comments : CommentType[]
} 