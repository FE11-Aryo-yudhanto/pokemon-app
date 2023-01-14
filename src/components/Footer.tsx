import React from 'react'
import { TbPokeball, TbHome } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-black sticky bottom-0 z-50">
            <div className="items-center grid grid-cols-2 w-full">
                <div className='flex justify-center w-full'>
                    <button>
                        <Link to={'/'}>
                            <TbHome size={30} color='white' />
                        </Link>
                    </button>
                </div>
                <div className='flex justify-center w-full'>
                    <button>
                        <Link to={'/mypokemon'}>
                            <TbPokeball size={30} color='white' />
                        </Link>
                    </button>
                </div>

            </div>
        </footer>
    )
}

export default Footer