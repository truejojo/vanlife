import { useOutletContext } from "react-router-dom";

interface IHostVanPhotosProps {
  imageUrl: string;
  name: string;
}
const HostVanPhotos = () => {
  const { imageUrl, name } = useOutletContext<IHostVanPhotosProps>();

  return (
    <div>
      <img src={imageUrl} alt={name} style={{ width: "200px" }} />
    </div>
  );
};

export default HostVanPhotos;
