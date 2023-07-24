// Определяем новый глобальный компонент с именем counter
const counter = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count++;
        },
        reduce() {
            this.count--;
        }
    },
    template: `<div><p>текущее значение:{{count}}</p>
      <button @click="increase">+</button>
      <button @click="reduce">-</button></div><br>`
};

const listtodo = {
    data() {
        return {
            count: 0,
            list: [],
            newel: '',
        }
    },
    methods: {
        add() {
            this.list.push({
                id: Date.now(),
                newel: this.newel,
            });
            this.newel = ''; //очистили input
        },
        del(id) {
            // const delel = e.target.previousSibling;
            // delel.remove();
            this.list = this.list.filter(el => el.id !== id);

        }
    },
    template: `<div>
    <input v-model="newel" type="text" placeholder="добавить элемент">
      <button @click="add">Добавить</button>
      <ul>
      <li v-for="listelem in list" :key="listelem.id">{{listelem.newel}}
      <button @click="del(listelem.id)">удалить</button>
      </li>
           </ul></div>
`
};
const product = {
    data() {
        return {
            products: [{
                id: 1,
                images: "img/product1.svg",
                producttitle: " ELLERY X M 'O CAPSULE",
                producttexting: "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
            }, {
                id: 2,
                images: "img/product2.svg",
                producttitle: " ELLERY X M 'O CAPSULE",
                producttexting: "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 32,
            }, {
                id: 3,
                images: "img/product3.svg",
                producttitle: " ELLERY X M 'O CAPSULE",
                producttexting: "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 42,
            }, ]
        }
    },
    methods: {
        sortAscending() {
            return this.products.sort((a, b) => a.price - b.price);
        },
        sortВescending() {
            return this.products.sort((a, b) => b.price - a.price);
        }
    },
    template: `
    <div v-for="product in products" :key="product.id" class="item_product"><img class="product_img" :src="product.images" alt="product_img ">
    <div class="product_content">
        <a href="#" class="product__title">{{product.producttitle}}</a>
        <h3 class="product_texting">{{product.producttexting}}
        </h3>
        <p class="product_price">$ {{product.price}}</p></div>
        </div>
       <button @click="sortAscending">Сортировать по возрастанию</button>
    <button @click="sortВescending">Сортировать по убыванию</button>`
};