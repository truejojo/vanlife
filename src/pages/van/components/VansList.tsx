import Van from "./Van";
import { IVanProps } from "./Van";

export interface IVansList {
  vans: IVanProps[];
  typeFilter?: string | null;
}

const VansList = ({ vans, typeFilter }: IVansList) => (
  <div className="g-auto-fit-columns  m-block-48">
    {typeFilter
      ? vans
          .filter((van) => van.type === typeFilter)
          .map((van) => <Van key={van.id} {...van} typeFilter={typeFilter} />)
      : vans.map((van) => <Van key={van.id} {...van} />)}
  </div>
);

export default VansList;
