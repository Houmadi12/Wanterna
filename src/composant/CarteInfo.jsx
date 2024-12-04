function CarteInfo({ icon, titre, contenu }) {
    return (
        <div className=" w-full md:max-w-sm p-6 bg-white border border-gray-200 shadow">
            {icon}
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold text-center text-gray-900">{titre}</h5>
            </a>
            <p className="mb-3 font-normal text-center text-lg text-gray-500 dark:text-gray-400">
                {contenu}
            </p>
        </div>
    )
}

export default CarteInfo