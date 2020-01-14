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
    extend: {
      colors: {
        '252525': '#252525',
        'accent-color': '#EAF4F6',
        'text-color': '#092B54',
        'blue-back': '#00305B',
        '00305B': '#00305B',
        '3D3D3D': '#3D3D3D',
        'main-yellow': '#FFDC0A'
      },
      spacing: {
        '870px': '870px',
        '400px': '400px',
        '300px': '300px',
        '87px': '87px',
        '16px': '16px',
        '14px': '14px',
        '30%': '30%',
        '33%': '33%'
      }
    }
  },
  variants,
  plugins
};
