import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EstateSection = ({ estates }) => {

  const {
    location,
    facilities,
    image,
    estate_title,
    segment_name,
    description,
    view_property_button
  } = estates;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <h2>{estate_title}</h2>
          <div className="badge badge-secondary">{segment_name}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{location}</div>
          <div className="badge badge-outline">{facilities}</div>
        </div>
     <Link className="flex justify-end" to={`estate/${estate_title}`}>
    <button className="px-8 py-2 bg-[#30B6EC] text-white rounded-3xl">{view_property_button}
    </button>
    </Link>
      </div>
    </div>
  );
};

EstateSection.propTypes = {
  estates: PropTypes.shape({
    id:PropTypes.number.isRequired,
    estate_title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    segment_name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    facilities: PropTypes.string.isRequired,
    view_property_button: PropTypes.string.isRequired,
  }).isRequired,
};
export default EstateSection;
