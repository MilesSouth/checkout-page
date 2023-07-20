import Holiday from "../components/Holiday"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../data/BASE_URL"
import AddHoliday from "../components/AddHoliday"
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
      <AddHoliday holidays={holidays} setHolidays={setHolidays} />
      {holidays?.map((item) => {
        return (
          <Holiday
            key={item.id}
            holiday={item}
            holidays={holidays}
            setHolidays={setHolidays}
          />
        )
      })}
    </div>
  )
}

export default Home
