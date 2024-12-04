import { useParams } from "react-router-dom"
import { ArticleForm } from "../ui"
import { useEffect, useState } from "react"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article"
import { useDispatch } from "react-redux"
import ArticleService from "../service/article"

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const {slug} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                setTitle(response.article.title)
                setDescription(response.article.description)
                setBody(response.article.body)
                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        }
        getArticleDetail()
    }, [slug])
    
    const formSubmit = () => {}
    const formProps = {title, setTitle, description, setDescription, body, setBody, formSubmit}

  return (
    <div className="text-center">
            <h1>Create Article</h1>
            <div className="w-75 mx-auto">
            <ArticleForm {...formProps}/>
            </div>
        </div>
  )
}

export default EditArticle