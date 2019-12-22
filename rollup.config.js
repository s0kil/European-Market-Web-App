import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import config from "sapper/config/rollup.js";
import json from "@rollup/plugin-json";
import pkg from "./package.json";
import replace from "@rollup/plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import {terser} from "rollup-plugin-terser";
// import reshadow from "reshadow/svelte/preprocess";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const dedupe = importee =>
  importee === "svelte" || importee.startsWith("svelte/");

function optimizer(module = false) {
  return terser({
    module,
    compress: {
      passes: 3,
      warnings: true,

      unsafe: true,
      unsafe_math: true,
      unsafe_comps: true,
      unsafe_arrows: true,
      unsafe_regexp: true,
      unsafe_methods: true,
      unsafe_Function: true,
      unsafe_undefined: true
    }
  });
}

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      json(),
      replace({
        "process.browser": JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        // preprocess: reshadow()
      }),
      resolve({
        browser: true,
        dedupe
      }),
      commonjs(),

      legacy &&
      babel({
        extensions: [".js", ".mjs", ".html", ".svelte"],
        runtimeHelpers: true,
        exclude: ["node_modules/@babel/**"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, not dead"
            }
          ]
        ],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          [
            "@babel/plugin-transform-runtime",
            {
              useESModules: true
            }
          ]
        ]
      }),

      !dev && optimizer(true)
    ],

    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      json(),
      replace({
        "process.browser": JSON.stringify(false),
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        generate: "ssr",
        dev,
        // preprocess: reshadow()
      }),
      resolve({
        dedupe
      }),
      commonjs()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
      Object.keys(process.binding("natives"))
    ),

    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      commonjs(),

      !dev && optimizer()
    ],

    onwarn
  }
};
