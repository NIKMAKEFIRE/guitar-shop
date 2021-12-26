class LocalStorageUtil {
    constructor() {
        // это наш ключ
        this.keyName = 'products'
    }

    // далее записываем 2 метода  
    // функция getProducts позволяет получить все продукты находящиеся в локальном хранилище
    getProducts() {

        // для того, чтобы получить данные из хранилища нужно вызвать getItem
        const productsLocalStorage = localStorage.getItem(this.keyName) // сюда нужно передать ключ

        // условие : если переменная не равна null
        if (productsLocalStorage !== null) {
            // нужно распарсить строку и перевести ее в parse
            return JSON.parse(productsLocalStorage)
        }
        // иначе просто возвращаем пустой массив
        return []
    }

    //  функция putProducts нужна для того , чтобы добавить значение в локальное хранилище
    // мы передаем id товара , который мы хотим передать
    putProducts(id) {
        // передаем логику в переменную 
        let products = this.getProducts();

        // *** для того чтобы мы смогли вернуть значение новый это продукт или старый , мы создаем переменную
        let pushProduct = false // если false , продукт удалили , если true - добавили

        // ** добавляем проверку , для того , чтобы удалять элемент , который уже находится в хранилище
        const index = products.indexOf(id) // проверяем есть ли у на совпадения с id , которое мы передаем
        // если совпадений не найдется , то вернется -1 . Поэтому делаем проверку
        if (index === -1) { // значит это новые данные и нам их надо записать

            // далее делаем push , так как это массив и нам нужно найти его id
            products.push(id)
            pushProduct = true;
        } else { // иначе нам нужно удалить элемент
            // воспользуемся методом массива splice , для удаления элемента
            products.splice(index, 1)
        }

        // ++ // далее делаем push , так как это массив и нам нужно найти его id
        // products.push(id) // добавляем это условие выше в проверку элемента в хранилище

        // обращаемся к хранилищу и передаем ключ преобразуя его из массива в строку с помощью st
        localStorage.setItem(this.keyName, JSON.stringify(products))

        // **** по итогу нам нужно вернуть 2 значения pushProduct и сам массив значения
        return {
            pushProduct, products

            // pushProduct: pushProduct,
            // products: products,
            // *** если у объектов и ключей значения совпадают , то можно передать только ключ
        }
    }
}

const localStorageUtil = new LocalStorageUtil()

// вызываем функцию , чтобы она вернула нам массив


// // вызываем функцию , чтобы она вернула нам массив
// const a = localStorageUtil.getProducts()

// console.log(a);


// ++ дейстивие было до этого
 // ** то , что добавляем в конце




