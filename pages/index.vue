<template>
    <div class="home text-text-color">
        <HomeProblems />
        <HomeMinus />
        <HomeSolution />
    </div>
</template>

<script>
import HomeSolution from '../components/home/HomeSolution.vue';
import HomeMinus from '../components/home/HomeMinus.vue';
import HomeProblems from '../components/home/HomeProblems.vue';
export default {
    components: { HomeProblems, HomeMinus, HomeSolution }
};
</script>
