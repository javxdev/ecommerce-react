import NavigationLinks from "./NavigationLinks";

function Header({bag, removeFromBag, increaseQuantity, decreaseQuantity, clearBag, isEmpty, bagTotal}) {


  return (
    <div className="bg-white/95 w-full top-0 sticky">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-2 md-px-0">
        <span className="text-2xl font-bold">Javi<span className="text-blue-500">Shop</span></span>
        
        <div className="hidden md:flex w-80 items-center bg-neutral-100 border-[1px] border-neutral-500 p-1 rounded-md gap-x-2">
          <input className="bg-transparent w-full text-md pl-2 outline-none border-none" 
          type="text" name="" id="" 
          placeholder="Buscar productos..." maxLength={30}/>
          
          <i className='bx bx-search text-2xl text-neutral-900 font-semibold cursor-pointer'></i>
        </div>

        <NavigationLinks ulStyles="gap-x-5 text-md hidden md:flex" liStyles="py-2 px-3 rounded hover:bg-neutral-100 cursor-pointer text-xl font-['hind']"/>
        
        
        <div className="flex items-center relative cursor-pointer group">

          <i className='bx bx-shopping-bag text-4xl'></i>

          <div className="absolute top-8 -left-64 lg:-left-80 z-10 hidden group-hover:block bg-neutral-100 rounded-lg max-h-[500px] shadow-lg lg:max-h-[700px] overflow-y-auto">

          {isEmpty ? 

          (<div className="flex items-center text-center font-semibold text-xl">
              <h3 className="w-64 lg:w-96 h-20 pt-6">Tu bolsa está vacía  
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
                {bag.map(product => (
                  <tr key={product.id} className="text-center">
                    <td className="p-1 lg:px-4 lg:py-2"><img className="w-10 mx-auto" src={product.image} alt="" /></td>
                    <td className="p-1 lg:px-4 lg:py-2 text-sm">{product.title}</td>
                    <td className="p-1 lg:px-4 lg:py-2">${product.price}</td>
                    <td className="p-1 lg:px-4 lg:py-2">
                      <button
                        type="button"
                        className="w-4 mr-1 bg-black text-white"
                        onClick={() => decreaseQuantity(product.id)}>
                        -
                      </button>
                      {product.quantity}
                      <button
                        type="button"
                        className="w-4 ml-1 bg-black text-white"
                        onClick={() => increaseQuantity(product.id)}>
                        +
                      </button>
                    </td>
                    <td>
                      <i className='bx bx-x bg-red-600 p-1 lg:mr-2 rounded-full text-white'
                      onClick={() => removeFromBag(product.id)}
                      ></i>
                    </td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
            
            <div className="bg-neutral-300 mt-4">
              <p className="pl-4 py-4">Total: <strong>$ {bagTotal}</strong></p>
              <button className="w-full py-4 bg-black text-white"
              onClick={clearBag}
              >Vaciar Bolsa</button>
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