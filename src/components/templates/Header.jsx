import NavLinks from "../organisms/NavLinks";
import Profile from "../organisms/Profile";
const Header = () => {
  return (
    <div className="header bg-[#181A1C] flex flex-row items-center justify-between px-5 py-2 lg:px-[80px] lg:py-[25px] sticky top-0 z-100">
      <NavLinks />
      <Profile />
    </div>
  );
};

export default Header;
