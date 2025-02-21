import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154/build/three.module.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.154/examples/jsm/loaders/FBXLoader.js';

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

// Load mô hình FBX từ thư mục assets/
const loader = new FBXLoader();
loader.load('assets/shop.fbx', (fbx) => {
    fbx.scale.set(0.01, 0.01, 0.01); // Điều chỉnh kích thước nếu cần
    fbx.position.set(0, 0, 0);
    scene.add(fbx);
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
