// Vue.component('new-component', {
//     props: ['title', 'counter'], //для присвоения нового значения
//     data() {
//         return {
//             // title: 'Title',
//         }
//     },

//     template: `
//     <div>
//     <h3>{{title}}</h3>
//     <p>counter click {{counter}}</p>
//     <button @click="$parent.counter++">+1</button>
//     </div>        `
// });

// Vue.component('standart-comp', {

//     data() {
//         return {
//             message: 'text message'
//         }
//     },
//     methods: {
//         newInfo() {
//             console.log('hello methods');
//         },
//     },
//     computed: {
//         newComp() {
//             return this.message;
//         },
//     },
//     template: '<h2>standart template</h2>'
// });
const compItem = {
    name: 'comp-item',
    template: `<p>item info</p>`
}
Vue.component('new-component', {
    props: ['title'], //для присвоения нового значения
    data() {
        return {
            counter: 0
        }
    },
    components: {
        'comp': compItem,
    },
    methods: {
        increase(step) {
            this.counter += step;
        },
    },

    template: ` <div >
    <h3> {{ title}} </h3> <comp></comp> <p> counter click{{counter}}</p>
     <button @click = "increase(2)"> +2 </button></div>`
});
Vue.component('change-one', {

    template: `<h2>Info change component</h2>
    <p>новый текстовый блок который нужно прочитать</p>`,
});
Vue.component('change-two', {

    template: `<h2>2 change component</h2>
    <p>Другой текстовый блок который нужно прочитать</p>`,
});
Vue.component('change-three', {

    template: `
    <ul>
    <li>list item info 1</li> <li>list item info 1</li> <li>list item info 1</li></ul>`, //во 2 весии надо обернуть в div, но в списке не нужно
});