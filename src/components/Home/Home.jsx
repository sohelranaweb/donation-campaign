import { useLoaderData } from "react-router-dom";
import DonationData from "../DonationData/DonationData";
import { useState } from "react";

const Home = () => {
  const allDonationData = useLoaderData();
  console.log(allDonationData);
  const [searchItem, setSearchItem] = useState("");
  const filteredDonationData = allDonationData.filter((donation) => {
    // Check if the donation's category or any other relevant field matches the search term
    return donation.category.toLowerCase().includes(searchItem.toLowerCase());
    // ||
    // donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // donation.description.toLowerCase().includes(searchTerm.toLowerCase())
  });

  const handleSearchInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div>
      <div className="mb-24">
        <div
          className="hero h-[80vh]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/kDnJ4q8/donation-banner.jpg)",
          }}
        >
          <div className="hero-overlay bg-[#FFFFFFF3]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">
                I Grow By Helping People In Need
              </h1>
              <div className="form-control">
                <div className="input-group flex justify-center">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered text-black"
                    value={searchItem}
                    onChange={handleSearchInputChange}
                  />
                  <button className="btn bg-[#FF444A] text-white">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDonationData.map((donation) => (
          <DonationData key={donation.id} donation={donation}></DonationData>
        ))}
      </div>
    </div>
  );
};

export default Home;
