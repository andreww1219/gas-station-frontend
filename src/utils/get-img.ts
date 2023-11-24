const getImg = (url: string) => {
    return new URL(`../assets/img/${url}`, import.meta.url).href
}
export default getImg
