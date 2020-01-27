<template>
    <div class="about-mission">
        <div
            class="about-mission__title bg-blue-back text-white text-center text-lg py-10 px-2 lg:text-4xl"
        >
            <h2 class="max-w-5xl w-full mx-auto">
                <span class="font-bold">Наша миссия</span> - Обезопасить бизнес
                Клиента, предоставив качественную юридическую помощь.
            </h2>
        </div>
        <div class="about-mission__content py-12">
            <div class="container">
                <h2
                    class="font-extrabold text-24px mb-10 text-center lg:text-30px 2xl:text-40px"
                >
                    Наши корпоративные ценности:
                </h2>
                <div
                    class="mission__content max-w-1400px mx-auto md:flex flex-wrap justify-between"
                >
                    <div
                        v-for="mission in missions"
                        :key="mission.title"
                        class="mission text-center max-w-550px mb-10 md:px-4 md:w-6/12 3xl:max-w-620px rotateInUpLeft wow"
                    >
                        <h3
                            class="relative font-bold text-18px mb-4 leading-loose md:text-24px 3xl:text-36px"
                        >
                            {{ mission.title }}
                        </h3>
                        <p class="text-14px md:text-18px 2xl:text-24px">
                            {{ mission.text }}
                        </p>
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
            missions: [
                {
                    class: 'rotateInUpLeft',
                    title: 'Легальность',
                    text:
                        'Мы всегда действуем в рамках законодательства и решаем проблемы исключительно правовыми способами.'
                },
                {
                    class: 'rotateInUpRight',
                    title: 'Гарантия качества',
                    text:
                        'Мы с полной ответственностью берем на себя все обязательства и чувствительны к оценке Клиента. '
                },
                {
                    class: 'rotateInUpLeft',
                    title: 'Оперативность',
                    text:
                        'Задачи Клиента решаются в максимально короткие сроки.'
                },
                {
                    class: 'rotateInUpRight',
                    title: 'Профессиональная этика',
                    text:
                        'Мы с уважением относимся к нашим Клиентам, партнерам, конкурентам, судам и всем тем, с кем взаимодействуем.'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.about-mission {
    &__content {
        background: #fafafa;
        box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.2);
    }
}

.mission {
    h3 {
        &::before {
            content: '';
            position: absolute;
            background: linear-gradient(
                90deg,
                hsla(0, 0%, 100%, 0),
                #41b7c4 49.73%,
                hsla(0, 0%, 100%, 0)
            );
            width: 10.42rem;
            height: 6px;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}

@media screen and (max-width: 768px) {
    .mission {
        h3 {
            &::before {
                height: 2px;
            }
        }
    }
}
</style>
