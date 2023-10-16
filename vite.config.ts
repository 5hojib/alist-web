import path from "path"
import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import legacy from "@vitejs/plugin-legacy"
import { dynamicBase } from "vite-plugin-dynamic-base"

export default defineConfig({
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "src"),
			"@solidjs/router": path.resolve(__dirname, "solid-router/src"),
		},
	},
	plugins: [
    solidPlugin(),
    legacy({
			targets: ["defaults"],
		}),
    dynamicBase({
			publicPath: " window.__dynamic_base__",
			transformIndexHtml: true,
		}),
  ],
	base: process.env.NODE_ENV === "production" ? "/__dynamic_base__/" : "/",
	build: {},
	server: {
		host: "0.0.0.0",
		proxy: {
			"/api": {
				target: "http://localhost:5244",
				changeOrigin: true,
			},
		},
	},
})