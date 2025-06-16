import type { PostProps } from "../../types/post"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import i18n from "../../i18n/i18n"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"




export function Post({post, isDetails,handleDelete}:PostProps ){
    const {t} = useTranslation()
    const navigate=useNavigate()

    function redirectHome(id:number):void{
        handleDelete(id)
        navigate('/')
    }
    return(
        <div>
            <h2>{post.title}</h2>
            {!isDetails && <Link to={`/post/${post.id}`}>{t('Commenti-p')}</Link>}
            {isDetails && <Button onClick={()=>redirectHome(post.id)}>🗑️</Button>}
        
        </div>
    )
}