"use client"

import Link from "next/link"
import { ModeToggle } from "./ModeToggl"

export function Header() {
  return (
    <>
      <header className='flex my-5 justify-between'>
        <Link href='/' className='text-lg'>
          Home
        </Link>
        <ModeToggle />
      </header>
    </>
  )
}
