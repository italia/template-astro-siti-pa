# Astro Starter Kit: Basics

```sh
bun create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun install`          | Installs dependencies                            |
| `bun staging`          | Starts dev server using `--mode staging`         |
| `bun production`       | Starts dev server using `--mode production`      |
| `bun build:staging`    | Build using `--mode staging`                     |
| `bun build:production` | Build using `--mode production`                  |
| `bun astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help`  | Get help using the Astro CLI                     |
| `bun generate-output`  | Generate GraphQL output types                    |
| `bun tada-doctor`      | Check GraphQL setup with gql-tada                |
| `bun tada-check`       | Validate GraphQL documents with gql-tada         |
| `bun format`           | Format files with Prettier                       |

## 🌱 Environment files

Astro (via Vite) loads environment files in this order:

- `./.env` base defaults
- `./.env.local` local overrides (not committed)
- `./.env.<mode>` mode-specific values (for example `./.env.staging`, `./.env.production`)
- `./.env.<mode>.local` local mode-specific overrides

Use `bun staging` or `bun build:staging` to activate `--mode staging`.

## 📦 DatoCMS Migrations

Migrations are used to manage DatoCMS schema changes (models, fields, settings) in a versioned and reproducible way.

### Running Migrations

To apply the migrations located in the `./migrations` folder to the current environment, run:

```sh
bun run migrate
```

This command should be executed every time new migrations are downloaded from the repository or whenever you want to align a local/new environment with the current schema state.

### Auto-generating a Migration

If you have made manual changes to the schema in a sandbox environment (e.g., `staging`) and want to generate a migration that applies these changes to the primary environment (`main`), you can use the auto-generate command:

```sh
bunx datocms migrations:new "migration-description" --autogenerate=<source_environment>:<destination_environment> --api-token={DATOCMS_MANAGEMENT_API_TOKEN}
```

**Example:**
To generate a migration that carries changes from `staging` to `main`:

```sh
bunx datocms migrations:new "init-migrations" --autogenerate=staging:main --api-token={DATOCMS_MANAGEMENT_API_TOKEN}
```

This operation will create a new JavaScript file in the `migrations` folder that programmatically describes the changes to be applied.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
