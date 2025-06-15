import type { PostProps } from "../../types/post"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import i18n from "../../i18n/i18n"
import { useTranslation } from "react-i18next"


export function Post({post, isDetails,handleDelete}:PostProps ){
    const {t} = useTranslation()
    return(
        <div>
            <h2>{post.title}</h2>
            {!isDetails && <Link to={`/${post.id}`}>{t('Commenti-p')}</Link>}
            {!isDetails && <Button onClick={()=>handleDelete(post.id)}>🗑️</Button>}
        
        </div>
    )
}