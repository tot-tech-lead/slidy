import React from 'react';
import Image from 'next/image';
import styles from './howItWorkOption.module.css';
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito, nunitoSans} from "@/app/[lang]/ui/fonts";

import arrow from "@/public/assets/SVG/arrow.svg"
import {Dict} from "@/app/[lang]/dictionaries";

const guideData = [
    {
        type: 'guide',
        image: require('./images/image23.webp'),
        content: "register",
    },
    {
        type: 'guide',
        image: require('./images/image27.webp'),
        content: "join",
    },
    {
        type: 'guide',
        image: require('./images/image29.webp'),
        content: "create",
    },
    {
        type: 'guide',
        image: require('./images/image30.webp'),
        content: "earn",
    },
];

const userData = [
    {
        type: 'user',
        image: require('./images/image23.webp'),
        content: "register",
    },
    {
        type: 'user',
        image: require('./images/image24.webp'),
        content: "filter",
    },
    {
        type: 'user',
        image: require('./images/image25.webp'),
        content: "choose",
    },
    {
        type: 'user',
        image: require('./images/image20.webp'),
        content: "wander",
    },
];

export default function HowItWorkOption({state, t}: { state: string, t: Dict }) {
    let data = new RegExp(t.howItWork.tabs[0], "i").test(state) ? userData : guideData

    return (
        data.map((item, index) => (
            <div data-arrow={arrow} key={index} className={styles.HowItWorkOption}>
                <div className={`${styles.column}`}>
                    <Image className={styles.img}
                           src={item.image}
                           alt={item.title}
                    />

                    <div className={styles.text}>
                        <h3 className={`${prestyle.textH3} ${styles.h3} ${nunito.className}`}>{
                            t.howItWork[item.content].headline
                        }</h3>
                        <p className={`${prestyle.textBig} ${styles.para} ${nunitoSans.className}`}>
                            {t.howItWork[item.content].caption}
                        </p>
                    </div>
                </div>
            </div>
        ))
    );
};
