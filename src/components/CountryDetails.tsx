import { Link, useParams } from "react-router-dom"
import { useCountry } from "../api/useCountry"

const CountryDetails = () => {
  const { countryName } = useParams<{ countryName: string }>()

  const { data, error, loading } = useCountry(countryName ?? "")

  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }  

  return (
    <div className="">
      <Link to="/"> &#8592; back</Link>
      <h1 className="mt-10">{countryName}</h1>
      <img
        src={data?.flags.svg}
        alt={data?.flag}
        className="max-h-20 shadow-md"
      />
      <p>language: {Object.values(data?.languages ?? {})}</p>
      <p>area: {data?.area} km&sup2;</p>
      <p>population: {data?.population}</p>
      <p>currency: {Object.keys(data?.currencies ?? {})}</p>
      <p>capital: {data?.capital}</p>
    </div>
  )
}

export default CountryDetails
