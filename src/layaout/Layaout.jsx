import Footer from "../composant/Footer"
import Navbar from "../composant/Navbar"

function Layaout({ children }) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="min-h-80 bg-blue-100">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layaout