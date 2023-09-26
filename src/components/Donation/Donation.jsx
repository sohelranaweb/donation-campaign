import { useEffect, useState } from "react";
import DonationPage from "../DonationPage/DonationPage";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonations(donationItems);
    }
  }, []);
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {donations.slice(0, dataLength).map((donation) => (
          <DonationPage key={donation.id} donation={donation}></DonationPage>
        ))}
      </div>
      <div className={dataLength === donations.length ? "hidden " : ""}>
        <button
          onClick={() => setDataLength(donations.length)}
          className="px-4 py-2 bg-[#009444] text-white block mx-auto mt-10 rounded-md"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
