function Footer() {
    return (
        <footer>
            <div className="py-10">
                <h1 className="text-xl text-center font-semibold">Wanterma ?</h1>
                <p className="text-center py-4">Abonnez-vous à notre newsletter pour recevoir des mises à jour sur nos dernières offres!</p>

                <form className="max-w-lg mx-auto">
                    <div className="flex">
                        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-1 w-full z-20 text-lg text-gray-900 bg-gray-50 border border-gray-400" placeholder="Email Adress" required />
                            <button type="submit" className="absolute top-0 end-0 p-1 text-sm font-medium h-full text-white bg-[#333333] hover:bg-[#fd7e14]">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-around py-12 bg-[#111111]">
                <div>
                    <h1 className="text-white font-bold text-xl">A propos</h1>
                    <div className="flex flex-col gap-2 mt-2">
                        <a href="#" className="text-gray-500">Entreprise</a>
                        <a href="#" className="text-gray-500">Localisation</a>
                        <a href="#" className="text-gray-500">Contacts</a>
                        <a href="#" className="text-gray-500">Horaires d'ouvertures</a>
                    </div>
                </div>
                <div>
                    <h1 className="text-white font-bold text-xl">Liens utiles</h1>
                    <div className="flex flex-col gap-2 mt-2">
                        <a href="#" className="text-gray-500">Aide</a>
                        <a href="#" className="text-gray-500">Politique de confidentialité</a>
                        <a href="#" className="text-gray-500">Termes et Conditions</a>
                        <a href="#" className="text-gray-500">FAQ</a>
                    </div>
                </div>
                <div>
                    <h1 className="text-white font-bold text-xl">Service client</h1>
                    <div className="flex flex-col gap-2 mt-2">
                        <a href="#" className="text-gray-500">Méthodes de paiement</a>
                        <a href="#" className="text-gray-500">Remboursement</a>
                        <a href="#" className="text-gray-500">Retour</a>
                        <a href="#" className="text-gray-500">Expédition</a>
                    </div>
                </div>
                <div>
                    <h1 className="text-white font-bold text-xl">Nous joindre</h1>
                    <div className="flex flex-col gap-2 mt-2">
                        <a href="#" className="text-gray-500">Twitter</a>
                        <a href="#" className="text-gray-500">Facebook</a>
                        <a href="#" className="text-gray-500">Instagram</a>
                        <a href="#" className="text-gray-500">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-[#1E1E1E]">
                <p className="text-center text-xl text-white">
                     Cette plateforme est réalisée par 
                     <a href="#" className="underline ml-2">PROMISING TEAM</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer