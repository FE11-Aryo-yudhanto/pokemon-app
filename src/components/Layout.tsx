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
            <div className={`flex flex-col bg-white dark:bg-base-100 w-full md:w-1/2  h-screen`}>
                <Navbar />
                <div className={`h-screen overflow-${overflow}`}>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout