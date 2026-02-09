# Shape Layers

Shape layers contain parametric shapes and custom paths with fill and stroke styling.

## Basic usage

```yaml
layers:
  - name: My Shape Layer
    type: shape
    shapes:
      - type: rectangle
        size: [200, 100]
        fill:
          color: 3498db
```

## Shape types

### Rectangle

```yaml
- type: rectangle
  size: [400, 200]      # Required: [width, height]
  position: [0, 0]      # Optional: center position
  roundness: 20         # Optional: corner radius
  fill:
    color: FF5500
  stroke:
    color: 000000
    width: 2
```

### Ellipse

```yaml
- type: ellipse
  size: [100, 100]      # Required: [width, height]
  position: [50, 50]    # Optional: center position
  fill:
    color: 00FF00
```

### Polygon

```yaml
- type: polygon
  points: 6             # Required: number of sides (min 3)
  outerRadius: 100      # Required: radius
  position: [0, 0]      # Optional
  outerRoundness: 0     # Optional: corner rounding
  rotation: 0           # Optional: shape rotation
  fill:
    color: 0000FF
```

### Star

```yaml
- type: star
  points: 5             # Required: number of points (min 3)
  outerRadius: 100      # Required: outer radius
  innerRadius: 40       # Required: inner radius
  position: [0, 0]      # Optional
  outerRoundness: 0     # Optional
  innerRoundness: 0     # Optional
  rotation: 0           # Optional
  fill:
    color: FFFF00
```

### Path

```yaml
- type: path
  vertices:
    - [0, 0]
    - [220, 0]
    - [220, 120]
    - [0, 120]
  inTangents:
    - [0, 0]
    - [0, 0]
    - [0, 0]
    - [0, 0]
  outTangents:
    - [0, 0]
    - [0, 0]
    - [0, 0]
    - [0, 0]
  closed: true
  position: [100, 40]   # Applied via shape-group transform
  fill:
    color: 8e44ad
```

## Shape properties reference

### All shapes

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| type | string | yes | `rectangle`, `ellipse`, `polygon`, `star`, `path` |
| name | string | no | Shape group name |
| position | `[x, y]` or keyframes | no | Center/group position |
| fill | object | no | Fill styling |
| stroke | object | no | Stroke styling |

### Rectangle

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| size | `[w, h]` or keyframes | yes | Width and height |
| roundness | number or keyframes | no | Corner radius |

### Ellipse

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| size | `[w, h]` or keyframes | yes | Width and height |

### Polygon

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| points | int or keyframes | yes | Number of sides (min 3) |
| outerRadius | number or keyframes | yes | Radius |
| outerRoundness | number or keyframes | no | Corner rounding |
| rotation | number or keyframes | no | Shape rotation |

### Star

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| points | int or keyframes | yes | Number of points (min 3) |
| outerRadius | number or keyframes | yes | Outer point radius |
| innerRadius | number or keyframes | yes | Inner point radius |
| outerRoundness | number or keyframes | no | Outer corner rounding |
| innerRoundness | number or keyframes | no | Inner corner rounding |
| rotation | number or keyframes | no | Shape rotation |

### Path

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| vertices | `[[x, y], ...]` | yes | Path points |
| inTangents | `[[x, y], ...]` | no | Incoming Bezier handles (length must match `vertices`) |
| outTangents | `[[x, y], ...]` | no | Outgoing Bezier handles (length must match `vertices`) |
| closed | boolean | no | Defaults to `true` |

## Fill

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| color | string or keyframes | yes | 6-char hex color |
| opacity | number or keyframes | no | Opacity 0-100 (default: 100) |

```yaml
fill:
  color: FF5500
  opacity: 80
```

## Stroke

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| color | string or keyframes | yes | 6-char hex color |
| width | number or keyframes | no | Stroke width (default: 1) |
| opacity | number or keyframes | no | Opacity 0-100 (default: 100) |

```yaml
stroke:
  color: 000000
  width: 3
  opacity: 100
```

## Keyframe format

Use keyframe arrays on any shape property that supports animation:

```yaml
shapes:
  - type: rectangle
    size:
      - time: 0
        value: [220, 80]
      - time: 2
        value: [520, 80]
        easing: easeOut
    roundness:
      - time: 0
        value: 0
      - time: 2
        value: 40
```

## Multiple shapes

A shape layer can contain multiple shapes:

```yaml
layers:
  - name: Icons
    type: shape
    shapes:
      - type: rectangle
        name: Background
        size: [400, 200]
        roundness: 20
        fill:
          color: 2c3e50
        stroke:
          color: ecf0f1
          width: 2

      - type: ellipse
        name: Circle 1
        size: [50, 50]
        position: [-100, 0]
        fill:
          color: e74c3c
```

## Complete example

```yaml
compositions:
  - name: Shape Demo
    width: 800
    height: 600
    layers:
      - name: Shapes
        type: shape
        transform:
          position: [400, 300]
        shapes:
          - type: rectangle
            name: Card
            size: [300, 200]
            roundness: 15
            fill:
              color: ffffff
            stroke:
              color: e0e0e0
              width: 1

          - type: path
            name: Badge Cutout
            vertices:
              - [0, 0]
              - [80, 0]
              - [80, 40]
              - [0, 40]
            position: [120, -70]
            fill:
              color: f1c40f

          - type: ellipse
            name: Avatar
            size: [60, 60]
            position: [-90, -40]
            fill:
              color: 3498db
```

## Shape operators

Operators are applied per shape group via `operators` (in listed order):

```yaml
shapes:
  - type: rectangle
    size: [600, 80]
    fill:
      color: 3498db
    operators:
      - type: trimPaths
        start: 0
        end: 100
      - type: zigZag
        size: 6
        ridgesPerSegment: 14
        points: smooth
```

### Supported operators

| Operator type | Properties |
|---------------|------------|
| `trimPaths` | `start`, `end`, `offset`, `trimMultipleShapes` (`simultaneously`, `individually`) |
| `zigZag` | `size`, `ridgesPerSegment`, `points` (`corner`, `smooth`) |
| `repeater` | `copies`, `offset`, `transform.anchorPoint`, `transform.position`, `transform.scale`, `transform.rotation`, `transform.startOpacity`, `transform.endOpacity` |
| `offsetPaths` | `amount`, `lineJoin` (`miter`, `round`, `bevel`), `miterLimit` |
| `puckerBloat` | `amount` |
| `roundCorners` | `radius` |
| `mergePaths` | `mode` (`merge`, `add`, `subtract`, `intersect`, `excludeIntersections`) |
| `twist` | `angle`, `center` |
| `wigglePaths` | `size`, `detail`, `points` (`corner`, `smooth`), `wigglesPerSecond`, `correlation`, `temporalPhase`, `spatialPhase`, `randomSeed` |

### Operator example set

```yaml
shapes:
  - type: path
    vertices:
      - [0, 0]
      - [200, 0]
      - [200, 60]
      - [0, 60]
    fill:
      color: f39c12
    operators:
      - type: trimPaths
        end:
          - time: 0
            value: 0
          - time: 2
            value: 100
      - type: offsetPaths
        amount: 10
      - type: roundCorners
        radius: 12
```

::: warning Gradient fill limitation
Shape-group gradient fills are not currently scriptable with full color-stop control in After Effects ExtendScript.
`fill.gradient` is not part of the schema. For gradient looks, use layer styles/effects on the layer.
:::

## Gradient workaround

```yaml
layers:
  - name: Gradient Card
    type: shape
    shapes:
      - type: rectangle
        size: [600, 120]
        roundness: 16
        fill:
          color: FFFFFF
    effects:
      - name: Gradient Ramp
        matchName: ADBE Ramp
        properties:
          Start of Ramp: [0, 0]
          End of Ramp: [600, 0]
          Start Color: [0.16, 0.50, 0.73]
          End Color: [0.52, 0.76, 0.91]
```
