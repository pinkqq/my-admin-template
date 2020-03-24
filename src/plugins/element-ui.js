/**
 * 组件按需引入
 *
 * @see https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru
 */

import Vue from "vue";
import {
  //   Container,
  //   Aside,
  //   Main,
  Form,
  FormItem,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  //   Select,
  //   Option,
  //   Switch,
  Menu,
  MenuItem,
  Submenu,
  //   Table,
  //   TableColumn,
  //   Link,
  //   DatePicker,
  Radio,
  RadioGroup,
  RadioButton,
  Image,
  Loading,
  Message,
  MessageBox,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "element-ui";

// Vue.use(Container);
// Vue.use(Aside);
// Vue.use(Main);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(Switch);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Link);
// Vue.use(DatePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Image);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
