import NavigationLinks from "./NavigationLinks";
import SearchInput from "./SearchInput";

function Header({cart}) {
  const cartTotal = () => cart.reduce((total, product) => total + (product.price * product.quantity), 0)

  const isEmpty = () => cart.length === 0
  return (
    <div className="bg-white/95 w-full top-0 sticky">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-2 md-px-0">
        <span className="text-2xl font-bold">Javi<span className="text-blue-500">Shop</span></span>
        
        <SearchInput />

        <NavigationLinks ulStyles="gap-x-5 text-md hidden md:flex" liStyles="cursor-pointer text-xl font-['hind']"/>
        
        <div className="flex items-center relative cursor-pointer group">

          <i className='bx bx-shopping-bag text-4xl'></i>

          <div class="absolute top-8 -left-64 lg:-left-80 z-10 hidden group-hover:block bg-neutral-100 rounded-lg max-h-[500px] shadow-lg lg:max-h-[700px] overflow-y-auto">

          {isEmpty() ? 

          (<div className="flex items-center text-center font-semibold text-xl">
              <h3 className="w-64 lg:w-96 h-20 pt-6">El carrito está vacío  
                <i className='bx bx-confused'></i>
              </h3>
          </div>)

          : (
            <>
            <table>
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
                    <td className="p-1 lg:px-4 lg:py-2"><img class="w-10 mx-auto" src={product.image} alt="" /></td>
                    <td className="p-1 lg:px-4 lg:py-2 text-sm">{product.title}</td>
                    <td className="p-1 lg:px-4 lg:py-2">${product.price}</td>
                    <td className="p-1 lg:px-4 lg:py-2">
                      <button
                        type="button"
                        className="w-4 mr-1 bg-black text-white">
                        -
                      </button>
                      {product.quantity}
                      <button
                        type="button"
                        className="w-4 ml-1 bg-black text-white">
                        +
                      </button>
                    </td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
            
            <div className="bg-neutral-300 mt-4">
              <p className="pl-4 py-4">Total: <strong>$ {cartTotal()}</strong></p>
              <button className="w-full py-4 bg-black text-white">Vaciar Bolsa</button>
            </div>
            </>
            )}
          </div>
          
        </div>



      </div>
    </div>
  );
}

export default Header;