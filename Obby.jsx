import React from 'react';

export const AvatarCustomizer = ({ socket, currentColor }) => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#000000'];

  const handleColorChange = (color) => {
    socket.emit('updateAvatar', { color });
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white/80 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Customize Avatar</h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${currentColor === color ? 'border-black' : 'border-transparent'}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
};
