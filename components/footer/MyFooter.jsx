import React from 'react'
import Space from '../body/body-No1/space/Space'
import style from '../footer/MyFooter.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';

function MyFooter() {
    return (
        <>
            <Space />
            <div className={style.bigFooter}>
                <div className={style.no1}>
                    <h3>Panto</h3>
                    <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <div>
                        Copyright © 2021
                    </div>
                </div>
                <div className={style.no2}>
                    <p className={style.textAll}>Services</p>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                </div>
                <div className={style.no2}>
                    <p className={style.textAll}>Furniture</p>
                    <p>Beds</p>
                    <p>All</p>
                </div>
                <div className={style.no2}>
                    <p className={style.textAll}>Follow Us</p>
                    <div className={style.end}>
                        <FaFacebookF className={style.icon}/>
                        <p>Facebook</p>
                    </div>
                    <div className={style.end}>
                        <SiTwitter className={style.icon} />
                        <p>Twitter</p>
                    </div>
                    <div className={style.end}>
                        <AiFillInstagram className={style.icon} />
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyFooter