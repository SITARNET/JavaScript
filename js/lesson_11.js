// Движение мыши: mouseover/out, mouseenter/leave

// В этой главе мы более подробно рассмотрим события, возникающие при движении указателя мыши над элементами страницы.
//
// События mouseover/mouseout, relatedTarget
// Событие mouseover происходит в момент, когда курсор оказывается над элементом, а событие mouseout – в момент, когда курсор уходит с элемента.
//
//
// Эти события являются особенными, потому что у них имеется свойство relatedTarget. Оно «дополняет» target. Когда мышь переходит с одного элемента на другой, то один из них будет target, а другой relatedTarget.
//
// Для события mouseover:
//
// event.target – это элемент, на который курсор перешёл.
// event.relatedTarget – это элемент, с которого курсор ушёл (relatedTarget → target).

// Для события mouseout наоборот:

// event.target – это элемент, с которого курсор ушёл.
// event.relatedTarget – это элемент, на который курсор перешёл (target → relatedTarget).
// В примере ниже каждое лицо и его черты – отдельные элементы. При движении указателя по этим элементам в текстовом поле отображаются происходящие события.

// Каждое из них содержит информацию о target и relatedTarget:

// container.onmouseover = container.onmouseout = handler;
//
// function handler(event) {
//
//     function str(el) {
//         if (!el) return "null"
//         return el.className || el.tagName;
//     }
//
//     log.value += event.type + ':  ' +
//         'target=' + str(event.target) +
//         ',  relatedTarget=' + str(event.relatedTarget) + "\n";
//     log.scrollTop = log.scrollHeight;
//
//     if (event.type == 'mouseover') {
//         event.target.style.background = 'pink'
//     }
//     if (event.type == 'mouseout') {
//         event.target.style.background = ''
//     }
// }

// Свойство relatedTarget может быть null.

// Это нормально и означает, что указатель мыши перешёл не с другого элемента, а из-за пределов окна браузера.
// Или же, наоборот, ушёл за пределы окна.

// Следует держать в уме такую возможность при использовании event.relatedTarget в своём коде. Если, например,
// написать event.relatedTarget.tagName, то при отсутствии event.relatedTarget будет ошибка.

// Пропуск элементов

// Событие mousemove происходит при движении мыши. Однако, это не означает, что указанное событие генерируется при
// прохождении каждого пикселя.

//     Браузер периодически проверяет позицию курсора и, заметив изменения, генерирует события mousemove.

//     Это означает, что если пользователь двигает мышкой очень быстро, то некоторые DOM-элементы могут быть пропущены:


//     Если курсор мыши передвинуть очень быстро с элемента #FROM на элемент #TO, как это показано выше, то лежащие
//     между ними элементы <div> (или некоторые из них) могут быть пропущены. Событие mouseout может запуститься на
//     элементе #FROM и затем сразу же сгенерируется mouseover на элементе #TO.

//     Это хорошо с точки зрения производительности, потому что если промежуточных элементов много, вряд ли мы
//     действительно хотим обрабатывать вход и выход для каждого.

//     С другой стороны, мы должны иметь в виду, что указатель мыши не «посещает» все элементы на своём пути.
//     Он может и «прыгать».

// В частности, возможно, что указатель запрыгнет в середину страницы из-за пределов окна браузера. В этом случае
// значение relatedTarget будет null, так как курсор пришёл «из ниоткуда»:

// Вы можете проверить это «вживую» на тестовом стенде ниже.
//
//     В его HTML есть два элемента, <div id="child"> вложен в <div id="parent">. Если быстро провести мышью над ними,
//     то событие может возникнуть только на внутреннем элементе или только на внешнем, а может вообще не
//     сгенерироваться никаких событий.
//
//     Также попробуйте поставить курсор на внутренний элемент, а затем очень быстро сделайте движение
//     мышкой вниз через внешний элемент. Если у вас получится достаточно быстро, то на родительском элементе
//     не будет сгенерировано никаких событий. То есть, мышь пройдёт через внешний элемент, не замечая его.

let parent = document.getElementById('parent');
parent.onmouseover = parent.onmouseout = parent.onmousemove = handler;

function handler(event) {
    let type = event.type;
    while (type < 11) type += ' ';

    log(type + " target=" + event.target.id)
    return false;
}


function clearText() {
    text.value = "";
    lastMessage = "";
}

let lastMessageTime = 0;
let lastMessage = "";
let repeatCounter = 1;

function log(message) {
    if (lastMessageTime == 0) lastMessageTime = new Date();

    let time = new Date();

    if (time - lastMessageTime > 500) {
        message = '------------------------------\n' + message;
    }

    if (message === lastMessage) {
        repeatCounter++;
        if (repeatCounter == 2) {
            text.value = text.value.trim() + ' x 2\n';
        } else {
            text.value = text.value.slice(0, text.value.lastIndexOf('x') + 1) + repeatCounter + "\n";
        }

    } else {
        repeatCounter = 1;
        text.value += message + "\n";
    }

    text.scrollTop = text.scrollHeight;

    lastMessageTime = time;
    lastMessage = message;
}

// Если был mouseover, то будет и mouseout
// Несмотря на то, что при быстрых переходах промежуточные элементы могут игнорироваться, в одном мы можем быть
// уверены: элемент может быть пропущен только целиком.

// Если указатель «официально» зашёл на элемент, то есть было событие mouseover, то при выходе с него обязательно
// будет mouseout.