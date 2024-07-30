import { useParams } from "react-router-dom"

const CountryDetails = () => {
  const { countryName } = useParams<{ countryName: string }>()

  return <div>{countryName}</div>
}

export default CountryDetails
