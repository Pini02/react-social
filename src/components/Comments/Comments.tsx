import { List, ListItem } from "@mui/material";
import { Comment } from "../Comment/Comment";
import type { CommentListProps } from "../../types/Comment";

export function Comments({comments=[]}: CommentListProps){
    return(
        <div>
            <List>
                {comments.map((comment)=>
                    <ListItem key={comment.id}>
                        <Comment comment={comment} />
                    </ListItem>)}
            </List>
        </div>
    )
}