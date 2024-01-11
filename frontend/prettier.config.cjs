// prettier.config.js
import prettierPluginTailwindcss from "./prettier-plugin-tailwindcss"
export default  {
  // plugins: ['prettier-plugin-tailwindcss'],
  plugins: [prettierPluginTailwindcss],
  tailwindConfig: './tailwind.config.js'
}