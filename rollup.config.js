import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          babelHelpers: "runtime",
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 0.1%", "ie >= 11"],
                },
                // https://babeljs.io/blog/2020/03/16/7.9.0#babel-preset-env-s-bugfixes-option-11083-https-githubcom-babel-babel-pull-11083
                bugfixes: true,
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        generate: "ssr",
        dev,
      }),
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),

    preserveEntrySignatures: "strict",
    onwarn,
  },

  /*
  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
  */
};
