export const RemotePlayer = ({ position, rotation, color }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
