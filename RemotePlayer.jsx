import { useBox } from "@react-three/cannon";

export const Cube = ({ position, color = "orange", name = "block", ...props }) => {
  const [ref] = useBox(() => ({ 
    type: "Static", 
    position, 
    ...props 
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow name={name}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
