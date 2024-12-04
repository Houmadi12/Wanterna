import Lien from "./Lien"

function CardPromo({produit}) {
    if (!produit || produit.length === 0) {
        return <div>Chargement d'API...</div>
    }

    // console.log(produit)
    return (
        <div className="flex items-center h-full bg-white border border-gray-200 shadow p-3 md:py-6 md:px-9">
            <div className="flex flex-col w-8/12 justify-start">
                <h1 className="mb-2 text-xl text-orange-500 font-bold tracking-tight dark:text-white">
                    {produit.title}
                </h1>
                <p className="mb-3 font-light text-xl pt-4 text-gray-700 dark:text-gray-400">
                    {produit.category}
                </p>
                <div className="py-2">
                    <Lien lien="" text="Acheter maintenant" classe=" bg-[#333333] hover:bg-[#fd7e14] text-white text-[12px] md:text-md-lg md:px-4 md:py-3" />
                </div>
            </div>
            <div className="h-full w-4/12">
                <img
                    className="w-full rounded-t-lg h-full"
                    src={produit.image} alt="" />
            </div>
        </div>

    )
}

export default CardPromo