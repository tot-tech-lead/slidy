import styles from "./styles.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito} from "@/app/[lang]/ui/fonts";

import Place from "@/app/[lang]/ui/place/place";
import clsx from "clsx";
import {StaticImageData} from "next/image";
import {Location} from "@/app/lib/types/mongo-models";

type Image = string | StaticImageData

export default function Places(
    {
        images,
        locations,
    } : {
        images: Image[],
        locations: Location[]
    }
) {

    return (
        <div className={styles.viewTourPlaces}>
            <h2 className={
                clsx(styles.headline, prestyle.textH2, nunito.className)
            }>
                Місця у яких ви зможете побувати
            </h2>
            <div className={styles.locations}>
                {locations.map((location, index) => (
                    <Place
                        key={`${location.name}-${index}`}
                        location={location}
                        image={images?.[index]}
                    />
                ))}
            </div>
        </div>
    );
}