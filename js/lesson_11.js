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

container.onmouseover = container.onmouseout = handler;

function handler(event) {

    function str(el) {
        if (!el) return "null"
        return el.className || el.tagName;
    }

    log.value += event.type + ':  ' +
        'target=' + str(event.target) +
        ',  relatedTarget=' + str(event.relatedTarget) + "\n";
    log.scrollTop = log.scrollHeight;

    if (event.type == 'mouseover') {
        event.target.style.background = 'pink'
    }
    if (event.type == 'mouseout') {
        event.target.style.background = ''
    }
}

// Свойство relatedTarget может быть null.

// Это нормально и означает, что указатель мыши перешёл не с другого элемента, а из-за пределов окна браузера.
// Или же, наоборот, ушёл за пределы окна.

// Следует держать в уме такую возможность при использовании event.relatedTarget в своём коде. Если, например,
// написать event.relatedTarget.tagName, то при отсутствии event.relatedTarget будет ошибка.

