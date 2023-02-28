import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="container" data-type="small">
      <header className="hero-header | clr-neutral-100">
        <h1 className="fs-800 m-top-48">You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="button m-bottom-48">Find your van</Link>
      </header>
    </div>
  </div>
);

export default Home;
