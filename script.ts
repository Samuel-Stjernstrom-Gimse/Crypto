import { cleanPrice } from './cleanPrice.js'

const headers = new Headers({
	'Accept-Encoding': 'gzip'
})

const assetsUrl = 'https://api.coincap.io/v2/assets'
const priceChartChange = 'api.coincap.io/v2/assets/bitcoin/history?interval=d1'

async function getData(url: string): Promise<void> {
	try {
		const result: Response = await fetch(url, { method: 'GET', headers: headers })
		const data: any = await result.json() // Change from any[] to any
		renderSite(data)
	} catch (error) {
		console.log(error)
	}
}

function renderSite(data: any) {
	const ArDat = data.data
	ArDat.forEach((coin: any) => {
		const coinDiv = document.createElement('div') as HTMLDivElement
		const name = document.createElement('h1') as HTMLHeadingElement
		const symbol = document.createElement('h2') as HTMLHeadingElement
		const priceUsd = document.createElement('h3') as HTMLHeadingElement
		const priceChange = document.createElement('H3') as HTMLHeadingElement

		// logic
		const priceChangeNum = parseFloat(cleanPrice(coin.changePercent24Hr, 3))
		if (priceChangeNum > 0) {
			priceChange.style.color = 'green'
		} else {
			priceChange.style.color = 'red'
		}

		//id - classes
		coinDiv.id = 'coin-div'

		// text
		priceChange.textContent = `${cleanPrice(coin.changePercent24Hr, 3)}%`
		name.textContent = coin.name
		symbol.textContent = coin.symbol
		priceUsd.textContent = `${cleanPrice(coin.priceUsd, 3)} USD`

		// style

		priceUsd.style.color = 'rgb(255,134,0)'
		coinDiv.append(name, symbol, priceUsd, priceChange)
		document.body.append(coinDiv)
	})
}

const renderChart = () => {
	ge
}

getData(assetsUrl)

/*
const headers = new Headers({
	'Accept-Encoding': 'gzip'
})

async function getData(): Promise<void> {
	try {
		const result: Response = await fetch('https://api.coincap.io/v2/assets', { method: 'GET', headers: headers })
		const data: any = await result.json() // Change from any[] to any
		renderSite(data)
	} catch (error) {
		console.log(error)
	}
}

function renderSite(data: any): void {
	console.log(data)
}

getData()
*/
