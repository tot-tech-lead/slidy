import styles from "./team-slide.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import Image, {StaticImageData} from "next/image";

function TeamMateSlide(props: {
    data: {
        avatar: string | StaticImageData,
        name: string,
        role: string | JSX.Element
    }
}){
    return (
        <div className={`${styles.TeamMateSlide}`}>
            <Image src={props.data.avatar}
                 alt={`Учасник команди - ${props.data.name}`}
                 className={styles.image}
                 height={380}
            />

            <div className={styles.caption}>
                <div className={`${styles.captionName} ${prestyle.textBig}`}>
                    {props.data.name}
                </div>
                <div className={`${styles.captionRole} ${prestyle.textSmallSemiVisible}`}>
                    {props.data.role}
                </div>
            </div>

        </div>
    )
}

export default TeamMateSlide