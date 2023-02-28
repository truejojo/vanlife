import HostVan from "./HostVan";
import { IVansList } from "../../van/components/VansList";

const HostVansList = ({ vans }: IVansList) => (
  <div className="g-auto-fit-columns">
    {vans.map((van) => (
      <HostVan key={van.id} {...van} />
    ))}
  </div>
);

export default HostVansList;
