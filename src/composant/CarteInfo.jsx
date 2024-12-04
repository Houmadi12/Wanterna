import Lien from "./Lien"

function CarteInfo({ icon, titre, contenu }) {
    return (
        <div className=" w-full md:max-w-sm p-6 bg-white border border-gray-200 shadow">
            {icon}
            <Lien lien="" text={titre} classe="flex justify-center mb-2 text-2xl font-semibold text-gray-900" />
            <p className="mb-3 font-normal text-center text-lg text-gray-500 dark:text-gray-400">
                {contenu}
            </p>
        </div>
    )
}

export default CarteInfo 