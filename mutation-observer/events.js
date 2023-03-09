const saveButton = document.querySelector('#saveButton')
const deleteButton = document.querySelector('#deleteButton')
const userNameInput = document.querySelector('#userNameInput')
const textToShow = document.querySelector('#textToShow')

saveButton.addEventListener('click', () => {
    textToShow.textContent = userNameInput.value
})
deleteButton.addEventListener('click', () => {
    textToShow.textContent = ''
})