import { useState } from "react"
import Form from "react-bootstrap/Form"

const AddHoliday = ({ holidays, setHolidays }) => {
  const [display, setDisplay] = useState(true)
  const [holiday, setHoliday] = useState({
    city: "",
    price: "",
    tickets: "",
    image: "",
  })

  const handleChange = (e) => {
    const prop = e.target.id
    if (prop === "city") setHoliday({ ...holiday, city: e.target.value })
    else if (prop === "price") setHoliday({ ...holiday, price: e.target.value })
    else if (prop === "tickets")
      setHoliday({ ...holiday, tickets: e.target.value })
    else if (prop === "image") setHoliday({ ...holiday, image: e.target.value })
  }

  const addHoliday = () => {
    setHolidays([...holidays, holiday])
  }
  return (
    <div>
      <button className="btn btn-warning" onClick={() => setDisplay(!display)}>
        Show/Hide
      </button>
      {display && (
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Berlin"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="6000"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tickets">
              <Form.Label>Number of Tickets</Form.Label>
              <Form.Control
                type="number"
                placeholder="3"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image of Holidays</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://..."
                required
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <button onClick={addHoliday}>Add</button>
        </div>
      )}
    </div>
  )
}

export default AddHoliday
