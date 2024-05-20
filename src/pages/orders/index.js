import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Orders() {
  const [ordersData, setOrdersData] = useState([]);
  const fetchData = async () => {
    await fetch("api/myOrdersData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
    }).then(async (res) => {
      let response = await res.json();
      setOrdersData(response?.order_data?.order_data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(ordersData)
  return (
   <>
      
   
      {ordersData?.length > 0 ? (
        <div className='overflow-hidden bg-white dark:bg-black'>
        <div className="container mx-auto my-4 ">
          {ordersData?.map((orders) => {
            return (
              <>
                {orders.map((data) => {
                  return (
                    <>
                      {data.order_date ? (
                        <div className="font-bold text-xl mb-2 text-black dark:text-white">
                          {" "}
                          {data.order_date} 
                          <hr className='border-black dark:border-white'/>{" "}
                        </div>
                      ) : (
                        <div className="my-4 w-96  border-gradient p-4  rounded-lg">
                          <div className="relative w-full rounded-lg h-72">
                            <Image
                              src={data.img}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-lg"
                              alt="pizza"
                            />
                          </div>
                          <div className="font-bold text-xl text-black dark:text-white">{data.name}</div>
                          <div className="flex justify-between items-center text-black dark:text-white">
                            <div>{data.qty}</div>
                            <div>{data.size}</div>
                            <div className="font-semibold text-black dark:text-white">{data.price}/-</div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </div> 
        </div> 
      ) : (
        <div className="flex w-screen flex-col items-center justify-center h-screen bg-white dark:bg-black">
          <h1 className="text-4xl font-bold text-black dark:text-white"> No previous Orders 😅</h1>
          {/* <p className="text-gray-600 mt-4">No previous Orders 😅</p> */}
          <Link
            href="/"
            className="text-violet-500 text-xl hover:font-bold mt-8"
          >
            Go back to the home
          </Link>
        </div>
      )}
 
   
   </>
  );

}

export default Orders
