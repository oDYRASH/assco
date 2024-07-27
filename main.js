import { SceneHandler} from './model3d.js';

const SH = new SceneHandler()

// Dropdown event listener
document.getElementById('modelDropdown').addEventListener('change', function (event) {
    const selectedModel = event.target.value;
    SH.loadModel(selectedModel);

});

console.log("Loading model...")
SH.loadModel('0555').then(() => {
    console.log("Model loaded FROM MAIN") 

    SH.setupCameraForModel()
    SH.generateUi()
    
})

// // Constants
// const GLB_FILE_NAME = '0555';

// // Default camera position
// const base = { x: 0, y: 5, z: 14 };

// // Scene
// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.lookAt(new THREE.Vector3(0, 0, 0));

// // Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
// renderer.setClearColor(0xffffff, 0); // Set background color to white
// document.body.appendChild(renderer.domElement);

// // Lights
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight); // Add ambient light permanently

// const pointLight = new THREE.PointLight(0xffffff, 1, 100);
// pointLight.position.set(10, 10, 10);
// scene.add(pointLight); // Add point light permanently

// // Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; // Enable damping (inertia)
// controls.dampingFactor = 0.25; // Damping inertia factor
// controls.screenSpacePanning = false; // Do not allow panning
// controls.minDistance = 5; // Set minimum zoom distance
// controls.maxDistance = 50; // Set maximum zoom distance
// controls.maxPolarAngle = Math.PI / 2; // Limit the vertical rotation
// controls.enableZoom = false; // Disable zooming by scroll


// // GLTF Loader
// let model;

// const loader = new GLTFLoader();

// function loadModel(fileName) {
//     if (model) {
//         scene.remove(model.parent); // Remove the entire parent (pivot) of the model
//         model = null; // Reset model variable
//     }

//     loader.load(fileName + '.glb', function (gltf) {
//         model = gltf.scene;

//         // Create a pivot object and add the model to it
//         const pivot = new THREE.Object3D();
//         scene.add(pivot);
//         pivot.add(model);

//         // Compute the bounding box of the model to find its center
//         const box = new THREE.Box3().setFromObject(model);
//         const center = box.getCenter(new THREE.Vector3());

//         // Position the model relative to the pivot's center
//         model.position.set(-center.x, -center.y, -center.z);

//         // model.traverse((child) => {
//         //     if (child.isMesh) {
//         //         child.material.transparent = true; // Ensure transparency support
//         //         child.material.opacity = 1; // Set initial opacity to 1
//         //         child.userData.originalPosition = child.position.clone();
//         //         child.material = child.material.clone();

//         //         const direction = new THREE.Vector3().copy(child.position).normalize();
//         //         child.userData.explodedPosition = child.position.clone().add(direction.multiplyScalar(4));
//         //     }
//         // });

        
//         setupCameraForModel(model)
//         const model3dInstance = new model3d(model);
//         const groups = model3dInstance.groups;

//         generateUi(groups, model3dInstance);


//     }, undefined, function (error) {
//         console.error(error);
//     });
// }


// console.log('Model loaded:', model);

//         // Now set up the camera to view the model
//         setupCameraForModel(model);



//         const model3dInstance = new model3d(model);
//         const groups = model3dInstance.groups;

//         generateUi(groups);


// Optionally, disable rotating with right mouse button
// controls.mouseButtons = {
//     LEFT: THREE.MOUSE.ROTATE,
//     MIDDLE: THREE.MOUSE.DOLLY,
//     RIGHT: THREE.MOUSE.PAN
// };

// // Add event listener for mouse wheel (scroll) to zoom
// window.addEventListener('wheel', onMouseWheel, false);

// // Function to handle zooming with mouse wheel
// function onMouseWheel(event) {
//     // Adjust zoom speed by changing the factor (e.g., 0.1)
//     const zoomSpeed = 0.001;
//     // Adjust the zoom level based on mouse wheel movement
//     camera.position.z += event.deltaY * zoomSpeed;
// }


// Function to set up camera to view the loaded model in ISO (isometric) view



// function loadModel(fileName) {
//     if (model) {
//         scene.remove(model);
//     }

//     loader.load(fileName + '.glb', function (gltf) {
//         model = gltf.scene;
//         scene.add(model);

//         model.traverse((child) => {
//             if (child.isMesh) {
//                 child.material.transparent = true; // Ensure transparency support
//                 child.material.opacity = 1; // Set initial opacity to 1
//                 child.userData.originalPosition = child.position.clone();
//                 child.material = child.material.clone();

//                 const direction = new THREE.Vector3().copy(child.position).normalize();
//                 child.userData.explodedPosition = child.position.clone().add(direction.multiplyScalar(4));
//             }
//         });

//         console.log('Model loaded:', model);

//         const utilsInstance = new utils(model);
//         const groups = utilsInstance.checkNames();

//         generateUi(groups);
        
//     }, undefined, function (error) {
//         console.error(error);
//     });
// }

// Initial load
// loadModel(GLB_FILE_NAME);

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);

//     update(); // Update tweens
//     renderer.render(scene, camera);
// }

// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // GET CLICKED PIECE NAME
// // Raycaster and mouse vector for detecting clicks
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// // Add event listener for mousedown
// window.addEventListener('mousedown', onMouseDown, false);

// function onMouseDown(event) {
//     // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     // Update the raycaster with the camera and mouse position
//     raycaster.setFromCamera(mouse, camera);

//     // Calculate objects intersecting the raycaster
//     const intersects = raycaster.intersectObjects(scene.children, true);

//     if (intersects.length > 0) {
//         console.log('Clicked piece name:', intersects[0].object.name);
//     }
// }


