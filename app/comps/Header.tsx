import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-gray-950 mb-2 sticky top-0">
      <div className="container flex mx-auto bg-transparent">
        <h1 className="text-4xl text-orange-500">NWS</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
