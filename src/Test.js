import React, { useState, useEffect } from 'react'
import { getAnime } from './api/axios'
import { ANIME } from '@consumet/extensions'
    import axios from "axios";
const Test = () => {
    const main = async () => {
        // Create a new instance of the Gogoanime provider
        const gogoanime = new ANIME.Gogoanime();
        const animeId = 'saikyou-onmyouji-no-isekai-tenseiki';
        try {
          // try to get anime info
          const results = await gogoanime.fetchAnimeInfo(animeId);
          console.log(results);
          return results;
        } catch {
          // get new id and try again (default will be episode 1 i think)
          const anime_id = await gogoanime.fetchAnimeIdFromEpisodeId(animeId + '-episode-4');
          const results = await gogoanime.fetchAnimeInfo(anime_id);
          console.log(results);
        }
      };
      
      main();
  return (
    <div>Test</div>
  )
}

export default Test