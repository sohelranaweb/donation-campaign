import { useEffect, useState } from "react";
import DonationPage from "../DonationPage/DonationPage";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  const [showSeeAllButton, setShowSeeAllButton] = useState(false); // Initialize showSeeAllButton to false

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonations(donationItems);

      // Update showSeeAllButton based on the number of donations
      setShowSeeAllButton(donationItems.length > 4);
    }
  }, []);

  // Function to handle "See All" button click
  const handleSeeAllClick = () => {
    setDataLength(donations.length);
    setShowSeeAllButton(false); // Hide the button after clicking
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {donations.slice(0, dataLength).map((donation) => (
          <DonationPage key={donation.id} donation={donation}></DonationPage>
        ))}
      </div>
      {/* Render the button only if showSeeAllButton is true */}
      {showSeeAllButton && (
        <div className="text-center mt-4">
          <button
            onClick={handleSeeAllClick}
            className="px-4 py-2 bg-[#009444] text-white rounded-md"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
