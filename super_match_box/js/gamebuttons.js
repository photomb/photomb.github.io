import { fadeVolume, miiMusic, wiiMusic } from "./fadevolume.js"
import { fadeToBlack } from "./fadetoblack.js"
import { fadeToWhite } from "./fadetowhite.js"

export function gameOverResetButton() {
    const resetButton = document.getElementById("btnReset")
    const resetSound = new Audio('./media/mouse-start.mp3')
    resetButton.addEventListener("click", () => {
        resetSound.play()
        resetSound.onended = () => {
            location.reload()
        }
        fadeToWhite()
        fadeVolume(miiMusic)
    })
}

export function gameOverExitButton() {
    const exitButton = document.getElementById("btnExit")
    const exitSound = new Audio('./media/correct.mp3')
    exitButton.addEventListener("click", () => {
        exitSound.play()
        exitSound.onended = () => {
            setTimeout(() => {
                location.replace('./index.html')
            }, 2000)
        }
        fadeToBlack()
        fadeVolume(miiMusic)
    })
}

export function audioTouch() {
    document.querySelectorAll('.game-option-input').forEach(radio => {
        radio.addEventListener("click", () => {
            const menuSelect = new Audio('./media/menu-selection.mp3')
            menuSelect.play()
         })
    })
}

export function exitButton() {
    const exitButton = document.getElementById("exit")
    const exitSound = new Audio('./media/correct.mp3')
    exitButton.addEventListener("click", () => {
        exitSound.play()
        exitSound.onended = () => {
            setTimeout(() => {
                location.replace('./index.html')
            }, 2000)
        }
        fadeVolume(wiiMusic)
        fadeToBlack()
    })
}

export function nextButtonSound() {
    document.getElementById("next").addEventListener("click", () => {
        const correctBell = new Audio("./media/correct.mp3")
        correctBell.play()
    })
}