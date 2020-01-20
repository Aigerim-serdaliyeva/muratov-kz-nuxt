<template>
    <div
        class="about-advantage bg-no-repeat bg-cover w-full h-full text-white bg-center bg-cover"
    >
        <div class="container lg:flex">
            <div
                class="about-advantage__title -mx-15px px-3 blue-rgba relative before-blue py-10 lg:py-16 lg:w-5/12"
            >
                <h2 class="font-roboto font-black uppercase">
                    <span class="text-6xl ">НАШИ </span> <br />
                    ПРЕИМУЩЕСТВА
                </h2>
                <img
                    src="../../assets/img/advantage-arrow.svg"
                    class="absolute"
                />
            </div>
            <div
                class="about-advantage__content -mx-15px px-3 relative bg-right bg-cover py-10 lg:py-16 lg:ml-8 lg:w-7/12"
            >
                <div
                    v-for="advantage in advantages"
                    :key="advantage.title"
                    class="advantage text-center mb-8 last:mb-0 lg:flex lg:text-left"
                >
                    <div
                        class="advantage__img flex-shrink-0 mb-4 last:mb-0 lg:mr-8"
                    >
                        <img :src="advantage.url" class="mx-auto" />
                    </div>
                    <div class="advantage__block">
                        <h3 class="font-bold">{{ advantage.title }}</h3>
                        <p class="text-sm">{{ advantage.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            advantages: [
                {
                    url: require('@/assets/img/advantage-1.png'),
                    title: 'Индивидуальный подход к клиенту',
                    text:
                        'Проблемы клиента должны быть решены наилучшим образом со строгим соблюдением требований закона'
                },
                {
                    url: require('@/assets/img/advantage-2.png'),
                    title: 'Лояльность и конфиденциальность',
                    text:
                        'В работе мы всегда стремимся создать долговременные партнерские отношения с клиентами и гарантируем строгую конфиденциальность на всех этапах сотрудничества'
                },
                {
                    url: require('@/assets/img/advantage-3.png'),
                    title: 'Актуальность методов работы',
                    text:
                        'В условиях динамичного рынка и изменчивого законодательства мы прилагаем все усилия, чтобы учитывать эти изменения в своей практике'
                },
                {
                    url: require('@/assets/img/advantage-4.png'),
                    title: 'Стратегический подход',
                    text:
                        'Прежде чем приступить к делу, наши юристы тщательно изучают все законодательство и документы по вопросу клиента, разрабатывают верную стратегию и четкий план дальнейших действий, который оперативно корректируется по мере необходимости'
                },
                {
                    url: require('@/assets/img/advantage-5.png'),
                    title: 'Надежность',
                    text:
                        'Надежность и последовательность – неотъемлемые черты нашего бизнеса. Мы не бросаем клиента и всегда доводим дело до конца'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.about-advantage {
    background-image: url('../../static/images/about-advantage-back.jpg');
    &__title {
        box-shadow: 13px 4px 23px rgba(0, 0, 0, 0.3);
        h2 {
            font-size: 61px;
            span {
                font-size: 170px;
                line-height: 80%;
            }
        }
        img {
            position: absolute;
            left: -180px;
            top: 350px;
        }
    }
}

@media screen and (max-width: 1360px) {
    .about-advantage {
        &__title {
            h2 {
                font-size: 50px;
                span {
                    font-size: 140px;
                }
            }
            img {
                left: -100px;
                top: 350px;
            }
        }
    }
}

@media screen and (max-width: 1280px) {
    .about-advantage {
        &__title {
            h2 {
                font-size: 42px;
                span {
                    font-size: 120px;
                }
            }
            img {
                left: -140px;
                top: 350px;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .about-advantage {
        background-image: none;
        &__title {
            background: rgba(0, 48, 91, 1);
            h2 {
                font-size: 28px;
                span {
                    font-size: 80px;
                    line-height: 60%;
                }
            }
            img {
                transform: rotate(90deg);
                height: 80px;
                width: 280px;
                left: 50%;
                top: 49.8%;
            }
        }
        &__content {
            background-image: url('../../assets/img/about-advantage-mob.jpg');
            z-index: -2;
            &::before {
                content: '';
                position: absolute;
                background-color: rgba(0, 48, 91, 0.5);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: -1;
            }
        }
    }
}
</style>
