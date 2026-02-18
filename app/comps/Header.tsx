import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="bg-gray-950 mb-2 sticky top-0 z-300">
      <div className="container flex mx-auto bg-transparent px-5">
        <h1 className="text-4xl text-orange-500">NWS</h1>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
