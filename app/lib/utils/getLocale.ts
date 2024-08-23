export function getLocale(locale: string): string {
    return ["en", "uk"].includes(locale) ? locale : "en"
}