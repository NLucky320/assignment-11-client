import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../../Components/Spinner/Spinner";
import { Helmet } from "react-helmet-async";

const MyFoodRequests = () => {

  const [items, setItems] = useState([]);
          const [loading, setLoading]=useState(true)
     const { user } = useAuth() || {};
        useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/myFoodRequest/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                    setLoading(false)
            });
    }, [user]);

  return (
      <div className="mt-12 md:mt-[80px] p-6 text-center max-w-[1170px] mx-auto">
      <Helmet>
        <title>Surplus Saver | Manage My Food</title>
      </Helmet>
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-bold text-[28px] md:text-[40px] pt-4">
         My Food Items
        </h2>
        <p className="py-4">
       
        </p>
      </div>

      <div className="overflow-x-auto whitespace-nowrap">
              <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th >Food Name</th>
            <th>Expired Date</th>
            <th>Food Status</th>
            <th>Donor Name</th>
            <th>Request Date</th>
      
          </tr>
        </thead>
        <tbody className="w-100%">

          {loading ? (
            <tr>
              <td colSpan="6">
              <Spinner></Spinner>
              </td>
            </tr>
          ) : (
            items?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td >{item?.food_name}</td>
                <td> {item?.expired_date}</td>
                <td> {item?.food_status}</td>
                <td> {item?.donor_name}</td>
                <td> {item?.request_date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
</div>
    </div>
  );
};

export default MyFoodRequests;
