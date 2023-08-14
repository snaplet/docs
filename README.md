### Prerequisites

Install `brew`, `git`, `pnpm` and `Node.js` :

#### Brew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Git

```bash
brew install git
```

#### Pnpm and Node.js

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
pnpm env use --global lts
corepack enable
```

### Installation

```bash
git clone git@github.com:snaplet/docs-next.git
cd docs-next
pnpm install
```

### Run the project

```bash
pnpm next
# Go to http://localhost:3000
```