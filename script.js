import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js';

// Khởi tạo scene
const scene = new THREE.Scene();

// Tạo camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ánh sáng
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Tạo mặt đường
const roadGeometry = new THREE.BoxGeometry(10, 0.1, 20);
const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
scene.add(road);

// Tạo vỉa hè
const sidewalkMaterial = new THREE.MeshStandardMaterial({ color: 0xAAAAAA });

const sidewalkLeft = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 20), sidewalkMaterial);
sidewalkLeft.position.set(-6.5, 0.1, 0);
scene.add(sidewalkLeft);

const sidewalkRight = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 20), sidewalkMaterial);
sidewalkRight.position.set(6.5, 0.1, 0);
scene.add(sidewalkRight);

// Tạo vạch đường
const lineGeometry = new THREE.BoxGeometry(0.2, 0.01, 2);
const lineMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

for (let i = -9; i < 10; i += 3) {
    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    line.position.set(0, 0.06, i);
    scene.add(line);
}

// Điều khiển camera
const controls = new OrbitControls(camera, renderer.domElement);

// Render
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

// Đáp ứng kích thước màn hình
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
