import { useState, useEffect } from 'react';

function Products() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className='max-w-5xl mx-auto flex flex-wrap gap-y-20 gap-x-5 my-10'>

            {data?.map((product) =>
                <div key={product.id} className="w-60 h-96 pb-2 shadow-lg flex flex-col justify-between">
                    <div className="my-auto px-2 ">
                        <img className="bg-cover  max-h-[200px] bg-center mx-auto bg-white" 
                        src={product.image} alt={product.title} />
                    </div>
                    <div className="h-1/2 flex flex-col justify-between py-1 px-2">
                        <span className="pt-10">{product.title}</span>
                        <div className='flex justify-between font-semibold'>
                          <span className='text-2xl'>$ {product.price}</span>
                          <i className='bx bx-cart-add cursor-pointer text-3xl p-1'></i>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Products;
