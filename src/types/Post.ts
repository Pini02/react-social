

type PostType = {
    id: number,
    title : string,
}

export  type PostListProps = {
                posts : PostType[],
                handleDelete: (id:number) => Promise<void>
            }

export  type PostProps = {
                post:PostType,
                isDetails : boolean,
                handleDelete: (id:number) => Promise<void>
            }

export {type PostType}