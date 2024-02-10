"use client";
import React from "react";

const Information = () => {
  return (
    <section className="container mx-auto w-full">
      <main className="container mx-auto px-4 py-3">
        <div>
          <h4 className="text-xl">Additional information</h4>
          <h4 className="text-gray-500 font-normal text-sm">
            We need a few more details to complete your reservation.
          </h4>
        </div>
        <div className="my-5">
           <div  className=" my-2 xl:grid xl:grid-cols-2 xl:gap-3">
             <div className="relative my-5 border border-gray-400 rounded-xl">
             <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 p-1 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
             />
             <label
              htmlFor="floating_outlined"
              className="absolute text-sm border-gray-900 text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
             >
              Input label <span className="text-red-500"> *</span>
            </label>
          </div>
          {/* select */}
          <div className=" border my-5 border-gray-400 w-full rounded-xl">
            <label htmlFor="countries" className=""></label>
            <select
              id="countries"
              className=" text-sm my-2 w-full px-3 py-1 text-gray-400 outline-none   "
            >
              <option selected>Multiselect *</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          </div>
          <div className=" border border-gray-400 w-full rounded-xl">
            <label htmlFor="countries" className=""></label>
            <select
              id="countries"
              className=" text-sm my-2 w-full px-3 py-1 text-gray-400 outline-none   "
            >
              <option selected>Multiselect *</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <hr />
      </main>
    </section>
  );
};

export default Information;
