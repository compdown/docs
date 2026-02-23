# What's New in v0.3.0

This release focuses on cleaner authoring and better targeting workflows.

## Highlights

### Target blocks for active timeline and selection

- `_timeline` for add/set/remove actions in the active composition timeline.
- `_selected` for set/remove actions on currently selected layers.

### Inheritance with `_id` and `_extends`

You can define reusable templates for compositions and layers:

```yaml
compositions:
  - _id: sceneBase
    name: Scene-01
    duration: 30
    framerate: 24
    color: ff8000

  - _extends: sceneBase
    name: Scene-02
```

Works in:
- `compositions`
- `compositions[].layers`
- `_timeline.layers`

Validation guards:
- Unknown `_extends` target
- Duplicate `_id`
- Circular inheritance

### Tab indentation is now tolerated

Compdown now normalizes leading tab indentation to spaces before YAML parsing.
If your editor inserts tabs, your document can still parse successfully.

## Migration notes

- Legacy top-level `destination/layers` syntax is not supported.
- Use `_timeline.layers` for implicit creation in the active timeline.
- Use `_timeline.set.layers` / `_timeline.remove.layers` for explicit updates/deletes.
