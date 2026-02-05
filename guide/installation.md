# Installation

Compdown runs as a CEP panel inside After Effects. There are two ways to install it.

## Option 1: Install from Release (Recommended)

1. Download the latest `.zxp` file from [GitHub Releases](https://github.com/compdown/compdown/releases)

2. Install using [aescripts ZXP Installer](https://aescripts.com/learn/zxp-installer/):
   - Open ZXP Installer
   - Drag the `.zxp` file onto the window
   - Restart After Effects

3. Find the panel under **Window > Extensions > Compdown**

## Option 2: Build from Source

If you want to run the latest development version:

1. Clone the repository:
   ```bash
   git clone https://github.com/compdown/compdown.git
   cd compdown
   ```

2. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```

3. Enable unsigned extensions (required for local builds):
   - Open [aescripts ZXP Installer](https://aescripts.com/learn/zxp-installer/)
   - Go to **Settings > Debug > Enable Debugging**
   - Or manually set the `PlayerDebugMode` flag in your system registry/plist

4. Restart After Effects. The panel appears under **Window > Extensions > Compdown**

## Development mode

For active development with hot reload:

```bash
npm run dev
```

This starts a dev server at `localhost:3000`. Changes to the panel code will hot-reload without restarting AE.

## Verify installation

1. Open After Effects
2. Go to **Window > Extensions > Compdown**
3. You should see the Compdown panel with a YAML editor

If the panel doesn't appear, check:
- Debug mode is enabled (for local builds)
- After Effects was restarted after installation
- You're using a supported After Effects version (CC 2019+)

## Next steps

- [Quick Start](/guide/quick-start) — Create your first composition
