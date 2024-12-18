function timer(deadline, selector) {
    function getTimeRemaining(endtime) {
        const time = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(time / (1000 * 60 * 60 * 24)),
            hourse = Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((time / (1000 * 60)) % 60),
            seconds = Math.floor((time / 1000) % 60)
        return {
            totalTime: time,
            days,
            hourse,
            minutes,
            seconds,
        }
    }

    function formatNumber(number) {
        if (number >= 0 && number < 10) {
            return `0${number}`
        } else {
            return number
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const time = getTimeRemaining(endtime)

            days.textContent = formatNumber(time.days)
            hours.textContent = formatNumber(time.hourse)
            minutes.textContent = formatNumber(time.minutes)
            seconds.textContent = formatNumber(time.seconds)

            if (time.totalTime <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock(selector, deadline)
}

export default timer