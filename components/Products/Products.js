class Products {
    constructor() {
        // **** прописываем ключи
        this.classNameActive = 'products-element__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'
    }

    handleSetLocationStorage(elem, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id)

        if (pushProduct) {
            elem.classList.add(this.classNameActive)
            elem.innerHTML = this.labelRemove
        } else {
            elem.classList.remove(this.classNameActive)
            elem.innerHTML = this.labelAdd
        }
        // **** вызываем , чтобы перерендерить наш счетчик товаров в шапке
        headerPage.render(products.length)
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        CATALOG.forEach(({ id, name, img, price }) => {
            // *** добавляем активный класс и активный текст ,проверяем ,
            //что когда мы проходимся циклом по всем элементам и у нас есть id для сравнения , есть ли у нас элемент или нет
            let activeClass = ''
            let activeText = ''

            // делаем условие на кнопку , если совпадений не найдено
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd // и на кнопку нужно добавить надпись "добавить в корзину"
            } else { // иначе
                activeClass = ' ' + this.classNameActive // присваиваем название активного класса
                activeText = this.labelRemove // и на кнопку добавляется надпись "Удалить из корзины"
            }

            htmlCatalog += `
            <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${img}" alt="">
            <span class="products-element__price">⚡️${price.toLocaleString()} ₽</span>
            <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">
            ${activeText}</button>
            </li>
            `
        })

        const html = `
        <ul class="products-container">${htmlCatalog}</ul>
        `

        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
// productsPage.render()

// ***