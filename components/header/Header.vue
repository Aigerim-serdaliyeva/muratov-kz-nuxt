<template>
    <div class="header w-full font-roboto z-10 py-5px sm:py-0 fixed">
        <div class="container">
            <div class="w-11/12 mx-auto flex items-center sm:justify-between">
                <div
                    class="absolute top-1/3 left-17px sm:hidden"
                    @click="toggleMobileMenu()"
                >
                    <img src="../../assets/img/open.svg" />
                </div>
                <nuxt-link to="/" class="text-center mx-auto sm:ml-0">
                    <img src="@/assets/img/logo.svg" alt="" />
                </nuxt-link>
                <MainMenu class="hidden sm:block" />
            </div>
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu },
    methods: {
        toggleMobileMenu() {
            this.$emit('toggle-mobile-menu');
            console.log('clicked');
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    background: radial-gradient(
        7683.68% 132444.76% at 50% 49.99%,
        #ffffff 0%,
        #122841 100%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 768px) {
    .header {
        background: radial-gradient(
            7683.68% 132444.76% at 50% 49.99%,
            #ffffff 0%,
            #122841 100%
        );
        opacity: 0.9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}
</style>
