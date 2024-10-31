/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { Directive } from 'vue';
import { getBgColor } from '@/scripts/get-bg-color.js';

export default {
	mounted(src, binding, vn) {
		const parentBg = getBgColor(src.parentElement) ?? 'transparent';

		const myBg = getComputedStyle(document.documentElement).getPropertyValue('--panel');

		if (parentBg === myBg) {
			src.style.backgroundColor = 'var(--bg)';
		} else {
			src.style.backgroundColor = 'var(--panel)';
		}
	},
} as Directive;
