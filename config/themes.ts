export const themes = {
  default: {
    bg: 'white',
    text: '#2D3748',
    textSecondary: '#4A5568',
    border: '#E2E8F0',
    bars: ['#4299E1', '#48BB78', '#ED8936', '#9F7AEA'],
  },
  dark: {
    bg: '#1A202C',
    text: '#FFFFFF',
    textSecondary: '#CBD5E0',
    border: '#2D3748',
    bars: ['#63B3ED', '#68D391', '#F6AD55', '#B794F4'],
  },
  radical: {
    bg: '#141321',
    text: '#FE428E',
    textSecondary: '#A9FEF7',
    border: '#3C3C3C',
    bars: ['#FE428E', '#F8D847', '#A9FEF7', '#B794F4'],
  },
  tokyonight: {
    bg: '#1A1B27',
    text: '#70A5FD',
    textSecondary: '#38BDAE',
    border: '#2D2D43',
    bars: ['#70A5FD', '#BF91F3', '#38BDAE', '#FF7AC6'],
  },
  dracula: {
    bg: '#282A36',
    text: '#FF79C6',
    textSecondary: '#BD93F9',
    border: '#44475A',
    bars: ['#FF79C6', '#50FA7B', '#FFB86C', '#BD93F9'],
  },
  monokai: {
    bg: '#272822',
    text: '#F92672',
    textSecondary: '#A6E22E',
    border: '#49483E',
    bars: ['#F92672', '#A6E22E', '#FD971F', '#66D9EF'],
  },
  aura: {
    bg: '#15141B',
    text: '#E1B2FB',
    textSecondary: '#A4B9EF',
    border: '#2D2B38',
    bars: ['#E1B2FB', '#A4B9EF', '#FCC5E9', '#9CEAEF'],
  },
  github: {
    bg: '#0D1117',
    text: '#58A6FF',
    textSecondary: '#C9D1D9',
    border: '#30363D',
    bars: ['#58A6FF', '#3FB950', '#F78166', '#BD93F9'],
  },
  solarized: {
    bg: '#002B36',
    text: '#268BD2',
    textSecondary: '#859900',
    border: '#073642',
    bars: ['#268BD2', '#859900', '#CB4B16', '#6C71C4'],
  },
  onedark: {
    bg: '#282C34',
    text: '#E06C75',
    textSecondary: '#98C379',
    border: '#3E4451',
    bars: ['#E06C75', '#98C379', '#E5C07B', '#61AFEF'],
  },
  ocean: {
    bg: '#1B2B34',
    text: '#D8DEE9',
    textSecondary: '#A7ADBA',
    border: '#4F5B66',
    bars: ['#6699CC', '#99C794', '#FAC863', '#C594C5'],
  },
  forest: {
    bg: '#2E3C2F',
    text: '#E0E0E0',
    textSecondary: '#B0B0B0',
    border: '#3B4A3C',
    bars: ['#8FBC8F', '#556B2F', '#6B8E23', '#2E8B57'],
  },
  sunset: {
    bg: '#FF6F61',
    text: '#FFFFFF',
    textSecondary: '#FFD1C1',
    border: '#FF8A65',
    bars: ['#FFB74D', '#FF8A65', '#F06292', '#BA68C8'],
  },
  monochrome: {
    bg: '#F5F5F5',
    text: '#212121',
    textSecondary: '#757575',
    border: '#BDBDBD',
    bars: ['#9E9E9E', '#616161', '#424242', '#212121'],
  },
  pastel: {
    bg: '#F8E1F4',
    text: '#4A4A4A',
    textSecondary: '#7A7A7A',
    border: '#E1BEE7',
    bars: ['#FFCCBC', '#D1C4E9', '#B3E5FC', '#C8E6C9'],
  }
} as const;

export const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
}; 