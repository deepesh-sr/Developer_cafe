export const RestuarantCard = ({ info }) => {
const { cloudinaryImageId, name, locality, areaName } = info;
    return (
      <div className="card">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Image"/>
        <h2>{name}</h2>
        <h3>{locality}</h3>
        <h4>{areaName}</h4>
      </div>
    );
  };
  