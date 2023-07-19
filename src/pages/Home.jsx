import Holiday from "../components/Holiday"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../data/BASE_URL"

const Home = () => {
  const [holidays, setHolidays] = useState([])

  useEffect(() => {
    getHolidays()
  }, [])

  const getHolidays = async () => {
    try {
      const { data } = await axios(BASE_URL)
      setHolidays(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {holidays?.map((item) => {
        return <Holiday holiday={item} />
      })}
    </div>
  )
}

export default Home
