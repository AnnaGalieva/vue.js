// Определяем новый компонент
const articles = {
    data() {
        return {
            // curentArticles: [{
            //     id: 1,
            //     heading: "Let’s Get Solution for Building Construction Work",
            //     images: "img/kitchen.svg",
            //     date: "26 December,2022",
            //     link1: "Interior",
            //     link2: "Interior",
            //     link3: "Decore",
            //     content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                   Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            // }],
            articles: [{
                id: 1,
                heading: "Let’s Get Solution for Building Construction Work",
                images: "img/kitchen.svg",
                date: "26 December,2022",
                link1: "Interior",
                link2: "Interior",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                   Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            }, {
                id: 2,
                heading: "Building Construction Work",
                images: "img/Bedroom.svg",
                date: "20 December,2022",
                link1: "Interior",
                link2: "Interior",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  "
            }, {
                id: 3,
                heading: "Solution for Building Construction Work",
                images: "img/articles5.png",
                date: "20 December,2022",
                link1: "Interior",
                link2: "Interior",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.  "
            }, {
                id: 4,
                heading: "Get Solution for Building Construction Work",
                images: "img/articles6.png",
                date: "20 December,2022",
                link1: "Interior",
                link2: "Interior",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet."
            }, {
                id: 5,
                heading: "Let’s Get Solution for Building Construction Work",
                images: "img/articles4.png",
                date: "20 December,2022",
                link1: "Interior",
                link2: "Interior",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet."
            }, {
                id: 6,
                heading: "Let’s Get Solution for Building Construction Work",
                images: "img/projects__all_item_img1.svg",
                date: "20 December,2022",
                link1: "Interior",
                link2: "Interior",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet."
            }, ],
            buttonsTitle: "Tags",
            buttons: [
                { id: 1, title: "Kitchen" },
                { id: 2, title: "Bedroom" },
                { id: 3, title: "Building" },
                { id: 4, title: "Architecture" },
                { id: 5, title: "Kitchen Planning" },
                { id: 5, title: "Bedroom" },
            ],
            show: 1

        }
    },
    methods: {
        // filters(e) {
        //     this.curentArticles = this.articles.filter(article => article.id === e.target.dataset.id);
        // },
        // sort() {
        //     return this.articles.sort(a, b);
        // }
    },

    template: `<div v-show="show === article.id"  v-for="article in articles"  class="details__main_all">
    <div class="details__main_heading">
        <h1 class="details__main_heading_text">{{article.heading}}</h1>
       <div class="details__main_image">
    <img class="details__main_img" :src="article.images" alt="#"></div>
    <div class="details__main_info">
        <p class="details__main_info_date">{{article.date}}</p>
        </div>
        <nav class="details__main_info_breadcrumb">
            <ul class="details__main_info_breadcrumb_ul">
                <li class="details__main_info_breadcrumb_li">
                    <a class="details__main_info_breadcrumb_link" href="">{{article.link1}}</a>
                </li>
                <li class="details__main_info_breadcrumb_li">
                    <a class="details__main_info_breadcrumb_link" href="">{{article.link2}}</a>
                </li>
                <li class="details__main_info_breadcrumb_li">
                    <a class="details__main_info_breadcrumb_link" href="">{{article.link3}}</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="details__main_content">
        <p class="details__main_content_text">{{article.content}}</p>
    </div></div>
    <div  class="details__tags ">
                        <h2 class="details__tags_heading ">{{buttonsTitle}}</h2>
                        <div class="details__tags_btn ">
                            <button  @click="show = button.id" v-for="button in buttons"  class="details__tags_btn_1">
                                <h1 class="details__tags_btn_text">{{button.title}}</h1>
                            </button>
                                                    </div> </div>
`
};