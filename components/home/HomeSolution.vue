<template>
    <div class="home__solution text-center font-open-sans">
        <div class="px-6 py-12 lg:bg-accent-color">
            <h2 class="font-bold text-3xl mb-10">Наше решение</h2>
            <p class="font-semibold mb-8">
                Мы назначаем Клиенту Ведущего персонального юриста и
                предоставляем проектного юриста в офис заказчика для быстрой и
                эффективной коммуникации.
            </p>
            <p class="font-bold">
                Наша услуга исключает эти риски благодаря уникальности модели
                взаимодействия:
            </p>
        </div>
        <div class="container">
            <div
                class="py-12 max-w-1400px mx-auto sm:flex sm:flex-wrap sm:justify-center"
            >
                <div
                    v-for="solution in solutions"
                    :key="solution.title"
                    class="solution mb-10 mx-auto max-w-450px w-full sm:w-6/12 lg:mb-0 lg:w-4/12"
                >
                    <img
                        :src="solution.url"
                        class="block mx-auto mb-4 flex-shrink-0 wow zoomIn"
                    />
                    <h3 class="font-bold mb-2 wow zoomIn">
                        {{ solution.title }}
                    </h3>
                    <p class="wow zoomIn">{{ solution.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            solutions: [
                {
                    url: require('@/assets/img/solution-1.svg'),
                    title: 'Клиент',
                    text: 'Ставит задачу'
                },
                {
                    url: require('@/assets/img/solution-2.svg'),
                    title: 'Проектный юрист',
                    text:
                        'Прием и передача информации без искажения. Выполнение задачи технической и частично тактической квалификации'
                },
                {
                    url: require('@/assets/img/solution-3.svg'),
                    title: 'Юрист-куратор',
                    text:
                        'Выполнение задачи стратегической и частично тактической квалификации Курирование проектного юриста'
                }
            ]
        };
    }
};
</script>
