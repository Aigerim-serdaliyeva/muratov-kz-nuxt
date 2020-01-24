<template>
    <div
        v-if="mobileMenuState"
        class="header-mobile z-30 w-full fixed h-screen bg-no-repeat flex flex-col bg-top bg-center pt-40px pb-30px"
        :class="{ active: mobileMenuState }"
    >
        <div @click="toggleMobileMenu()">
            <img
                src="../../assets/img/exit.svg"
                class="absolute top-17px left-17px"
            />
        </div>

        <nuxt-link to="/" class="max-w-140px mx-auto">
            <img src="@/assets/img/logo-white.svg" alt="" />
        </nuxt-link>
        <div class="flex-grow"></div>
        <MainMenu />
        <SocialIcons />
        <p class="text-gray-1 text-center text-12px opacity-30 mt-25px">
            All Rights Reserved 2019 «Muratov Partners
        </p>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
import SocialIcons from './SocialIcons.vue';
export default {
    components: { SocialIcons, MainMenu },
    data() {
        return {
            mobileMenuState: true
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuState = !this.mobileMenuState;
        }
    }
};
</script>

<style lang="scss" scoped>
.header-mobile {
    background-color: #f9fcfc;
    background-image: url('../../assets/img/header-mob-back.png');
    left: -100%;
    transition: 0.4s transform ease-in;
    &.active {
        left: 0;
    }
}
</style>
