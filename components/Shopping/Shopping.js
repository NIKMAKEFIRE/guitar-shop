class Shopping {
    // метод чтобы сделать очистку
    handleClear(){
        ROOT_SHOPPING.innerHTML = ''
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        // **** создаем каталог с суммой по дефолту
        let sumCatalog = 0

        CATALOG.forEach(({ id, name, price }) => {
            // здесь нужны товары , которые есть в локальном хранилище
            // поэтому здесь делаем проверку
            if (productsStore.indexOf(id) !== -1) { // то мы каждый раз будем корректировать каталог и добавлять данные
                // мы должны добавить данные , то что было до , мы оставляем и добавляем новые
                htmlCatalog += `
                <tr> 
                <td class="shopping-element__name">🎸${name}</td>
                <td class="shopping-element__price">${price.toLocaleString()} ₽</td>
                </tr>
                `
                sumCatalog += price
            } // если равен -1 значит совпадений не найдено мы никак это обрабатывать не будем
        })

        const html = `
            <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
            <table>${htmlCatalog}
            <tr>
            <td class="shopping-element__name">Сумма:</td>
            <td class="shopping-element__price">${sumCatalog.toLocaleString()} ₽</td>
            </tr>
            </table>
            </div>
            `
        ROOT_SHOPPING.innerHTML = html
    }
}

const shoppingPage = new Shopping()
