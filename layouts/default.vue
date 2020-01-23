<template>
    <div>
        <HeaderMobile />
        <Header />
        <SectionMain />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import HeaderMobile from '../components/header/HeaderMobile.vue';
import SectionMain from '../components/main/SectionMain.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
export default {
    components: { Header, Footer, SectionMain, HeaderMobile },
    data() {
        return {};
    }
};
</script>
