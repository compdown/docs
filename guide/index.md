# Introduction

Compdown is an After Effects extension that lets you describe compositions, layers, and animations in YAML — then create them with a single click.

## What is Compdown?

Instead of clicking through menus or writing ExtendScript, you write human-readable YAML:

```yaml
compositions:
  - name: Lower Third
    width: 1920
    height: 200
    layers:
      - name: bar
        type: solid
        color: 1a1a2e
      - name: label
        type: text
        text: Breaking News
```

Click a button, and Compdown creates the composition with all layers, properties, and animations in place.

## Why text-based workflows?

### Readable
YAML is designed for humans. You can read a Compdown file and understand what it creates without running it.

### Shareable
A Compdown file is just text. Email it, paste it in Slack, commit it to git, or share it in a gist. No binary files, no version compatibility issues.

### Fast
Building variations? Copy the YAML, change a few values, paste it back. No need to duplicate comps or dig through the project panel.

### AI-friendly
Text in, text out. AI tools can read, modify, and generate Compdown files just like any other code. This opens up workflows where AI helps draft scenes, explore variations, or build first passes.

## What you can create

- **Project structure**: Folders and imported files
- **Compositions**: Any resolution, frame rate, duration
- **Layer types**: Solids, text, nulls, adjustments, shapes, cameras, lights
- **File-based layers**: Images, video, sequences
- **Nested comps**: Composition-in-composition via the `composition` key
- **Animation**: Keyframes with easing on transform and effect properties
- **Effects**: Any native AE effect with animated properties
- **Essential Graphics**: Expose properties for Motion Graphics Templates

## Two-way workflow

Compdown isn't just for creation. You can also **export existing compositions** back to YAML. This enables:

- Documenting what a comp contains
- Version controlling motion design
- Transferring setups between projects
- Using AI to analyze or modify existing work

## Next steps

Ready to get started?

- [Installation](/guide/installation) — Set up the extension
- [Quick Start](/guide/quick-start) — Create your first composition
