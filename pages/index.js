import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import GithubUser from '../components/GithubUser'
import { useState, useRef, useEffect } from 'react'
import { Loading } from '../components/Loading'

export default function Home() {
  let API = 'https://api.github.com/users/dewi-pro'

  const userRef = useRef(null)
  const [userName, setUserName] = useState('')
  const [data, setData] = useState('')
  const [repos, setRepos] = useState('')
  const [isLoading, setLoading] = useState(false)

  function handleClick() {
    setUserName(userRef.current.value);
  }

  function handleKeyPress(e){
    if(e.key ==='Enter'){
      setUserName(userRef.current.value);
    }
  }
  useEffect( () => {
    
    async function fetchData() {
      // You can await here
      setLoading(true)
      if (userName) {
        API = `https://api.github.com/users/${userName}`
      }
      try {
        const res =  await Promise.all([
          fetch(API)
        ])
         const data = await Promise.all(res.map(r => r.json()))
         console.log('user =>',data);
         setData(data)

         let repo = data[0].repos_url
         const repos =  await Promise.all([
          fetch(repo)
        ])
        const repohsl = await Promise.all(repos.map(r => r.json()))
        setRepos(repohsl)

         console.log('repos =>',repohsl);
      } catch {
        throw Error("Promise failed");
      }
      // ...
    }
    setLoading(true)
    fetchData();

    setLoading(false)
    
  }, [userName]);
  console.log("anima",repos)

  if(!data) (
  <p>No Profile data.</p>
  )
  if(!repos) (
    <p>No repository data.</p>
    )
//console.log("tr",repos)
  return (
    <div className="min-h-screen bg-gray-50 py-7 dark:bg-[#1e253f]">
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      {isLoading ? <Loading /> :
      <>
      <SearchBar
        userName={userName}
        handleClick={handleClick}
        userRef={userRef}
        handleKeyPress={handleKeyPress}
      />
      <GithubUser 
      data={data} 
      repos={repos}
       />
      
      </>
      }
    </div>
  )
}
