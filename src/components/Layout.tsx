import React, { FC } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
    overflow: string
}

const Layout: FC<LayoutProps> = ({ children, overflow }) => {
    return (
        <div className='flex flex-row justify-center bg-blue-900 h-screen '>
            <div className={`bg-white w-full md:w-1/2 overflow-${overflow} h-screen`}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout