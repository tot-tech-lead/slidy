import styles from "./styles.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito} from "@/app/[lang]/ui/fonts";

import Image, {StaticImageData} from "next/image";

import svg_not_found from "@/public/assets/SVG/image-not-found.svg"

import {Location} from "@/app/lib/types/mongo-models";
import clsx from "clsx";

export default function Place({location, image}: {location: Location, image: string | StaticImageData}) {
    return (
        <div className={styles.viewTourPlace}>
            <Image className={styles.image}
                 src={image || svg_not_found}
                 alt={location.name}
            />

            <div className={styles.block}>
                <div className={styles.info}>
                    <h3 className={
                        clsx(styles.headline_3, prestyle.textH5, nunito.className)
                    }>
                        {location.name}
                    </h3>

                    <div className={clsx(styles.commentBlock)}>
                        <p className={prestyle.textBold}>
                            Коментар організатора:
                        </p>

                        <p className={clsx(styles.commentText, prestyle.textBig)}>
                            {location.description}
                        </p>
                    </div>

                </div>

                <a href={`https://www.google.com/maps/place/${location.coordinates[0]},${location.coordinates[1]}`}
                   target="_blank" rel="noopener noreferrer" className={clsx(
                    styles.link, prestyle.textBig
                )}>
                    Зупинка на Google maps
                </a>
            </div>
        </div>
    )
}