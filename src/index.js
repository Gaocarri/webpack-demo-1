import x from './x.js'
import jpg from './assets/ac.jpg'
console.log(png); //这是一个路径

const app = document.getElementById('app')
div.innerHTML = `
  <img src="${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise =
        import ('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误');

    })
}

app.appendChild(button)