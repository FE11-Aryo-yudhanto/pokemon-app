import React from 'react'
import { TbPokeball, TbHome } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="btm-nav flex justify-center w-full sticky bottom-0 z-50">
            <button>
                <Link to={'/'}>
                    <TbHome size={30} />
                </Link>
            </button>
            <button>
                <Link to={'/mypokemon'}>
                    <TbPokeball size={30} />
                </Link>
            </button>
        </footer>
    )
}

export default Footer