<template lang="pug">
mixin large
    .libra__large
        .libra__lines
            span(v-for="item in 4")
        <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#00305B" stroke="#fff" d="M.707 22.996L22.996.707l22.289 22.289-22.289 22.289z"/><path fill="#033058" stroke="#fff" d="M3.774 22.997L23 3.771l19.227 19.226L23 42.224z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.229 12l.001.02.03-.02s3.452.784 2.137 1.567c-1.995 1.189-1.633 2.491-1.414 2.957.299.02 1.112.601 2.242 1.41 1.223.875 2.816 2.016 4.532 2.999.018.01.03.026.035.046l.04-.017 1.689 4.202h.223l-.22.892s-.582-.048-1.168.151a2.24 2.24 0 0 0-.702.524 1.528 1.528 0 0 0-.055-.06 1.184 1.184 0 0 0-.037.04l-.018.02a2.237 2.237 0 0 0-.702-.524 3.245 3.245 0 0 0-1.168-.151l-.22-.892h.368l1.606-3.995-2.12-1.265c-1.153-.552-2.285-.962-3.111-1.26l-.336-.122c-.526 3.182-.728 5.777-.76 7.835.029 1.902.19 3.494.344 4.605a5.078 5.078 0 0 0 2.105.484 8.34 8.34 0 0 0 .835-.05c.238-.025.362.194.423.478.103.473.033 1.126.033 1.126h-8.887s-.177-1.69.456-1.604a9.767 9.767 0 0 0 .835.05 5.1 5.1 0 0 0 1.779-.344 38.01 38.01 0 0 0 .363-4.745c-.032-2.058-.234-4.652-.76-7.833l-.33.12c-.832.3-1.976.714-3.137 1.272L16.177 21.1l1.634 4.065h.224l-.22.892s-.583-.048-1.169.151c-.23.107-.47.273-.702.524a1.533 1.533 0 0 0-.055-.06l-.055.06a2.243 2.243 0 0 0-.702-.524c-.586-.2-1.168-.151-1.168-.151l-.22-.892h.383l1.555-4.201.022.008a.075.075 0 0 1 .032-.038c1.716-.983 3.31-2.124 4.532-2.998.25-.18.485-.347.702-.5a27.852 27.852 0 0 1 .68-.468c.403-.266.698-.43.855-.443.22-.465.582-1.768-1.414-2.957C19.776 12.784 23.23 12 23.23 12zm8.96 13.164l-1.518-3.775-1.518 3.775h3.036zm-14.71 0l-1.573-3.918-1.451 3.918h3.025z" fill="#fff"/></svg>
mixin small
    .libra__small
        .libra__lines
            span(v-for="item in 4")
        <svg v-if="!transparent" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#033058" stroke="#fff" stroke-width=".253" d="M1.824 5.823L6.692.954l4.869 4.869-4.869 4.868z"/><path stroke="#fff" stroke-width=".253" d="M1.046 5.823L6.69.18l5.643 5.643-5.643 5.643z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 3.038v.005l.007-.005s.874.199.541.397c-.505.301-.413.631-.358.749.076.005.282.152.568.357.31.222.713.51 1.148.76a.02.02 0 0 1 .008.01l.01-.003.428 1.064h.057l-.056.225s-.147-.012-.296.039a.567.567 0 0 0-.178.133.382.382 0 0 0-.014-.016.316.316 0 0 0-.009.01l-.005.006a.567.567 0 0 0-.177-.133.821.821 0 0 0-.296-.039l-.056-.225h.093l.407-1.012-.537-.32c-.292-.14-.578-.244-.787-.32l-.086-.03a13.488 13.488 0 0 0-.192 1.984c.007.481.048.884.087 1.166a1.286 1.286 0 0 0 .745.11c.06-.007.091.049.107.12.026.12.008.286.008.286h-2.25s-.045-.428.115-.406a2.491 2.491 0 0 0 .212.012c.177-.002.327-.039.45-.087.04-.282.085-.699.092-1.201a13.49 13.49 0 0 0-.192-1.984l-.084.03c-.21.077-.5.181-.794.323l-.502.3.413 1.029h.057l-.056.225s-.147-.012-.295.039a.568.568 0 0 0-.178.133.383.383 0 0 0-.014-.016.376.376 0 0 0-.014.016.568.568 0 0 0-.178-.133c-.148-.05-.296-.039-.296-.039l-.055-.225h.097l.393-1.064.006.002a.02.02 0 0 1 .008-.01c.435-.249.838-.537 1.148-.759l.177-.127a7.092 7.092 0 0 1 .172-.118c.103-.067.177-.109.217-.112.056-.118.147-.448-.358-.749-.333-.198.541-.397.541-.397zm2.268 3.334l-.384-.956-.385.956h.769zm-3.724 0l-.399-.992-.367.992h.766z" fill="#fff"/></svg>
        <svg v-else viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#EAF4F6" stroke="#00305B" d="M1.703 15.995L16 1.698l14.297 14.297L16 30.292z"/><path fill="#EAF4F6" stroke="#00305B" d="M3.704 15.996L16.003 3.698 28.3 15.996 16.003 28.295z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.152 8.821l.001.013.019-.013s2.253.511 1.395 1.023c-1.302.775-1.066 1.625-.923 1.929.195.013.726.392 1.463.92.798.571 1.837 1.315 2.957 1.957a.05.05 0 0 1 .023.03l.025-.011 1.103 2.741h.145l-.143.582s-.38-.031-.762.099c-.15.07-.307.178-.458.342a.981.981 0 0 0-.036-.04.866.866 0 0 0-.024.027l-.012.013a1.458 1.458 0 0 0-.458-.342c-.382-.13-.762-.099-.762-.099l-.144-.582h.24l1.048-2.606-1.383-.826c-.752-.36-1.491-.627-2.03-.822l-.22-.08c-.342 2.076-.474 3.77-.495 5.112.019 1.242.124 2.28.224 3.005.348.165.81.308 1.374.316a5.494 5.494 0 0 0 .545-.033c.155-.016.236.127.276.313.067.308.021.734.021.734h-5.798s-.116-1.102.297-1.047a6.399 6.399 0 0 0 .545.033 3.326 3.326 0 0 0 1.16-.224c.104-.728.218-1.802.237-3.097-.02-1.342-.152-3.035-.495-5.11l-.216.078c-.543.196-1.289.466-2.046.83l-1.295.772 1.067 2.652h.146l-.144.582s-.38-.031-.762.099c-.15.07-.307.178-.458.342a.979.979 0 0 0-.036-.04.981.981 0 0 0-.036.04 1.462 1.462 0 0 0-.458-.342c-.382-.13-.762-.099-.762-.099l-.144-.582h.25l1.015-2.74.014.005a.049.049 0 0 1 .021-.025c1.12-.642 2.16-1.386 2.957-1.957l.458-.326a18.076 18.076 0 0 1 .443-.305c.264-.174.456-.28.559-.29.143-.303.38-1.153-.923-1.928-.858-.512 1.395-1.023 1.395-1.023zm5.846 8.59l-.99-2.464-.99 2.463h1.98zm-9.597 0l-1.027-2.558-.947 2.557H12.4z" fill="#00305B"/></svg>

.libra.w-100(:class="[{ 'desk': !isMobile, 'mob': isMobile }, 'wow fadeIn']")
    .libra__wrap(v-if="type === 'large'")
        .desk
            +large
        .mob
            +large
    .libra__wrap(v-else)
        .mob
            +small
        .desk
            +small

</template>

<script>
export default {
    props: {
        isMobile: {
            type: Boolean,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        transparent: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.libra {
    /* @include flex(center, center); */
    position: relative;
    z-index: 10;
    &__lines {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        span {
            width: 50%;
            display: block;
            &:nth-child(odd) {
                background: linear-gradient(
                    to left,
                    #ffffff 0%,
                    rgba(255, 255, 255, 0) 100%
                );
            }
            &:nth-child(even) {
                background: linear-gradient(
                    to right,
                    #ffffff 0%,
                    rgba(255, 255, 255, 0) 100%
                );
            }
        }
    }
    svg {
        z-index: 2;
        display: block;
        position: relative;
    }
}

// Libra color blue
.libra-col-blue {
    span {
        // &:nth-child(odd) {
        //     background: linear-gradient(
        //         to left,
        //         $maincol 0%,
        //         rgba(255, 255, 255, 0) 100%
        //     );
        // }
        // &:nth-child(even) {
        //     background: linear-gradient(
        //         to right,
        //         $maincol 0%,
        //         rgba(255, 255, 255, 0) 100%
        //     );
        // }
    }
}

// Libra color gay
.libra-col-gay {
    span {
        &:nth-child(odd) {
            background: linear-gradient(
                to left,
                #3ca6cd 0%,
                rgba(255, 255, 255, 0) 100%
            );
        }
        &:nth-child(even) {
            background: linear-gradient(
                to right,
                #3ca6cd 0%,
                rgba(255, 255, 255, 0) 100%
            );
        }
    }
    svg {
        path {
            &:first-child {
                stroke: #3ca6cd !important;
                fill: #3ca6cd !important;
            }
            &:nth-child(2) {
                stroke: #3ca6cd !important;
            }
            &:last-child {
                fill: #3ca6cd;
            }
        }
    }
}

.libra-end,
.libra-start {
    position: absolute;
    width: 100%;
}

@media screen and (max-width: 991px) {
    .libra {
        &__lines span {
            height: 1px;
            position: relative;
        }
        &__small {
            .libra__lines {
                /* @include size(7%, 100%); */
                span {
                    &:first-child,
                    &:nth-child(2) {
                        // bottom: w(2);
                    }
                    &:nth-child(3),
                    &:nth-child(4) {
                        // top: w(3);
                    }
                }
            }
            svg {
                /* @include size(w(40), w(40)); */
            }
        }
        &__large {
            .libra__lines {
                /* @include size(30%, 100%); */
            }
            svg {
                /* @include size(w(45.99), w(45.99)); */
            }
        }
    }
    // Standard padding
    .libra-s-p {
        /* margin: w(40) 0; */
    }
    // In end of block
    .libra-end {
        /* bottom: w(-22); */
        left: 0;
    }
    // In the top of block
    .libra-start {
        /* top: w(-22); */
        left: 0;
    }
    // Libra padding top large
    .libra-p-t-l {
        /* padding-top: w(16.26); */
    }
    // Libra padding bottom large
    .libra-p-b-l {
        /* padding-bottom: w(16.26); */
    }
}

@media screen and (max-width: 991px) {
    .libra {
        &__lines span {
            height: 1px;
            position: relative;
        }
        &__small {
            .libra__lines {
                /* @include size(10%, 100%); */
                opacity: 0.5;
                span {
                    &:first-child,
                    &:nth-child(2) {
                        /* bottom: wm(1); */
                    }
                    &:nth-child(3),
                    &:nth-child(4) {
                        /* top: wm(1); */
                    }
                }
            }
            svg {
                /* @include size(wm(15.65), wm(15.65)); */
            }
        }
        &__large {
            .libra__lines {
                /* @include size(30%, 100%); */
                opacity: 1;
            }
            svg {
                /* @include size(wm(32.52), wm(32.52)); */
            }
        }
    }
    // Standard padding
    .libra-s-p {
        /* margin: wm(30) 0; */
    }
    // In end of block
    .libra-end {
        /* bottom: wm(-22); */
    }
    // In the top of block
    .libra-start {
        /* top: wm(-16); */
    }
    // Libra padding top large
    .libra-p-t-l {
        /* padding-top: wm(16.26); */
    }
    // Libra padding bottom large
    .libra-p-b-l {
        /* padding-bottom: wm(16.26); */
    }
}
</style>
