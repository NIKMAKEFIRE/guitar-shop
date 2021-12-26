class Header {
    // ***** вызываем метод , который будет открывать страницу с выбранными товарами
    handlerOpenShoppingPage() {
        shoppingPage.render()
    }

    //объявляем метод render , который отвечает за отображение данных на экран
    render(count) { // принимает count , наш счетчик
        const html = `
        <div class="header-container">
		<div class="header-counter" onclick={headerPage.handlerOpenShoppingPage()}>🛒 ${count}</div>
        </div>
        `

        ROOT_HEADER.innerHTML = html
    }
}


const headerPage = new Header()

// // получаем данные из локального хранилища 
// const productsStore = localStorageUtil.getProducts() // вернет массив товаров
// // вызываем , чтобы все это отрендорилось
// headerPage.render(productsStore.length)

