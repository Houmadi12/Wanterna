function Footer() {
    return (
        <footer>
            <div>
                
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
        </footer>
    )
}

export default Footer