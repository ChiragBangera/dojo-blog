import { useEffect,useState } from "react"


const useFetch = (url)=>{



    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error,setError] = useState(null)



    useEffect(() => {
        async function getBlogs() {
            try {
                const res = await fetch(url)
                if (!res.ok) throw Error('Could not fetch data for the resource')
                const data = await res.json()
                setData(data)
                setIsPending(false)
                setError(null)
            }
            catch(err){
                setError(err.message)
                setIsPending(false)
            }
        }

        getBlogs()
    }, [url])

    return {data,isPending,error}
}

export default useFetch