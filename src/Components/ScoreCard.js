import React from 'react'
import {
    CirclePlus as IconCirclePlus,
    CircleMinus as IconCircleMinus
} from "lucide-react";

function ScoreCard({ score, increaseScore, decreaseScore, teamName, Winner }) {
    const isWinner = Winner === teamName;
    return (
        <div className='bg-white m-5 w-auto md:w-1/3 rounded-lg shadow-lg'>
            <h2 className='text-3xl text-center my-4 border-b-2 pb-4 text-orange-500 '>{teamName} {isWinner ? "🏆" : " "}</h2>
            <h3 className='text-4xl md:text-8xl text-center text-orange-500'>{score}</h3>

            { Winner? null : (
                <div className="flex justify-around mb-8 mt-3 md:mt-10">

                    <IconCircleMinus
                        color="black"
                        size={55}
                        onClick={decreaseScore}
                    />


                    <IconCirclePlus
                        color="black"
                        size={55}
                        onClick={increaseScore}
                    />

                </div>
            )}
        </div>
    )
}

export default ScoreCard;