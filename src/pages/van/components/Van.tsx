import { Link } from "react-router-dom";

export interface IVanProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
  price: number;
}

const Van = ({ id, name, description, imageUrl, type, price }: IVanProps) => {
  return (
    <Link to={`/vans/${id}`} className="card">
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
