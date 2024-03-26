import NavigationLinks from "./NavigationLinks";
import SearchInput from "./SearchInput";

function Header({cart}) {

  return (
    <div className="bg-white/95 w-full top-0 sticky">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-2 md-px-0">
        <span className="text-2xl font-bold">Javi<span className="text-blue-500">Shop</span></span>
        
        <SearchInput />

        <NavigationLinks ulStyles="gap-x-5 text-md hidden md:flex" liStyles="cursor-pointer text-xl font-['hind']"/>
        
        <div className="flex items-center relative cursor-pointer group">

          <i className='bx bx-shopping-bag text-4xl'></i>

          <div class="absolute top-8 -left-56 lg:-left-96 z-10 hidden group-hover:block bg-neutral-100 rounded-lg shadow-lg max-h-96 overflow-y-auto">

            <table className="">
              <thead>
                <tr>
                  <th className="p-1 lg:px-4 lg:py-2">Imagen</th>
                  <th className="p-1 lg:px-4 lg:py-2">Nombre</th>
                  <th className="p-1 lg:px-4 lg:py-2">Precio</th>
                  <th className="p-1 lg:px-4 lg:py-2">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product.id} class="text-center">
                    <td className="p-1 lg:px-4 lg:py-2"><img class="w-14 mx-auto" src={product.image} alt="" /></td>
                    <td className="p-1 lg:px-4 lg:py-2 text-sm">{product.title}</td>
                    <td className="p-1 lg:px-4 lg:py-2">{product.price}</td>
                    <td className="p-1 lg:px-4 lg:py-2">{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="bg-neutral-300 mt-4">
              <p className="pl-4 py-4">Total pagar: <strong>$599</strong></p>
              <button className="w-full py-4 bg-black text-white">Vaciar Carrito</button>
            </div>

          </div>

        </div>



      </div>
    </div>
  );
}

export default Header;