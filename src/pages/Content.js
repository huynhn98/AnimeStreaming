// endless scroll


import { useCallback, useEffect, useState, useRef } from "react";
import AnimeCard from "../components/AnimeCard";
import { Card, Row, Col, Container, Dropdown, Button } from 'react-bootstrap'
import {useAnime} from "../hooks/useAnime"
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner"
// Using the example query "demon", and looking at the 2nd page of results.
const url = "https://api.consumet.org/meta/anilist/advanced-search";

const Content = () => {
  const navigate = useNavigate()
  const state = useLocation()
  const [pageNum, setPageNum] = useState(1)
  const [genre, setGenre] = useState(state.state.genre)
  const {
    isLoading,
    isError,
    error,
    results,
    hasNextPage
  } = useAnime(pageNum, state)


  useEffect(()=>{
    setPageNum(1)
  }, [state])

  console.log(state)
  const handleClick = (e) => {

    if(e.target.innerHTML === "Clear Filters") {
      
      navigate('/content', {state: {genre: genre}})
    }
    else {
      if(state.state.genre.length === 0) {
        navigate('/content', {state: {genre: state.state.genre.concat(e.target.innerHTML)}})
      } 
      else {
        navigate('/content', {state: {genre: state.state.genre.concat("\",\""+e.target.innerHTML)}})
      }
      
    }
    

  }
  // const getData = async (page) => {
  //   try {
  //       const response = await axios.get(url, {params: {year: "2023",season: "SPRING", page: page}} )
  //       const data = response.data.results
  //       setAnime(data)

  //       console.log(data)
  //   } catch (error) {
  //     console.log(error.response)
  //   }
  // }

 


  const intObserver = useRef()
  const lastAnimeRef = useCallback(anime => {
    if (isLoading) return
    if(intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(anime => {
      console.log(hasNextPage, "has next page")
      if (anime[0].isIntersecting && hasNextPage) {
        console.log("near the end")
        setPageNum(prev=>prev+1)
      }
    })

    if(anime) intObserver.current.observe(anime)
  }, [isLoading, hasNextPage])
  
  if(isError) return <p className="center">Error: {error.message}</p>

  const content = results.map((anime, i) => {
    if(results.length === i + 3) {
      return <AnimeCard ref={lastAnimeRef} key={anime.id} title={anime.title.romaji} src={anime.image} id={anime.id}></AnimeCard>
    }
    return <AnimeCard key={anime.id} title={anime.title.romaji} src={anime.image} id={anime.id}></AnimeCard>
  })

  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mahou Shoujo", "Mecha", "Music", 
                  "Mystery", "Psychological", "Romance", "Sci-Fi", "Slice of Life", "Sports", "Supernatural", "Thriller"]

  const filters = genres.map((g) => {
    return (<Button className={`btn-dark text-white p-1 px-2 btn fw-bold`} onClick={e => handleClick(e)} value={false}>{g}</Button>)
  })
  const clearBtn = <Button className={`btn-danger text-white p-1 px-2 btn fw-bold`} onClick={e => handleClick(e)} value={false}>Clear Filters</Button>
  let header
      if(state.state["genre"]) {
        header = (
          <div className="d-flex justify-content-around align-items-center">
        <h1 className="">
          {"\"" + state.state.genre + "\""} Anime
        </h1>
        <div>
              {filters}
              {clearBtn}
              
        </div>
        </div>
        )
      }
      else{
        header = <h1 className="d-flex justify-content-center">Search Results for: {state.state.title}</h1>
      }
    
  return (
    <>
    {header}
    <Row xs={1} md={6} className="g-0 d-flex justify-content-center">
      {content}
    </Row>
    {isLoading ? <LoadingSpinner/> : <></>}
    </>
    
  )
}


export default Content