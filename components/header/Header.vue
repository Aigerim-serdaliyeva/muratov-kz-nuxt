<template>
    <div class="header w-full hidden font-roboto lg:block lg:fixed">
        <div class="w-1400 mx-auto flex items-center justify-between">
            <nuxt-link to="/" class="">
                <img src="@/assets/img/logo.svg" alt="" />
            </nuxt-link>
            <MainMenu />
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu }
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
</style>
