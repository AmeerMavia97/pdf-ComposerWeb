import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Temporarily disable specific rules
      "react/no-unescaped-entities": "off", // Disable unescaped entities rule
      "react-hooks/rules-of-hooks": "off", // Disable hooks rule
      "@next/next/no-img-element": "off",   // Disable img element warning
    },
  },
];

export default eslintConfig;
