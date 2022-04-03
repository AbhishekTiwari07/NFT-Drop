import React from 'react'

import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import {useEffect} from 'react'


const start = () => {
    (useEffect(()=>{
        console.log('Im Abhishek')
    }, []))
}

const NFTDropPage = ()=>{

    start()

    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            
            <div className='lg:col-span-4 bg-gradient-to-br from-blue-300 to-pink-600'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    <div className='bg-gradient-to-br from-yellow-300 to-purple-600 p-2 rounded-xl'>
                        <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://www.arweave.net/LQ5OiMzcwvIEJLTZ28UrW07FJEFGv9epEG098HO4N-w?ext=gif" alt="Image" />
                    </div>
                    <div className='p-5 text-center space-y-2'>
                        <h1 className='text-4xl font-bold text-white'>Harry Puttar and Fam</h1>
                        <h2 className='text-xl text-gray-200'>Harry Puttar and Fam is back with new range of NFTs</h2>
                    </div>
                </div>
            </div>

            <div className='lg:col-span-6 flex flex-1 flex-col p-12 '>
                <div className='flex items-center justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                        The {' '}
                        <span className='font-extrabold underline decoration-pink-600/50'>
                            HARRY PUTTAR AND FAM
                        </span> {' '} NFT Market Place
                    </h1>
                    <button onClick={() => address? disconnect() : connectWithMetamask()} className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
                        {address? 'Sign Out': 'Sign In'}
                    </button>
                </div>

                <hr className='my-2 border '/>
                {address && (
                    <p className='text-center text-sm text-pink-300'>Your wallet ID is {address.substring(0,5)}...{address.substring(address.length - 5, address.length)}</p>
                )}

                <div className='mt-10 flex flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0'>
                    <img className='w-80 object-cover pb-10 lb:h-40' src="https://i.pinimg.com/originals/8a/8f/3a/8a8f3aa0d467a7e4800fbd82ac49a08b.jpg" alt="" />
                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>Harry Puttar Collection | NFT Drop</h1>
                    <p className='pt-2 text-xl text-green-400'>17/21 NFT claimed</p>
                </div>

                <button className='mt-10 h-16 w-full rounded-full bg-red-600 text-white'>
                    Mint NFT (0.01 ETH)
                </button>
            </div>
        </div>
    )
}

export default NFTDropPage