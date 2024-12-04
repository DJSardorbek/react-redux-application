import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../ui'
import { useEffect } from 'react'
import { getArticlesStart, getArticlesSuccess } from '../slice/article';
import articleService from '../service/article';
import { ArticleCard } from '../components'

const Main = () => {
	const { articles, isLoading } = useSelector(state => state.article)

	const dispatch = useDispatch()
	const getArticle = async () => {
		dispatch(getArticlesStart())
		try {
			const response = await articleService.getArticles()
			dispatch(getArticlesSuccess(response.articles))
		} catch (error) {
			console.log('error getting articles')
		}
	}

	useEffect(() => {
		getArticle();
	}, [])
	return (
		<div>
			{isLoading ? <Loader /> : (

				<div className='album py-5 '>
					<div>
						<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
							{articles.map(item => (
								<ArticleCard item={item} getArticle={getArticle} />
							))}
						</div>
					</div>
				</div>
			)}


		</div>


	)
}

export default Main