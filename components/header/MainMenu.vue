<template>
    <ul class="md:flex md:justify-between w-full max-w-750px xl:max-w-890px">
        <li class="text-center" @click="select">
            <nuxt-link to="/" class="main-menu-link" exact active-class="active"
                >Главная</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link to="/about" class="main-menu-link" active-class="active"
                >О нас</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link to="/client" class="main-menu-link" active-class="active"
                >Клиенты и Партнеры</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/articles"
                class="main-menu-link"
                active-class="active"
                >Статьи</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/vacancies"
                class="main-menu-link"
                active-class="active"
                >Карьера</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/contacts"
                class="main-menu-link"
                active-class="active"
                >Контакты</nuxt-link
            >
        </li>
    </ul>
</template>

<script>
export default {
    methods: {
        select() {
            this.$emit('onSelectItem');
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    .main-menu-link {
        border-bottom: 5px solid transparent;
        &.active,
        &:hover {
            border-bottom: 5px solid #3ca6cd;
        }
    }
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 768px) {
    ul {
        .main-menu-link {
            border: none;
            &.active,
            &:hover {
                border: none;
                color: #3ca6cd;
            }
        }
    }
}
</style>
