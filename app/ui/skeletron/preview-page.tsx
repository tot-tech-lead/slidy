import styles from "./preview-page.module.css"
import prestyle from "@/app/lib/ui-components.module.css";

export default function PreviewPageSkeleton() {
    let pages = [1, 2, 3, 4, 5]
    return (
        <div className={styles.PreviewPageSkeleton}>
            <div className={styles.slider}>
                <div className={styles.text}>
                    <div className={styles.headlineContainer}>
                        <div className={`${styles.headline} ${prestyle.textH1}`}><h1>Slidy</h1>
                        </div>
                        <div
                            className={`${prestyle.textSubheadline} ${styles.subheadline}`}>Подорожуй
                            улюбленим містом
                            без обмежень!
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.btn}`}>
                            Шукати екскурсію
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.cityContainer}>
                {
                    pages.map((item, idx) => <>
                        <div key={`skeleton-preview-page-city-${idx}`}
                             className={styles.iconsContainer}
                        >
                            <div className={styles.btnContainer}>
                                <button className={styles.iconsContainerIcon}>
                                    <span className={styles.iconsContainerIconPhoto}></span>
                                </button>
                            </div>

                            <p className={`${styles.iconsContainerIconPhotoName} ${prestyle.textSmallSemiVisible}`}>{item}</p>
                        </div>
                    </>)
                }
            </div>
        </div>
    )
}