const DonationPage = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    price,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = donation;
  return (
    <div className="lg:px-0 pl-5 md:px-4">
      <div
        style={{ backgroundColor: card_bg_color }}
        className="relative flex lg:w-full md:w-full max-w-[48rem] w-96 flex-row rounded-xl shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 space-y-2">
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
          <h1
            className=" text-xl font-semibold"
            style={{ color: text_button_bg_color }}
          >
            {title}
          </h1>
          <p
            className="text-base font-semibold"
            style={{ color: text_button_bg_color }}
          >
            {price}
          </p>
          <button
            className="px-4 py-2 text-white text-lg font-semibold rounded-md"
            style={{ backgroundColor: text_button_bg_color }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
