import NavigationLinks from "./NavigationLinks";
import SearchInput from "./SearchInput";

function Header() {

  return (
    <div className="bg-white/95 w-full top-0 sticky">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-2 md-px-0">
        <span className="text-2xl font-bold">Javi<span className="text-blue-500">Shop</span></span>
        
        <SearchInput />

        <NavigationLinks ulStyles="gap-x-5 text-md hidden md:flex" liStyles="cursor-pointer text-xl font-['hind']"/>
        
        <div className="flex items-center relative cursor-pointer">
          <span className="hidden md:flex items-center justify-center rounded-full text-white bg-red-500 size-6 -right-2 bottom-0 absolute"></span>
          <i className='bx bx-shopping-bag text-4xl hidden md:block'></i>
        </div>
        <i className='bx bx-menu-alt-right text-4xl md:hidden'></i>
      </div>
    </div>
  );
}

export default Header;