const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0) 
    
}

function dragEnd(event) {
    event.target.classList.remove('hold', 'hide')
}

const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    const divEnter = event.target.dataset.target;
    document.getElementById(divEnter).classList.add('hover')

}

function dragleave(event) {
    const divEnter = event.target.dataset.target;
    document.getElementById(divEnter).classList.remove('hover')
}

function drop(event) {
    event.target.append(item)
    const divEnter = event.target.dataset.target;
    document.getElementById(divEnter).classList.remove('hover')
}

