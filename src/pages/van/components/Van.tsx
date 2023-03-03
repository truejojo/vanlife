import { Link } from "react-router-dom";
export interface IVanProps {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  type: string;
  price: number;
  typeFilter: string | null;
}

const Van = ({ id, name, imageUrl, type, price, typeFilter }: IVanProps) => {
  return (
    <Link to={id} state={typeFilter} className="card">
      <img src={imageUrl} alt={name} />
      <div className="flex-space-between">
        <h3 className="fw-bold">{name}</h3>
        <p className="fw-bold">
          ${price}
          <span className="fs-200">/day</span>
        </p>
      </div>
      <p>{type}</p>
    </Link>
  );
};

export default Van;
