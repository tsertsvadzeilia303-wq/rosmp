import { useThree } from "@react-three/fiber";
import { useCallback, useEffect } from "react";
import * as THREE from "three";

export const BuildingSystem = ({ socket }) => {
  const { camera, scene } = useThree();

  const handlePointerDown = useCallback((e) => {
    if (e.button !== 0 && e.button !== 2) return;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(0, 0);
    raycaster.setFromCamera(mouse, camera);

    // Filter out the local player so we don't hit ourselves
    const intersects = raycaster.intersectObjects(scene.children, true)
      .filter(intersect => intersect.object.name !== 'local-player');
    
    if (intersects.length > 0) {
      const intersect = intersects[0];
      
      if (e.button === 0) { // Add block
        const position = intersect.point.clone().add(intersect.face.normal.clone().multiplyScalar(0.5));
        const gridPos = [
          Math.round(position.x),
          Math.round(position.y),
          Math.round(position.z)
        ];
        socket.emit('addBlock', { position: gridPos, color: 'orange' });
      } else if (e.button === 2) { // Remove block
        if (intersect.object.name === 'block') {
          const pos = intersect.object.position;
          socket.emit('removeBlock', [pos.x, pos.y, pos.z]);
        }
      }
    }
  }, [camera, scene, socket]);

  useEffect(() => {
    window.addEventListener('mousedown', handlePointerDown);
    return () => window.removeEventListener('mousedown', handlePointerDown);
  }, [handlePointerDown]);

  return null;
};
