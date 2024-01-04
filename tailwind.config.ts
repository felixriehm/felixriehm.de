import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'out-apple': 'cubic-bezier(0,0,0.5,1)',
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1400': '1400ms',
      },
      transitionProperty: {
        'fade-in': 'transform, opacity',
        'width': 'width',
        'left': 'left',
        'padding-left': 'padding-left',
      },
      animation: {
        'fadeInAndSlideDown-0': 'fadeInAndSlideDown 1.5s both;',
        'fadeInAndSlideDown-1': 'fadeInAndSlideDown 1.5s both .25s;',
        'fadeInAndSlideDown-2': 'fadeInAndSlideDown 1.5s both .5s;',
        'fadeInAndSlideDown-3': 'fadeInAndSlideDown 1.5s both .75s;',
        'fadeInAndSlideDown-4': 'fadeInAndSlideDown 1.5s both 1s;',
        'fadeInAndSlideDown-5': 'fadeInAndSlideDown 1.5s both 1.25s;',
        'fadeInAndSlideDown-6': 'fadeInAndSlideDown 1.5s both 1.5s;',
        'fadeInAndSlideDown-7': 'fadeInAndSlideDown 1.5s both 1.75s;',
        'fadeInAndSlideRight-1-0': 'fadeInAndSlideRight 1s cubic-bezier(0,0,0.5,1) both;',
        'fadeInAndSlideRight-1-1': 'fadeInAndSlideRight 1s cubic-bezier(0,0,0.5,1) both .2s;',
        'fadeInAndSlideRight-1-2': 'fadeInAndSlideRight 1s cubic-bezier(0,0,0.5,1) both .4s;',

        // this exists because the reverse animation needs values to be unset after completion
        // whereas the other animation save the animation value forwards and backwards with property 'both'
        'fadeInAndSlideRight-05-0-reverse': 'fadeInAndSlideRightReverse .5s cubic-bezier(0,0,0.5,1);',
        'fadeInAndSlideRight-05-1-reverse': 'fadeInAndSlideRightReverse200at700 .7s cubic-bezier(0,0,0.5,1);',
        'fadeInAndSlideRight-05-2-reverse': 'fadeInAndSlideRightReverse400at900 .9s cubic-bezier(0,0,0.5,1);',

        // order of these lines in this file matters because of css overwrite
        'fadeInAndSlideRight-05-0': 'fadeInAndSlideRight .5s cubic-bezier(0,0,0.5,1) both;',
        'fadeInAndSlideRight-05-1': 'fadeInAndSlideRight .5s cubic-bezier(0,0,0.5,1) both .2s;',
        'fadeInAndSlideRight-05-2': 'fadeInAndSlideRight .5s cubic-bezier(0,0,0.5,1) both .4s;',
      },
      keyframes: {
        // Keyframes include values for 0% so that the values are applied when starting the animation.
        // They need to be applied this way because otherwise the elements on small screens like smartphones would be positioned
        // from start, without the animation, outside the viewport. If outside the viewport the IntersectionObserver will
        // never intersect with the element to 100%.
        fadeInAndSlideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInAndSlideRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-25px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        fadeInAndSlideRightReverse: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-25px)'
          }
        },
        // This is the animation 'fadeInAndSlideRightReverse' with 200ms delay with a duration of 500ms
        // Unfortunately writing the css animation shorthand with a delay of 200ms was not possible because
        // during the delay the element properties would be reset to the elements default values (0 opacity).
        // The animation would flicker. Setting animation-fill-mode to both would fix this but would mean that
        // the element will remain in a position possible outside the viewport. THen the IntersectionObserver
        // would never see the element to 100%.
        fadeInAndSlideRightReverse200at700: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          // 200/700
          '28.57%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-25px)'
          }
        },
        fadeInAndSlideRightReverse400at900: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          // 400/900
          '44.44%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-25px)'
          }
        },
      },
      borderRadius:{
        '6xl': '40px'
      },
      fontFamily: {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings
        // with this font you can change font-weight and font-stretch by their css rules
        'felixriehm': [
          'var(--font-noto-sans), sans-serif'
        ],
        // here you can not change font-weight and font-stretch by their css rules except when redefining css rule 'font-variation-settings'
        'felixriehm-regular': [
          'var(--font-noto-sans), sans-serif', {
            fontVariationSettings: '"wght" 400, "wdth" 100'
          }
        ],
        'felixriehm-bold': [
          'var(--font-noto-sans), sans-serif', {
            fontVariationSettings: '"wght" 700, "wdth" 100'
          }
        ],
        'felixriehm-italic': [
          'var(--font-noto-sans-italic), sans-serif'
        ],
        'felixriehm-icon-round': [
          'var(--font-material-icons-rounded), sans-serif'
        ],
        'felixriehm-icon-round-light': [
          'var(--font-material-icons-rounded), sans-serif', {
            fontVariationSettings: '"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24'
          }
        ],
        'felixriehm-icon-sharp': [
          'var(--font-material-icons-sharp), sans-serif'
        ],
      },
      borderWidth: {
        '12': '12px',
      },
      colors: {
        'felixriehm-black': '#000',
        'felixriehm-white': '#fff',
        'felixriehm-link': '#4073ab',
        'felixriehm-grey': {
          100: '#eaeaea',
          150: '#d3d3d3',
          400: '#404040'
        },
        'felixriehm-green': {
          100: '#81B665',
          400: '#4a8e1c'
        },
        'felixriehm-blue': {
          400: '#168AAD',
          700: '#4169E1'
        },
      },
    },
  },
  plugins: [],
}
export default config
