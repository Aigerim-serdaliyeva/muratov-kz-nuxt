<template>
    <div class="about-princip bg-accent-color text-center py-12">
        <div class="container">
            <h2 class="font-extrabold uppercase text-2xl mb-16 lg:text-4xl">
                КОРПОРАТИВНЫЕ ПРИНЦИПЫ РАБОТЫ ЮРИДИЧЕСКОЙ КОМПАНИИ <br />
                «MURATOV PARTNERS»
            </h2>
            <div
                v-for="princip in principles"
                :key="princip"
                class="princip mb-10 max-w-1140px mx-auto wow zoomIn"
            >
                <h3 class="font-extrabold text-18px lg:text-20px mb-3">
                    {{ princip.title }}
                </h3>
                <p class="text-14px lg:text-18px">{{ princip.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            principles: [
                {
                    title: 'Коллегиальность в выработке решений',
                    text:
                        'Анализ ситуации осуществляется совместно с группой юристов, каждый из которых является специалистом в своей области права, такой подход позволяет решить проблему клиента в комплексе'
                },
                {
                    title: 'Инновационность',
                    text:
                        'Наши юристы не только следят за изменениями в нормативно-правовой базе, но и сами вносят предложения по совершенствованию действующего законодательства'
                },
                {
                    title: 'Дипломатия',
                    text:
                        'Отличительной чертой нашей деятельности является то, что мы используем все навыки коммуникации для сохранения партнерских отношений между клиентом и его оппонентом (его контрагенты и сотрудники) и достижения взаимовыгодного консенсуса'
                }
            ]
        };
    }
};
</script>
