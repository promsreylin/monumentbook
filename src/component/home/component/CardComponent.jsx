import { EyeOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import React from 'react'
import { Link } from 'react-router-dom'

export default function CardComponent(props) {
    return (
        <div className="max-w-auto lg:mx-0 md:mx-0 mx-5 shadow-md bg-white rounded-lg hover:shadow-lg dark:bg-white hover:opacity-90 transition duration-500">
            <Link to='/view'>
                <div className='w-full h-48 overflow-auto'>
                    <img
                        alt="cover"
                        className="w-[100%] h-50"
                        src={props.image}
                    />
                </div>
            </Link>
                <div className="p-5">
                    <p className="inline-flex w-32 text-md items-center tracking-widest px-3 py-2 font-medium text-center text-white bg-[#253C95] transition duration-300 hover:bg-[##213686] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#253C95] dark:hover:bg-[##213686] dark:focus:ring-blue-800">
                        $ {props.price}</p>
                    <h5 className="mb-2 mt-5 text-md tracking-widest font-bold tracking-tight text-gray-900 dark:text-[#253C95] uppercase line-clamp-1">
                        {props.title}
                    </h5>
                    <p className="mb-3 font-normal grid-flow-row h-12 text-gray-700 dark:text-gray-400 line-clamp-2">
                        {props.description}
                    </p>
                    <div className="flex justify-between border-t-2 pt-2 px-2 border-[#253C95]">
                        <div className='flex'>
                            <FaHeart key="heart" style={{ color: '#292D77', fontSize: '24px' }} />
                            <span className='pl-2 text-gray-500'>Favorite</span>
                        </div>
                        <Link to='/cart'>
                        <div className='flex'>
                            <FaCartArrowDown key="cart" style={{ color: '#292D77', fontSize: '24px' }} />
                            <span className='pl-2 text-gray-500'>Add to cart</span>
                        </div>
                        </Link>
                    </div>
                </div>
        </div>
    )
}
