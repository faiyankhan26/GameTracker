import ScoreCard from '../Components/ScoreCard';
import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function home() {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [winner, setWinner] = useState(null);

    const MAX_SCORE = 5;

    useEffect(() => {
        if (scoreA < MAX_SCORE && scoreB < MAX_SCORE) {
            return;
        }

        if (scoreA === MAX_SCORE) {
            setWinner("Team A");
            toast.success("Team 'A' Wins!");
        }

        if (scoreB === MAX_SCORE) {
            setWinner("Team B");
            toast.success("Team 'B' Wins!");
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

                    Winner={winner}
                />

                <ScoreCard score={scoreB} teamName="Team B" increaseScore={() => {
                    setScoreB(scoreB + 1);
                }}
                    decreaseScore={() => {
                        setScoreB(scoreB - 1);
                    }}
                    Winner={winner}
                />
            </div>

            {winner ?
                (<p className='text-center text-2xl'>Winner Team is 🏆 <b>{winner}</b> 🏆.
                    Click <b>ResetNow</b> to start again.</p>) : null}

            <div className="flex justify-center mt-4 md:mt-10">
                <button className="bg-orange-500 px-6 py-2 md:py-4 text-2xl md:text-3xl text-white rounded-lg" onClick={() => {
                    setScoreA(0);
                    setScoreB(0);
                    setWinner(null);
                }}>
                    Reset Now
                </button>
            </div>
            <Toaster />
        </div>
    )
}

export default home