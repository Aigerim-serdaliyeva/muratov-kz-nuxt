<template>
    <div class="about font-open-sans text-00305B">
        <AboutMission />
        <AboutPrinciples />
        <AboutAdvantages />
    </div>
</template>

<script>
import AboutAdvantages from '../../components/about/AboutAdvantages.vue';
import AboutPrinciples from '../../components/about/AboutPrinciples.vue';
import AboutMission from '../../components/about/AboutMission.vue';
export default {
    components: { AboutMission, AboutPrinciples, AboutAdvantages }
};
</script>

<style lang="scss" scoped></style>
