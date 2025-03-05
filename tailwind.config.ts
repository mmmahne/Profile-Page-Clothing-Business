import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			main: '#6A42C2',
  			overlay: 'rgba(0,0,0,0.8)',
  			bg: '#E0E7F1',
  			text: '#000',
  			border: '#000',
  			darkBg: '#2c312b',
  			darkText: '#eeefe9',
  			darkBorder: '#000',
  			secondaryBlack: '#212121',
  			primary: {
  				DEFAULT: 'var(--main)',
  				foreground: 'var(--text)'
  			},
  			secondary: {
  				DEFAULT: 'var(--bg)',
  				foreground: 'var(--text)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--text)'
  			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			base: '17px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			brutal: '0px 0px 0px 0px var(--border)',
  			'brutal-lg': '0px 0px 0px 0px var(--border)',
  			'brutal-sm': '0px 0px 0px 0px var(--border)',
  			light: '0px 0px 0px 0px #000',
  			dark: '0px 0px 0px 0px #000'
  		},
  		translate: {
  			boxShadowX: '0px',
  			boxShadowY: '0px',
  			reverseBoxShadowX: '0px',
  			reverseBoxShadowY: '0px'
  		},
  		fontWeight: {
  			base: '400',
  			heading: '700',
  			michroma: '400'
  		},
  		fontFamily: {
  			sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
  			heading: ['var(--font-michroma)', 'system-ui', 'sans-serif']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			marquee2: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'marquee': 'marquee 25s linear infinite',
  			marquee2: 'marquee2 25s linear infinite'
  		}
  	}
  },
  plugins: [tailwindAnimate],
}

export default config
