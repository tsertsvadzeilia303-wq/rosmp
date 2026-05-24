import React from 'react';
import { Cube } from './Cube';

export const Obby = () => {
  const steps = [
    { pos: [5, 1, 5], color: 'red' },
    { pos: [7, 2, 7], color: 'green' },
    { pos: [9, 3, 9], color: 'blue' },
    { pos: [11, 4, 11], color: 'yellow' },
    { pos: [13, 5, 13], color: 'purple' },
    { pos: [15, 6, 11], color: 'orange' },
    { pos: [17, 7, 9], color: 'cyan' },
    { pos: [19, 8, 7], color: 'magenta' },
  ];

  return (
    <>
      {steps.map((step, i) => (
        <Cube key={i} position={step.pos} color={step.color} name="obby-block" />
      ))}
      <Cube position={[22, 9, 7]} args={[5, 0.5, 5]} color="gold" name="finish-line" />
    </>
  );
};
