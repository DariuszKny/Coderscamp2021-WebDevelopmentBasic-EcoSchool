import './style.css';
import { showMainMenu } from './mainMenu.js';

showMainMenu()

const mainMenuButton = document.getElementById('mainMenuButton');

mainMenuButton.addEventListener('click', () => {
    showMainMenu()
})