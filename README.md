# Astro SSR on Bun

Example [Astro](https://astro.build/) app with server-side rendering (SSR) running on [Bun](https://bun.sh/). Astro is a web framework for content-focused websites that ships pages as HTML with as little JavaScript as possible. Bun is a fast all-in-one JavaScript runtime and package manager compatible with Node.js.

## Deploy settings

| Field | Value |
| --- | --- |
| Build | Railpack |
| Project directory | `/` |
| Install command | leave empty |
| Build command | leave empty |
| Start command | leave empty |
| Application port | `4321` |
| Health check path | `/` |

## <a name="dev"></a>Run locally

```bash
# install dependencies
bun install

# run in development mode
bun run dev

# build for production
bun run build

# run the built server app
bun run start
```
