import { useCountries } from "../api/useCountries"
import { Country } from "./Country"
import { CountrySkeleton } from "./CountrySkeleton"

function App() {
  const { data, error, loading } = useCountries()

  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>
  }

  return (
    <>
      <h1 className="mb-4 text-center text-3xl font-bold">List of countries</h1>
      <main className="grid h-full grid-cols-2 gap-4 overflow-auto sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-12 lg:grid-cols-5 lg:gap-16">
        {loading &&
          new Array(20).fill(null).map((_, i) => <CountrySkeleton key={i} />)}
        {data &&
          data.map((country) => (
            <Country country={country} key={country.name.common} />
          ))}
      </main>
    </>
  )
}

export default App
