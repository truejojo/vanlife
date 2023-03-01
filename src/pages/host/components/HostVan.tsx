import { NavLink } from "react-router-dom";
import { IVanProps } from "../../van/components/Van";

const HostVan = ({ id, name, imageUrl, price }: IVanProps) => {
  return (
    <div className="bg-neutral-100 p-24">
      <div className="flex">
        <NavLink to={id}>
          <img src={imageUrl} alt={name} style={{ width: "100px" }} />
        </NavLink>
        <div>
          <h2 className="fw-bold">
            <NavLink to={id}>{name}</NavLink>
          </h2>
          <p>${price}/day</p>
        </div>
      </div>
    </div>
  );
};

export default HostVan;
