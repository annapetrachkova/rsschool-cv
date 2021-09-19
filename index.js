const burger = document.querySelector('.burger');
const container = document.querySelector('.container')
const menu = document.querySelector('.menu')
const footer = document.querySelector('.footer')
const itemLink = document.querySelectorAll('.nav-link-menu');

const Menu = () => {
    console.log("БЛЯТЬ")
    menu.classList.toggle('active')
    container.classList.toggle('active');
    footer.classList.toggle('active')
};

burger.addEventListener('click', Menu)

itemLink.forEach(item => item.addEventListener('click', Menu))

console.log(` 1. вёрстка валидная +10
              Надпись "Document checking completed. No errors or warnings to show." +10
              2. вёрстка семантическая +20
              Теги article, footer, header, main, nav, section, используются заголовки h1-h5. Заголовок h1 только один.
              3. для оформления СV используются css-стили +10
              4. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы +10
              5. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки +10
              6. есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. 
              При уменьшении ширины экрана меню становится адаптивным. +10
              7. присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt +10
              8. контакты для связи и перечень навыков оформлены в виде списка ul > li +10
              9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
              10. CV содержит пример вашего кода +10
              11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
              12. CV выполнено на английском языке +10
              13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка +10
              14. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10
              
              Итого, без видео, 150 баллов :)
`)
