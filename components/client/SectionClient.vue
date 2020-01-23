<template>
    <div>
        <div
            v-for="(client, index) in clients"
            :key="`client-${index}`"
            class="clients-slider"
        >
            <img
                :src="require(`@/assets/img/clients/client-${index + 1}.png`)"
            />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
var slick = require("slick-carousel");
// global jquery
import $ from 'jquery';

export default {
    data() {
        return {
            clients: require('@/assets/json/client')
        };
    },
    mounted() {
      $(".clients-slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: false,
            dots: true,
            centerMode: true,
            centerPadding: '0px',

            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        centerMode: true,
                        centerPadding: '0px'
                    }
                }
            ]
        });
    }
};
</script>
