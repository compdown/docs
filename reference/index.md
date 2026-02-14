# Syntax Reference

This section documents the complete Compdown syntax — every property, type, and option available.
Compdown syntax is YAML-based, but you can think of it as plain text instructions for After Effects.

## Document structure

A Compdown document has four optional top-level keys:

```yaml
_timeline:     # Add layers to the currently active composition timeline
folders:       # Project folder structure
files:         # Imported footage and assets
compositions:  # Compositions with layers
```

At least one must be present.

## Creation order

When Compdown processes a document, it creates items in this order:

1. **Folders** — Project panel folders
2. **Files** — Imported footage (placed in folders)
3. **Compositions** — Comps (placed in folders)
4. **Layers** — Inside each composition

This order matters because:
- Files need folders to exist first
- Compositions need folders to exist first
- Layers can reference files (via `file:`) or other compositions (via `composition:`)

## Parsing notes

Compdown handles some YAML edge cases automatically:

### Null type layers
```yaml
type: null  # Works as-is (normally YAML parses this as null value)
```

### All-digit colors
```yaml
color: 000000  # Works as-is (normally YAML parses this as number)
```

You don't need extra quotes around these values.

### Forcing string type
Use quotes when a value should stay a string even if it looks like another data type:

```yaml
text: "123"     # not a number
id: "001"       # preserves leading zeros
text: "true"    # not a boolean
text: "null"    # not a null value
```

## Schema sections

- [Folders](/reference/folders) — Project folder structure
- [Files](/reference/files) — Importing footage and assets
- [Compositions](/reference/compositions) — Comp settings and structure
- [Layers](/reference/layers) — All layer types and properties
- [Transform](/reference/transform) — Position, scale, rotation, keyframes
- [Effects](/reference/effects) — Applying and animating effects
- [Shapes](/reference/shapes) — Parametric shape layers
- [Essential Graphics](/reference/essential-graphics) — MOGRT properties
- [Markers](/reference/markers) — Composition markers
