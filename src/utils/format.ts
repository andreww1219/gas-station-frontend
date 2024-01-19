function format(x: number): string {
	return x < 10 ? "0" : "" + x
}

export function formatTime(dateString: string): string {
	const date = new Date(dateString)
	let y = date.getFullYear()
	let m = format(date.getMonth())
	let d = format(date.getDate())
	let h = format(date.getHours())
	let mm = format(date.getMinutes())
	return `${y}-${m+1}-${d} ${h}:${mm}`
}
