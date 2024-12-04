function CardTandance({ produit }) {

    if (!produit || produit.length === 0) {
        return <div>Chargement d'API...</div>
    }

    return (
        <div className="flex w-full h-full items-center bg-white shadow">
            <div className="w-2/4">
                <img className="w-full h-full sm:h-48 md:h-96" src={produit.image} alt="" />
            </div>
            <div className="flex flex-col w-2/4 h-full justify-center bg-[#EEE8AA] px-2 md:px-14 lg:px-20">
                <h5 className="mb-2 text-[10px] md:text-md lg:text-2xl font-bold tracking-tight text-gray-900">
                    {produit.title}
                </h5>
                <p className="mb-3 text-[7px] md:text-xl font-normal text-black">
                    {produit.description}
                </p>
                <div>
                    <button type="button" className=" bg-[#333333] hover:bg-[#fd7e14] text-white text-xs md:text-lg px-3 py-2">Acheter maintenant</button>
                </div>
            </div>
        </div>
    )
}

export default CardTandance