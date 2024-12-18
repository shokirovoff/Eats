function loaderAnimation(loaderSelector) {
    // Loader
    const loaderWrapper = document.querySelector(loaderSelector)

    setTimeout(() => {
        loaderWrapper.style.display = 'none'
    }, 1500)

}

export default loaderAnimation