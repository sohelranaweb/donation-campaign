import { useLoaderData } from "react-router-dom";
import DonationData from "../DonationData/DonationData";

const Home = () => {
  const donationDatas = useLoaderData();
  console.log(donationDatas);
  return (
    <div>
      <h1>Banner section here</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {donationDatas.map((donation) => (
          <DonationData key={donation.id} donation={donation}></DonationData>
        ))}
      </div>
    </div>
  );
};

export default Home;
