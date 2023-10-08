import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import CartCountBadge from "../cart/CartCountBadge";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="container lg:block">
        <div className="flex justify-between items-center pt-8">
          <h1 className="lg:text-4xl text-2xl font-medium uppercase font-serif text-gray-800  ">
            F&#128512;DIE
          </h1>

          <div className="relative w-full max-w-[500px] hidden lg:block">
            <input
              type="text"
              placeholder="Search Product..."
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full "
            />
            <BsSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 "
              size={20}
            />
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-4">
              <div className="icon-wrapper">
                <AiOutlineUser />
              </div>
              <div className="icon-wrapper relative">
                <AiOutlineShoppingCart />
                <CartCountBadge size="w-[25px] h-[25px]" />
              </div>
            </div>
          </div>
          <FaBarsStaggered
            size={25}
            className="block lg:hidden cursor-pointer border-none outline-none "
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
