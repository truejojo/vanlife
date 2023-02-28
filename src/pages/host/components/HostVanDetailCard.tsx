interface IHostVanDetailCardProps {
  imageUrl: string;
  name: string;
  type: string;
  price: number;
}

const HostVanDetailCard = ({
  imageUrl,
  name,
  type,
  price,
}: IHostVanDetailCardProps) => (
  <div className="content flex">
    <img src={imageUrl} alt={name} style={{ width: "250px" }} />
    <div>
      <p>{type}</p>
      <h3 className="fs-500 fw-bold">{name}</h3>
      <p>
        <span className="fw-bold">${price}</span>/day
      </p>
    </div>
  </div>
);

export default HostVanDetailCard;
