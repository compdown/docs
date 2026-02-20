# Targets

Targets tell Compdown where to run actions.

## Why targets exist

Before Compdown can add, update, or remove anything, it needs a destination.
That destination is called a target.

## `_timeline` target

`_timeline` points to the currently active composition timeline in After Effects.

```yaml
_timeline:
  layers:
    - name: Title
      type: text
      text: Hello World
```

## `_selected` target

`_selected` points to the currently selected layers in the active composition timeline.

```yaml
_selected:
  set:
    transform:
      opacity: 50
```

## Default behavior

Inside a target, if you provide items directly, Compdown creates/adds them.

Example:

```yaml
_timeline:
  layers:
    - name: Background
      type: solid
      color: 1a1a2e
```

No special verb is required for create/add.

## When verbs are needed

Use explicit action verbs only for modifications:

```yaml
_timeline:
  set:
    layers:
      - name: Title
        transform:
          opacity: 85
  remove:
    layers:
      - name: Temp Layer
```

Or update/remove selected layers:

```yaml
_selected:
  set:
    transform:
      opacity: 50
  remove: true
```

## Error behavior

- If no composition timeline is active, `_timeline` actions fail.
- `set/remove` match by exact layer name and fail on no match or multiple matches.
- `_selected` actions fail when no layers are selected.
