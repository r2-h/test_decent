import { Link, useParams } from "react-router-dom"
import { useCountry } from "../api/useCountry"
import { CountryDetailsSkeleton } from "./CountryDetailsSkeleton"

const CountryDetails = () => {
  const { countryName } = useParams<{ countryName: string }>()

  const { data, error, loading } = useCountry(countryName ?? "")

  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>
  }

  return (
    <>
      <Link to="/"> &#8592; back</Link>
      <div className="mt-10 flex flex-col items-center">
        {loading && <CountryDetailsSkeleton />}
        {data && (
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold">{countryName}</h1>
            <img
              src={data?.flags.svg}
              alt={data?.flag}
              className="my-4 max-h-28 shadow-md"
            />
            <table>
              <tbody>
                <tr>
                  <td>Language:</td>
                  <td className="py-1 pl-2">
                    {Object.values(data.languages).join(", ")}
                  </td>
                </tr>
                <tr>
                  <td>Area:</td>
                  <td className="py-1 pl-2">{data.area} km&sup2;</td>
                </tr>
                <tr>
                  <td>Population:</td>
                  <td className="py-1 pl-2">{data.population}</td>
                </tr>
                <tr>
                  <td>Currency:</td>
                  <td className="py-1 pl-2">
                    {Object.keys(data.currencies).join(", ")}
                  </td>
                </tr>
                <tr>
                  <td>Capital:</td>
                  <td className="pl-2 pt-1">{data.capital}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default CountryDetails
