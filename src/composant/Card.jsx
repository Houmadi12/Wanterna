function Card({ produit }) {

    if (!produit || produit.length === 0) {
        return <div>Chargement d'API...</div>
    }

    return (
        <div className="flex items-center bg-white border-gray-200 shadow py-6 px-9 ">
            <div className="flex flex-col w-full md:w-8/12 justify-start">
                <h1 className="mb-2 text-2xl md:text-5xl text-orange-500 font-bold tracking-tight dark:text-white">
                    {produit.title}
                </h1>
                <p className="mb-3 font-light text-xl pt-4 text-gray-700 dark:text-gray-400">
                    {produit.description}
                </p>
                <div>
                    <button type="button" className=" bg-[#333333] hover:bg-[#fd7e14] text-white text-xl px-4 py-3">Acheter maintenant</button>
                </div>
            </div>
            <div className="h-full hidden md:block w-4/12">
                <img
                    className="w-full rounded-t-lg h-96"
                    src={produit.image} alt="" />
            </div>
        </div>

    )
}

export default Card