// Определяем новый глобальный компонент
const kitchen = {
    data() {
        return {
            kitchenel: [{
                id: 1,
                heading: "Let’s Get Solution for Building Construction Work",
                images: "img/kitchen.svg",
                date: "26 December,2022",
                link1: "Interior",
                link2: "Interior",
                link3: "Decore",
                content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                   Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            }]
        }
    },
    methods: {

    },
    template: `<div v-for="kitchen in kitchenel" :key="kitchen.id" class="details__main_all">
    <div class="details__main_heading">
        <h1 class="details__main_heading_text">{{kitchen.heading}}</h2>
    </div>
    <div class="details__main_image"><img class="details__main_img" :src="kitchen.images" alt="kitchen"></div>
    <div class="details__main_info">
        <p class="details__main_info_date">{{kitchen.date}} </p>
        <nav class="details__main_info_breadcrumb">
            <ul class="details__main_info_breadcrumb_ul">
                <li class="details__main_info_breadcrumb_li">
                    <a class="details__main_info_breadcrumb_link" href="">{{kitchen.link1}}</a>
                </li>
                <li class="details__main_info_breadcrumb_li">
                    <a class="details__main_info_breadcrumb_link" href="">{{kitchen.link2}}</a>
                </li>
                <li class="details__main_info_breadcrumb_li">
                    <a class="details__main_info_breadcrumb_link" href="">{{kitchen.link3}}</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="details__main_content">
        <p class="details__main_content_text">{{kitchen.content}}</p>
    </div>
</div>
</div>
<div class="details__tags">
<h2 class="details__tags_heading">Tags</h2>
<div tton class="details__tags_btn">
    <a href="#" class="details__tags_btn_1">
        <h1 class="details__tags_btn_text">Kitchen</h1>
    </a>
    <a href="#" class="details__tags_btn_2">
        <h1 class="details__tags_btn_text">Bedroom</h1>
    </a>
    <a href="#" class="details__tags_btn_3">
        <h1 class="details__tags_btn_text">Building</h1>
    </a>
    <a href="#" class="details__tags_btn_4">
        <h1 class="details__tags_btn_text">Architecture</h1>
    </a>
    <a href="#" class="details__tags_btn_5">
        <h1 class="details__tags_btn_text">Kitchen Planning</h1>
    </a>
    <a href="#" class="details__tags_btn_6">
        <h1 class="details__tags_btn_text">Bedroom</h1>
    </a>
</div>`
};