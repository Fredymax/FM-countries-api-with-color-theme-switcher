export default function run() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
