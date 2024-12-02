import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Main, Login, Register, ArticleDetail, CreateArticle} from './components'
import {Navbar} from './components'
import { useEffect } from 'react';
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './slice/auth';
import { getItem } from './helpers/persistence-storage';
import { getArticlesStart, getArticlesSuccess } from './slice/article';
import articleService from './service/article';

function App() {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }
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
    const token = getItem('token')
    if(token){
      getUser()
    }
    getArticle()
  },[])
  return (
    <div className="App">
        <Navbar/>
        <div className="container">
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
          <Route path={'/articles/:slug'} element={<ArticleDetail/>}/>
          <Route path={'/create-article'} element={<CreateArticle/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
