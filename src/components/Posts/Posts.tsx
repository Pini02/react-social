import {Post} from '../Post/Post'

import type { PostListProps } from '../../types/post'




export function Posts({posts} : PostListProps){
    return (
        <>
            <ul>
                {posts.map((post)=>
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                )}
            </ul>
            
        </>
    )
}