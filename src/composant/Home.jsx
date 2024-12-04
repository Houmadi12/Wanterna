import { useEffect, useState } from "react";
import Layaout from "../layaout/Layaout"
import axios from "axios";
import Card from "./Card";
import CarteInfo from "./CarteInfo";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import CardPromo from "./CardPromo";
import CardSold from "./CardSold";
import CardTandance from "./CardTandance";


function Home() {
    const [products, setProducts] = useState([]);
    const url1 = 'https://fakestoreapi.com';

    // Les objet tableau des cards groupe 1
    const cartesInfo = [
        {
            titre: "meilleurs prix",
            produit: products[1],
            contenu: "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
            icon: <div className="flex justify-center text-[#fd7e14] text-7xl"><FaMoneyBillAlt /></div>
        },
        {
            titre: "meilleurs prix",
            contenu: "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
            icon: <div className="flex justify-center text-[#fd7e14] text-7xl"><MdLocalShipping /></div>
        },
        {
            titre: "meilleurs prix",
            contenu: "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
            icon: <div className="flex justify-center text-[#fd7e14] text-5xl py-2"><BsCheckCircleFill /></div>
        }
    ]

    // Les objet tableau des cards groupe 2
    const cardsPromo = [
        {
            produit: products[1]
        },
        {
            produit: products[2]
        }
    ]

    // Les objet tableau des cards groupe 3
    const CardsSold = [

        {
            produit: products[7]
        },
        {
            produit: products[19]
        },
        {
            produit: products[16]
        },
        {
            produit: products[17]
        },
        {
            produit: products[8]
        }

    ]

    useEffect(() => {
        // Récupération des produits
        axios.get(`${url1}/products`)
            .then(res => {
                const product = res.data;
                setProducts(product);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <Layaout>
            <div className="py-7 mx-2 md:mx-28">
                <div>
                    <Card produit={products[0]} />
                </div>
                <div className="flex flex-col md:flex-row gap-4 pt-6">

                    {
                        cartesInfo.map((cartInfo, index) => <CarteInfo
                            key={index}
                            titre={cartInfo.titre}
                            icon={cartInfo.icon}
                            contenu={cartInfo.contenu}
                        />)
                    }
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {
                        cardsPromo.map((carPromo, index) => <div key={index}>
                            <CardPromo produit={carPromo.produit} />
                        </div>)
                    }
                </div>
                <div className="flex justify-between py-4">
                    <h5 className="text-xl font-medium">EN SOLDES</h5>
                    <a href="#" className="hover:text-[#fd7e14]">VOIR TOUT</a>
                </div>
                <div className="flex flex-col md:flex-row w-12/12 flex-wrap">
                    {
                        CardsSold.map((crdSold, index) => <div key={index} className=" w-full md:w-3/12 pr-0 md:pr-4 py-2">
                            <CardSold produit={crdSold.produit} />
                        </div>)
                    }
                </div>
                <div className="h-80 md:h-[30rem]">
                    <CardTandance produit={products[15]} />
                </div>
            </div>
        </Layaout>
    )
}

export default Home