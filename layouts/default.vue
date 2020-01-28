<template>
    <div class="relative">
        <HeaderMobile class="sm:hidden" />
        <Header class="hidden sm:block" />
        <SectionMain />
        <nuxt />
        <Footer />
        <ModalWindow v-if="modalVisible">
            <template v-slot:modal>
                <Form :form-title="formTitle" />
            </template>
        </ModalWindow>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Form from '../components/form/Form.vue';
import ModalWindow from '../components/modal-window/ModalWindow.vue';
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
        ModalWindow,
        Form
    },
    computed: {
        ...mapState({
            modalVisible: ({ modal }) => modal.modalVisible,
            formTitle: ({ modal }) => modal.formTitle
        })
    },
    data() {
        return {};
    }
};
</script>
