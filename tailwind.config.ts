import type { Config } from "tailwindcss";

export default {
	// darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				border: '#E5E7EB',
				input: '#F3F4F6',
				ring: '#F59E0B',
				background: '#F9FAFB',
				foreground: '#1F2937',
				primary: {
					DEFAULT: '#F59E0B',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F3F4F6',
					foreground: '#1F2937'
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F3F4F6',
					foreground: '#6B7280'
				},
				accent: {
					DEFAULT: '#FDE68A',
					foreground: '#B45309'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#1F2937'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1F2937'
				},
				sidebar: {
					DEFAULT: '#F3F4F6',
					foreground: '#1F2937',
					primary: '#F59E0B',
					'primary-foreground': '#FFFFFF',
					accent: '#FDE68A',
					'accent-foreground': '#B45309',
					border: '#E5E7EB',
					ring: '#F59E0B'
				},
				royal: {
					50: '#f5faff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49'
				},
				gold: {
					50: '#fffbe6',
					100: '#fff3bf',
					200: '#ffe066',
					300: '#ffd43b',
					400: '#fcc419',
					500: '#fab005',
					600: '#f59f00',
					700: '#f08c00',
					800: '#e67700',
					900: '#d9480f'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-royal': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
				'gradient-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
