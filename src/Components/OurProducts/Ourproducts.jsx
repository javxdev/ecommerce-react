import Products from './Products/Products'

function Ourproducts({data, addToBag}) {


  return (
    <div className='pt-28' id='NuestrosProductos'>
        <h2 className=' text-4xl text-center font-bold'>Nuestros Productos</h2>
        <p className='text-center text-sm pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, sunt</p>
        <div className='max-w-5xl mx-auto'>
            <Products
            addToBag={addToBag}
            data={data}
            />
        </div>
    </div>
  )
}

export default Ourproducts