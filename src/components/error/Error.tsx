import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;

  console.log(error)
  return (
    <div className="container">
      <p>{error.name}</p>
      <p>{error.message}</p>
    </div>
  )
  
};

export default Error;
