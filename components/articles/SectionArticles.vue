<template>
    <div class="font-open-sans leading-tight">
        <div class="articles hidden container md:flex">
            <div class="tab__content">
                <div class="article max-w-1089px mr-8 py-16">
                    <h2
                        class="article__title text-30px text-center font-bold mb-6 4xl:text-36px 4xl:mb-8"
                    >
                        {{ contentTitle }}
                    </h2>
                    <div
                        v-for="text in contentText"
                        :key="text.id"
                        class="article__text text-justify font-light text-black text-18px 4xl:text-24px"
                    >
                        {{ text }}
                    </div>
                </div>
            </div>

            <div class="tabs">
                <div
                    class="tabs__title py-4 px-6 text-24px font-extrabold text-center bg-aqua-back"
                >
                    Другие статьи
                </div>
                <div
                    v-for="(item, index) in tabs"
                    :key="item.id"
                    class="tab__link max-w-493px cursor-pointer bg-aqua-back py-3 px-3 4xl:py-4 4xl:px-4"
                    :class="[activetab === index ? 'active' : '']"
                    @click="activetab = index"
                >
                    <h3
                        class="tab__link__title font-bold mb-2 text-16px 4xl:text-18px"
                    >
                        {{ item.title }}
                    </h3>
                    <div class="tab__link__text text-gray-color text-14px">
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </div>

        <div class="article__mobile py-6 md:hidden">
            <div v-for="(item, index) in tabs" :key="item.id">
                <div
                    class="article__mobile__header cursor-pointer bg-aqua-back py-4 px-3"
                    :class="[activetab === index ? 'active' : '']"
                    @click="activetab = index"
                >
                    <div>
                        <h2
                            class="article__mobile__title font-bold text-14px text-center mb-2"
                        >
                            {{ item.title }}
                        </h2>
                        <div
                            class="article__mobile__mintext text-gray-color text-xs font-light text-center"
                        >
                            {{ item.text }}
                        </div>
                    </div>
                </div>

                <div
                    v-for="text in contentText"
                    v-show="activetab === index"
                    :key="text.id"
                    class="article__mobile__text text-14px px-3 font-light text-justify"
                >
                    {{ text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activetab: 0,
            article: require('@/assets/json/article'),
            tabs: require('@/assets/json/tabs')
        };
    },
    computed: {
        contentTitle() {
            return this.article[this.activetab].title;
        },
        contentText() {
            return this.article[this.activetab].text;
        }
    }
};
</script>

<style lang="scss" scoped>
.tab {
    &__link {
        &.active {
            background: #fff;
        }
    }
}

.article__mobile {
    &__header {
        &.active {
            background: #fff;
            padding: 15px;
            .article__mobile {
                &__title {
                    font-size: 18px;
                    margin-bottom: 0;
                }
                &__mintext {
                    display: none;
                }
            }
        }
    }
    &__text {
        &:last-child {
            margin-bottom: 15px;
        }
    }
}
</style>
