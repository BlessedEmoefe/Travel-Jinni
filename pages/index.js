import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-between w-11/12 m-auto pb-1 pt-2">
                <div>
                    <p className="text-sm">Remaining Days to my Trip</p>

                    <div className="flex">
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>10</h2>
                            <p className={styles.txtSpan}>Weeks</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Days</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>45</h2>
                            <p className={styles.txtSpan}>Hours</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>25</h2>
                            <p className={styles.txtSpan}>Minutes</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="flex text-sm py-5">
                    <p className="px-2">My Trips</p>
                    <div className="flex">
                        <p className="px-2">|</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span>EN (S)</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500"></div>
            <div className="flex px-14 py-4">
                <div className="w-60">
                    <h1 className="font-bold text-xl font-serif py-1">Six Days In Dubai</h1>
                    <ul>
                        <li className="w-8 h-8 flex items-center justify-center">FEB</li>
                        <li className="bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono" >15</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">16</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">17</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">18</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">19</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">20</li>
                    </ul>
                </div>
                <div>
                    <div className="flex pl-40 pt-16">
                        <div className="rounded-full w-20 h-20 p-2 flex items-center justify-center bg-white">
                            <img src="/logo.png" className="w-18 h-18 rounded-full" />
                        </div>
                        <div className="ml-4 text-center border border-white">
                            <h1 className="head-t font-bold font-mono tracking-wide px-3">HILTON HOTEL</h1>
                            <h2 className="bg-white text-black text-xl pb-1">POWERED BY TRAVEL JINNI</h2>
                        </div>
                    </div>
                    <div className="div-w ml-40 text-center border-white border mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                        <h1 className="text-5xl font-serif font-bold pb-5 px-4">Your Trip Awaits You!</h1>
                        <p className="text-sm pb-5">
                            We have taken some time to help plan your trip to make it a memmorable one. Access your calender for even more things you can do on your trip.
                        </p>
                        <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">ACCESS CALENDAR</button>
                    </div>
                </div>
            </div>
        </div >
    );
}
