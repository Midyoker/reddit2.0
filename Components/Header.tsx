import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDownIcon,
  BeakerIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
  UserIcon,
}
  from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
  StarIcon,
}
  from "@heroicons/react/outline";
  import { signIn,useSession } from 'next-auth/react'
  import { signOut} from 'next-auth/react'




function Header() {
  const {data: session} = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative mt-1 flex-shrink-0 cursor-pointer">
        <Image
          src="https://ik.imagekit.io/pgvf1rv1sw/download__1_.png?updatedAt=1683707720304"
          alt="reddit logo"
          height={80}
          width={100}
        />
      </div>
      <div className="mx-7 flex item-center">
        <HomeIcon className="h-10 w-6" />
        <p className="ml-2 mt-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-7 w-5 mt-2" />
      </div>
      <form className="flex flex-1 items-center space-x-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-grey-400" />
        <input type="text" placeholder="Search reddit" className="flex-1 bg-transparent outline-none" />
        <button type="submit" hidden />
      </form>
      <div className="flex items-center space-x-2 text-gray-500 mx-5 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {session ? (
      <div  onClick={() => signOut()} className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image 
          src="https://ik.imagekit.io/pgvf1rv1sw/download__2_.png?updatedAt=1683721331356"
          alt=""
          height={30}
          width={30}
          />
        </div>
        <div className="flex-1 text-xs">
          <p className='truncate'>{session?.user?.name}</p>
        <p className='text-gray-400 '>1 karma</p>
        </div>
        <ChevronDownIcon className="h-5 flex-shrink-0 " />
      </div>
        ): (  
        
      <div  onClick={() => signIn()} className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image 
          src="https://ik.imagekit.io/pgvf1rv1sw/download__2_.png?updatedAt=1683721331356"
          alt=""
          height={30}
          width={30}
          />
        </div>
        <p className='text-gray-400 '>Sign In</p>
      </div>
        )}
    </div>
  );
}

export default Header;