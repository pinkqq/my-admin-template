import store from "@/store";

export default function(Vue) {
  Vue.directive("permission", {
    inserted: (el, binding) => {
      const { value } = binding;
      const roles = store.getters && store.getters.roles;

      if (value && value instanceof Array && value.length > 0) {
        const hasPermission = roles.some(role => {
          return role.includes(value);
        });
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el);
        }
      } else {
        throw new Error(`need roles! Like v-permission="['admin','editor']"`);
      }
    }
  });
}
