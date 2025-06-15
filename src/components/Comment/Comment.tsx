import type { CommentProps } from "../../types/Comment";

export function Comment({comment}:CommentProps){
    return(
        <div>
            {comment.id}
            <p>{comment.body}</p>
        </div>
    )
}