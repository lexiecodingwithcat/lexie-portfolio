//components/threeDCube.js\
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const ThreeScene = () => {
  const mountRef = useRef(null);
  useEffect(() => {
    //create scene
    const scene = new THREE.Scene();
    //create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    //create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    //create geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //create material
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      new THREE.MeshBasicMaterial({ color: 0x0000ff }),
      new THREE.MeshBasicMaterial({ color: 0xffff00 }),
      new THREE.MeshBasicMaterial({ color: 0xff00ff }),
      new THREE.MeshBasicMaterial({ color: 0x00ffff }),
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    //set camera position
    camera.position.z = 5;

    //OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    //clean up
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement); // 检查 mountRef.current 是否存在
      }
      renderer.dispose();
      controls.dispose();
    };
  }, []);
  return <div ref={mountRef} />;
};

export default ThreeScene;
