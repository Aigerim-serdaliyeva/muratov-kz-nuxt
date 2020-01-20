<template>
    <div class="vacancies">
        <h2 class="section-title">Вакансии</h2>
        <SectionVacancies />
    </div>
</template>

<script>
import SectionVacancies from '../../components/vacancies/SectionVacancies.vue';
export default {
    components: { SectionVacancies }
};
</script>

<style lang="scss" scoped></style>
