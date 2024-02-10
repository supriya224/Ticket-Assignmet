import { HelpCircle, Lock } from "react-feather";
import { IoMdArrowBack } from "react-icons/io";

export const Header: React.FC = () => {

  return (
    <header className="items-center mx-auto w-full text-center">
      <div className="container mx-auto w-auto flex p-4 px-6 justify-between">
        <IoMdArrowBack size={25} className="text-gray-700" />
        {/* <h1 className=" font-bold text-4xl">tickete</h1> */}
        <p className="flex text-gray-500 text-center">
          <Lock /> <span className="pl-1">Checkout</span>
        </p>

        <p className="flex text-center items-center text-gray-500 ">
          <HelpCircle size={20} />
          {/* <span className="p-1">Help</span> */}
        </p>
      </div>
      <div className=" items-center">
        <h3 className="bg-black text-white text-center p-2 mb-12">
          Holding your tickets for 30.00
        </h3>
      </div>
    </header>
  );
};

