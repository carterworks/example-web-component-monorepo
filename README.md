# Example Web Component Monorepo

> I think my ideal is a repo that uses Lit, multiple components with multiple exports,
> kinda like Shoeleace. I just need to find a simpler example. Shoelace is big.

—@samwarnick, 2025-04-30

This is an example repository on how to package web components for npm. 

* The files are written in Typescript.
* The files are distributed as JavaScript, with `*.d.ts` files and source maps.
* The files are only distributed as ES modules. It's `<year>` already; stop shipping CommonJS and enjoy in the present.
* The files are available to be included in the page via `<script>` tag.
