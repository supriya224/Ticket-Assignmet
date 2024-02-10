import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mx-auto grid text-gray-300   bg-black">
      <div className="container mx-auto h-auto  px-6">
        <div className=" ">
          <h2 className=" text-6xl my-20">tickete</h2>
        </div>
        <hr className="my-2" />
        <div className="text-xs w-full">
          <ul className="flex gap-2 text-xs">
            <li className="flex">Privacy policy •</li>
            <li className="flex">Temrs of usage •</li>
            <li className="flex">Cancellation policy •</li>
            <li className="flex">Sitemap</li>
          </ul>
          <p className="my-4">made with ❤ </p>
        </div>
      </div>
    </footer>
  );
};
