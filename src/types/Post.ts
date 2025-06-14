import type { CommentListProps } from './Comment'


type PostType = {
    id: number,
    title : string,
    comments : CommentListProps[]
}

export  type PostListProps = {
                posts : PostType[]
            }

export  type PostProps = {
                post:PostType,
            }

export {type PostType}