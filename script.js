import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154/build/three.module.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

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

// Load mô hình GLB
const loader = new GLTFLoader();
loader.load('assets/shop.glb', (gltf) => {
    const shop = gltf.scene;
    shop.position.set(0, 0, 0);
    shop.scale.set(1, 1, 1); // Điều chỉnh kích thước nếu cần
    scene.add(shop);
}, undefined, (error) => {
    console.error('Lỗi load mô hình:', error);
});

// Đặt vị trí camera
camera.position.set(0, 2, 5);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
