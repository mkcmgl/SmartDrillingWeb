export type Theme = 'light' | 'dark';

export const themes = {
  light: {
    backgroundColor: '#ffffff',
    textWhiteColor: '#333333',
    contentBg: '#ffffff',
    menuBg: '#eee',
    menuHoverBg: '#eee',
    menuActiveColor: '#0092ca',
    borderColor: '#eee'
  },
  dark: {
    backgroundColor: '#121212',
    textWhiteColor: '#ffffff',
    textEColor: '#eee',
    contentBg: '#121212',
    menuBg: '#212121',
    menuHoverBg: '#414141',
    menuActiveColor: '#0092ca',
    borderColor: '#414141'
  }
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  const themeConfig = themes[theme];
  
  Object.entries(themeConfig).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}; 