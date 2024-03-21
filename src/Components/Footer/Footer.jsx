import NavigationLinks from "../Header/NavigationLinks";

function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="w-full max-w-5xl mx-auto md:py-16">
        <div className="sm:flex sm:items-center sm:justify-between pb-2 border-b-2">
          <span className="text-xl font-bold">Javi<span className="text-blue-500">Shop</span></span>
          
          <NavigationLinks 
            ulStyles="flex gap-x-5 text-md" 
            liStyles="text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 cursor-pointer font-semibold hover:underline"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
