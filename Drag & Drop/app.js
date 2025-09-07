
let lists = document.getElementsByClassName("list")

let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

let selectedItem = null;
for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        selectedItem = e.target

        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault()
        })

        rightBox.addEventListener("drop", function (e) {
            rightBox.appendChild(selectedItem)
            selectedItem = null;
        })
        
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault()
        })

        leftBox.addEventListener("drop", function (e) {
            leftBox.appendChild(selectedItem)
            selectedItem = null;
        })
    })
}