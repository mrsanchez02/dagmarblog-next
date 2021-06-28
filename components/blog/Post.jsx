import React from 'react'
import Link from 'next/link'

const Post = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Escrito por: {post.userId} </p>
            <Link href={`/blog/${post.id}`}>Leer mas</Link>
        </div>
    )
}

export default Post
