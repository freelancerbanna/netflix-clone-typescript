import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

//
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
//
// import useAuth from '../hooks/useAuth'
// import BasicMenu from './BasicMenu'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={classNames(isScrolled ? 'bg-[#0c0b0b]' : undefined)}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="object-contain cursor-pointer"
        />

        {/* <BasicMenu /> */}

        <ul className="hidden space-x-4 md:flex">
          <li className="font-semibold text-white cursor-default headerListLink hover:text-white">
            Home
          </li>
          <li className="headerListLink">TV Shows</li>
          <li className="headerListLink">Movies</li>
          <li className="headerListLink">New & Popular</li>
          <li className="headerListLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden w-6 h-6 sm sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="rounded cursor-pointer"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
