import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { addArticle } from '../redux/article/article.action';
import { fetchArticles, selectArticles } from '../redux/article/article.slice';

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)


  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <div >
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <ul>
          {articles.map((article, index) => {
            return <li key={index}>{JSON.stringify(article)}</li>
          })}
        </ul>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}

export default Home
