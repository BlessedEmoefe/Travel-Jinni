import React from 'react';
import styles from '../../styles/Home.module.css';

export const CountDown = () => {
    return (
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
    );
};
