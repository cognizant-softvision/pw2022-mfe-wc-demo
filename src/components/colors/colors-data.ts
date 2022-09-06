import { ColorsCellData } from "../../models/colors-cell-data";

export const BASE_COLORS: ColorsCellData[] = [
  {
    title: 'Midnight blue',
    isConfirmed: true,
    hex: '#000048',
    cssVariableName: '--midnight-blue',
    rgb: 'R 0 G 0 B 72',
    pantone: 'PMS 281C',
    cmyk: 'C100 M78 Y0 K57',
  },
  {
    title: 'White',
    isConfirmed: true,
    hex: '#FFFFFF',
    cssVariableName: '--white',
    rgb: 'R 255 G 255 B 255',
    cmyk: 'C0 M0 Y0 K0'
  },
];

export const ACCENT_COLORS: ColorsCellData[] = [
  {
    title: 'Nightmode dropdown',
    isConfirmed: false,
    hex: '#00006C',
    cssVariableName: '--nightmode-dropdown',
    rgb: 'R 0 G 0 B 108',
  },
  {
    title: 'Dark plum',
    isConfirmed: true,
    hex: '#2E308E',
    cssVariableName: '--dark-plum',
    rgb: 'R 46 G 48 B 142',
    cmyk: 'C92 M86 Y0 K2'
  },
  {
    title: 'Nightmode dropdown hover',
    isConfirmed: false,
    hex: '#343695',
    cssVariableName: '--nightmode-dropdown-hover',
    rgb: 'R 52 G 54 B 149'
  },
  {
    title: 'Medium plum',
    isConfirmed: true,
    hex: '#7373D8',
    cssVariableName: '--medium-plum',
    rgb: 'R 115 G 115 B 216',
    cmyk: 'C63 M54 Y0 K0'
  },
  {
    title: 'Light plum',
    isConfirmed: true,
    hex: '#85A0F9',
    cssVariableName: '--light-plum',
    rgb: 'R 133 G 160 B 249',
    cmyk: 'C50 M34 Y0 K0'
  },
  {
    title: 'Dark blue',
    isConfirmed: true,
    hex: '#2F78C4',
    cssVariableName: '--dark-blue',
    rgb: 'R 47 G 120 B 196',
    cmyk: 'C89 M40 Y0 K0'
  },
  {
    title: 'Medium blue',
    isConfirmed: true,
    hex: '#6AA2DC',
    cssVariableName: '--medium-blue',
    rgb: 'R 106 G 162 B 220',
    cmyk: 'C61 M24 Y0 K0'
  },
  {
    title: 'Light blue',
    isConfirmed: true,
    hex: '#92BBE6',
    cssVariableName: '--light-blue',
    rgb: 'R 146 G 187 B 230',
    cmyk: 'C45 M13 Y0 K0'
  },
  {
    title: 'Ultra Light blue',
    isConfirmed: false,
    hex: '#E0EBF6',
    cssVariableName: '--ultra-light-blue',
    rgb: 'R 224 G 235 B 246',
  },
  {
    title: 'Dark teal',
    isConfirmed: true,
    hex: '#06C7CC',
    cssVariableName: '--dark-teal',
    rgb: 'R 6 G 199 B 204'
  },
  {
    title: 'Medium teal',
    isConfirmed: true,
    hex: '#26EFE9',
    cssVariableName: '--medium-teal',
    rgb: 'R 38 G 239 B 233',
    cmyk: 'C60 M0 Y16 K0'
  },
  {
    title: 'Light teal',
    isConfirmed: true,
    hex: '#97F5F7',
    cssVariableName: '--light-teal',
    rgb: 'R 151 G 245 B 247',
    cmyk: 'C39 M0 Y9 K0'
  }
];

export const NEUTRAL_COLORS: ColorsCellData[] = [
  {
    title: 'Dropdown shadow',
    isConfirmed: false,
    cssVariableName: '--dropdown-shadow',
    hex: '#00000040',
    rgb: 'R 0 G 0 B 0 A 0.25'
  },
  {
    title: 'Pressed',
    isConfirmed: false,
    cssVariableName: '--pressed',
    hex: '#222222',
    rgb: 'R 34 G 34 B 34'
  },
  {
    title: 'Form element border',
    isConfirmed: false,
    cssVariableName: '--form-element-border',
    hex: '#22222299',
    rgb: 'R 34 G 34 B 34 A 0.60'
  },
  {
    title: 'Dark gray',
    isConfirmed: true,
    cssVariableName: '--dark-gray',
    hex: '#53565A',
    rgb: 'R 83 G 86 B 90',
    cmyk: 'C63 M52 Y44 K33'
  },
  {
    title: 'Multi checkbox text',
    isConfirmed: false,
    cssVariableName: '--multi-checkbox-text',
    hex: '#6C757D',
    rgb: 'R 108 G 117 B 125'
  },
  {
    title: 'Medium gray',
    isConfirmed: true,
    cssVariableName: '--medium-gray',
    hex: '#97999B',
    rgb: 'R 151 G 153 B 155',
    cmyk: 'C38 M29 Y24 K5'
  },
  {
    title: 'Form element label',
    isConfirmed: false,
    cssVariableName: '--form-element-label',
    hex: '#C4C4C4',
    rgb: 'R 196 G 196 B 196'
  },
  {
    title: 'Light gray',
    isConfirmed: true,
    cssVariableName: '--light-gray',
    hex: '#D0D0CE',
    rgb: 'R 208 G 208 B 206',
    cmyk: 'C14 M10 Y8 K0'
  },
  {
    title: 'Very light gray',
    isConfirmed: true,
    cssVariableName: '--very-light-gray',
    hex: '#EFEFEE',
    rgb: 'R 239 G 239 B 238',
    cmyk: 'C0 M0 Y0 K6'
  },
  {
    title: 'Dropdown option border',
    isConfirmed: false,
    cssVariableName: '--dropdown-option-border',
    hex: '#F2F2F2',
    rgb: 'R 242 G 242 B 242',
  },
  {
    title: 'Ultra light gray',
    isConfirmed: true,
    cssVariableName: '--ultra-light-gray',
    hex: '#F6F6F5',
    rgb: 'R 246 G 246 B 245',
    cmyk: 'C0 M0 Y0 K4',
  },
  {
    title: 'Dropdown option hover',
    isConfirmed: false,
    cssVariableName: '--dropdown-option-hover',
    hex: '#FAFAFA',
    rgb: 'R 250 G 250 B 250'
  }
];

export const HIGHLIGHT_COLORS: ColorsCellData[] = [
  {
    title: 'Highlight red',
    isConfirmed: true,
    cssVariableName: '--highlight-red',
    hex: '#B81F2D',
    rgb: 'R 184 G 31 B 45',
    cmyk: 'C10 M97 Y93 K8'
  },
  {
    title: 'Highlight yellow',
    isConfirmed: true,
    cssVariableName: '--highlight-yellow',
    hex: '#E9C71D',
    rgb: 'R 233 G 199 B 29',
    cmyk: 'C7 M14 Y99 K0'
  }
]