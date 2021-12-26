// функция рендерит первоначальные данные
function render() {

	// получаем данные из локального хранилища 
	const productsStore = localStorageUtil.getProducts() // вернет массив товаров
	// вызываем , чтобы все это отрендорилось
	headerPage.render(productsStore.length)

	productsPage.render()
}

spinnerPage.render()

// создаем переменную с каталогом , которую мы будем использовать как доступ к хранилищу
let CATALOG = []

// https://api.myjson.com/bins/jvsbu
fetch('server/catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body
		setTimeout(() => {
			spinnerPage.handleClear()
			render()
		},1000)
	})
	.catch(error => {
		spinnerPage.handleClear()
		errorPage.render()
	})

	