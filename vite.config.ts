// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [
//     react(),
//     mode === "development" && componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             if (id.includes("react")) {
//               return "react-vendors"; // Group React-related modules into a separate chunk
//             }
//             if (id.includes("lodash")) {
//               return "lodash"; // Group Lodash into its own chunk
//             }
//             return "vendor"; // Group other dependencies into a 'vendor' chunk
//           }
//         },
//       },
//     },
//     chunkSizeWarningLimit: 500, // Optional: Adjust the size limit for warnings
//   },
// }));


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
