import React from 'react'
import styles from './NotFoundBlock.module copy.scss'

const NotFoundBlock = () => {
    return (
        <div>
            <h1 className={styles.root}>
                <span>😕</span>
                <br />
                Ничего не найдено
            </h1>
            <p className={styles.description}>
                К сожалени данная страница отсутствует в нашем интернет-магазине
            </p>
        </div>
    )
}

export default NotFoundBlock