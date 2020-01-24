<template>
    <div>
        <HeaderMobile class="" />
        <Header class="" />
        <SectionMain />
        <FormModal />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import FormModal from '../components/form/FormModal.vue';
import HeaderMobile from '../components/header/HeaderMobile.vue';
import SectionMain from '../components/main/SectionMain.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
export default {
    components: {
        Header,
        Footer,
        SectionMain,
        HeaderMobile,
        FormModal
    },
    data() {
        return {};
    }
};
</script>
