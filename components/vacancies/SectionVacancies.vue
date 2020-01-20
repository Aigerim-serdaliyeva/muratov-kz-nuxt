<template>
    <div font-open-sans>
        <h2
            class="vacancies__title bg-accent-color text-center font-extrabold text-18px py-4 px-3 lg:py-6 lg:text-30px 3xl:text-40px"
        >
            <span>Построй свою карьеру вместе</span> <br />
            <span>с Muratov Partners!</span>
        </h2>
        <div v-for="vacancy in vacancies" :key="vacancy.title" class="vacancy">
            <h2>{{ vacancy.title }}</h2>
            <div
                v-for="list in vacancy.lists"
                :key="list.subtitle"
                class="vacancy__block"
            >
                <h3>{{ list.subtitle }}</h3>
                <ul>
                    <li>{{ list.list }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vacancies: require('@/assets/json/vacancies')
        };
    }
};
</script>

<style></style>
