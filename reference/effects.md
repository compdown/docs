# Effects

Apply native After Effects effects to layers with static or animated properties.

## Schema

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | string | yes | Effect display name |
| matchName | string | no | AE internal match name |
| enabled | boolean | no | Enable/disable (default: true) |
| properties | object | no | Property values |
| expressions | object | no | Property expressions |

## Basic usage

```yaml
layers:
  - name: blurred background
    type: solid
    color: 1a1a2e
    effects:
      - name: Gaussian Blur
        properties:
          Blurriness: 20
```

## Using matchName

For portability across languages, use `matchName`:

```yaml
effects:
  - name: Gaussian Blur
    matchName: ADBE Gaussian Blur 2
    properties:
      Blurriness: 20
```

The `matchName` is AE's internal identifier that stays consistent regardless of UI language.

::: tip Finding matchNames
You can find effect matchNames in the [After Effects Scripting Guide](https://ae-scripting.docsforadobe.dev/) or by examining exported YAML from Compdown.
:::

## Property value types

| Type | Example | Description |
|------|---------|-------------|
| number | `10` | Scalar value |
| boolean | `true` | Checkbox (1/0) |
| array | `[960, 540]` | Point, color, etc. |
| keyframe array | `[{time: 0, value: 10}, ...]` | Animated |

## Animating properties

Use keyframe arrays for animated effect properties:

```yaml
effects:
  - name: CC Radial Fast Blur
    properties:
      Amount:
        - time: 0
          value: 0
        - time: 1
          value: 100
        - time: 2
          value: 0
      Center:
        - time: 0
          value: [960, 540]
        - time: 2
          value: [0, 0]
```

## Disabling effects

Set `enabled: false` to add an effect but keep it disabled:

```yaml
effects:
  - name: Glow
    enabled: false
    properties:
      Glow Radius: 50
```

## Multiple effects

Effects are applied in order (top to bottom):

```yaml
effects:
  - name: Curves
    matchName: ADBE CurvesCustom

  - name: Gaussian Blur
    properties:
      Blurriness: 5

  - name: Glow
    properties:
      Glow Threshold: 60
      Glow Radius: 25
```

## Expressions on effect properties

Add expressions to effect properties:

```yaml
effects:
  - name: Gaussian Blur
    properties:
      Blurriness: 10
    expressions:
      Blurriness: "wiggle(2, 5)"
```

## Common effects reference

### Gaussian Blur
```yaml
- name: Gaussian Blur
  matchName: ADBE Gaussian Blur 2
  properties:
    Blurriness: 20
    Repeat Edge Pixels: true
```

### Drop Shadow
```yaml
- name: Drop Shadow
  matchName: ADBE Drop Shadow
  properties:
    Opacity: 75
    Direction: 135
    Distance: 10
    Softness: 15
```

### Glow
```yaml
- name: Glow
  matchName: ADBE Glo2
  properties:
    Glow Threshold: 60
    Glow Radius: 25
    Glow Intensity: 1
```

### Fill
```yaml
- name: Fill
  matchName: ADBE Fill
  properties:
    Color: [1, 0, 0]  # RGB 0-1 range
```

### Tint
```yaml
- name: Tint
  matchName: ADBE Tint
  properties:
    Map Black To: [0, 0, 0]
    Map White To: [1, 1, 1]
    Amount to Tint: 100
```

## Complete example

```yaml
layers:
  - name: Styled Element
    type: solid
    color: 3498db
    width: 400
    height: 400
    effects:
      - name: Gaussian Blur
        matchName: ADBE Gaussian Blur 2
        properties:
          Blurriness:
            - time: 0
              value: 0
            - time: 1
              value: 20
            - time: 2
              value: 0

      - name: Drop Shadow
        properties:
          Opacity: 50
          Distance: 20
          Softness: 30

      - name: Glow
        enabled: false
        properties:
          Glow Radius: 50
```
