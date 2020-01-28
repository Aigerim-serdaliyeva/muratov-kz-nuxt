<template>
    <div
        class="footer relative bg-footer-back text-white py-10 text-16px md:text-18px"
    >
        <div class="wow zoomIn figure-absolute top-14 md:top-21">
            <img
                class="mx-auto hidden md:block"
                src="../../assets/img/figure-white.png"
            />
            <img
                class="mx-auto md:hidden"
                src="../../assets/img/figure-white-mob.png"
            />
        </div>
        <div class="max-w-1140px mx-auto">
            <div class="container">
                <div class="md:flex mb-5">
                    <ul class="flex mb-8 md:w-6/12">
                        <div class="w-6/12">
                            <li>
                                <nuxt-link to="/" exact active-class="active"
                                    >Главная</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/about" active-class="active"
                                    >О нас</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/client" active-class="active"
                                    >Клиенты и Партнеры</nuxt-link
                                >
                            </li>
                        </div>
                        <div class="w-6/12">
                            <li>
                                <nuxt-link to="/articles" active-class="active"
                                    >Статьи</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/vacancies" active-class="active"
                                    >Карьера</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/contacts" active-class="active"
                                    >Контакты</nuxt-link
                                >
                            </li>
                        </div>
                    </ul>
                    <div
                        class="footer__main text-center md:text-right md:w-6/12"
                    >
                        <div
                            class="footer__icons flex items-center max-w-140px md:max-w-100px mx-auto md:ml-auto md:mr-0 mb-2"
                        >
                            <a
                                href="https://www.instagram.com/muratov_partners/"
                                target="_blank"
                                ><img src="../../assets/img/instagram.svg"
                            /></a>
                            <a
                                href="https://www.facebook.com/Muratovpartners/"
                                target="_blank"
                                class="px-6 md:px-3"
                                ><img src="../../assets/img/facebook.svg"
                            /></a>
                            <a
                                href="https://vk.com/muratovpartners"
                                target="_blank"
                                ><img src="../../assets/img/vk.svg"
                            /></a>
                        </div>
                        <div>г.Алматы, ул. Шевченко, 153/1</div>
                        <a href="+77272777606">+7 (727) 277-76-06</a> <br />
                        <a href="info@muratov.kz">Email: info@muratov.kz</a>
                    </div>
                </div>
                <p class="footer__info text-center opacity-30">
                    All Rights Reserved 2019 «Muratov Partners
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
    li {
        margin-bottom: 10px;
    }
}
.footer {
    background-image: url('../../static/images/min-img-back.png');
}
</style>
