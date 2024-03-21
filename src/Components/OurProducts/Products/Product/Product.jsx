function Product({ urlImg, title, description, price }) {
  return (
    <div className="w-52 h-80 pb-2 shadow-lg flex flex-col justify-between">
        <div className="my-auto px-2">
            <img className="bg-cover bg-center max-h-[224px] mx-auto bg-white" src={urlImg} alt={title} />
        </div>
        <div className="flex flex-col py-1 px-2">
            <span className="mt-auto font-semibold">{title}</span>
            <small className="pb-2">{description}</small>
            <span className="text-2xl font-semibold">$ {price}</span>
        </div>
    </div>
  )
}

export default Product