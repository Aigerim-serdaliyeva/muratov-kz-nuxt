<template>
    <div
        class="modal-window flex items-center justify-center w-screen h-screen z-50"
    >
        <div class="form relative">
            <div
                class="absolute cursor-pointer right-22px top-22px"
                @click="hideModal"
            >
                <img src="@/assets/img/close-modal.svg" alt="" />
            </div>
            <ValidationObserver>
                <form @submit.prevent="sendMail()">
                    <h3
                        class="form__title text-20px text-center font-semibold text-3ca6cd mb-40px md:mb-30px 2xl:mb-50px md:text-24px"
                    >
                        {{ formTitle }}
                    </h3>

                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        class="input-div"
                    >
                        <input
                            v-model="sendData.company"
                            type="text"
                            class="input"
                            placeholder="Наименование компании*"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        class="input-div"
                    >
                        <input
                            v-model="sendData.name"
                            type="text"
                            class="input"
                            placeholder="Имя*"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        class="input-div"
                    >
                        <input
                            v-model="sendData.surname"
                            type="text"
                            class="input"
                            placeholder="Фамилия*"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        class="input-div"
                    >
                        <input
                            v-model="sendData.middleName"
                            type="text"
                            class="input"
                            placeholder="Отчество*"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        class="input-div"
                    >
                        <input
                            v-model="sendData.phone"
                            v-mask="'8(###)-###-##-##'"
                            type="tel"
                            class="input"
                            placeholder="Мобильный номер телефона*"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|email"
                        class="input-div"
                    >
                        <input
                            v-model="sendData.email"
                            type="email"
                            class="input"
                            placeholder="Email*"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <button
                        class="button-blue text-white font-medium text-16px text-center mx-auto block py-2 px-10 mt-20px md:text-22px"
                    >
                        Получить
                    </button>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { VueMaskDirective } from 'v-mask';
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    directives: {
        mask: VueMaskDirective
    },
    props: {
        formTitle: {
            type: String
        }
    },
    data: () => ({
        sendData: {
            company: '',
            name: '',
            surname: '',
            middleName: '',
            phone: '',
            email: ''
        },
        submitted: false
    }),
    methods: {
        ...mapMutations({
            hideModal: 'modal/hideModal'
        }),
        sendMail() {
            const options = {
                method: 'POST',
                data: this.sendData,
                url: `./mailer.php`
            };
            axios(options)
                .then(() => {})
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.form {
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.25);
}
</style>
