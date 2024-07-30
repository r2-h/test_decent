import { useEffect, useState } from "react"
import { ICountry } from "../components/types"

export const useCountry = (countryName: string) => {
  const normalizedName = countryName.toLowerCase().trim()
  const [data, setData] = useState<ICountry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${normalizedName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong")
        }
        return response.json()
      })
      .then((data) => {
        setData(data[0])
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [normalizedName])
  return { data, loading, error }
}
