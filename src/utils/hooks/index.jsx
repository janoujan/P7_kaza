import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      const response = await fetch(url)

      const data = await response.json()

      setData(data)
    }

    fetchData()
  }, [url])

  return { data }
}
