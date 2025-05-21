import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "element-ui/lib/locale/lang/en";
import zhcnLocale from "element-ui/lib/locale/lang/zh-CN";

import enLocale from 'element-plus/es/locale/lang/en';
import zhcnLocale from 'element-plus/es/locale/lang/zh-cn';
// import zhtwLocale from 'element-plus/es/locale/lang/zh-tw';

import lang_zh from "./lang_zh.json";
import lang_en from "./lang_en.json";
// import ElementLocale from "element-ui/lib/locale";
import Cookie from "js-cookie";
Vue.use(VueI18n);
const messages = {
  en: {
    ...lang_en,
    ...enLocale, // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    ...lang_zh,
    ...zhcnLocale, // 或者用 Object.assign({ message: '你好' }, zhcnLocale)
  },
};
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: Cookie.get("language") || "zh", // set locale
  messages, // set locale messages
});

// this.$i18n.locale = lang; 在内部修改语言
ElementLocale.i18n((key, value) => i18n.t(key, value));
export default i18n;
