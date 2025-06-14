import type { PostProps } from "../../types/post"
import { Link } from "react-router-dom"

export function Post({post}:PostProps){
    return(
        <>
            <h2>{post.title}</h2>
            <Link to={`/${post.id}`}>{post.id}</Link>
        </>
    )
}