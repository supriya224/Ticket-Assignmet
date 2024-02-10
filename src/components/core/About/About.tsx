import Image from "next/image";
import React from "react";
import { Plus } from "react-feather";
import { RxCross2 } from "react-icons/rx";

const About = () => {
  const url: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgltpJ65I_aN-x8hPd2qIkwcGIbtcpIu8fbV0PCbB1RgWApJxPwQqAjzFzLHiI1zt02c&usqp=CAU";

  return (
    <section className="container mx-auto w-full   ">
      <main className="px-6 w-full xl:grid xl:grid-cols-2 relative grid xl:gap-32  lg:grid-cols-2   ">
        {/* content desgin */}
        <div className="container mx-auto my-6 xl:px-4">
          <h3 className="text-xl  xl:text-2xl">Frequently asked questions</h3>
          <p className="text-sm text-gray-500 my-3  xl:text-base">
            Here are some of your most asked questions
          </p>
        </div>
        {/* right side module design */}
        <div className=" ">
          <div className="border p-2 my-3 border-gray-400 rounded-xl text-sm  sm:p-5 sm:text-lg md:p-5 md:text-lg lg3:p-5 lg:text-lg xl:p-5 xl:text-xl ">
            <h2 className="flex">
              <Plus className="text-center" />
              <span className="px-3">
                {" "}
                What should I do on my first trip to Rome?
              </span>
            </h2>
          </div>
          <div className="border p-2 my-3 border-gray-400 rounded-xl text-sm  sm:p-5 sm:text-lg md:p-5 md:text-lg  lg:p-3 lg:text-lg  xl:px-4 xl:leading-5 xl:text-xl  ">
            <h2 className="flex  xl:my-4">
              {" "}
              <RxCross2 size={20} className="text-center " />{" "}
              <span className="px-3">
                What are some hidden gems to see in Rome?
              </span>
            </h2>
            <p className="text-xs text-gray-500 font-normal px-6 sm:px-8 sm:my-4  sm:text-sm  md:px-8 md:my-4  md:text-sm   lg:px-8 lg:my-4  lg:text-sm xl:px-8 xl:my-4  xl:text-base ">
              {" "}
              Rome is packed with hidden gems. If you love art, don't miss the
              Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
              is a free museum and well worth a quick visit. If you love th
              ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
              the Domus Aurea, and the Baths of Caracalla. For even more hidden
              gems, take a tour of Trastevere, a fascinating neighborhood full
              of history and ambiance.
            </p>
          </div>
          <div className="border  p-2 my-3 border-gray-400 rounded-xl text-sm   sm:p-5 sm:text-lg md:p-5 md:text-lg lg:p-3 lg:text-lg xl:p-5 xl:text-xl ">
            <h2 className="flex">
              <Plus className="text-center" />
              <span className="px-3">
                How much time should I spend in Rome?
              </span>
            </h2>
          </div>
          <div className="border  p-2 my-3 border-gray-400 rounded-xl text-sm  sm:p-5 sm:text-lg md:p-5 md:text-lg  lg:p-3 lg:text-lg xl:p-5 xl:text-xl  ">
            <h2 className="flex">
              {" "}
              <Plus className="text-center" />{" "}
              <span className="px-3">What food is Rome known for?</span>
            </h2>
          </div>
          <div className="border  p-2 my-3 border-gray-400 rounded-xl text-sm  sm:p-5 sm:text-lg md:p-5 md:text-lg  lg:p-3 lg:text-lg xl:p-5 xl:text-xl ">
            <h2 className="flex">
              {" "}
              <Plus className="text-center" />{" "}
              <span className="px-3">
                What is the best way to get around Rome?
              </span>
            </h2>
          </div>
        </div>
        {/* chat button with image desgin */}
        <div className="bg-neutral-100 my-4 py-2 rounded-lg lg:px-4 lg:absolute lg:top-28 lg:left-8 lg:w-[25rem]  xl:px-4 xl:absolute xl:top-28 xl:left-8 xl:w-[25rem]  ">
          <div className=" flex xl:grid xl:grid-cols-2">
            <div className="mx-auto px-3 p-2 leading-6.5 text-sm lg:px-2 lg:text-lg xl:px-2 xl:text-xl">
              <h3>Still need help?</h3>
              <h3 className="mb-3">We’re here for you</h3>
              <button className=" p-1.5 px-4 bg-black text-white rounded-xl">
                Chat with us
              </button>
            </div>
            <div className="">
              <Image
                src={url}
                alt="pic"
                width={150}
                height={10}
                className="mx-9 p-2 rounded-full lg:w-[8rem]  xl:px-2 xl:mx-9"
              />
            </div>
          </div>
        </div>
      </main>
      <hr className="my-8" />
    </section>
  );
};

export default About;
