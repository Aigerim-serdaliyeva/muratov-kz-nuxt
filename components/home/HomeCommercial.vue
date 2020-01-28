<template>
    <div class="home__commercial relative bg-blue-back text-white py-16">
        <div class="wow zoomIn figure-absolute top-21 hidden md:block">
            <img class="mx-auto" src="../../assets/img/figure-white.png" />
        </div>
        <div class="container">
            <div class="max-w-1280px mx-auto">
                <h2
                    class="text-center mx-auto font-normal text-18px max-w-6xl mb-12 lg:text-20px 2xl:text-24px"
                >
                    Штатные юристы выполняют много работы технического
                    характера, немного тактического и очень редко
                    стратегического плана. Однако заработная плата такого юриста
                    необоснованно выше уровня тех задач, которые он может
                    решить.
                </h2>
                <ul class="mb-16">
                    <p class="mb-4">
                        Услуга «Проектный юрист» позволяет Вам решать задачи
                        всех уровней за плату одного штатного юриста, что
                    </p>
                    <li
                        v-for="service in services"
                        :key="service"
                        class="relative pl-2 mb-3"
                    >
                        {{ service }}
                    </li>
                </ul>
                <button
                    class="button-blue font-medium text-16px text-center mx-auto block py-3 px-15px sm:text-22px"
                    @click="
                        showModalChangeFormTitle(
                            'Получить коммерческое предложение'
                        )
                    "
                >
                    Получить коммерческое предложение
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ModalWindow from '../modal-window/ModalWindow.vue';
export default {
    components: { ModalWindow },
    data() {
        return {
            services: [
                'Значительно экономит ресурсы Клиента (до 1 миллиона тенге в год)',
                'Оптимизирует работы: задачи решаются в 1,5-2 раза быстрее за счет командной работы',
                'Над задачами Клиента трудится не 1, а целых 3 юриста во главе с Директором юридического департамента.'
            ]
        };
    },
    methods: {
        ...mapActions({
            showModalChangeFormTitle: 'modal/showModalChangeFormTitle'
        })
    }
};
</script>

<style lang="scss" scoped>
.home__commercial {
    background-image: url('../../static/images/image-back.png');
    ul {
        li {
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
