# Nuxt App and Nuxt Content Monorepo

This monorepo includes:
- A main Nuxt application for general purposes
- A Nuxt Content package for managing and serving content pages

## Development

To start development servers for each package:

### Main Nuxt App (workspace):

```bash
npm run dev:workspace
```

### Nuxt Content:

```bash
npm run dev:content
```

## Build Process

To build both packages and merge the outputs into a single deployment-ready folder:

```bash
npm run build
```

### Output Structure:

The Nuxt Content package will be served as the root (/).
The Nuxt Workspace package will be served under the path /workspace.

### Production Preview

To preview the production build locally:

```bash
npm run preview
```

This command runs the merged output for testing before deployment.

## Deployment

Deploy the dist folder to your server.