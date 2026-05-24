{
  "name": "app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev:vite": "vite",
    "dev:server": "nodemon server.js",
    "dev": "concurrently \"npm run dev:vite\" \"npm run dev:server\"",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "start": "node server.js"
  },
  "dependencies": {
    "@react-three/cannon": "^6.6.0",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.6.1",
    "@types/three": "^0.184.1",
    "cannon-es": "^0.20.0",
    "express": "^5.2.1",
    "lucide-react": "^1.16.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "socket.io": "^4.8.3",
    "socket.io-client": "^4.8.3",
    "three": "^0.184.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@tailwindcss/postcss": "^4.3.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "concurrently": "^9.2.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "nodemon": "^3.1.14",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.0",
    "vite": "^8.0.12"
  }
}
