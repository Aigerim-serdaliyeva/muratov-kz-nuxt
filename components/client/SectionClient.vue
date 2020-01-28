<template>
    <div class="pt-50px pb-30px container">
        <slick :options="slickOptions">
            <div
                v-for="(client, index) in clients"
                :key="`client-${index}`"
                class="clients-slider"
            >
                <img
                    class="mx-auto"
                    :src="
                        require(`@/assets/img/clients/client-${index + 1}.png`)
                    "
                />
            </div>
        </slick>
        <div class="wow zoomIn mt-60px w-full">
            <img
                class="mx-auto mb-30px  md:block"
                src="../../assets/img/figure-blue.png"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clients: require('@/assets/json/client'),
            slickOptions: {
                arows: false,
                slidesToShow: 5,
                dots: true,
                autoplay: true,
                infinite: true,
                // centerMode: true,
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.slick-dots li button:before {
}
</style>
