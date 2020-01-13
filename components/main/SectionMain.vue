<template>
    <div class="main font-roboto text-white bg-bottom">
        <div class="main__block w-full">
            <div class="main__title flex justify-between w-full">
                <img src="@/assets/img/logo-white.svg" alt="" />
                <h2 class="font-open-sans font-extrabold">MURATOV PARTNERS</h2>
            </div>
            <div class="main__text font-normal">
                Защита вашего бизнеса – наш приоритет!
            </div>
            <button class="button button--linear">Получить консультацию</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
    background-image: url('../../static/images/main-back.jpg');
    &__block {
        background: rgba(1, 33, 63, 0.8);
        padding: 260px 0 165px;
        max-width: 870px;
        text-align: center;
    }
    &__title {
        font-weight: bold;
        font-size: 97.9769px;
        line-height: 87.16%;
        margin: 0 auto 25px;
        max-width: 720px;
    }
    &__text {
        font-size: 35.6159px;
        margin-bottom: 130px;
    }
}
</style>
