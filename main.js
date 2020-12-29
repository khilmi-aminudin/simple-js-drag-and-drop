const listItem = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')

let draggedItem = null

for (let i = 0; i < listItem.length; i++){
    const item = listItem[i]

    item.addEventListener('dragstart', function() {
        draggedItem = item
        setTimeout(function() {
            item.style.display = 'none'
        }, 0)
    })

    item.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedItem.style.display = 'block'
            draggedItem = null
        }, 0)
    })

    for (let j= 0; j < lists.length; j++){
        const list = lists[j]

        list.addEventListener('dragover', function(e) {
            e.preventDefault()
        })

        list.addEventListener('dragenter', function(e) {
            e.preventDefault()
        })

        list.addEventListener('drop', function(e) {
            console.log('drop')
            this.append(draggedItem)
        })
    }
}