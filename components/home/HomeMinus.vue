<template>
    <div
        class="home__minus w-full bg-blue-back text-white bg-center py-12 px-6 font-open-sans text-center md:text-left"
    >
        <div class="home__minus__container mx-auto">
            <h2 class="home__minus__title font-bold text-lg mb-12 md:mb-20">
                Традиционный аутсорсинг предполагает, что исполнитель находится
                удаленно от заказчика, и заказчик вынужден тратить свое время
                постановку задания (написать письмо, выехать, встретиться, и
                т.д.).
            </h2>
            <h3 class="home__minus__text font-bold mb-8">
                К основным минусам такой модели можно отнести:
            </h3>
            <ul>
                <li
                    v-for="list in lists"
                    :key="list"
                    class="text-14px mb-6 font-light md:pl-10"
                >
                    {{ list }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                'Трудно оценить квалификацию удаленного юриста',
                'Трата времени на исправление результата',
                'Непрозрачность ценообразования и постановки сроков на выполнение задач',
                'Удаленное взаимодействие может привести к искажению и неправильному толкованию информации. В итоге Клиент получает не тот результат, на который рассчитывал'
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.home__minus {
    background-image: url('../../static/images/min-img-back.png');
    &__container {
        max-width: 1070px;
    }
    li {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            background: #fff;
            left: 0;
        }
    }
}

@media screen and (max-width: 768px) {
    .home__minus {
        li {
            &::before {
                display: none;
            }
        }
    }
}
</style>
