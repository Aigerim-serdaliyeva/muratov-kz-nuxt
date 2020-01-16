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
      minWidth: {
        '2xl': '1600px'
      }
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
        '40px': '40px',
        '36px': '36px',
        '30px': '30px',
        '24px': '24px',
        '18px': '18px',
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
        '16px': '16px',
        '14px': '14px',
        '30%': '30%',
        '33%': '33%'
      },
      maxWidth: {
        '1280px': '1280px',
        '1140px': '1140px',
        '1089px': '1089px',
        '493px': '493px'
      }
    }
  },
  variants,
  plugins
};
