import React, { useState } from 'react'
import "./CounterPage.css"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { IoIosPeople } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { GiShakingHands } from "react-icons/gi";



const CounterPage = () => {
    const [counterState, setCounterState] = useState(false)
    return (
        <div className='px-40 py-12'>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className='counter'>
                    <div className='count1 text-center px-5'>
                        <h1 className='text-6*1 font-bold text-black px-5'><IoIosPeople /></h1>
                        <h2 className='text-6*1 font-bold text-black px-5'>{counterState && <CountUp start={0} end={100} duration={2.75}></CountUp>}%</h2>
                        <p className='py-2 text-black font-medium px-5'>placements</p>
                    </div>
                    <div className='count2 text-center px-5'>
                        <h1 className='text-6*1 font-bold text-black px-5'><SiTicktick /></h1>
                        <h2 className='text-6*1 font-bold text-black px-5'>{counterState && <CountUp start={0} end={100} duration={2.75}></CountUp>}%</h2>
                        <p className='py-2 text-black font-medium px-5'>Practical Traning</p>
                    </div>
                    <div className='count3 text-center px-5'>
                        <h1 className='text-6*1 font-bold text-black px-5'><GiShakingHands /></h1>
                        <h2 className='text-6*1 font-bold text-black px-5'>{counterState && <CountUp start={0} end={20} duration={2.75}></CountUp>}+</h2>
                        <p className='py-2 text-black font-medium px-5'>Number of Clients</p>
                    </div>
                    <div className='count4 text-center px-5'>
                        <h1 className='text-6*1 font-bold text-black px-5'><IoIosPeople /></h1>
                        <h2 className='text-6*1 font-bold text-black px-5'>{counterState && <CountUp start={0} end={200} duration={2.75}></CountUp>}+</h2>
                        <p className='py-2 text-black font-medium px-5'>Number of student</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}

export default CounterPage
