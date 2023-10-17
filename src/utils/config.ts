export let base_path = "";
export const setBasePath = (path: string) => {
  base_path = path;
  if (!base_path.startsWith("/")) {
    base_path = "/" + base_path;
  }
  if (base_path.endsWith("/")) {
    base_path = base_path.slice(0, -1);
  }
}
if (window.ALIST.base_path) {
  setBasePath(window.ALIST.base_path);
}

export let api = location.origin + base_path;

export const monaco_cdn =
  window.ALIST.monaco_cdn ||
  "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/monaco-editor/0.33.0-dev.20220228/min/vs";
