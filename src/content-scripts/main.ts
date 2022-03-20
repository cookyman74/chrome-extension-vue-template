import { createApp } from "vue";
import App from "./App.vue";

console.log("hello contents")

//window.addEventListener('DOMContentLoaded', async () => {
//  console.log("DOMContentLoadedイベントが実行されました。");
//});

window.onload = async () => {
  await new Promise(r => setTimeout(r, 1000));
  console.log("hello contents script")
  const el = document.querySelector('.collection-info')
  console.log(el)
  if (el) {
    console.log(el)
    el.insertAdjacentHTML(
      'afterend',
      '<div id="app">hello</div>',
    );
    const app = createApp(App)
    app.mount('#app')
  }
}