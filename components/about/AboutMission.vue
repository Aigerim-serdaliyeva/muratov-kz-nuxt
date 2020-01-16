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
        <div class="about-mission__content py-12 px-3">
            <div class="container-1550">
                <h2
                    class="font-extrabold text-lg mb-8 text-center lg:text-3xl lg:text-xl"
                >
                    Наши корпоративные ценности:
                </h2>
                <div
                    v-for="mission in missions"
                    :key="mission.title"
                    class="mission text-center mb-10"
                >
                    <h3 class="font-bold text-xl mb-4 leading-loose	">
                        {{ mission.title }}
                    </h3>
                    <p class="text-lg">{{ mission.text }}</p>
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
        position: relative;
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
