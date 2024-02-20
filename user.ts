export type Coin = {
	id: string
	amount: number
}

export type User = {
	name: string
	money: number
	coins: Coin[]
}
