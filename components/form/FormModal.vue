<template>
    <div class="form">
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <div
                    class="form__title text-20px text-center font-semibold text-3ca6cd mb-50px md:text-24px"
                >
                    {{ formTitle }}
                </div>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|alpha"
                    class="input-div"
                >
                    <input
                        v-model="company"
                        type="text"
                        class="input"
                        placeholder="Наименование компании*"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|alpha"
                    class="input-div"
                >
                    <input
                        v-model="name"
                        type="text"
                        class="input"
                        placeholder="Имя*"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|alpha"
                    class="input-div"
                >
                    <input
                        v-model="surname"
                        type="text"
                        class="input"
                        placeholder="Фамилия*"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|alpha"
                    class="input-div"
                >
                    <input
                        v-model="middleName"
                        type="text"
                        class="input"
                        placeholder="Отчество*"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|alpha"
                    class="input-div"
                >
                    <input
                        v-model="phone"
                        type="text"
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
                        v-model="email"
                        type="email"
                        class="input"
                        placeholder="Email*"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <button
                    class="button-blue text-white font-medium text-16px text-center mx-auto block py-2 px-10 md:text-22px"
                >
                    Получить
                </button>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    props: {
        formTitle: {
            type: String,
            default: 'Получить консультацию'
        }
    },
    data: () => ({
        company: '',
        name: '',
        surname: '',
        middleName: '',
        phone: '',
        email: '',
        submitted: false
    }),
    methods: {
        onSubmit() {
            alert('Form has been submitted!');
            this.company = '';
            this.name = '';
            this.surname = '';
            this.middleName = '';
            this.phone = '';
            this.email = '';
        }
    }
};
</script>

<style lang="scss" scoped>
.form {
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.25);
}
</style>
