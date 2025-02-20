import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.154/examples/jsm/loaders/GLTFLoader.js';

// Khởi tạo Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Thêm ánh sáng
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(5, 10, 5);
scene.add(light);

// Load các cửa hàng
const loader = new GLTFLoader();

const shops = [
    { url: 'assets/shop1.glb', position: { x: -3, y: 0, z: 0 } },
    { url: 'assets/shop2.glb', position: { x: 3, y: 0, z: 0 } }
];

shops.forEach(shopData => {
    loader.load(shopData.url, (gltf) => {
        const shop = gltf.scene;
        shop.position.set(shopData.position.x, shopData.position.y, shopData.position.z);
        scene.add(shop);
    }, undefined, (error) => {
        console.error('Lỗi load cửa hàng:', error);
    });
});

// Đặt vị trí camera
camera.position.set(0, 2, 10);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
