import { useOutletContext } from "react-router-dom";

interface IHostVanPricingProps {
  price: number;
}

const HostVanPricing = () => {
  const { price } = useOutletContext<IHostVanPricingProps>();

  return (
    <div>
      <p>
        <span className="fw-bold">${price}</span>/day
      </p>
    </div>
  );
};

export default HostVanPricing;
