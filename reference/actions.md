# Actions

Actions define what Compdown should do inside a target block like `_timeline`.

For target basics, read [Targets](/reference/targets) first.

## Overview

`_timeline` currently supports three layer actions:

```yaml
_timeline:
  layers:   # add/create
  set:      # update existing
  remove:   # delete existing
```

Default rule:
- No action verb means **create/add**.
- Action verbs are used only when you want to **modify** existing content.

## 1) Add layers (implicit create)

Use `layers` when you want to create new layers.

```yaml
_timeline:
  layers:
    - name: Background
      type: solid
      color: 1a1a2e
    - name: Title
      type: text
      text: Hello World
```

Notes:
- This is the default behavior (no verb needed for create/add).
- Requires an active composition timeline in After Effects.

## 2) Update layers (`set`)

Use `set` when you want to update existing layers.

```yaml
_timeline:
  set:
    layers:
      - name: Title
        transform:
          position: [960, 500]
          opacity: 85
```

Matching rules:
- Matches by exact `name`.
- Names are case-sensitive.

Error rules:
- No match: throws an error.
- More than one match: throws an error.

## 3) Delete layers (`remove`)

Use `remove` when you want to delete existing layers.

```yaml
_timeline:
  remove:
    layers:
      - name: Temp Guide
      - name: Debug Null
```

Matching rules:
- Matches by exact `name`.
- Names are case-sensitive.

Error rules:
- No match: throws an error.
- More than one match: throws an error.

## Combined usage

You can combine actions in one block:

```yaml
_timeline:
  layers:
    - name: New Label
      type: text
      text: Ready
  set:
    layers:
      - name: Title
        transform:
          opacity: 85
  remove:
    layers:
      - name: Temp Guide
```

Execution order:
1. `layers` (create)
2. `set.layers` (update)
3. `remove.layers` (delete)
