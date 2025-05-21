// // 优化elementui提示框，只允许弹出一次
// import Vue from "vue";
// import {
//   Pagination,
//   Dialog,
//   Autocomplete,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Menu,
//   Submenu,
//   MenuItem,
//   MenuItemGroup,
//   Input,
//   InputNumber,
//   Checkbox,
//   CheckboxButton,
//   CheckboxGroup,
//   Select,
//   Option,
//   OptionGroup,
//   Button,
//   ButtonGroup,
//   Table,
//   TableColumn,
//   Popover,
//   Form,
//   FormItem,
//   Tabs,
//   TabPane,
//   Alert,
//   Slider,
//   Icon,
//   Row,
//   Col,
//   Upload,
//   Progress,
//   Spinner,
//   Badge,
//   Steps,
//   Step,
//   Collapse,
//   CollapseItem,
//   Container,
//   Header,
//   Aside,
//   Main,
//   Footer,
//   Loading,
//   MessageBox,
//   Message,
//   Empty,
//   Tree,
//   Drawer,
//   Image,
//   DatePicker,
//   Divider,
//   Descriptions,
//   DescriptionsItem,
//   Breadcrumb,
//   BreadcrumbItem,
//   Avatar,
//   Switch,
//   Tag,
//   RadioGroup,
//   Radio,
//   TimePicker
// } from "element-ui";

// Vue.use(Pagination);
// Vue.use(Dialog);
// Vue.use(Autocomplete);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Input);
// Vue.use(InputNumber);
// Vue.use(Checkbox);
// Vue.use(CheckboxButton);
// Vue.use(CheckboxGroup);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(OptionGroup);
// Vue.use(Button);
// Vue.use(ButtonGroup);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Popover);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Icon);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Upload);
// Vue.use(Progress);
// Vue.use(Spinner);
// Vue.use(Badge);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);
// Vue.use(Empty);
// Vue.use(Tree);
// Vue.use(Drawer);
// Vue.use(Image);
// Vue.use(DatePicker);
// Vue.use(Loading.directive);
// Vue.use(Divider);
// Vue.use(Descriptions);
// Vue.use(DescriptionsItem);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Avatar);
// Vue.use(Switch);
// Vue.use(Tag);
// Vue.use(RadioGroup);
// Vue.use(Radio);
// Vue.use(TimePicker)
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;

// let messageInstance = null;
// const resetMessage = (options) => {
//   if (messageInstance) {
//     messageInstance.close();
//   }
//   messageInstance = Message(options);
// };

// ["error", "success", "info", "warning"].forEach((type) => {
//   resetMessage[type] = (options) => {
//     if (typeof options === "string") {
//       options = {
//         message: options,
//       };
//     }
//     options.type = type;
//     return resetMessage(options);
//   };
// });

// Vue.prototype.$message = resetMessage;
// Vue.prototype.$ELEMENT = { size: "medium" };
// export const message = resetMessage;
