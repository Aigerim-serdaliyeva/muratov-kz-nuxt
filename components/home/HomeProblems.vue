<template>
    <div class="font-open-sans lg:flex">
        <div
            class="home__problems__question w-full bg-accent-color py-16 lg:max-w-4xl"
        >
            <h2
                class="text-center uppercase text-00305B text-3xl font-extrabold leading-tight mb-12 lg:text-6xl"
            >
                Часто <br />
                встречаетесь <br />
                с такими <br />
                проблемами
            </h2>
            <img
                src="@/assets/img/question-mark.svg"
                class="block mx-auto w-8/12 wow ghost lg:w-auto"
            />
        </div>
        <ul
            class="home__problems__list py-12 px-6 lg:flex lg:flex-col lg:justify-center lg:py-4"
        >
            <li
                v-for="list in lists"
                :key="list.title"
                class="text-center mb-6 lg:text-left lg:pl-16 lg:mb-10"
            >
                <h3 class="font-bold mb-2 pb-1 text-lg lg:text-2xl">
                    {{ list.title }}
                </h3>
                <p class="font-normal leading-tight lg:text-lg lg:max-w-2xl">
                    {{ list.main }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {
                    title: 'Юрист низкой квалификации?',
                    main:
                        'Экономия на юридических услугах может привести к серьезным последствиям.'
                },
                {
                    title: 'Претензии, иски, завышенные налоги и штрафы?',
                    main:
                        'Причиной этих явлений в бизнесе является неграмотно составленный договор. Что в итоге негативно влияет на репутацию вашей компании на рынке.'
                },
                {
                    title: 'Контрагенты не выполняют свои обязательства?',
                    main:
                        'В работу юриста-эксперта так же входит проверка будущих партнеров, подготовка условий взаимодействия, переговоры и защита основного договора.'
                },
                {
                    title: 'Дебиторская задолженность?',
                    main:
                        'В первую очередь вредит вашим оборотным средствам, что мешает вам вести свою деятельность. Причиной могут стать как не прописанные в договоре условия оплаты, так и различные форс-мажорные ситуации.'
                },
                {
                    title: 'Хорошая юридическая защита бьет по бюджету?',
                    main:
                        'Эксперт стоит дорого, а слабый и некомпетентный специалист обходится в итоге еще дороже. При этом топ-менеджмент постоянно сталкивается с арестом счетов, исками, жалобами и претензиями, а кассовые разрывы подрывают деятельность компании.'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.home {
    &__problems {
        &__question {
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
        }

        &__list {
            li {
                position: relative;
                &:last-child {
                    margin-bottom: 0;
                }
                &::before {
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    background: #3ca6cd;
                    left: 0;
                }
            }
            h3 {
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 16.458333333333336rem;
                    background: #bcbcbc;
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .home {
        &__problems {
            &__question {
                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
            }

            &__list {
                li {
                    &::before {
                        display: none;
                    }
                }
                h3 {
                    position: relative;
                    &::after {
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
            }
        }
    }
}
</style>
