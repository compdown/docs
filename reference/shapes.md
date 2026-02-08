# Shape Layers

Shape layers contain parametric shapes with fill and stroke styling.

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

## Shape properties reference

### All shapes

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| type | string | yes | `rectangle`, `ellipse`, `polygon`, `star` |
| name | string | no | Shape group name |
| position | `[x, y]` | no | Center position |
| fill | object | no | Fill styling |
| stroke | object | no | Stroke styling |

### Rectangle

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| size | `[w, h]` | yes | Width and height |
| roundness | number | no | Corner radius |

### Ellipse

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| size | `[w, h]` | yes | Width and height |

### Polygon

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| points | int | yes | Number of sides (min 3) |
| outerRadius | number | yes | Radius |
| outerRoundness | number | no | Corner rounding |
| rotation | number | no | Shape rotation |

### Star

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| points | int | yes | Number of points (min 3) |
| outerRadius | number | yes | Outer point radius |
| innerRadius | number | yes | Inner point radius |
| outerRoundness | number | no | Outer corner rounding |
| innerRoundness | number | no | Inner corner rounding |
| rotation | number | no | Shape rotation |

## Fill

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| color | string | yes | 6-char hex color |
| opacity | number | no | Opacity 0-100 (default: 100) |

```yaml
fill:
  color: FF5500
  opacity: 80
```

## Stroke

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| color | string | yes | 6-char hex color |
| width | number | no | Stroke width (default: 1) |
| opacity | number | no | Opacity 0-100 (default: 100) |

```yaml
stroke:
  color: 000000
  width: 3
  opacity: 100
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

      - type: ellipse
        name: Circle 2
        size: [50, 50]
        position: [0, 0]
        fill:
          color: f39c12

      - type: ellipse
        name: Circle 3
        size: [50, 50]
        position: [100, 0]
        fill:
          color: 2ecc71
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

          - type: star
            name: Badge
            points: 5
            outerRadius: 30
            innerRadius: 12
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

::: warning Limitations
Shape layers currently support parametric shapes only. Bezier paths and masks are not yet supported.
:::
