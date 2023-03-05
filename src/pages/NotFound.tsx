import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container text-center m-top-48">
      <h2 className="fw-bold fs-600 p-block-36">Sorry, the page you were looking for was not found.</h2>
      <Link to="/" className="button">Return to home</Link>
    </div>

  )
}

export default NotFound