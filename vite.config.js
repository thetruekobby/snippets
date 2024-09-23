import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import { nodePolyfills } from "vite-plugin-node-polyfills"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001, // Set the desired port here
  },
  //the define block gets rid of the global is not defined error when using simple-peer with vite
  define: {
    global: {},
  },
  plugins: [react() /* nodePolyfills() */],
})
