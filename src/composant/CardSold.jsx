import Lien from "./Lien"

function CardSold({ produit, prix }) {

    if (!produit || produit.length === 0) {
        return <div>Chargement d'API...</div>
    }

    console.log(produit)
    return (
        <div className="w-full h-full bg-white border border-gray-200 shadow">
            <div className="flex justify-center">
                <img className="rounded-t-lg h-44 w-2/4" src={produit.image} alt="" />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                    {produit.title}
                </h5>
                <p className="mb-3 font-semibold text-[#fd7e14]">
                    {produit.price} €
                </p>
                <Lien lien="" text=" Voir produit" classe="flex justify-center px-3 py-2 text-sm font-medium text-white bg-[#333333] hover:bg-[#fd7e14]" />
            </div>
        </div>
    )
}

export default CardSold