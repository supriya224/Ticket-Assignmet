import Image from "next/image";
import { Lock, Plus } from "react-feather";
import { BsTrophyFill } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoChevronBackOutline, IoChevronForward, IoTime } from "react-icons/io5";
import {
  PiCalendarBlankFill,
  PiPiggyBankFill,
  PiStarHalfFill,
  PiTicketFill,
  PiUsersFill,
} from "react-icons/pi";
// import React, { lazy } from "react";

const RightLayout = () => {
  //   // https://images.saymedia-content.com/.image/t_share/MTc2MjY4NDcxMDE2OTU3MTAx/tropical-beach-pictures.jpg
  const image1: string =
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg";

  return (
    <section className="container w-auto mx-auto lg:w-[30rem]  ">
      <main className=" mx-auto px-4 lg:mx-auto lg:p-2 ">
        <div className="border border-gray-300 mx-auto p-3 rounded-xl w-full  md:mx-auto  xl:pt-3 lg:px-5 lg:w-fit xl:w-fit xl:px-5 xl:p-1">
          <div className=" w-full mx-auto relative">
            <h3 className="bg-white text-black w-fit flex gap-2 rounded-lg px-2 py-1 absolute top-4 left-4"><BsTrophyFill/> Best Seller</h3>
            <div className="flex justify-between absolute left-3 right-9 top-24 sm:top-32 md-top-62 md:left-20 md:right-20 lg:left-8  lg:gap-64">
            <span className="bg-gray-200 hover:bg-gray-100 p-2 rounded-full"><IoChevronBackOutline /></span>
            <span  className="bg-gray-200 hover:bg-gray-100 p-2 rounded-full sm: "><IoChevronForward /></span>
            </div>
              
            <Image
            loading="lazy"
              src={image1}
              width={200}
              height={0}
              alt="discription"
              className="w-full rounded-xl h-fit shadow-lg shadow-gray-600 md:mx-auto md:w-[40rem] lg:w-[25rem]"
            />
          </div>
          <div className="my-4 leading-10 md:leading-5 lg:leading-5">
             <h3 className="flex items-center">
              <span>
                <PiStarHalfFill />
              </span>
              4.9 (4.5k) • category
             </h3>
             <p className="text-md text-gray-400 flex items-center">
              Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
              Housef
             </p>
            <h4 className="flex items-center gap-2">
              {" "}
              <span>
                <PiTicketFill />
              </span>{" "}
              ticket type variant
            </h4>
            <h4 className="flex items-center gap-2">
              <span>
                <PiCalendarBlankFill />
              </span>{" "}
              day month date
            </h4>
            <p className="flex items-center text-sm font-light text-gray-400"> Duration: duration</p>
            <h4 className="flex items-center gap-2">
              {" "}
              <span>
                <IoTime />
              </span>{" "}
              time
            </h4>
            <h4 className="flex items-center text-sm font-light text-gray-400">

              Operating hours: time to time
            </h4>
            <h4 className="flex items-center gap-2">
              <span>
                <PiUsersFill />
              </span>{" "}
              5 guests
            </h4>
            <h2 className=" border border-dashed w-full mt-4"></h2>
            <h4 className="flex items-center my-4 justify-between underline text-gray-500">
              View payment summary
              <span>
                <Plus />
              </span>
            </h4>
            <hr className=" my-1" />
            <div className=" my-3  px-1 text-sm">
              <h4 className="flex items-center justify-between text-xl my-2 leading-8">
                {" "}
                Total payable <span> $XXX</span>
              </h4>
              <p className="flex bg-green-100 text-green-600 text-sm w-fit mt-1 mb-3 px-2 rounded-xl text-center items-center gap-1">
                <PiPiggyBankFill /> You saved price{" "}
              </p>
              <p className="flex items-center underline">
                {" "}
                You will be charged in AED{" "}
                <span>
                  <HiOutlineInformationCircle />
                </span>
              </p>
              <button
                type="button"
                className="bg-black my-5 items-center justify-center  text-white p-3 flex rounded-xl w-full gap-3"
              >
                {" "}
                <Lock className="" /> Confirm and Pay
              </button>
            </div>
          </div>
        </div>
       
      </main>
    </section>
  );
};

export default RightLayout;
