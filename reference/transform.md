# Transform

Transform properties control a layer's position, scale, rotation, and opacity. Each property accepts static values or keyframe arrays.

## Properties

| Property | Static type | Keyframe value | Description |
|----------|-------------|----------------|-------------|
| anchorPoint | `[x, y]` | `[x, y]` | Anchor point |
| position | `[x, y]` | `[x, y]` | Position (combined) |
| positionX | number | number | X position (separate) |
| positionY | number | number | Y position (separate) |
| positionZ | number | number | Z position (3D) |
| scale | `[x, y]` | `[x, y]` | Scale (percent) |
| rotation | number | number | Z Rotation (degrees) |
| rotationX | number | number | X Rotation (3D) |
| rotationY | number | number | Y Rotation (3D) |
| opacity | number | number (0-100) | Opacity |

## Static values

Set properties directly:

```yaml
transform:
  position: [960, 540]
  scale: [100, 100]
  rotation: 45
  opacity: 80
```

## Keyframe animation

Use arrays of keyframe objects:

```yaml
transform:
  position:
    - time: 0
      value: [0, 540]
    - time: 2
      value: [1920, 540]
```

### Keyframe structure

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| time | number | yes | Time in seconds |
| value | varies | yes | Property value |
| easing | string | no | Easing type |

Minimum 2 keyframes required for animation.

## Mixing static and animated

Combine static and keyframed properties:

```yaml
transform:
  rotation: 45          # Static
  scale: [100, 100]     # Static
  position:             # Animated
    - time: 0
      value: [0, 0]
    - time: 5
      value: [1920, 1080]
```

## Easing

Control interpolation with the `easing` property:

| Easing | Description |
|--------|-------------|
| `linear` | Constant speed (default) |
| `easeIn` | Slow arrival at keyframe |
| `easeOut` | Slow departure from keyframe |
| `easeInOut` | Slow arrival and departure |
| `hold` | Hold value, no interpolation |

```yaml
transform:
  position:
    - time: 0
      value: [0, 0]
      easing: easeOut
    - time: 2
      value: [960, 540]
      easing: easeIn
    - time: 4
      value: [1920, 1080]
```

## Separate position dimensions

For independent X/Y/Z control, use separate properties:

```yaml
transform:
  positionX:
    - time: 0
      value: 0
    - time: 2
      value: 1920
  positionY:
    - time: 0
      value: 0
      easing: easeOut
    - time: 1
      value: 540
```

::: warning
You cannot mix `position` with `positionX`/`positionY`/`positionZ`. Use one or the other.
:::

## 3D properties

Using `positionZ`, `rotationX`, or `rotationY` automatically enables the layer's 3D switch:

```yaml
layers:
  - name: 3D Card
    type: solid
    color: 3498db
    transform:
      position: [960, 540]
      positionZ: -500
      rotationY: 45
```

## Expressions

Add expressions with the `expressions` object:

```yaml
transform:
  position: [960, 540]
  rotation: 0
  expressions:
    position: wiggle(5, 50)
    rotation: time * 36
```

### Expression properties

Each property in `transform` can have a corresponding expression:

```yaml
transform:
  position: [960, 540]
  scale: [100, 100]
  expressions:
    position: wiggle(2, 100)
    scale: "[value[0] + Math.sin(time*5)*10, value[1]]"
    opacity: Math.abs(Math.sin(time * Math.PI)) * 100
```

## Complete example

```yaml
layers:
  - name: Animated Element
    type: solid
    color: e74c3c
    width: 200
    height: 200
    transform:
      anchorPoint: [100, 100]
      position:
        - time: 0
          value: [200, 540]
          easing: easeOut
        - time: 2
          value: [960, 540]
          easing: easeInOut
        - time: 4
          value: [1720, 540]
          easing: easeIn
      scale:
        - time: 0
          value: [0, 0]
        - time: 0.5
          value: [120, 120]
        - time: 1
          value: [100, 100]
      rotation:
        - time: 0
          value: 0
        - time: 4
          value: 360
      opacity:
        - time: 0
          value: 0
        - time: 0.5
          value: 100
        - time: 3.5
          value: 100
        - time: 4
          value: 0
```
