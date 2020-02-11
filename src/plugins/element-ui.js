/**
 * 组件按需引入
 *
 * @see https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru
 */

import Vue from "vue";
import {
  Container,
  Aside,
  Main,
  Form,
  FormItem,
  Input,
  Button,
  Select,
  Option,
  Switch,
  Menu,
  MenuItem,
  Table,
  TableColumn,
  Link,
  DatePicker,
  Image,
  Loading,
  Message
} from "element-ui";

Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Switch);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Link);
Vue.use(DatePicker);
Vue.use(Image);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
