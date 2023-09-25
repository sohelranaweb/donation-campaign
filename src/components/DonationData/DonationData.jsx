import { Link } from "react-router-dom";

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
    <div>
      <Link to={`/donations/${id}`}>
        <div
          className="relative flex w-[275px] flex-col rounded-xl shadow-md"
          style={{ backgroundColor: card_bg_color }}
        >
          <div className="relative">
            <img src={picture} alt="img-blur-shadow" layout="fill" />
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

export default DonationData;
