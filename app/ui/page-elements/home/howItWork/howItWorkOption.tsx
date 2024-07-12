import React from 'react';
import Image from 'next/image';
import styles from './howItWorkOption.module.css';
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito, nunitoSans} from "@/app/ui/fonts";

import arrow from "@/public/assets/SVG/arrow.svg"

const guideData = [
    {
        type: 'guide',
        image: require('./images/image23.webp'),
        title: 'Реєструйся!',
        text: 'Заповніть просту форму вказавши вашу інформацію, яку ми використаємо щоб з’єднати вас з найкращими екскурсоводами міста!',
    },
    {
        type: 'guide',
        image: require('./images/image27.webp'),
        title: 'ДОЄДНУЙСЯ!!',
        text: 'Завантаживши необхідні документи туристи охочіше записуватимуться на ваші екскурсії!',
    },
    {
        type: 'guide',
        image: require('./images/image29.webp'),
        title: 'створюй!!',
        text: 'За допомогою конструктору пропозицій, описуйте вашу майбутню екскурсію туристам!',
    },
    {
        type: 'guide',
        image: require('./images/image30.webp'),
        title: 'ЗАРОБЛЯЙ!',
        text: 'Проводячи екскурсії, заробляйте кишенькові добре провівше час з новими людьми!',
    },
];

const userData = [
    {
        type: 'user',
        image: require('./images/image23.webp'),
        title: 'Реєструйся!',
        text: 'Заповніть просту форму вказавши вашу інформацію, яку ми використаємо щоб з’єднати вас з найкращими екскурсоводами міста!',
    },
    {
        type: 'user',
        image: require('./images/image24.webp'),
        title: 'ФІЛЬТРУЙ!',
        text: 'Наш сайт дає змогу вам підірати найзручніший час та найкраще місце за допомогою фільтрів та календарю!',
    },
    {
        type: 'user',
        image: require('./images/image25.webp'),
        title: 'ОБИРАЙ!',
        text: 'Знайди найкращого екскурсовода для твоєї подорож та познайомся з місцевими жителями!',
    },
    {
        type: 'user',
        image: require('./images/image20.webp'),
        title: 'МАНДРУЙ!',
        text: 'Пориньтеся у вашу подорож мрії та відкрийте собі місто очима міщанина!',
    },
];

export default function HowItWorkOption({state}: {state: string}) {
    let data = /турист/i.test(state) ? userData : guideData

    return (
        data.map((item, index) => (
            <div data-arrow={arrow} key={index} className={styles.HowItWorkOption}>
                <div className={`${styles.column}`}>
                    <Image className={styles.img}
                           src={item.image}
                           alt={item.title}
                    />

                    <div className={styles.text}>
                        <h3 className={`${prestyle.textH3} ${styles.h3} ${nunito.className}`}>{item.title}</h3>
                        <p className={`${prestyle.textBig} ${styles.para} ${nunitoSans.className}`}>{item.text}</p>
                    </div>
                </div>
            </div>
        ))
    );
};
