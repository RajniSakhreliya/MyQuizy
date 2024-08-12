
const coinMenus = (value) => {

    let coin = value || null
    const localCoin = localStorage.getItem('coin')
    if (coin == 'Free Entry') {

    } else {
        const menusCoin = localCoin - value
        localStorage.setItem('coin', menusCoin)
    }
    return (<></>)
}
export default coinMenus;