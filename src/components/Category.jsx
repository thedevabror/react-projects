import React from 'react'
import { Bags, Clothes, Shoes } from '../utils/svgs'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold'>O'zingizga kerak bo'lgan bo'limni tanlang</h1>
        <div className='grid sm:grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-3 py-10'>
            <Link className='bg-[#f4f4f5] p-10 flex justify-center gap-10 rounded-lg'>
                <div>
                    <Clothes />
                </div>
                <div>
                    <h1>Kiyimlar</h1>
                    <p>983 ta maxsulot bor</p>
                </div>
            </Link>
            <Link className='bg-[#f4f4f5] p-10 flex justify-center gap-10 rounded-lg'>
                <div>
                    <Bags />
                </div>
                <div>
                    <h1>Sumkalar</h1>
                    <p>142 ta maxsulot bor</p>
                </div>
            </Link>
            <Link className='bg-[#f4f4f5] p-10 flex justify-center gap-10 rounded-lg'>
                <div>
                    <Shoes />
                </div>
                <div>
                    <h1>Oyoq kiyimlar</h1>
                    <p>476 ta maxsulot bor</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Category