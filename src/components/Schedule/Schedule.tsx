"use client";
import React from "react";

const scheduleData = [
  {
    hospitalName: "City Hospital",
    address: "123 Main Street, Downtown, City",
    time: "09:00 AM - 05:00 PM",
    mobileNo: "+91 9876543210",
  },
  {
    hospitalName: "Green Valley Clinic",
    address: "456 Elm Street, Uptown, City",
    time: "10:00 AM - 06:00 PM",
    mobileNo: "+91 9988776655",
    mobileNo1: "+91 1674684615",
    mobileNo2: "+91 9955948454",
  },
  {
    hospitalName: "Sunrise Medical Center",
    address: "789 Oak Avenue, Suburb, City",
    time: "08:00 AM - 04:00 PM",
    mobileNo: "+91 9123456789",
  },
  {
    hospitalName: "Hope Wellness Center",
    address: "101 Pine Road, Countryside, City",
    time: "07:00 AM - 03:00 PM",
    mobileNo: "+91 9876543211",
    mobileNo1: "+91 9867356907",
  },
];

const ScheduleDetailsCard = ({
  hospitalName,
  address,
  time,
  mobileNo,
  mobileNo1,
  mobileNo2,
}: any) => {
  return (
    <div className=" w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 mb-3">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 90%, 50% 100%, 0 90%)",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
        className="text-white shadow-lg rounded-lg p-5 mx-3 pb-10 bg-gradient-to-r from-[#171f58] to-blue-500"
      >
        <div className="mb-4">
          {/* <h3 className="text-xl text-white text-center font-semibold text-primary">
            Location
          </h3> */}
          <p className="text-white text-center text-2xl ">
            <strong>{hospitalName}</strong>
          </p>
          <p className="text-white text-center text-sm pb-2">
            <strong>{address}</strong>
          </p>
        </div>

        <div className="my-4 text-center">
          <p className="text-white text-center">{time}</p>
        </div>

        <div className="mb-4">
          <p className="text-white text-center">{mobileNo}</p>
          {mobileNo1 ? (
            <p className="text-white text-center">{mobileNo1}</p>
          ) : (
            <p className="text-white text-center">-</p>
          )}
          {mobileNo2 ? (
            <p className="text-white text-center">{mobileNo2}</p>
          ) : (
            <p className="text-white text-center">-</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <>
      <div className="container mx-auto py-16">
        <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#171f58]">
          Schedule
        </h5>
        <div className="flex flex-wrap ">
          {scheduleData.map((schedule, index) => (
            <ScheduleDetailsCard
              key={index}
              hospitalName={schedule.hospitalName}
              address={schedule.address}
              time={schedule.time}
              mobileNo={schedule.mobileNo}
              mobileNo1={schedule.mobileNo1}
              mobileNo2={schedule.mobileNo2}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
