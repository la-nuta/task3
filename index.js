// Работа с DOM, событиями
//
// 1. При нажатии на enter создать копию элемента div и добавить ее в DOM.
// <div class='toCopy'>DIV</div>


function task1() {
    const wrapper1 = document.getElementById('task1');
    const divToCopy = document.body.querySelector('.toCopy');

    const listener1 = (e) => {
        if (e.key === 'Enter') {
            const copy = divToCopy.cloneNode(true);
            wrapper1.appendChild(copy);
            document.body.removeEventListener('keypress', listener1);
        }
    };
    document.body.addEventListener('keypress', listener1);
}

task1();

// 2. Задана следующая структура:
// <div>
// <span>Text 1</span>
// <span id="current">Text 2</span>
// <span>Text 3</span>
// <span>Text 4</span>
// </div>
// Найти ближайших соседей сверху и снизу для элемента с id = current и добавить к их содержимому ":)"


function task2() {
    const current = document.getElementById('current');
    const previousEl = current.previousElementSibling;
    const nextEl = current.nextElementSibling;
    const smileStr = ':)';
    previousEl.textContent = previousEl.textContent + smileStr;
    nextEl.textContent = nextEl.textContent + smileStr;
}

task2();


// 3.
// <input type='button' id='remove'>
// <ul>
// <li>Text 1</li>
// <li>Text 2</li>
// <li>Text 3</li>
// <li>Text 4</li>
// </ul>
// При нажатии на кнопку удалить последний child у элемента ul.


function task3() {
    let removeBtn = document.getElementById('remove');

    let listener2 = () => {
        let ulEl = document.body.querySelector('ul');
        let lastChild = ulEl.lastElementChild;
        lastChild.remove();
        removeBtn.removeEventListener('click', listener2);
    };
    removeBtn.addEventListener('click', listener2);
}

task3();

// 4.
// <button id='btn' onclick="alert('Button clicked');">Button</button>
// Сгенерировать событие click на кнопке без нажатии на нее.


function task4() {
    let btn = document.getElementById('btn');
    let ev = document.createEvent('Event');
    ev.initEvent('click');
    btn.dispatchEvent(ev);
}

setTimeout(task4, 1000);


// 5. Задан div, имеющий вертикальный скроллинг. При нажатии на него, проскроллить этот элемент в самый верх.

function task5() {
    let wrapper5 = document.getElementById('task5');

    let listener5 = () => {
        wrapper5.scrollTop = 0;

        if (wrapper5.getBoundingClientRect().top < 0) {
            wrapper5.scrollIntoView({behavior: "smooth", block: "start"});
        }

    };
    wrapper5.addEventListener('click', listener5);
}

task5();


// 6. Реализовать плавную прокрутку страницы при нажатии на якорь.

function task6() {
    let wrapper6 = document.getElementById('task6');

    let listener6 = (e) => {
        let elId = e.target.dataset.id;
        let el = document.getElementById(elId);
        el.scrollIntoView({behavior: "smooth", block: "start"});
    };
    wrapper6.addEventListener('click', listener6);
}

task6();

// 7. Задан div. Реализовать его перекрашивание в зеленый цвет по нечетному клику и в желтый по четному.
// Использовать removeEventListener.

function task7() {
    const wrapper7 = document.getElementById('task7');
    let count = 0;

    let listener7 = () => {
        count =  count + 1;
        wrapper7.style.backgroundColor = count % 2 ? 'green' : 'yellow';

        if (count > 100) {
            wrapper7.removeEventListener('click', listener7);
        }
    };

    wrapper7.addEventListener('click', listener7);
}

task7();
