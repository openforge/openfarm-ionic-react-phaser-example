import {
    Plugins,
    HapticsImpactStyle
} from '@capacitor/core';

const { Haptics } = Plugins;

export function giveHapticFeedback(style = HapticsImpactStyle.Light) {
    Haptics.impact({
        style
    });
}

export function vibrate() {
    Haptics.vibrate();
}