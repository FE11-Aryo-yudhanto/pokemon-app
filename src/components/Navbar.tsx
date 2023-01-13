import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="flex-1">
                <img src="https://www.freeiconspng.com/thumbs/pokeball-png/free-pokeball-download-3.png" alt="pokeball" className='w-10'/>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Pokemon</Link>
            </div>
        </div>
    )
}

export default Navbar