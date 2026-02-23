# Inheritance

Inheritance lets you define reusable base objects and derive new ones with small overrides.

Compdown uses two keys:

- `_id`: defines a reusable template
- `_extends`: references an existing `_id` in the same array

## Where inheritance works

- `compositions`
- `compositions[].layers`
- `_timeline.layers`

## How merging works

- Object values are merged deeply.
- Array values are replaced (not concatenated).
- Scalar values are overridden by the child.

## Composition example

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

## Layer example (inside `_timeline`)

```yaml
_timeline:
  layers:
    - _id: textBase
      name: Base
      type: text
      text: Hello
      fontSize: 96
      transform:
        position: [960, 540]
        opacity: 100

    - _extends: textBase
      name: Title
      text: Welcome
      transform:
        opacity: 85
```

Result:
- `Title` inherits `type`, `fontSize`, and `transform.position`
- `transform.opacity` is overridden to `85`

## Layer example (inside a composition)

```yaml
compositions:
  - name: Main
    layers:
      - _id: nullBase
        name: Base Null
        type: null
        enabled: false

      - _extends: nullBase
        name: Controller
```

## Validation rules

Compdown fails validation when:
- `_extends` points to an unknown `_id`
- `_id` is duplicated in the same array
- inheritance is circular (`a -> b -> a`)
- `_id` or `_extends` is not a non-empty string
