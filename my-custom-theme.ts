
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #03346E 
		"--color-primary-50": "217 225 233", // #d9e1e9
		"--color-primary-100": "205 214 226", // #cdd6e2
		"--color-primary-200": "192 204 219", // #c0ccdb
		"--color-primary-300": "154 174 197", // #9aaec5
		"--color-primary-400": "79 113 154", // #4f719a
		"--color-primary-500": "3 52 110", // #03346E
		"--color-primary-600": "3 47 99", // #032f63
		"--color-primary-700": "2 39 83", // #022753
		"--color-primary-800": "2 31 66", // #021f42
		"--color-primary-900": "1 25 54", // #011936
		// secondary | #6EACDA 
		"--color-secondary-50": "233 243 249", // #e9f3f9
		"--color-secondary-100": "226 238 248", // #e2eef8
		"--color-secondary-200": "219 234 246", // #dbeaf6
		"--color-secondary-300": "197 222 240", // #c5def0
		"--color-secondary-400": "154 197 229", // #9ac5e5
		"--color-secondary-500": "110 172 218", // #6EACDA
		"--color-secondary-600": "99 155 196", // #639bc4
		"--color-secondary-700": "83 129 164", // #5381a4
		"--color-secondary-800": "66 103 131", // #426783
		"--color-secondary-900": "54 84 107", // #36546b
		// tertiary | #E2E2B6 
		"--color-tertiary-50": "251 251 244", // #fbfbf4
		"--color-tertiary-100": "249 249 240", // #f9f9f0
		"--color-tertiary-200": "248 248 237", // #f8f8ed
		"--color-tertiary-300": "243 243 226", // #f3f3e2
		"--color-tertiary-400": "235 235 204", // #ebebcc
		"--color-tertiary-500": "226 226 182", // #E2E2B6
		"--color-tertiary-600": "203 203 164", // #cbcba4
		"--color-tertiary-700": "170 170 137", // #aaaa89
		"--color-tertiary-800": "136 136 109", // #88886d
		"--color-tertiary-900": "111 111 89", // #6f6f59
		// success | #c67c1b 
		"--color-success-50": "246 235 221", // #f6ebdd
		"--color-success-100": "244 229 209", // #f4e5d1
		"--color-success-200": "241 222 198", // #f1dec6
		"--color-success-300": "232 203 164", // #e8cba4
		"--color-success-400": "215 163 95", // #d7a35f
		"--color-success-500": "198 124 27", // #c67c1b
		"--color-success-600": "178 112 24", // #b27018
		"--color-success-700": "149 93 20", // #955d14
		"--color-success-800": "119 74 16", // #774a10
		"--color-success-900": "97 61 13", // #613d0d
		// warning | #ce08f5 
		"--color-warning-50": "248 218 254", // #f8dafe
		"--color-warning-100": "245 206 253", // #f5cefd
		"--color-warning-200": "243 193 253", // #f3c1fd
		"--color-warning-300": "235 156 251", // #eb9cfb
		"--color-warning-400": "221 82 248", // #dd52f8
		"--color-warning-500": "206 8 245", // #ce08f5
		"--color-warning-600": "185 7 221", // #b907dd
		"--color-warning-700": "155 6 184", // #9b06b8
		"--color-warning-800": "124 5 147", // #7c0593
		"--color-warning-900": "101 4 120", // #650478
		// error | #9d0101 
		"--color-error-50": "240 217 217", // #f0d9d9
		"--color-error-100": "235 204 204", // #ebcccc
		"--color-error-200": "231 192 192", // #e7c0c0
		"--color-error-300": "216 153 153", // #d89999
		"--color-error-400": "186 77 77", // #ba4d4d
		"--color-error-500": "157 1 1", // #9d0101
		"--color-error-600": "141 1 1", // #8d0101
		"--color-error-700": "118 1 1", // #760101
		"--color-error-800": "94 1 1", // #5e0101
		"--color-error-900": "77 0 0", // #4d0000
		// surface | #021526 
		"--color-surface-50": "217 220 222", // #d9dcde
		"--color-surface-100": "204 208 212", // #ccd0d4
		"--color-surface-200": "192 197 201", // #c0c5c9
		"--color-surface-300": "154 161 168", // #9aa1a8
		"--color-surface-400": "78 91 103", // #4e5b67
		"--color-surface-500": "2 21 38", // #021526
		"--color-surface-600": "2 19 34", // #021322
		"--color-surface-700": "2 16 29", // #02101d
		"--color-surface-800": "1 13 23", // #010d17
		"--color-surface-900": "1 10 19", // #010a13
		
	}
}