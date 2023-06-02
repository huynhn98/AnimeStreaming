import React from 'react'
import { useEffect, useState } from 'react'
import { getSeasonalAnime } from '../api/axios'
import AnimeCard from './AnimeCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Strip = () => {

    const [anime, setAnime] = useState([])

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 2 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      }
    };
  
  const getData = async () => {
    try {
        const response = await getSeasonalAnime(1, 10)
        const data = response.results
        setAnime(data)
        console.log(data, "data")
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    getData();
}, []);

console.log(anime, "who")
const content = 
    anime.map((a) => {
        return (
          <React.Fragment key={a.id} >
          <AnimeCard src={a.image} id={a.id} title={a.title.romaji}></AnimeCard>
          <p className='text-center'>{a.title.romaji}</p>
          </React.Fragment>
        )
    })
      
  return (
    <React.Fragment>
    <div className='header'>
        <h2>Spring 2023 Anime</h2>
        <h3>Watch the Lastest Anime of This Season!</h3>
    </div>
    <Carousel  fade swipeable={false}
                partialVisible={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-10-px">
      {content}
    </Carousel>
    </React.Fragment>
  )
}

export default Strip