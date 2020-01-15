<template>
    <div class="home text-text-color">
        <HomeProblems />
        <HomeMinus />
        <HomeSolution />
        <HomeCommercial />
    </div>
</template>

<script>
import HomeCommercial from '../components/home/HomeCommercial.vue';
import HomeSolution from '../components/home/HomeSolution.vue';
import HomeMinus from '../components/home/HomeMinus.vue';
import HomeProblems from '../components/home/HomeProblems.vue';
export default {
    components: { HomeProblems, HomeMinus, HomeSolution, HomeCommercial }
};
</script>
