<template>
    <div class="footer">
        <ul class="flex justify-between w-full">
            <li>
                <nuxt-link to="/" exact active-class="active"
                    >Главная</nuxt-link
                >
            </li>
            <li>
                <nuxt-link to="/about" active-class="active">О нас</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/client" active-class="active"
                    >Клиенты и Партнеры</nuxt-link
                >
            </li>
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
        </ul>
        <p class="footer__info">All Rights Reserved 2019 «Muratov Partners</p>
    </div>
</template>

<script>
export default {};
</script>
