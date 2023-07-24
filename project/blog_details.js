// Определяем новый глобальный компонент
const kitchen = {
    data() {
        return {
            kitchenel: [{
                id: 1,
                heading: "Let’s Get Solution for Building Construction Work",
                images: "img/kitchen.svg",
                date: "26 December,2022",
                link1: "Interior ",
                link2: "Interior ",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                   Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            }]
        }
    },
    methods: {

    },
    template: `<div v-for="kitchen in kitchenel" :key="kitchen.id" class="details__main_all">
    <div class="details__main_heading"><h1>{{kitchen.heading}}</h2></div>
    </div>`
};