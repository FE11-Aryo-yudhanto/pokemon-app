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
            <div className={`flex flex-colw-full md:w-1/2`}>
                <div className={`h-screen bg-white dark:bg-base-100 overflow-${overflow}`}>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout