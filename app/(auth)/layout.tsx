import Image from 'next/image'
import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image src="/images/bg-img.png" alt="background" fill className="size-full" />
      </div>

      {children}
    </main>
  )
}

export default AuthLayout