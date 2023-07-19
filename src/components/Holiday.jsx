import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

const Holiday = ({ holiday }) => {
  const [productCount, setProductCount] = useState(1)

  const decrease = () => {
    productCount > 1 ? setProductCount(productCount - 1) : productCount
  }
  const increase = () => {
    setProductCount(productCount + 1)
  }

  return (
    <div>
      <div>
        <img src={holiday.image} alt="" width={"300px"} />
      </div>
      <div>
        <span>{holiday.name}</span>
        <span>{holiday.price * 0.75}</span>
        <span className="text-decoration-line-through">{holiday.price}</span>
        <div className="counter">
          <button
            onClick={() => {
              decrease()
            }}
          >
            <AiOutlineMinus />
          </button>
          <span>{productCount}</span>
          <button
            onClick={() => {
              increase()
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <button className="btn btn-danger">Remove</button>
        <span>Product Total: </span>
      </div>
    </div>
  )
}

export default Holiday
