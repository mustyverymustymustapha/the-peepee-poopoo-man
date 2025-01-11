import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControl.js';

let camera, scene, renderer, controls;
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canMove = true;
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let prevTime = performance.now();
let windowsAndDoors = [];
let remainingBoards = 10;
let gameStarted = false;
let gameOver = false;
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const mobileControls = document.getElementById('mobile-controls');
const loadingScreen = document.querySelector('.loading');

startButton.addEventListener('click', initGame);

async function initGame() {
    startScreen.style.display = 'none';
    if (isMobile) {
        mobileControls.style.display = 'block';
    }

    init();
    animate();
    startTimer();
    gameStarted = true;
}