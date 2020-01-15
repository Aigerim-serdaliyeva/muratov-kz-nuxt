<template>
    <div
        class="home__commercial bg-blue-back text-white py-16 px-6 mx-auto max-w-1400px"
    >
        <h2 class="text-center max-w-6xl text-lg font-medium mb-12">
            Штатные юристы выполняют много работы технического характера,
            немного тактического и очень редко стратегического плана. Однако
            заработная плата такого юриста необоснованно выше уровня тех задач,
            которые он может решить.
        </h2>
        <ul class="mb-16">
            <p class="mb-4">
                Услуга «Проектный юрист» позволяет Вам решать задачи всех
                уровней за плату одного штатного юриста, что
            </p>
            <li v-for="service in services" :key="service" class="pl-2 mb-3">
                {{ service }}
            </li>
        </ul>
        <button class="button-blue text-center py-3 px-4">
            Получить коммерческое предложение
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                'Значительно экономит ресурсы Клиента (до 1 миллиона тенге в год)',
                'Оптимизирует работы: задачи решаются в 1,5-2 раза быстрее за счет командной работы',
                'Над задачами Клиента трудится не 1, а целых 3 юриста во главе с Директором юридического департамента.'
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.home__commercial {
    background-image: url('../../static/images/image-back.png');
    ul {
        li {
            position: relative;
            &::before {
                content: '';
                position: absolute;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: #fff;
                top: 10px;
                left: 0;
            }
        }
    }
}
</style>
