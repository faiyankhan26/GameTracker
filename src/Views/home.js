import ScoreCard from '../Components/ScoreCard';
import React, { useEffect, useState } from "react";

function home() {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);

    useEffect(() => {
        if (scoreA < 10 && scoreB < 10) {
            return;
        }

        if (scoreA === 10) {
            alert("Team A Wins🎉🎊");
        }

        if (scoreB === 10) {
            alert("Team B Wins 🎉🎊");
        }
    }, [scoreA, scoreB]);

    return (
        <div className='bg-orange-100 min-h-screen p-6 md:p-8'>

            <h1 className='text-center text-3xl md:text-5xl py-4 md:py-8 border-2 border-orange-400 
            border-dashed rounded-r-md text-Orange-500 bg-white'>
                GameTracker
            </h1>

            <div className='flex flex-col md:flex-row justify-center md:justify-around md:mt-10'>
                <ScoreCard score={scoreA} teamName="Team A" increaseScore={() => {
                    setScoreA(scoreA + 1);
                }}
                    decreaseScore={() => {
                        setScoreA(scoreA - 1);
                    }}

                />

                <ScoreCard score={scoreB} teamName="Team B" increaseScore={() => {
                    setScoreB(scoreB + 1);
                }}
                    decreaseScore={() => {
                        setScoreB(scoreB - 1);
                    }}
                />
            </div>

            <div className="flex justify-center mt-2">
                <button className="bg-orange-500 px-8 py-3 text-3xl text-white rounded-lg" onClick={() => {
                    setScoreA(0);
                    setScoreB(0);
                }}>
                    Reset Now
                </button>
            </div>

        </div>
    )
}

export default home