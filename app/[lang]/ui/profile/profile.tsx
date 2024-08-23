import styles from "./profile.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import defaultAvatar from "@/public/assets/SVG/default-avatar.svg"

import Image, {StaticImageData} from "next/image";
import StarRatings from 'react-star-ratings';
import clsx from "clsx";

let path = "M23.9449 2.51004L28.2599 9.22815C28.8693 10.1769 29.8127 10.8623 30.9033 11.1487L38.626 13.1765C41.0914 13.8239 42.0601 16.8052 40.4461 18.778L35.3902 24.9579C34.6762 25.8306 34.3159 26.9396 34.3805 28.0654L34.8384 36.0368C34.9845 38.5815 32.4485 40.424 30.0735 39.4987L22.6337 36.5999C21.583 36.1906 20.417 36.1906 19.3663 36.5999L11.9265 39.4987C9.55149 40.424 7.01548 38.5815 7.16164 36.0368L7.61949 28.0654C7.68415 26.9396 7.32382 25.8306 6.60981 24.9579L1.55394 18.778C-0.0600851 16.8052 0.908583 13.8239 3.37396 13.1765L11.0967 11.1487C12.1873 10.8623 13.1307 10.1769 13.7401 9.22815L18.0551 2.51004C19.4327 0.365374 22.5673 0.365375 23.9449 2.51004Z"


export function RatingDisplay({rating}: {rating: number}) {
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;
    const roundedRating = fullStars + (decimal >= 0.5 ? 0.5 : 0);

    return (
        <div className={clsx(styles.StarRating)}>
            <StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing="2px"
                starRatedColor="#FFA800"
                starEmptyColor="#D3D3D3"
                starHoverColor="#FFA800"
                svgIconPath={path}
            />
            <span className={clsx(styles.ratingLabel, prestyle.textSmallSemiVisible)}>
                {rating}/5 зірок
            </span>
        </div>
    );
}

export default function Profile({avatar, name, surname, rating}: {
    avatar:  string | StaticImageData,
    name: string,
    surname: string,
    rating: number
}) {
    return (
        <div className={clsx(styles.GuideProfile)}>
            <Image className={clsx(styles.avatarImg)}
                   src={avatar || defaultAvatar}
                   alt="avatar"/>
            <div className={clsx(styles.guideInfo)}>
                <p className={clsx(styles.guideName, prestyle.textBold)}>{name} {surname}</p>

                <p className={clsx(styles.guideRaiting, prestyle.textSmallSemiVisible)}>Рейтинг:</p>

                <RatingDisplay rating={rating}/>
            </div>
        </div>
    );
}