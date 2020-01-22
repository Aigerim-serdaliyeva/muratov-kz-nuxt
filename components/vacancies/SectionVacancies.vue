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
        <div class="container">
            <div
                v-for="vacancy in vacancies"
                :key="vacancy.title"
                class="vacancy"
            >
                <h2 class="vacancy__title text-center text-24px py-4">
                    {{ vacancy.title }}
                </h2>
                <div
                    class="vacancy__block text-blue-back bg-accent-color pt-40px pb-20px pr-40px pl-12% text-18px"
                >
                    <div
                        ref="contactsBlock"
                        class="contacts-block text-center max-w-316px w-full"
                        :style="{
                            position: position,
                            left: `60%`,
                            top: `${contactsBlockTop}px`
                        }"
                    >
                        <div
                            class="contacts-block__content bg-white rounded-lg shadow-contact pt-30px px-40px pb-10px mb-5px"
                        >
                            <div
                                class="contacts-block__title font-semibold text-24px mb-30px relative"
                            >
                                Контакты
                            </div>
                            <div class="contact-data">
                                <img
                                    src="../../assets/img/vacancy/phone.png"
                                    class="mr-5px"
                                />
                                <a
                                    id="phone_number"
                                    href="tel:+77010316711"
                                    class="text-phone"
                                    >+7 (701) 031 67 11</a
                                >
                                <span> (Дарья)</span>
                            </div>
                            <div class="contact-data">
                                <img
                                    src="../../assets/img/vacancy/telephone.png"
                                    class="mr-5px"
                                />
                                <a
                                    id="phone_number"
                                    href="tel:+77272777600"
                                    class="text-phone"
                                    >+7 (727) 277 76 00</a
                                >
                                <span>, внутр. 603</span>
                            </div>
                            <div class="contact-data">
                                <img
                                    src="../../assets/img/vacancy/message.png"
                                    class="mr-5px"
                                /><a href="mailto:recrutment@muratov.kz"
                                    >recrutment@muratov.kz</a
                                >
                            </div>
                        </div>
                        <a
                            href="mailto:recrutment@muratov.kz"
                            class="contacts-block__link font-semibold text-white text-18px rounded-lg bg-3ca6cd block p-10px"
                            >Отправить резюме</a
                        >
                    </div>
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
export default {
    data() {
        return {
            vacancies: require('@/assets/json/vacancies'),
            contactsBlockOffsetTop: 0,
            headerHeight: 66,
            isContactsBlockSticked: false
        };
    }
};
</script>

<style lang="scss" scoped>
.vacancy {
    &__title {
        border: 1px solid rgba(0, 48, 91, 0.3);
        border-right: none;
        border-left: none;
    }
}

.contacts-block {
    &__title {
        &::after {
            content: '';
            width: 72px;
            height: 1px;
            position: absolute;
            background: #cfcfcf;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            bottom: -15px;
        }
    }
}
</style>
