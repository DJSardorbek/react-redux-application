import axios from './api'

const ArticleService = {
    async getArticles() {
        const response = await axios.get('/articles')
        return response.data 
    },
    async getArticleDetail (slug) {
        const response = await axios.get(`/articles/${slug}`)
        return response.data
    },
    async postArticle(article) {
        const {data} = await axios.post('/articles', {article})
        return data
    },
    async deleteArticle(slug) {
        const {data} = await axios.delete(`/articles/${slug}`)
        return data
    },
    async editArticle(slug, article) {
        const {data} = await axios.put(`/articles/${slug}`, {article})
        return data
    }
}

export default ArticleService