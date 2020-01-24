<template>
    <div class="text-blue-back">
        <div class="items-center max-w-1140px pt-10 mx-auto md:flex md:py-12">
            <div class="contact-logo mb-30px relative md:w-5/12 md:mb-0">
                <img
                    src="../../assets/img/logo.svg"
                    class="max-w-215px w-full mx-auto md:mr-0 md:ml-auto"
                />
            </div>
            <div
                class="flex flex-col-reverse items-center md:flex-row md:w-7/12"
            >
                <div class="w-full md:w-4/12">
                    <img
                        src="../../assets/img/contact-instagram.svg"
                        class="max-w-450px w-full mx-auto"
                    />
                </div>
                <div class="contact mb-30px md:w-6/12 md:mb-0 md:ml-5">
                    <a href="" class="contact-link"
                        ><img
                            src="../../assets/img/email.png"
                            class="mr-20px"
                        />info@muratov.kz</a
                    >
                    <a href="+77272777606" class="contact-link"
                        ><img
                            class="mr-20px"
                            src="../../assets/img/phone.png"
                        />+7 (727) 277-76-06</a
                    >
                    <a href="" class="contact-link"
                        ><img
                            class="mr-20px"
                            src="../../assets/img/address.png"
                        />г.Алматы, ул. Шевченко, 153/1</a
                    >
                    <a href="" class="contact-link"
                        ><img
                            class="mr-20px"
                            src="../../assets/img/site.png"
                        />@muratovpartners.kz</a
                    >
                </div>
            </div>
        </div>

        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0b93e37293b36a3868b427d3642f7b129dab52ea30d92d3b31797529a3733d19&amp;source=constructor"
            width="100%"
            height="600"
            frameborder="0"
        ></iframe>
    </div>
</template>

<style lang="scss" scoped>
.contact-logo {
    padding-right: 80px;
    &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: calc(100% + 20px);
        background: #3ca6cd;
        top: 50%;
        transform: translateY(-50%);
        right: 40px;
    }
}

.contact-link {
    &:last-child {
        margin-bottom: 0;
    }
}

@media screen and (max-width: 768px) {
    .contact-logo {
        padding-right: 0;
        &::after {
            display: none;
        }
    }

    iframe {
        & > ymaps {
            height: 300px !important;
        }
    }
}
</style>
