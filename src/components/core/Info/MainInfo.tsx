import RightLayout from "@/components/layout/RightLayout/RightLayout";
import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import PaymentDetails from "../Payment/PaymentDetails";
import Information from "./Information";

const MainInfo = () => {
  return (
    <section className="container mx-auto w-auto  ">
      <div className=" justify-between grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full flex-wrap">
        <main className="px-4 w-auto">
          <div className="my-6 flex-wrap">
            <p className="text-3xl px-4">Confirm & pay</p>
          </div>

          <div className="grid">
            {/* <div className="grid lg:px-4 lg:absolute lg:top-32  xl:px-9 xl:w-2/3"> */}
            <div className="border border-gray-300 rounded-xl p-4 px-4 bg-gray-100 my-3  text-sm">
              <h4 className="flex items-center justify-between text-center">
                Free cancellation{" "}
                <span>
                  <HiOutlineInformationCircle className="" />
                </span>
              </h4>
              <p className=" text-sm text-gray-400 my-1">
                Tickets can be cancelled by 13th December, 2022.
              </p>
            </div>

            <div className="gap-1">
              <h4 className="text-xl flex">Enter your details</h4>
              <h4 className="text-xs text-gray-500 my-3">
                We'll be sending your tickets to the details below. Booking for
                a friend? Add their details.
              </h4>
              <div className="relative border gap-2 border-gray-400  xl:p-1 rounded-xl xl:my-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm border-gray-900 text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Full name{" "}
                  <span className="text-red-500 peer-focus:text-red-500 peer-focus:dark:text-red-500">
                    {" "}
                    *
                  </span>
                </label>
              </div>

              <div className="grid gap-2 xl:grid-cols-2 xl:gap-2 ">
                <div className=" border border-gray-400 w-full xl:p-1 rounded-xl mr-9 ">
                  <select
                    id="countries"
                    className=" text-sm my-1 w-full px-3 py-1 text-gray-400 outline-none   "
                  >
                    <option selected>Country *</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="relative border border-gray-400  xl:p-1  rounded-xl">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute flex gap-2 text-center items-center text-sm border-gray-900 text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    {" "}
                    Phone number{" "}
                    <span className="text-red-500 peer-focus:text-red-500 peer-focus:dark:text-red-500">
                      {" "}
                      *
                    </span>
                  </label>
                </div>
                <div className="relative border border-gray-400  xl:p-1 rounded-xl xl:my-5">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm border-gray-900 text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Full name{" "}
                    <span className="text-red-500 peer-focus:text-red-500 peer-focus:dark:text-red-500">
                      {" "}
                      *
                    </span>
                  </label>
                </div>
                <div className="relative border border-gray-400  xl:p-1 rounded-xl xl:my-5">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm border-gray-900 text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Full name{" "}
                    <span className="text-red-500 peer-focus:text-red-500 peer-focus:dark:text-red-500">
                      {" "}
                      *
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <hr className="my-3" />
            <Information/>

          </div>
        </main>

        <div className="">
          <RightLayout />
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
