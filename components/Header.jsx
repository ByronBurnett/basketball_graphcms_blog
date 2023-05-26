import React from 'react'
import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import Image from "next/image"
 

const Header = () => {
  
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  
  
  return (
    <div className="container mx-auto px-10 mb-8">
       <div className="border-b w-full inline-block border-blue-400 py-8">
          <div className="md:float-left block">
            <Link href="/">
                <div className="cursor-pointer">
                <Image src="/White logo - no background.png" width="300" height="50" />
                </div>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                      {category.name}
                    </span>
                </Link>
            ))}
          </div>
       </div>
    </div>
  )
}

export default Header