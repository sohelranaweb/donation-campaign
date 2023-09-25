import { useEffect, useState } from "react";
import DonationPage from "../DonationPage/DonationPage";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonations(donationItems);
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {donations.map((donation) => (
          <DonationPage key={donation.id} donation={donation}></DonationPage>
        ))}
      </div>
    </div>
  );
};

export default Donation;
