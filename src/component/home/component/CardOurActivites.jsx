import React from 'react'

export default function CardOurActivites(props) {
    return (
        <div className="max-w-auto lg:mx-0 md:mx-0 mx-5 shadow-md bg-white rounded-lg hover:shadow-lg dark:bg-white hover:opacity-90 transition duration-500">
            <div className='w-full h-48 overflow-auto'>
                <img
                    alt="cover"
                    className="w-[100%] h-50"
                    src={props.image}
                />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-md tracking-widest font-bold tracking-tight text-gray-900 dark:text-[#253C95] uppercase line-clamp-2">
                    {props.title}
                </h5>
                <p className="mb-3 h-40 font-normal grid-flow-row text-gray-700 dark:text-gray-400 line-clamp-5">
                    {props.description}
                </p>
            </div>
        </div>
    )
}
