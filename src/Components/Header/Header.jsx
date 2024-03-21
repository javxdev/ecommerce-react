import NavigationLinks from "./NavigationLinks";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="bg-white/95 w-full top-0 sticky">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4">
        <span className="text-4xl font-bold">Javi<span className="text-blue-500">Shop</span></span>
        
        <NavigationLinks ulStyles="flex gap-x-5 text-md" liStyles="cursor-pointer font-semibold"/>
        
        <SearchInput />
        
        <i className='bx bx-shopping-bag text-4xl cursor-pointer'></i>
      </div>
    </div>
  );
}

export default Header
