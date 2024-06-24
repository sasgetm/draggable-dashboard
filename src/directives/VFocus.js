export default {
  mounted(el, binding) {
   console.log(el);
   el.focus();
  }, 
  name: 'focus',
}