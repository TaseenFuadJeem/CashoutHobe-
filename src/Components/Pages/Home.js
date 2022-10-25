import React from 'react';
import bg from '../Assets/circle-scatter-haikei.svg';
import bkash from '../Assets/bkash.svg';
import nagad from '../Assets/nagad.svg';
import rocket from '../Assets/rocket.svg';
import upay from '../Assets/upay.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='bg-cover bg-no-repeat bg-fixed pt-16 h-screen' style={{ backgroundImage: `url(${bg})` }}>

            <div className='mx-auto max-w-screen-xl px-4 sm:px-4 md:px-6'>

                <h1 className='lg:text-6xl text-4xl text-white font-semibold text-center'>Cash Out Hobe?</h1>

                <div className='text-white text-center mt-11'>
                    <p className='lg:leading-loose'>
                        The "Cash Out Hobe?" website serves as a resource for the mobile banking ecosystem in Bangladesh. bKash, Nagad, Rocket, Upay, etc. are all examples of popular mobile banking apps that we often use. We all hate having to pay the cash-out additional fees when withdrawing money from agents. The cash out service fees are difficult to calculate at times. And here's where I figured out how to fix it. Just pick a mobile banking provider is the initial step. To complete the cash out, we must then enter the amount of money we wish to withdraw. After that, you may find out the exact amount of the service charge by clicking the "calculate" button. That's how simple it is, you know.
                    </p>
                </div>

                <div className='border-2 p-10 rounded-3xl border-gray-400 mt-9'>

                    <h2 className='text-2xl text-center text-white'>Please select a mobile banking service</h2>

                    <div className='flex justify-evenly items-center mt-10'>
                        <Link to="/bkash" className='bg-[#DF146E] p-2 w-[176px] h-[147px] rounded-lg relative transition hover:scale-125'>
                            <img src={bkash} className="w-40" alt="" />
                            <div className='flex justify-center'>
                                <p className='text-white absolute bottom-3 font-semibold'>bKash</p>
                            </div>
                        </Link>

                        <Link to="/nagad" className='bg-white p-2 w-[176px] h-[147px] rounded-lg relative transition hover:scale-125'>
                            <img src={nagad} className="w-40" alt="" />
                            <div className='flex justify-center'>
                                <p className='absolute bottom-3 font-semibold'>Nagad</p>
                            </div>
                        </Link>

                        <Link to="/rocket" className='bg-[#8C3493] p-2 w-[176px] h-[147px] rounded-lg relative transition hover:scale-125'>
                            <img src={rocket} className="w-32 mx-auto my-auto" alt="" />
                            <div className='flex justify-center'>
                                <p className='text-white absolute bottom-3 font-semibold'>DBBL Rocket</p>
                            </div>
                        </Link>

                        <Link to="/upay" className='bg-white p-2 w-[176px] h-[147px] rounded-lg relative transition hover:scale-125'>
                            <img src={upay} className="w-24 mx-auto" alt="" />
                            <div className='flex justify-center'>
                                <p className='absolute bottom-3 font-semibold'>Upay</p>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Home;