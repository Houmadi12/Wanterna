import { Link, useLocation } from "react-router-dom"

function Navbar() {

    let {pathname} = useLocation();
    let subpage = pathname.split('/')?.[1];
    // console.log(subpage)

    function Linkness (type = null){
        if(subpage === ''){
            subpage = 'tous'
        }

        let classes = 'block py-2 px-3 md:p-2 text-base'
        let classes1 = 'text-xs px-1 font-bold rounded ml-1'
        
        if(type === subpage){
              // Classe pour la page active
            classes += ' text-white bg-[#E40046]'
            classes1 += ' bg-white text-[#E40046]'
        }else{
            classes += ' text-red-700'
            classes1 += ' bg-[#E40046] text-white'
        }

        return {classes, classes1};
    }

    return (
        <nav className="border-gray-200 bg-white shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-32">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl  whitespace-nowrap text-[#E40046] text-[20px] font-bold ">Wanterma</span>
                </Link>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden md:flex py-3  w-full md:w-auto">
                    <ul className="flex flex-col justify-content items-center font-medium  bg-gray-50 md:space-x-1 md:flex-row">
                        <li>
                            <Link to={'/tous'} href="#" className={Linkness('tous').classes}>Tous</Link>
                        </li>
                        <li>
                            <Link to={'/hommes'} href="#" className={Linkness('hommes').classes}>Hommes</Link>
                        </li>
                        <li>
                            <Link to={'/femmes'} className={Linkness('femmes').classes}>Femmes</Link>
                        </li>
                        <li>
                            <Link to={'/enfants'} className={Linkness('enfants').classes}>Enfants</Link>
                        </li>
                        <li>
                            <Link to={'/ventes'} className={Linkness('ventes').classes}>Vente</Link>
                        </li>
                        <li>
                            <Link to={'/Chariots'} className={Linkness('Chariots').classes}>Chariot<span className={Linkness('Chariots').classes1}>0</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar