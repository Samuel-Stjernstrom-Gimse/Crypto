import { cleanPrice } from './cleanPrice.js';
import { getRandomColor } from './randomColor.js';
const chartDiv = document.getElementById('chart');
const selectChart = document.getElementById('currency');
const canvasDiv = document.getElementById('canvas-div');
const priceDiv = document.getElementById('price-div');
const timeDiv = document.getElementById('time-div');
const selectTime = document.getElementById('time-frame');
const sorting = document.getElementById('sort');
const listDiv = document.getElementById('list');
let user = {
    name: 'Samuel',
    money: 1000,
    coins: [
        { id: 'bitcoin', amount: 0 },
        { id: 'ethereum', amount: 0 },
        { id: 'tether', amount: 0 },
        { id: 'binance-coin', amount: 0 },
        { id: 'solana', amount: 0 },
        { id: 'usd-coin', amount: 0 },
        { id: 'xrp', amount: 0 },
        { id: 'cardano', amount: 0 },
        { id: 'avalanche', amount: 0 },
        { id: 'dogecoin', amount: 0 },
        { id: 'tron', amount: 0 },
        { id: 'chainlink', amount: 0 },
        { id: 'polkadot', amount: 0 },
        { id: 'polygon', amount: 0 },
        { id: 'wrapped-bitcoin', amount: 0 },
        { id: 'internet-computer', amount: 0 },
        { id: 'shiba-inu', amount: 0 },
        { id: 'multi-collateral-dai', amount: 0 },
        { id: 'bitcoin-cash', amount: 0 },
        { id: 'litecoin', amount: 0 },
        { id: 'uniswap', amount: 0 },
        { id: 'unus-sed-leo', amount: 0 },
        { id: 'stacks', amount: 0 },
        { id: 'ethereum-classic', amount: 0 },
        { id: 'filecoin', amount: 0 },
        { id: 'near-protocol', amount: 0 },
        { id: 'stellar', amount: 0 },
        { id: 'vechain', amount: 0 },
        { id: 'okb', amount: 0 },
        { id: 'lido-dao', amount: 0 },
        { id: 'injective-protocol', amount: 0 },
        { id: 'cosmos', amount: 0 },
        { id: 'bitcoin-bep2', amount: 0 },
        { id: 'crypto-com-coin', amount: 0 },
        { id: 'render-token', amount: 0 },
        { id: 'the-graph', amount: 0 },
        { id: 'monero', amount: 0 },
        { id: 'maker', amount: 0 },
        { id: 'thorchain', amount: 0 },
        { id: 'hedera-hashgraph', amount: 0 },
        { id: 'algorand', amount: 0 },
        { id: 'helium', amount: 0 },
        { id: 'bitcoin-sv', amount: 0 },
        { id: 'elrond-egld', amount: 0 },
        { id: 'mina', amount: 0 },
        { id: 'flow', amount: 0 },
        { id: 'aave', amount: 0 },
        { id: 'quant', amount: 0 },
        { id: 'trueusd', amount: 0 },
        { id: 'theta', amount: 0 },
        { id: 'fantom', amount: 0 },
        { id: 'the-sandbox', amount: 0 },
        { id: 'axie-infinity', amount: 0 },
        { id: 'chiliz', amount: 0 },
        { id: 'tezos', amount: 0 },
        { id: 'kucoin-token', amount: 0 },
        { id: 'decentraland', amount: 0 },
        { id: 'arweave', amount: 0 },
        { id: 'conflux-network', amount: 0 },
        { id: 'neo', amount: 0 },
        { id: 'akash-network', amount: 0 },
        { id: 'iota', amount: 0 },
        { id: 'eos', amount: 0 },
        { id: 'synthetix-network-token', amount: 0 },
        { id: 'kava', amount: 0 },
        { id: 'siacoin', amount: 0 },
        { id: 'fetch', amount: 0 },
        { id: 'gnosis-gno', amount: 0 },
        { id: 'oasis-network', amount: 0 },
        { id: 'klaytn', amount: 0 },
        { id: 'wemix', amount: 0 },
        { id: 'wootrade', amount: 0 },
        { id: 'gala', amount: 0 },
        { id: 'frax-share', amount: 0 },
        { id: 'pancakeswap', amount: 0 },
        { id: 'ecash', amount: 0 },
        { id: 'singularitynet', amount: 0 },
        { id: 'nexo', amount: 0 },
        { id: 'pendle', amount: 0 },
        { id: 'curve-dao-token', amount: 0 },
        { id: 'rocket-pool', amount: 0 },
        { id: 'ftx-token', amount: 0 },
        { id: 'dydx', amount: 0 },
        { id: 'iotex', amount: 0 },
        { id: 'superfarm', amount: 0 },
        { id: 'trust-wallet-token', amount: 0 },
        { id: 'xinfin-network', amount: 0 },
        { id: '1inch', amount: 0 },
        { id: 'compound', amount: 0 },
        { id: 'enjin-coin', amount: 0 },
        { id: 'aelf', amount: 0 },
        { id: 'nervos-network', amount: 0 },
        { id: 'gatetoken', amount: 0 },
        { id: 'skale-network', amount: 0 },
        { id: 'livepeer', amount: 0 },
        { id: 'casper', amount: 0 },
        { id: 'fei-protocol', amount: 0 },
        { id: 'gas', amount: 0 },
        { id: 'nxm', amount: 0 },
        { id: 'mask-network', amount: 0 }
    ]
};
const userIs = localStorage.getItem('user');
if (userIs) {
    user = JSON.parse(userIs);
}
localStorage.setItem('user', JSON.stringify(user));
const userName = document.getElementById('user-name');
const userMoney = document.getElementById('user-money-usd');
const userCoinValue = document.getElementById('user-coin-value');
const userCoins = document.getElementById('user-coins');
let listArray = [];
let chartArray = [];
const headers = new Headers({
    'Accept-Encoding': 'gzip'
});
const chartHeaders = new Headers({
    'Accept-Encoding': 'deflate'
});
const assetsUrl = 'https://api.coincap.io/v2/assets';
async function getData(url) {
    try {
        const result = await fetch(url, { method: 'GET', headers: headers });
        listArray = await result.json();
        renderList(listArray);
        console.log(listArray);
    }
    catch (error) {
        console.log(error);
    }
}
async function getChart(targetArray, id, time) {
    targetArray = '';
    const priceChartChange = `https://api.coincap.io/v2/assets/${id}/history?interval=${time}`;
    try {
        const result = await fetch(priceChartChange, { method: 'GET', headers: chartHeaders });
        targetArray = await result.json();
        console.log(targetArray.data);
        drawchart(targetArray);
    }
    catch (error) {
        console.log(error);
    }
}
function renderList(data) {
    listDiv.innerHTML = '';
    let ArDat = [...data.data];
    if (sorting.value === 'priceH') {
        ArDat = ArDat.sort((a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd));
    }
    if (sorting.value === 'priceL') {
        ArDat = ArDat.sort((a, b) => parseFloat(a.priceUsd) - parseFloat(b.priceUsd));
    }
    if (sorting.value === '24H') {
        ArDat = ArDat.sort((a, b) => parseFloat(b.changePercent24Hr) - parseFloat(a.changePercent24Hr));
    }
    if (sorting.value === '24L') {
        ArDat = ArDat.sort((a, b) => parseFloat(a.changePercent24Hr) - parseFloat(b.changePercent24Hr));
    }
    ArDat.forEach((coin) => {
        const coinDiv = document.createElement('div');
        const name = document.createElement('h1');
        const symbol = document.createElement('h2');
        const priceUsd = document.createElement('h3');
        const priceChange = document.createElement('H3');
        const option = document.createElement('option');
        const nameDiv = document.createElement('div');
        const priceDiv = document.createElement('div');
        const buyButton = document.createElement('button');
        const inputBuyAmountDollar = document.createElement('input');
        inputBuyAmountDollar.type = 'number';
        option.textContent = coin.name;
        option.value = coin.id;
        selectChart.append(option);
        const priceChangeNum = parseFloat(cleanPrice(coin.changePercent24Hr, 2));
        if (priceChangeNum > 0) {
            priceChange.style.color = 'green';
        }
        else {
            priceChange.style.color = 'red';
        }
        coinDiv.id = 'coin-div';
        name.id = 'name';
        symbol.id = 'symbol';
        priceDiv.id = 'price-div';
        nameDiv.id = 'name-div';
        if (parseFloat(coin.changePercent24Hr) >= 0) {
            priceChange.textContent = `+${cleanPrice(coin.changePercent24Hr, 2)}%`;
        }
        else {
            priceChange.textContent = `${cleanPrice(coin.changePercent24Hr, 2)}%`;
        }
        name.textContent = coin.name;
        symbol.textContent = coin.symbol;
        priceUsd.textContent = `USD ${cleanPrice(coin.priceUsd, 3)}`;
        buyButton.textContent = 'buy';
        priceUsd.style.color = 'rgb(253,253,253)';
        priceUsd.style.fontSize = '20px';
        priceChange.style.fontSize = '15px';
        priceChange.style.textAlign = 'right';
        nameDiv.append(name, symbol);
        priceDiv.append(priceUsd, priceChange);
        coinDiv.append(nameDiv, priceDiv, inputBuyAmountDollar, buyButton);
        listDiv.append(coinDiv);
        buyButton.addEventListener('click', () => {
            buy(inputBuyAmountDollar.valueAsNumber, parseFloat(coin.priceUsd), coin.id);
            inputBuyAmountDollar.valueAsNumber = 0;
            localStorage.setItem('user', JSON.stringify(user));
        });
        if (coin.id === selectChart.value) {
            const showName = document.getElementById('show-name');
            const showLogo = document.getElementById('show-logo');
            const showPrice = document.getElementById('show-price');
            const showPercent = document.getElementById('show-percent');
            showName.textContent = coin.name;
            showLogo.textContent = symbol.textContent = coin.symbol;
            showPrice.textContent = `USD ${cleanPrice(coin.priceUsd, 3)}`;
            if (parseFloat(coin.changePercent24Hr) >= 0) {
                showPercent.textContent = `+${cleanPrice(coin.changePercent24Hr, 2)}%`;
            }
            else {
                showPercent.textContent = `${cleanPrice(coin.changePercent24Hr, 2)}%`;
            }
            if (priceChangeNum > 0) {
                showPercent.style.color = 'green';
            }
            else {
                showPercent.style.color = 'red';
            }
            showName.style.color = 'white';
            showLogo.style.color = getRandomColor();
            showLogo.style.webkitTextStroke = '0.3px white';
            showPrice.style.color = 'rgb(255,255,255)';
        }
    });
}
selectChart.addEventListener('input', () => {
    getData(assetsUrl);
});
const drawchart = (array) => {
    canvasDiv.innerHTML = '';
    priceDiv.innerHTML = '';
    timeDiv.innerHTML = '';
    const canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    if (context !== null) {
    }
    else {
        console.error('Unable to get 2D context for canvas.');
    }
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.7;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.clearRect(0, 0, innerWidth, innerHeight);
    let data = array.data;
    let prices = data.map((element) => parseFloat(element.priceUsd));
    let max = Math.max(...prices);
    let min = Math.min(...prices);
    const canvasHeight = canvas.height;
    const startValue = canvasHeight - ((parseFloat(data[0].priceUsd) - min) / (max - min)) * canvasHeight;
    const distance = canvas.width / data.length;
    const startPoint = 0;
    context.beginPath();
    context.moveTo(startPoint, startValue);
    context.strokeStyle = 'rgb(255,255,255)';
    data.forEach((element, index) => {
        const newDistance = startPoint + distance * (index + 1);
        const normalizedValue = canvasHeight - ((parseFloat(element.priceUsd) - min) / (max - min)) * canvasHeight;
        context.lineTo(newDistance, normalizedValue);
    });
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(startPoint, canvas.height);
    context.lineTo(startPoint, startValue);
    const grd = context.createLinearGradient(0, 0, canvas.width / 2, 0);
    grd.addColorStop(0, 'rgba(114,0,255,0.75)');
    grd.addColorStop(1, 'rgba(0,182,255,0.65)');
    context.fillStyle = grd;
    context.fill();
    context.stroke();
    for (let i = 0; i < 20; i++) {
        const price = min + (max - min) * (i / 19);
        const showPrice = document.createElement('h3');
        showPrice.style.fontSize = '12px';
        showPrice.textContent = `${cleanPrice(price.toString(), 2)} USD`;
        showPrice.style.position = 'absolute';
        showPrice.style.color = 'rgb(111,111,111)';
        showPrice.style.bottom = `${(100 / 20) * i}%`;
        showPrice.style.left = `-9%`;
        priceDiv.append(showPrice);
    }
    for (let i = 0; i < data.length; i += Math.floor(data.length / 15)) {
        const index = Math.floor(i);
        if (index < data.length) {
            const time = document.createElement('h2');
            const dateObject = new Date(data[index].time);
            time.textContent = `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })}`;
            timeDiv.append(time);
            time.style.width = `${100 / 20}%`;
            time.style.bottom = '-9%';
            time.style.fontSize = '10px';
            time.style.color = 'gray';
        }
    }
    selectChart.addEventListener('change', () => {
        getChart(chartArray, selectChart.value, selectTime.value).then();
    });
    selectTime.addEventListener('change', () => {
        getChart(chartArray, selectChart.value, selectTime.value).then();
    });
    canvasDiv.append(canvas);
};
sorting.addEventListener('change', async () => {
    console.log('hei');
    await getData(assetsUrl).then();
    console.log(listArray);
    console.log(sorting.value);
});
function buy(amount, coinRate, coinId) {
    const coinToUpdate = user.coins.find((coin) => coin.id === coinId);
    if (coinToUpdate) {
        if (amount <= user.money) {
            user.money -= amount;
            coinToUpdate.amount += amount / coinRate;
            console.log(`Bought ${amount} of ${coinId} at rate ${coinRate}`);
        }
        else {
            console.log(`Insufficient funds to buy ${amount} of ${coinId}`);
        }
    }
    else {
        console.log(`Coin with ID ${coinId} not found in user's coins`);
    }
    updateUser();
}
async function updateUser() {
    userName.textContent = 'Name: ' + user.name;
    userMoney.textContent = 'USD: ' + user.money.toString();
    let totalPortfolioValue = 0;
    userCoins.innerHTML = '';
    const marketData = await fetchMarketData();
    user.coins.forEach((coin) => {
        if (coin.amount > 0) {
            const coinMarketData = marketData.find((data) => data.id === coin.id);
            if (coinMarketData) {
                const coinMarketValue = parseFloat(coinMarketData.priceUsd);
                const coinValue = coin.amount * coinMarketValue;
                totalPortfolioValue += coinValue;
                const coinDiv = document.createElement('div');
                coinDiv.textContent = `${coin.id}: ${cleanPrice(coin.amount.toString(), 3)} coins | Value: ${parseFloat(coinValue.toFixed(2))} USD`;
                userCoins.appendChild(coinDiv);
                console.log(`Coin: ${coin.id}, Amount: ${coin.amount.toFixed(2)}, Value: ${coinValue}`);
            }
            else {
                console.log(`Market data not found for ${coin.id}`);
            }
        }
    });
    userCoinValue.textContent = `Total Portfolio Value: ${totalPortfolioValue.toFixed(2)} USD`;
}
async function fetchMarketData() {
    const marketDataURL = 'https://api.coincap.io/v2/assets';
    try {
        const result = await fetch(marketDataURL, { method: 'GET', headers: headers });
        const marketData = await result.json();
        return marketData.data;
    }
    catch (error) {
        console.log('Error fetching market data:', error);
        return [];
    }
}
getData(assetsUrl).then();
getChart(chartArray, 'bitcoin', 'd1').then();
updateUser().then();
//# sourceMappingURL=script.js.map