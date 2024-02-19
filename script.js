import { cleanPrice } from './cleanPrice.js';
const headers = new Headers({
    'Accept-Encoding': 'gzip'
});
const assetsUrl = 'https://api.coincap.io/v2/assets';
const priceChartChange = 'api.coincap.io/v2/assets/bitcoin/history?interval=d1';
async function getData(url) {
    try {
        const result = await fetch(url, { method: 'GET', headers: headers });
        const data = await result.json();
        renderSite(data);
    }
    catch (error) {
        console.log(error);
    }
}
function renderSite(data) {
    const ArDat = data.data;
    ArDat.forEach((coin) => {
        const coinDiv = document.createElement('div');
        const name = document.createElement('h1');
        const symbol = document.createElement('h2');
        const priceUsd = document.createElement('h3');
        const priceChange = document.createElement('H3');
        const priceChangeNum = parseFloat(cleanPrice(coin.changePercent24Hr, 3));
        if (priceChangeNum > 0) {
            priceChange.style.color = 'green';
        }
        else {
            priceChange.style.color = 'red';
        }
        coinDiv.id = 'coin-div';
        priceChange.textContent = `${cleanPrice(coin.changePercent24Hr, 3)}%`;
        name.textContent = coin.name;
        symbol.textContent = coin.symbol;
        priceUsd.textContent = `${cleanPrice(coin.priceUsd, 3)} USD`;
        priceUsd.style.color = 'rgb(255,134,0)';
        coinDiv.append(name, symbol, priceUsd, priceChange);
        document.body.append(coinDiv);
    });
}
const renderChart = () => {
    ge;
};
getData(assetsUrl);
//# sourceMappingURL=script.js.map