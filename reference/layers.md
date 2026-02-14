# Layers

Layers are the building blocks of compositions. Each layer must have exactly one source: `type`, `file`, or `composition`.

Top-level layer authoring is done via `_timeline.layers`:

```yaml
_timeline:
  layers:
    - name: title
      type: text
      text: Hello World
```

## Layer source

Every layer needs exactly one of:

| Property | Description |
|----------|-------------|
| `type`   | Built-in layer type |
| `file`   | Reference to an imported file |
| `composition` | Reference to another composition |

```yaml
layers:
  # Type-based layer
  - name: background
    type: solid
    color: 000000

  # File-based layer
  - name: footage
    file: my-video  # References a file id

  # Composition-based layer
  - name: nested
    composition: Lower Third  # References a composition name
```

## Built-in layer types

| Type | Description | Required properties |
|------|-------------|---------------------|
| `solid` | Solid color layer | `color` |
| `null` | Null object (invisible) | — |
| `adjustment` | Adjustment layer | — |
| `text` | Text layer | `text` |
| `camera` | Camera layer | — |
| `light` | Light layer | `lightType` |
| `shape` | Shape layer | `shapes` |

## Common properties

These apply to all layer types:

### Core identity

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| name     | string | yes      | Layer name  |

### Timing

| Property  | Type   | Description |
|-----------|--------|-------------|
| inPoint   | number | In point (seconds) |
| outPoint  | number | Out point (seconds) |
| startTime | number | Start time offset |

### Switches and toggles

| Property | Type    | Description |
|----------|---------|-------------|
| enabled | boolean | Layer visibility |
| shy | boolean | Shy flag |
| locked | boolean | Lock flag |
| solo | boolean | Solo the layer |
| threeDLayer | boolean | Enable 3D |
| audioEnabled | boolean | Enable audio |
| motionBlur | boolean | Enable motion blur |
| collapseTransformation | boolean | Continuously rasterize |
| guideLayer | boolean | Mark as guide layer |
| effectsActive | boolean | Global effects toggle |
| timeRemapEnabled | boolean | Enable time remapping |

### Parenting and rendering

| Property | Type   | Description |
|----------|--------|-------------|
| parent | string | Parent layer name |
| blendingMode | string | Blending mode |
| quality | string | `best`, `draft`, `wireframe` |
| samplingQuality | string | `bicubic`, `bilinear` |
| autoOrient | string | `off`, `alongPath`, `cameraOrPointOfInterest` |
| frameBlendingType | string | `none`, `frameMix`, `pixelMotion` |
| trackMatteType | string | `none`, `alpha`, `alphaInverted`, `luma`, `lumaInverted` |
| label | int | Color label (0-16) |

---

## Solid layers

Solid color layers. Require a `color` property.

```yaml
- name: background
  type: solid
  color: 1a1a2e
```

### Solid properties

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| color    | string | yes      | 6-char hex color |
| width    | int    | no       | Width (defaults to comp) |
| height   | int    | no       | Height (defaults to comp) |

---

## Null layers

Invisible layers used for parenting and expressions.

```yaml
- name: controller
  type: null
  threeDLayer: true
```

---

## Adjustment layers

Apply effects to all layers below.

```yaml
- name: color grade
  type: adjustment
  effects:
    - name: Curves
      matchName: ADBE CurvesCustom
```

---

## Text layers

Text layers with styling options. Require a `text` property.

```yaml
- name: headline
  type: text
  text: Breaking News
  fontSize: 72
  font: Arial
  fillColor: FFFFFF
  justification: center
```

### Text properties

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| text | string | yes | Text content |
| fontSize | number | no | Font size |
| font | string | no | Font family |
| fillColor | string | no | Fill color (hex) |
| strokeColor | string | no | Stroke color (hex) |
| strokeWidth | number | no | Stroke width |
| tracking | number | no | Character spacing |
| leading | number | no | Line spacing |
| justification | string | no | `left`, `center`, `right` |

---

## Camera layers

3D cameras for perspective views.

```yaml
- name: Main Camera
  type: camera
  cameraType: twoNode
  zoom: 1000
  depthOfField: true
  focusDistance: 500
```

### Camera properties

| Property | Type | Description |
|----------|------|-------------|
| cameraType | string | `oneNode`, `twoNode` |
| zoom | number | Camera zoom |
| depthOfField | boolean | Enable DOF |
| focusDistance | number | Focus distance |
| aperture | number | Aperture |
| blurLevel | number | Blur level (0-100) |

---

## Light layers

3D lights for illumination. Require a `lightType` property.

```yaml
- name: Key Light
  type: light
  lightType: spot
  intensity: 100
  lightColor: FFFFEE
  coneAngle: 90
  castsShadows: true
```

### Light properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| lightType | string | yes | `parallel`, `spot`, `point`, `ambient` |
| intensity | number | no | Light intensity |
| lightColor | string | no | Light color (hex) |
| coneAngle | number | no | Spot cone angle (0-180) |
| coneFeather | number | no | Cone feather (0-100) |
| castsShadows | boolean | no | Enable shadows |
| shadowDarkness | number | no | Shadow darkness (0-100) |
| shadowDiffusion | number | no | Shadow diffusion |

---

## Shape layers

Parametric shapes with fill and stroke. See [Shapes](/reference/shapes) for complete documentation.

```yaml
- name: Button
  type: shape
  shapes:
    - type: rectangle
      size: [200, 50]
      roundness: 10
      fill:
        color: 3498db
```

---

## File-based layers

Layers sourced from imported footage.

```yaml
files:
  - id: hero
    path: /path/to/video.mp4

compositions:
  - name: Main
    layers:
      - name: Hero Video
        file: hero
        transform:
          position: [960, 540]
```

---

## Composition layers (nesting)

Embed another composition as a layer.

```yaml
compositions:
  - name: Lower Third
    layers:
      - name: bar
        type: solid
        color: FF0000

  - name: Main Comp
    layers:
      - name: lower third instance
        composition: Lower Third
        transform:
          position: [960, 980]
```

---

## Blending modes

Available values for `blendingMode`:

`normal`, `dissolve`, `darken`, `multiply`, `colorBurn`, `linearBurn`, `darkerColor`, `lighten`, `screen`, `colorDodge`, `linearDodge`, `lighterColor`, `overlay`, `softLight`, `hardLight`, `vividLight`, `linearLight`, `pinLight`, `hardMix`, `difference`, `exclusion`, `subtract`, `divide`, `hue`, `saturation`, `color`, `luminosity`

---

## Parenting

Link layers with the `parent` property:

```yaml
layers:
  - name: controller
    type: null

  - name: element
    type: solid
    color: FF0000
    parent: controller  # Will follow controller's transform
```

The parent layer must exist (by name) in the same composition.
