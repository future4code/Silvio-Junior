import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { useParams } from 'react-router'
import { GlobalContext } from '../context/GlobalContext'
import { useState } from 'react/cjs/react.development'
import Card from '../components/Card'

function PostPage () {
    const params = useParams()
    const {selectedPost} = useContext(GlobalContext)
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        const headers = {
            headers:{
                Authorization: window.localStorage.getItem('token')
            }
        }

        axios.get(`${BASE_URL}/posts/${params.id}/comments`, headers)
        .then((res) => {
            setComentarios(res.data)
        })
        .catch((err) => {
            alert('Ocorreu um erro')
            console.log(err.response.request.statusText)
        })
    }, [])

    const renderizaComentarios = comentarios && comentarios.map((comentario) => {
        return(
            <Card publi={comentario} post={false} />
        )
    })

    return(
        <div>
            <Card publi={selectedPost} post={true}  />
            {renderizaComentarios}
        </div>
    )
}

export default PostPage