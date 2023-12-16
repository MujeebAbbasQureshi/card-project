import Results from "@/components/Results"

const API_KEY = "72acbab2ea7124b2ae3bad212540e2cf"

export default async function Home({searchParams}) {
  const genre = searchParams.genre ||"fetchTrending"
  const res = await fetch(`http://api.themoviedb.org/3/${genre ===`fetchTopRated` ? "movie/top_rated":   "trending/all/week"}?language=en-US&api_key=${API_KEY}`,{next:{revalidate:100000}
}
)

if(!res.ok){
  throw new Error("Failed To Load Movie Data")
}
const data = await res.json()
const results = data.results
  return (
   <>
   <Results results={results}/>
      </>
  )
}
