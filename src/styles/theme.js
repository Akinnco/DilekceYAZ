const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512];

const baseColors = {
  none: 'none',
  black: '#000',
  white: '#fff',
  blueCharcoal: '#000A15',
  charlotte: '#B0F9F8',
  janna: '#F2E5CC',
  burntSienna: '#EF5A52',
  chateauGreen: '#45AD50',
  niagara: '#09B2AF',
};

const colors = {
  none: baseColors.none,
  black: baseColors.black,
  white: baseColors.white,
  primary: baseColors.blueCharcoal,
  secondary: baseColors.janna,
  warning: baseColors.burntSienna,
  success: baseColors.chateauGreen,
  searchInput: baseColors.charlotte,
  settingButton: baseColors.niagara,
  modes: {
    dark: {
      primary: baseColors.blueCharcoal,
      secondary: baseColors.janna,
    },
  },
};

const radii = {
  normal: 3,
  full: 9999,
};

export default {
  space,
  baseColors,
  colors,
  radii,
};
