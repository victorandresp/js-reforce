const observerText = new MutationObserver((mutationList) =>{
    mutationList.forEach((mutation) =>{
        console.log('mutation', mutation);
    })
})

const textP = document.querySelector('#textToShow')

const observerOptions = {
    attributes: true,
    childList: true,
    subtree: false,
}

observerText.observe(textP, observerOptions)

