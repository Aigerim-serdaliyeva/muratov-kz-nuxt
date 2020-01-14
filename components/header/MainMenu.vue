<template>
    <ul class="flex justify-between w-full">
        <li>
            <nuxt-link to="/" exact active-class="active py-4"
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
            <nuxt-link to="/articles" active-class="active">Статьи</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/vacancies" active-class="active">Карьера</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/contacts" active-class="active">Контакты</nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
    max-width: 890px;
    li {
        font-size: 18px;
        padding: 30px 10px 25px;
        border-bottom: 5px solid transparent;
        margin-right: 40px;
        &.active,
        &:hover {
            border-bottom: 5px solid #3ca6cd;
        }
    }
}
</style>
