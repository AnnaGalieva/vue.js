const HelloVueApp = {
    data() {
        return {
            articles: [{
                id: 1,
                src: 'img/articles1.png',
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Let’s Get Solution For Building ',
                date: '26 December,2022 ',
                button: ''
            }, {
                id: 2,
                src: 'img/articles2.png',
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Let’s Get Solution For Building ',
                date: '26 December,2022 ',
                button: ''
            }, {
                id: 3,
                src: 'img/articles3.png',
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Let’s Get Solution For Building ',
                date: '26 December,2022 ',
                button: ''
            }, {
                id: 4,
                src: 'img/articles4.png',
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Let’s Get Solution For Building ',
                date: '26 December,2022 ',
                button: ''
            }, {
                id: 5,
                src: 'img/articles5.png',
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Let’s Get Solution For Building ',
                date: '26 December,2022 ',
                button: ''
            }, {
                id: 6,
                src: 'img/articles6.png',
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Let’s Get Solution For Building ',
                date: '26 December,2022 ',
                button: ''
            }, ]
        }
    },
    methods: {

    },

}
Vue.createApp(HelloVueApp).mount('#app');