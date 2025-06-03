const selects = document.querySelectorAll('.box')
const resultBtn = document.querySelector('.total')
const workPrice = document.querySelector('.work-price')
const materialPrice = document.querySelector('.material-price')
const totalPrice = document.querySelector('.total-price')
const totalArea = document.querySelector('#totalArea')
const totalAreaRange = document.querySelector('#totalAreaRange')

totalArea.addEventListener('input', () => {
	totalAreaRange.value = totalArea.value
})
totalAreaRange.addEventListener('input', () => {
	totalArea.value = totalAreaRange.value
})

const calculateResult = () => {
	let totalResult = 0
	let materialResult = 0
	let workResult = 0
	const area = parseInt(totalArea.value)

	if (area > 0) {
		selects.forEach(select => {
			const [material, work] = select.value.split(',').map(Number)
			materialResult += material
			workResult += work
		})
		materialResult *= area
		workResult *= area
		totalResult = materialResult + workResult
	}

	return { workResult, materialResult, totalResult }
}

resultBtn.addEventListener('click', () => {
	const { workResult, materialResult, totalResult } = calculateResult()
	workPrice.textContent = `Work Cost: ${workResult} $`
	materialPrice.textContent = `Material Cost: ${materialResult} $`
	totalPrice.textContent = `Total Cost: ${totalResult} $`
})
