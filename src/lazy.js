export default function lazy() {
    console.log('我是懒加载');
    let lazy = document.createElement('div');
    lazy.innerHTML = `<h1>我是懒加载</h1>`;
    document.body.appendChild(lazy)
}