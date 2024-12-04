import Lien from "./Lien"

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
            <div className="flex flex-col gap-10 md:gap-0 md:flex-row py-12 bg-[#111111]">
                <div className="flex justify-around w-full md:w-2/4">
                    <div>
                        <h1 className="text-white font-bold text-xl">A propos</h1>
                        <div className="flex flex-col gap-2 mt-2">
                            <Lien lien="" text="Entreprise" classe="text-white" />
                            <Lien lien="" text="Localisation" classe="text-white" />
                            <Lien lien="" text="Contacts" classe="text-white" />
                            <Lien lien="" text="Horaires d'ouvertures" classe="text-white" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-xl">Liens utiles</h1>
                        <div className="flex flex-col gap-2 mt-2">
                            <Lien lien="" text="Aide" classe="text-white" />
                            <Lien lien="" text="Politique de confidentialité" classe="text-white" />
                            <Lien lien="" text="Termes et Conditions" classe="text-white" />
                            <Lien lien="" text="FAQ" classe="text-white" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-around w-full md:w-2/4">
                    <div>
                        <h1 className="text-white font-bold text-xl">Service client</h1>
                        <div className="flex flex-col gap-2 mt-2">
                            <Lien lien="" text="Méthodes de paiement" classe="text-white" />
                            <Lien lien="" text="Remboursement" classe="text-white" />
                            <Lien lien="" text="Retour" classe="text-white" />
                            <Lien lien="" text="Expédition" classe="text-white" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-xl">Nous joindre</h1>
                        <div className="flex flex-col gap-2 mt-2">
                            <Lien lien="" text="Twitter" classe="text-white" />
                            <Lien lien="" text="Facebook" classe="text-white" />
                            <Lien lien="" text="Instagram" classe="text-white" />
                            <Lien lien="" text="Linkedin" classe="text-white" />
                        </div>
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