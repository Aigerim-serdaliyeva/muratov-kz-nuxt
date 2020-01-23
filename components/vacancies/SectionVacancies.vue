<template>
    <div font-open-sans>
        <h2
            class="vacancies__title bg-accent-color text-center font-extrabold text-18px py-4 px-3 lg:py-6 lg:text-30px 3xl:text-40px"
        >
            <span class="block md:inline-block"
                >Построй свою карьеру вместе</span
            >
            <span>с Muratov Partners!</span>
        </h2>
        <div class="container relative">
            <VacancyContact class="hidden md:block" />
            <div
                v-for="(vacancy, index) in vacancies"
                :key="vacancy.title"
                class="vacancy"
            >
                <h2
                    class="vacancy__title text-center cursor-pointer font-semibold py-3 -mx-15px text-18px md:text-24px md:py-4 md:mx-0"
                    @click="toggleVacancy(index + 1)"
                >
                    {{ vacancy.title }}
                </h2>
                <div
                    :ref="`vacancyBlock${index + 1}`"
                    class="vacancy__block text-blue-back bg-accent-color text-14px py-4 px-3 -mx-15px md:pt-40px md:pb-20px md:pr-40px md:pl-12% md:text-18px md:mx-0"
                >
                    <div
                        v-for="list in vacancy.lists"
                        :key="list.subtitle"
                        class="mb-20px"
                    >
                        <h3 class="font-semibold">{{ list.subtitle }}</h3>
                        <ul>
                            <li v-for="item in list.list" :key="item">
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <VacancyContact class="block md:hidden" />
                </div>
            </div>
            <div
                class="vacancies__text text-center text-blue-back text-18px py-8"
            >
                В данном разделе размещены актуальные вакансии нашей компании.
                <br />
                Отправляйте резюме на наш электронный адрес:
                <a href="mailto:recrutment@muratov.kz" class="font-semibold"
                    >recrutment@muratov.kz</a
                >
            </div>
        </div>
    </div>
</template>

<script>
// global jquery
import $ from 'jquery';

import VacancyContact from './VacancyContact.vue';
window.$ = $;
export default {
    components: { VacancyContact },
    data() {
        return {
            vacancies: require('@/assets/json/vacancies')
        };
    },
    methods: {
        toggleVacancy(index) {
            if (window.outerWidth > 767) {
                return;
            }
            $(this.$refs[`vacancyBlock${index}`]).slideToggle('slow');
            for (let i = 1; i <= 3; i++) {
                if (i !== index) {
                    $(this.$refs[`vacancyBlock${i}`]).slideUp('slow');
                }
            }
        }
    }
};
</script>

<style lang="scss">
.vacancy {
    &__title {
        border: 1px solid rgba(0, 48, 91, 0.3);
        border-right: none;
        border-left: none;
    }
}

@media screen and (max-width: 768px) {
    .contacts-block {
        position: relative !important;
        left: 0 !important;
        top: 0 !important;
    }
}
</style>
