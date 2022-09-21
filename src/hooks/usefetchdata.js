import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
        async function getBlogs() {
            try {
                const res = await fetch(url, { signal: abortCont.signal })
                if (!res.ok) throw Error('Could not fetch data for the resource')
                const data = await res.json()
                setData(data)
                setIsPending(false)
                setError(null)
            }
            catch (err) {
                setError(err.message)
                setIsPending(false)
            }
            return () => abortCont.abort()
        }
        getBlogs()
    }, [url])

    return { data, isPending, error }
}

export default useFetch