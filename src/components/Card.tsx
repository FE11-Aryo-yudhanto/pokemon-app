import { FC } from 'react'

interface CardProps {
    name?: string
    img?: string
    key?: string
    onClick?: () => void
    children?: React.ReactNode;
    children2?: React.ReactNode;
}
const Card: FC<CardProps> = ({ name, img, key, onClick, children, children2 }) => {
    return (
        <div className="card card-compact bg-white dark:bg-base-100 shadow-lg shadow-black dark:shadow-white border-4 border-black dark:border-white m-2" key={key} >
            {children}
            <figure className='w-full h-full p-5'onClick={onClick}>
                <img className='h-full' src={img} alt={name} />
            </figure>
            <div className="card-body">
                <p className="text-center text-black dark:text-white text-xs md:text-md lg:text-lg uppercase font-bold" onClick={onClick}>{name}</p>
            </div>
            {children2}
        </div>
    )
}

export default Card