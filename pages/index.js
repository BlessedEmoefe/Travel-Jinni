import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Border } from './components/border';
import { Card } from './components/card';
import { CountDown } from './components/countDown';
import { DateRibbon } from './components/dateRibbon';
import { LanguageTranslator } from './components/languageTranslator';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col-reverse justify-between w-11/12 m-auto pb-1 pt-2 sm:flex-row">
                <CountDown />
                <LanguageTranslator />
            </div>
            <Border />
            <div className="flex flex-col px-5 md:px-14 py-4 md:flex-row justify-between">
                <DateRibbon />
                <Card />

                <div></div>
            </div>
        </div>
    );
}
