import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationData = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = donation;
  return (
    <div className="lg:pl-0 pl-5">
      <Link to={`/donations/${id}`}>
        <div
          className="relative flex lg:w-[275px] w-96 md:w-80 flex-col rounded-xl shadow-md"
          style={{ backgroundColor: card_bg_color }}
        >
          <div className="relative">
            <img className="w-96 md:w-80" src={picture} alt="img-blur-shadow" />
          </div>
          <div className="my-5 ml-6">
            <button
              className="px-4 py-2 rounded-md text-sm font-medium"
              style={{
                backgroundColor: category_bg_color,
                color: text_button_bg_color,
              }}
              type="button"
              data-ripple-light="true"
            >
              {category}
            </button>
          </div>
          <h1
            className="ml-6 mb-4 text-xl font-semibold"
            style={{ color: text_button_bg_color }}
          >
            {title}
          </h1>
        </div>
      </Link>
    </div>
  );
};
DonationData.propTypes = {
  donation: PropTypes.object,
};
export default DonationData;
