/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const variants = require('./variants');
const plugins = require('./plugins');
const fonts = require('./fonts');

module.exports = {
  theme: {
    ...fonts,
    container: {
      center: true,
      padding: '15px'
    },
    lineHeight: {
      '87%': '87%'
    },
    extend: {
      colors: {
        '252525': '#252525',
        'accent-color': '#EAF4F6',
        'gray-color': '#656565',
        'text-color': '#092B54',
        'blue-back': '#00305B',
        'aqua-back': '#eaf4f6',
        '00305B': '#00305B',
        '3D3D3D': '#3D3D3D',
        'main-yellow': '#FFDC0A'
      },
      fontSize: {
        '94px': '94px',
        '80px': '80px',
        '70px': '70px',
        '40px': '40px',
        '36px': '36px',
        '30px': '30px',
        '24px': '24px',
        '20px': '20px',
        '18px': '18px',
        '16px': '16px',
        '14px': '14px'
      },
      spacing: {
        '1400px': '1400px',
        '870px': '870px',
        '400px': '400px',
        '450px': '450px',
        '300px': '300px',
        '170px': '170px',
        '87px': '87px',
        '30px': '30px',
        '25px': '25px',
        '20px': '20px',
        '16px': '16px',
        '15px': '15px',
        '14px': '14px',
        '10px': '10px',
        '5px': '5px',
        '30%': '30%',
        '33%': '33%'
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%'
      },
      maxWidth: {
        '1400px': '1400px',
        '1280px': '1280px',
        '1140px': '1140px',
        '1089px': '1089px',
        '1070px': '1070px',
        '890px': '890px',
        '750px': '750px',
        '620px': '620px',
        '550px': '550px',
        '493px': '493px',
        '450px': '450px',
        '170px': '170px',
        '150px': '150px'
      },
      screens: {
        '2xl': '1360px',
        '3xl': '1460px',
        '4xl': '1630px'
      }
    }
  },
  variants,
  plugins
};
