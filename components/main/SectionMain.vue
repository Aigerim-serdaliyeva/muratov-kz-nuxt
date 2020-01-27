<template>
    <div
        class="main w-full h-screen font-open-sans text-white bg-center bg-no-repeat bg-cover lg:h-auto lg:bg-bottom"
    >
        <div class="container lg:flex">
            <div
                class="main__block section-right h-screen before-blue pt-48 pb-8 text-center lg:pt-64 lg:pb-24 lg:h-auto"
            >
                <div
                    class="main__title text w-full justify-between items-center lg:flex lg:mx-auto "
                >
                    <img
                        src="@/assets/img/logo-white.svg"
                        class="block mx-auto lg:mx-0 lg:max-w-150px 2xl:max-w-160px  4xl:max-w-full"
                    />
                    <h2
                        class="font-open-sans text-60px font-extrabold font-bold mt-10 lg:mt-0 lg:text-60px 2xl:text-70px 4xl:text-94px"
                    >
                        MURATOV PARTNERS
                    </h2>
                </div>
                <div
                    class="main__text font-normal text-16px mb-8 lg:text-24px 2xl:text-28px lg:mb-32"
                >
                    Защита вашего бизнеса – наш приоритет!
                </div>
                <button
                    class="button button--linear text-18px py-5px px-5 lg:text-24px"
                    @click="showModal"
                >
                    Получить консультацию
                </button>
                <ModalWindow v-if="modalVisible">
                    <template v-slot:modal>
                        <Form />
                    </template>
                </ModalWindow>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Form from '../form/Form.vue';
import ModalWindow from '../modal-window/ModalWindow.vue';

export default {
    components: { ModalWindow, Form },
    computed: {
        ...mapState({
            modalVisible: ({ modal }) => modal.modalVisible
        })
    },
    methods: {
        ...mapMutations({
            showModal: 'modal/showModal'
        })
    }
};
</script>

<style lang="scss" scoped>
.main {
    background-image: url('../../static/images/main-back.jpg');
    &__block {
        background: rgba(0, 48, 91, 0.76);
    }
    &__title {
        margin: 0 auto 25px;
        h2 {
            line-height: 87%;
        }
    }
}

@media screen and (max-width: 768px) {
    .main {
        &__block {
            background: rgba(1, 33, 63, 0.6);
        }
        &__title {
            font-size: 65px;
            line-height: 80%;
            margin: 0 auto 25px;
        }
    }
}
</style>
