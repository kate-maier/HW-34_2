// Реалізувати подобу інтернет-магазину.

// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, 
// що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).


const mainCatalog = document.querySelectorAll('.catalogItem');
const productsNames = document.getElementById('productsNames');

const productsInfoCards = document.getElementById('productsInfoCards');
const infoBlocks = document.querySelectorAll('.productInfo');

let products = [
    {
        category: 'smartphones',
        name: 'iPhone 14 Pro Max',
        info: 'Як в попередньому поколінні, iPhone 14 Pro Max найбільший та найавтономніший смартфон лінійки Pro. Діагональ дисплея пристрою становить 6,7 дюймів, виконаний за технологією OLED Super Retina XDR. Саме на дисплеї видно найбільшу інновацію 2022 року в смартфонах Apple для покращення взаємодії з користувачем «Dynamic Island».'
    },
    {
        category: 'smartphones',
        name: 'Xiaomi Redmi Note 12 Pro',
        info: 'Смартфон Xiaomi Redmi Note 12 Pro має якості справжнього лідера в всьому. Передова камера професійного рівня 108 Мп дарує чудові можливості для фото та відео зйомки. Насолоджуйтесь супер-чіткою та яскравою картинкою на 6.67-дюймовому FHD AMOLED дисплеї з частотою оновлення 120 Гц.'
    },
    {
        category: 'smartphones',
        name: 'APPLE MacBook Air 15<',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur adipisci omnis eos vel in?'
    },
    {
        category: 'laptops',
        name: 'Lenovo Ideapad Gaming 3 15IHU6',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum, dolorem repudiandae laboriosam voluptas officia voluptate, libero, corrupti adipisci in harum eos et nobis nostrum.'
    },
    {
        category: 'laptops',
        name: 'ASUS M6500QH-HN081',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deserunt facere beatae maiores quas corrupti molestias animi laborum modi magni quod doloremque, dolorum necessitatibus rerum qui fuga blanditiis, esse ipsam.'
    },
    {
        category: 'televisors',
        name: 'Телевізор SAMSUNG QE50Q60BAUXUA',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        category: 'televisors',
        name: 'Телевізор LG 50UQ81006LB',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, nisi, laboriosam qui delectus iusto mollitia omnis necessitatibus ex accusantium blanditiis hic non, molestias rem ipsum.'
    }
];

mainCatalog.forEach((catalogItem) => {
    catalogItem.addEventListener('click', (event) => {
        productsNames.innerHTML = '';
        productsInfoCards.innerHTML = '';
        let target = event.target;
        const catalogItemId = target.id;

        products.forEach((product) => {
            if (product.category === catalogItemId) {
                let p = document.createElement('p');
                p.textContent = product.name;
                p.classList.add('productCard');
                productsNames.appendChild(p);

                p.addEventListener('click', (event) => {
                    productsInfoCards.innerHTML = '';
                    let target = event.target;
                    const name = target.textContent;

                    products.forEach((product) => {

                        if (product.name === name) {
                            let p = document.createElement('p');
                            p.textContent = product.info;
                            p.classList.add('productInfo');
                            productsInfoCards.appendChild(p);
                        }
                    })

                    let button = document.createElement('button');
                    button.classList.add('buyBtn');
                    button.textContent = 'Купити';
                    productsInfoCards.appendChild(button);

                    button.addEventListener('click', () => {
                        let message = document.createElement('p');
                        message.classList.add('message');
                        message.textContent = 'Товар куплений';
                        productsInfoCards.appendChild(message);

                        button.setAttribute('disabled', 'disabled');

                        setTimeout(() => {
                            productsNames.innerHTML = '';
                            productsInfoCards.innerHTML = '';
                        }, 2000)
                    })
                })
            }
        })
    }
    )
})
