# Example Web Component Monorepo

> I think my ideal is a repo that uses Lit, multiple components with multiple exports,
> kinda like Shoeleace. I just need to find a simpler example. Shoelace is big.

—@samwarnick, 2025-04-30

This is an example repository on how to package web components for npm. 

* The files are written in Typescript.
* The files are distributed as Javascript, with `*.d.ts` files and source maps.
* The files are available to be included in the page via `<script>` tag.
* The files are distributed only as ES modules, not CommonJS/UMD/IIFE. It's `<year>` and we can do it and no one can stop me.
* It uses Lit for web components, Vite for bundling/transpiling, and `tsc` to emit types.
