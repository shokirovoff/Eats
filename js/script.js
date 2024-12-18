"use strict"
import tabs from "./modules/tabs"
import loaderAnimation from "./modules/loader"
import timer from "./modules/timer"
import modal, { openModal } from "./modules/modal"
import classCard from "./modules/class"
import forms from "./modules/forms"
import slider from "./modules/slider"

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(
        () => openModal('.modal__content', '.modal', modalTimerId),
        50000
    )
    tabs('.tabheader__item', '.tab_content', '.tabheader__items')
    loaderAnimation('.loader-wrapper')
    timer('2025-02-01', '.timer')
    modal('[data-modal]', '.modal', '.modal__content', modalTimerId)
    classCard('.offers-items')
    forms('form', modalTimerId)
    slider()
})