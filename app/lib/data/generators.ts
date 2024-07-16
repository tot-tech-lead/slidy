export function generatePages(totalCountOfPages: number, currentPage: number): string[]{
    let pages = []

    for (let i = currentPage - 3; i <= currentPage + 2; i++) {
        if (i > 1 && i < totalCountOfPages) {
            pages.push(String(i))
        }
    }
    pages.unshift("1")

    if (!pages.includes(String(totalCountOfPages))) {
        pages.push(String(totalCountOfPages))
    }
    return pages
}