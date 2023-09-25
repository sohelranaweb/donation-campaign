import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id === id);
    setDonation(findDonation);
  }, [id, donations]);

  const { picture, price, title, description, text_button_bg_color } = donation;
  const handleAddToDonation = () => {
    const addedDonationArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (!donationItems) {
      addedDonationArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal("Good job!", "successfully donate!", "success");
    } else {
      const isExists = donationItems.find((donation) => donation.id === id);
      if (!isExists) {
        addedDonationArray.push(...donationItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        swal("Good job!", "successfully donate", "success");
      } else {
        swal("Error!", "already Donated!", "error");
      }
    }
  };
  return (
    <div>
      <div className="relative flex  flex-col rounded-xl bg-white ">
        <div className="relative ">
          <img
            className="w-full relative rounded-md"
            src={picture}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6 relative -mt-[92px] bg-[#0B0B0B7F]  rounded-b-md">
          <button
            onClick={handleAddToDonation}
            style={{ backgroundColor: text_button_bg_color }}
            className="px-6  py-2 text-xl font-medium text-white rounded-md"
            type="button"
            data-ripple-light="true"
          >
            Donation {price}
          </button>
        </div>
        <div className="p-6">
          <h5 className="mb-2 block  text-4xl font-semibold ">{title}</h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
