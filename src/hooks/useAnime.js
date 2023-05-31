import {useState, useEffect} from 'react'
import { getAnime } from '../api/axios'

export const useAnime = (pageNum = 1, state) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})
    const [hasNextPage, setHasNextPage] = useState(false)

    
    useEffect(()=>{
        setResults([])
        setHasNextPage(false)
        setIsError(false)
        setIsLoading(false)
    }, [state])

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError({})

        const controller = new AbortController()
        const {signal} = controller

        console.log(state)
        getAnime(pageNum, state.state.genre,state.state.title, )
            .then(data => {
                console.log(data, "getanime data")
                setResults(prev => [...prev, ...data.results])
                setHasNextPage(Boolean(data.hasNextPage))
                setIsLoading(false)
            })
            .catch(e => {
                setIsLoading(false)
                if (signal.aborted) return
                setIsError(true)
                setError({message: e.message})
            })

        return () => controller.abort()
        

    }, [pageNum, state])

    
    return { isLoading, isError, error, hasNextPage, results}
}
