<template>
    <div
        ref="contactsBlock"
        class="contacts-block text-center max-w-316px w-full mx-auto"
        :style="{
            position: position,
            left: `60%`,
            top: `${contactsBlockTop}px`
        }"
    >
        <div
            class="contacts-block__content bg-white rounded-lg mb-5px shadow-contact pt-15px pb-5px md:pt-30px md:px-40px md:pb-10px"
        >
            <div
                class="contacts-block__title font-semibold mb-20px text-24px lg:mb-30px relative"
            >
                Контакты
            </div>
            <div class="contact-data">
                <img src="../../assets/img/vacancy/phone.png" class="mr-5px" />
                <a id="phone_number" href="tel:+77010316711" class="text-phone"
                    >+7 (701) 031 67 11</a
                >
                <span> (Дарья)</span>
            </div>
            <div class="contact-data">
                <img
                    src="../../assets/img/vacancy/telephone.png"
                    class="mr-5px"
                />
                <a id="phone_number" href="tel:+77272777600" class="text-phone"
                    >+7 (727) 277 76 00</a
                >
                <span>, внутр. 603</span>
            </div>
            <div class="contact-data">
                <img
                    src="../../assets/img/vacancy/message.png"
                    class="mr-5px"
                /><a href="mailto:recrutment@muratov.kz"
                    >recrutment@muratov.kz</a
                >
            </div>
        </div>
        <a
            href="mailto:recrutment@muratov.kz"
            class="contacts-block__link font-semibold text-white text-18px rounded-lg bg-3ca6cd block p-10px"
            >Отправить резюме</a
        >
    </div>
</template>

<script>
/* eslint-disable */
// global jquery
import $ from 'jquery';
window.$ = $;

export default {
    data() {
        return {
            contactsBlockOffsetTop: 0,
            headerHeight: 66,
            isContactsBlockSticked: false
        };
    },
    computed: {
        position() {
            return this.isContactsBlockSticked ? 'fixed' : 'absolute';
        },
        contactsBlockTop() {
            return this.headerHeight + 30;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted() {
        this.contactsBlockOffsetTop = $(this.$refs.contactsBlock).offset().top;
        this.contactsBlockLeft = $(this.$refs.contactsBlock).offset().left;
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (
                scrollTop + this.contactsBlockTop >=
                this.contactsBlockOffsetTop
            ) {
                this.isContactsBlockSticked = true;
            } else {
                this.isContactsBlockSticked = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.contacts-block {
    &__title {
        &::after {
            content: '';
            width: 72px;
            height: 1px;
            position: absolute;
            background: #cfcfcf;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            bottom: -15px;
        }
    }
}

@media screen and (max-width: 768px) {
  .contacts-block {
      &__title {
          &::after {
              bottom: -8px;
          }
      }
  }
}
</style>
