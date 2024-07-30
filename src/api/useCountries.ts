import { useEffect, useState } from "react"
import { ICountry } from "../components/types"

export const useCountries = () => {
  const [data, setData] = useState<ICountry[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong")
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
  return { data, loading, error }
}
