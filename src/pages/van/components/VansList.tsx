import Van from "./Van";
import { IVanProps } from "./Van";

export interface IVansList {
  vans: IVanProps[];
}

const VansList = ({ vans }: IVansList) => {
  return (
    <div className="g-auto-fit-columns  m-block-48">
      {vans.map((van) => (
        <Van key={van.id} {...van} />
      ))}
    </div>
  );
};

export default VansList;
