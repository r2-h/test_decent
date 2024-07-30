import { useEffect, useState } from "react"

import "./index.css"
import { ICountry } from "./components/types"
import { Country } from "./components/Country"

function App() {
  const [data, setData] = useState<ICountry[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-xl bg-neutral-200/70 p-4 sm:p-8 md:p-12 lg:p-16">
      <header className="mb-4 text-center text-3xl font-bold">List of countries</header>
      <main className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-12 lg:grid-cols-5 lg:gap-16">
        {loading && <div>Loading...</div>}
        {data &&
          data.map((country) => (
            <Country
              country={country}
              key={country.name.common}
            />
          ))}
      </main>
    </div>
  )
}

export default App
