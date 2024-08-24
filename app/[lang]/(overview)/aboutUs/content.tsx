import styles from "../aboutUs/aboutUs.module.css";
import prestyle from "@/app/lib/ui-components.module.css";
import {nunito, nunitoSans} from "@/app/[lang]/ui/fonts";
import {Dict} from "@/app/[lang]/dictionaries";

export const contentData = [
    {
        headline: "Глянь на місто очима місцевого!",
        text: <p>Якщо ви блогер що любить мандрувати містом у пошуках хорошого та у вас є маршрути які
            вамнайбільше до вподоби ви можете продати їх на нашому сайті! Для фанатів тревел-блогерів це
            можливість пройтись тим самим шляхом який відвідав ваш кумир</p>
    }, {
        headline: "Тут не лише гіди",
        text: <p>Якщо ви блогер що любить мандрувати містом у пошуках хорошого та у вас є маршрути які вам
            найбільше до вподоби ви можете продати їх на нашому сайті!
            <br/><br/>Для фанатів тревел-блогерів це можливість пройтись тим самим шляхом який відвідав ваш
            кумир</p>
    }, {
        headline: "Заробляй на знанні місцевості",
        text: <>
            <blockquote
                cite="https://docs.google.com/spreadsheets/d/1gGDGWMLYRPCpzBTCq6aq5QgUr3wMW785CnO_2esWR8U/edit?usp=sharing">
                Якщо ви екскурсовод, або бажаєте ним стати, ви можете завантажити свої пропозиції на наш сайт!
                Для
                цього, після того як ви зареєструєтесь як турист, ви зможете подати заявку задля того щоб
                верифікуватись як екскурсовод. Після цього вам необхідно заповнити особисту сторінку своїми
                екскурсіями та очікувати повідомлення від клієнтів. До речі, на нашій платформі будь хто може
                стати
                екскурсоводом! Згідно із нашою статистикою,більше
                ніж 40% людей готові проводити екскурсії туристам
                у своєму місті у вільний час.
                Це дозволяє не лише розвіятись від буденного життя, а й
                підзаробити деяку кількість грошей на своїх знаннях!
            </blockquote>
        </>
    },
]

export default function AboutUsContent({t}: {
    t: Dict
}) {
    return t.aboutUs?.map((data, idx) =>
        <div key={`home-content-${idx}`} className={`${styles.container} ${styles.container}${idx + 1}`}>
            <div className={`${styles.anim} ${styles.anim}${idx + 1}`}>
                <h2 className={`${styles.animHeadline} ${prestyle.textH2} ${nunito.className}`}>{data.headline}</h2>
                <div className={`${styles.animParagraph} ${prestyle.textBig} ${nunitoSans.className}`}
                     dangerouslySetInnerHTML={
                         {
                             __html: data.text
                         }
                     }>
                </div>
                <div className={styles.animScrollHint}>
                    <div className={styles.animScrollHintBody}>
                        <div className={styles.animScrollHintInner}></div>
                    </div>
                    <div
                        className={`${styles.animScrollHintText} ${prestyle.textPlain} ${nunitoSans.className}`}>Гортай!
                    </div>
                </div>
            </div>
        </div>
    )
}