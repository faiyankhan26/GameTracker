import {SquarePlus as IconSquarePlus} from "lucide-react";
import React from 'react'

function home() {
    return (
        <div className='bg-blue-100 min-h-screen p-8'>
            <h1 className='text-center text-5xl py-8 border-2 border-blue-400 
            border-dashed rounded-r-md text-blue-500 bg-white'>
                GameTracker
            </h1>

            <div className='flex justify-around'>
                <div className='bg-white m-5 w-1/3 rounded-lg'>
                    <h2 className='text-3xl text-center my-4 border-b-2 pb-4 text-blue-500 '>Team A</h2>
                    <h3 className='text-8xl text-center'>0</h3>
                    <div>
                    <IconSquarePlus color="black"/>
                    </div>
                </div>

                <div className='bg-white m-5 w-1/3 rounded-lg'>
                    <h2 className='text-3xl text-center my-4 border-b-2 pb-4 text-blue-500 '>Team B</h2>
                    <h3 className='text-8xl text-center'>0</h3>
                    <div>
                    <IconSquarePlus color="black"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default home