import { FC } from 'react'

interface CardProps {
    children?: React.ReactNode;
}
const CardDetail: FC<CardProps> = ({ children }) => {
    return (
        <div className="card card-compact bg-white dark:bg-base-100 shadow-lg shadow-black dark:shadow-white border-4 border-black dark:border-white m-2">
            <div className="card-body">
                {children}
            </div>
            
        </div>
    )
}

export default CardDetail