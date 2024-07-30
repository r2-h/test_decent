import { Link } from "react-router-dom"
import { ICountry } from "./types"

type Props = {
  country: ICountry
}

export const Country = ({ country }: Props) => {
  return (
    <Link
      className="flex w-full flex-col items-center justify-between gap-1"
      to={`/${country.name.common}`}
    >
      <h3>{country.name.common}</h3>
      <p className="text-xs text-neutral-700">Capital: {country.capital}</p>
      <img
        src={country.flags.svg}
        alt={country.flag}
        className="w-feat h-20 min-w-20 shadow-md"
      />
    </Link>
  )
}
