<template>
    <div
        class="main w-full h-screen font-roboto text-white bg-center bg-no-repeat bg-cover lg:h-auto lg:bg-bottom"
    >
        <div
            class="main__block w-full h-full px-0 pt-48 pb-8 text-center lg:max-w-4xl lg:pt-64 lg:pb-24 lg:h-auto"
        >
            <div
                class="main__title w-full justify-between items-center lg:flex lg:mx-auto lg:max-w-3xl"
            >
                <img
                    src="@/assets/img/logo-white.svg"
                    class="block mx-auto lg:mx-0"
                />
                <h2
                    class="font-open-sans font-extrabold font-bold mt-12 lg:mt-0"
                >
                    MURATOV PARTNERS
                </h2>
            </div>
            <div
                class="main__text font-normal text-lg mb-8 lg:text-4xl lg:mb-32"
            >
                Защита вашего бизнеса – наш приоритет!
            </div>
            <button class="button button--linear text-16px" @click="openForm()">
                Получить консультацию
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openForm() {}
    }
};
</script>

<style lang="scss" scoped>
.main {
    background-image: url('../../static/images/main-back.jpg');
    &__block {
        background: rgba(1, 33, 63, 0.8);
        // padding: 260px 0 165px;
        // max-width: 870px;
        // text-align: center;
    }
    &__title {
        // font-size: 65px;
        font-size: 94px;
        line-height: 87%;
        margin: 0 auto 25px;
        // max-width: 720px;
    }
    &__text {
        // font-size: 35.6159px;
        // margin-bottom: 130px;
    }
}

@media screen and (max-width: 768px) {
    .main {
        &__block {
            background: rgba(1, 33, 63, 0.6);
            // padding: 260px 0 165px;
            // max-width: 870px;
            // text-align: center;
        }
        &__title {
            font-size: 65px;
            line-height: 80%;
            margin: 0 auto 25px;
        }
        &__text {
            // font-size: 35.6159px;
            // margin-bottom: 130px;
        }
    }
}
</style>
