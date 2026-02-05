# Quick Start

Let's create your first composition with Compdown. By the end of this guide, you'll understand the basic YAML structure and how to build animated layers.

## Your first composition

Open the Compdown panel in After Effects and paste this YAML:

```yaml
compositions:
  - name: Hello World
    layers:
      - name: background
        type: solid
        color: 1a1a2e
      - name: greeting
        type: text
        text: Hello World
        fontSize: 72
        transform:
          position: [960, 540]
```

Click the **Create** button. Compdown will:

1. Create a composition named "Hello World" (1920x1080, 30fps, 10s — the defaults)
2. Add a dark solid layer called "background"
3. Add a text layer with "Hello World" centered in the frame

That's it. You've created your first composition from YAML.

## Understanding the structure

A Compdown document has three optional top-level keys:

```yaml
folders:    # Project folders (optional)
files:      # Imported footage (optional)
compositions:  # Compositions with layers
```

At least one must be present. For most workflows, you'll just use `compositions`.

### Composition properties

Compositions have sensible defaults:

| Property | Default |
|----------|---------|
| width | 1920 |
| height | 1080 |
| duration | 10 seconds |
| framerate | 30 fps |
| color | 000000 (black) |

Override any of them:

```yaml
compositions:
  - name: Square Comp
    width: 1080
    height: 1080
    duration: 5
    framerate: 60
```

### Layer types

Each layer needs exactly one of:

- `type:` — Built-in types: `solid`, `null`, `adjustment`, `text`, `camera`, `light`, `shape`
- `file:` — Reference to an imported file
- `comp:` — Reference to another composition

```yaml
layers:
  - name: my solid
    type: solid
    color: FF0000

  - name: my footage
    file: bg  # References a file with id: bg

  - name: nested comp
    comp: Lower Third  # References another comp by name
```

## Adding animation

Transform properties can be static values or keyframe arrays:

```yaml
layers:
  - name: animated box
    type: solid
    color: 3498db
    width: 200
    height: 200
    transform:
      position:
        - time: 0
          value: [200, 540]
        - time: 2
          value: [1720, 540]
      opacity:
        - time: 0
          value: 0
        - time: 1
          value: 100
```

This creates a blue box that:
- Moves from left to right over 2 seconds
- Fades in over 1 second

### Keyframe syntax

Each keyframe needs `time` (in seconds) and `value`. Optionally add `easing`:

```yaml
position:
  - time: 0
    value: [0, 0]
    easing: easeOut
  - time: 2
    value: [1920, 1080]
    easing: easeIn
```

Available easing types: `linear` (default), `easeIn`, `easeOut`, `easeInOut`, `hold`

## Exporting compositions

Compdown works both ways. To export an existing composition:

1. Select a composition in After Effects
2. Click the **Export** button in Compdown
3. The YAML representation appears in the editor

This is useful for:
- Understanding what properties a comp has
- Creating a template from an existing design
- Version controlling your motion design

## Next steps

You now know the basics. Explore further:

- [Reference](/reference/) — Complete YAML schema documentation
- [Examples](/examples/) — Real-world recipes and patterns
