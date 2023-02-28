import { useOutletContext } from "react-router-dom";

export interface IHostVanInfoProps {
  name: string;
  type: string;
  description: string;
}

const HostVanInfo = () => {
  const { name, type, description } = useOutletContext<IHostVanInfoProps>();

  return (
    <div className="flow">
      <h4>Name: {name}</h4>
      <p>Category: {type}</p>
      <p>Description: {description}</p>
      <p>Visibility: Public</p>
    </div>
  );
};

export default HostVanInfo;
