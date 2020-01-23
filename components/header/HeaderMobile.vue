<template>
    <div class="header-mobile h-screen bg-no-repeat bg-top bg-center">
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
    components: { SocialIcons, MainMenu }
};
</script>

<style lang="scss" scoped>
.header-mobile {
    background-image: url('../../assets/img/header-mob-back.png');
}
</style>
