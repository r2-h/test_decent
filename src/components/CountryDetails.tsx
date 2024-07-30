import { useParams } from "react-router-dom"
import { ICountry } from "./types"

type Props = {
  countries: ICountry[]
}

const CountryDetail = ({ countries }: Props) => {
  const { countryName } = useParams<{ countryName: string }>()
  const country = countries.find((country) => country.name.common === countryName)

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <img
        src={country.flags.svg}
        alt={country.flag}
      />
    </div>
  )
}

export default CountryDetail
