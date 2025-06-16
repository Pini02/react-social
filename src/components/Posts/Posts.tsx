import {Post} from '../Post/Post'
import type { PostListProps } from '../../types/post'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


export function Posts({posts} : PostListProps){
    return (
        <>
            <List>
                {posts.map((post)=>
                    <ListItem key={post.id}>
                        <Post post={post} isDetails={false}/>
                    </ListItem>
                )}
            </List>
            
        </>
    )
}