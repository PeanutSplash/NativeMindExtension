# WXT Extension Template

This template provides a minimal setup for building browser extensions with [WXT](https://wxt.dev). It includes Tailwind CSS, testing configuration and CI/CD ready to go.

## Project Structure

```
components/        # Vue components
composables/       # Reusable composables
entrypoints/       # Extension entrypoints (background, content script, popup)
public/            # Static assets
```

## Getting Started

```bash
pnpm install
pnpm dev            # start development
pnpm build:prod     # build for production
pnpm test:unit      # run unit tests
pnpm test:e2e       # run e2e tests
```

For more commands see `package.json`.

## Configuration Files

- `wxt.config.ts` – WXT configuration
- `tailwind.config.ts` – Tailwind CSS
- `vitest.config.ts` – unit test setup
- `.github/` – GitHub Actions for CI

## Example

A simple popup page using Vue is included under `entrypoints/popup`.
Unit and e2e tests can be found in the `tests` directory.
