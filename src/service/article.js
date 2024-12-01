import axios from './api'

const articleService = {
    async getArticles() {
        const response = await axios.get('/articles')
        return response.data 
    }
}

export default articleService