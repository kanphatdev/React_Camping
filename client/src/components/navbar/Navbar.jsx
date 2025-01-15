import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col items-center sm:flex-row gap-4 justify-between py-4 px-8">
        <Logo/>
        <Searchbar/>
        <DropdownListMenu/>
      </div>
    </nav>
  );
};
export default Navbar;
