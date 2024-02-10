import Image from "next/image";
import React from "react";
import { Lock } from "react-feather";
import { BsApple, BsGoogle } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { PiCreditCard, PiPiggyBankFill } from "react-icons/pi";
import { RiRecordCircleFill } from "react-icons/ri";
import About from "../About/About";

const PaymentDetails = () => {
  // const labe
  const url: string =
    "https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png";
  const url1: string =
    "https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png";
  const url2: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9oSOUTstDq9lXaJc_8fV1L2VnrxVvo9t1TLUqQOSxwGoXaw_mGlphKjTAfcwt8Cywos&usqp=CAU";
  return (
    <>
  
    <section className="container mx-auto  ">
      {/* b my-48 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 */}
      <main className="container mx-auto px-4 py-3 lg:mx-1 lg:w-1/2 ">
        {/* main content */}
        <div className="">
          <h3 className="text-xl my-3">Select your mode of payment</h3>
          <h3 className="text-sm text-gray-500">
            Payments with Tickete are secure and encrypted.
          </h3>
        </div>
        {/* main content end */}

        {/* second card component */}
        <div className="border border-gray-400 my-6 p-3 rounded-xl  sm:w-full ">
          <div className="flex py-3 px-2 justify-between text-center items-center">
            <h4 className="flex items-center gap-3">
              <PiCreditCard />
              <span>Credit & debit card</span>
            </h4>
            <RiRecordCircleFill />
          </div>
          {/* all icons is here */}
          <div className="flex gap-3 ">
            <Image
              src={url}
              alt="image"
              width={30}
              height={20}
              className="border border-gray-400 px-1 rounded-lg"
            />
            <Image
              src={url1}
              alt="img"
              width={30}
              height={20}
              className="border border-gray-400 px-1  rounded-lg"
            />
            <Image
              src={url2}
              alt="pic"
              width={30}
              height={20}
              className="border border-gray-400 px-1 rounded-lg"
            />
          </div>
          {/* card input field */}

          <div className="my-2 px-2 gap-2 relative ">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 xl:grid xl:grid-cols-2 xl:gap-6">
            <div className="relative border my-4 xl:my-0 border-gray-400 rounded-xl">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm border-gray-900 text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name on card <span className="text-red-500"> *</span>
              </label>
            </div>
            <div className="relative  my-4 xl:my-0 border border-gray-400 rounded-xl">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="absolute flex gap-2 text-center items-center text-sm border-gray-900 text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                <PiCreditCard /> Card Number{" "}
                <span className="text-red-500"> *</span>
              </label>
            </div>
            <div className="relative  my-4 xl:my-0 border border-gray-400 rounded-xl">
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
                Expiry date <span className="text-red-500"> *</span>
              </label>
            </div>
            <div className="relative border xl:my-0  my-4 border-gray-400 rounded-xl">
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
                CVV/CVC <span className="text-red-500"> *</span>
              </label>
              </div>
            </div>
            <hr className="my-8" />
            {/* prices here */}
            <div className=" leading-9 xl:justify-between">
              <p className="flex bg-green-100 text-green-500 text-sm w-fit px-1 rounded-xl text-center items-center gap-1 xl:px-1">
                <PiPiggyBankFill /> You saved price
              </p>
              <p className="">Total Payable: $XXX</p>
              <h3 className="underline text-gray-400 text-sm flex text-center items-center gap-2">
                You will be charged in AED <HiOutlineInformationCircle />
              </h3>
            </div>
            {/* button here */}

            <div className="mx-2 ">
              <h3 className="text-xs my-2">
                By clicking “confirm & pay”, you agree to{" "}
                <span className="text-blue-400">
                  {" "}
                  Tickete’s general terms and conditions
                </span>{" "}
                and <span className="text-blue-400"> cancellation policy.</span>
              </h3>
              <button
                type="button"
                className="bg-black items-center justify-center  text-white p-3 flex rounded-xl w-full gap-3"
              >
                {" "}
                <Lock className="" /> Confirm and Pay
              </button>
            </div>
          </div>
        </div>
        {/* second card component  end */}

        <div className="my-2">
          <p className="border border-gray-400 text-gray-400 gap-9 my-5 p-3 flex items-center rounded-xl justify-between text-center ">
           <h4 className="flex gap-2"><span className="flex items-center gap-0.5 text-xs border border-gray-400 bg-gray-200 p-0.5 rounded-md px-1"><BsApple/>Pay</span> Coming soon</h4> <span className="w-8 h-8 bg-gray-200 p-2 border border-gray-300 rounded-full  "></span>
          </p>
          <p className="border border-gray-400 text-gray-400 gap-9 my-5 p-3 flex items-center rounded-xl justify-between text-center ">
           <h4 className="flex gap-2"><span className="flex text-xs items-center gap-0.5   border border-gray-400 bg-gray-200 p-0.5 rounded-md px-1"><BsGoogle/>Pay</span> Coming soon</h4> <span className="w-8 h-8 bg-gray-200 p-2 border border-gray-300 rounded-full  "></span>
          </p>
        </div>
        <hr />
        <div className="my-6">
          {/* <div className=" leading-9"> */}
            {/* <p className="flex bg-green-50 text-green-500 border border-green-600 text-xs w-fit px-2 rounded-xl text-center items-center gap-1">
              <PiPiggyBankFill /> You saved price
            </p> */}
            <p>Total Payable: $XXX</p>
            <div className=" my-4 p-3 border border-gray-400 rounded-xl lg:text-xl xl:text-xl">
              <h3 className="flex items-center gap-3"><span>
                <HiOutlineInformationCircle />
              </span> You will be charged in AED</h3>
              <p className="text-xs px-6 text-gray-500 xl:text-base">
                The price shown here is in US Dollar (USD) as per the current
                conversion rate. You will be charged in United Arab Emirates
                Dirham (AED).
              </p>
            </div>
          </div>
        {/* </div> */}
        <hr className="mb-0"/>
      </main>
    </section>
    {/* <About/> */}
    </>
  );
};

export default PaymentDetails;
