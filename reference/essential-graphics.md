# Essential Graphics

Expose layer properties to the Essential Graphics Panel for creating Motion Graphics Templates (.mogrt).

## Overview

Essential Graphics lets you create templates with editable properties that can be modified in Premiere Pro or other apps. Compdown supports adding properties to the panel and reading them back during export.

## Basic usage

Add an `essentialGraphics` array to a composition:

```yaml
compositions:
  - name: Lower Third
    layers:
      - name: title
        type: text
        text: Breaking News
      - name: bar
        type: solid
        color: FF0000

    essentialGraphics:
      - title.text
      - title.transform.position
      - bar.transform.opacity
```

## Two forms

### Simple form (string)

Just the property path. Uses the path as the display name:

```yaml
essentialGraphics:
  - title.text
  - title.transform.position
```

### Expanded form (object)

Customize the display name and options:

```yaml
essentialGraphics:
  - property: title.text
    name: Headline
  - property: title.transform.position
    name: Title Position
```

## Schema

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| property | string | yes | Property path |
| name | string | no | Custom display name |
| encodePathInName | boolean | no | Enable round-trip encoding (default: true) |

## Property paths

Format: `layerName.propertyPath`

### Transform properties

| Path | Property |
|------|----------|
| `layer.transform.position` | Position |
| `layer.transform.scale` | Scale |
| `layer.transform.rotation` | Rotation |
| `layer.transform.opacity` | Opacity |
| `layer.transform.anchorPoint` | Anchor Point |

### Text properties

| Path | Property |
|------|----------|
| `layer.text` | Source text |

### Effect properties

| Path | Property |
|------|----------|
| `layer.effects.EffectName.PropertyName` | Effect property |

```yaml
essentialGraphics:
  - property: bar.effects.Gaussian Blur.Blurriness
    name: Blur Amount
```

## Round-trip support

By default, Compdown encodes the property path in the controller name:

```
Display Name [path:layer.transform.position]
```

This allows exported text to include the full property path, enabling workflows like:

1. Create comp from Compdown text with Essential Graphics
2. Modify in Premiere
3. Export back to text with paths preserved

### Disabling path encoding

For cleaner names in Premiere (at the cost of round-trip):

```yaml
essentialGraphics:
  - property: title.text
    name: Headline
    encodePathInName: false  # Name will be just Headline
```

## Complete example

```yaml
compositions:
  - name: Title Card Template
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: title
        type: text
        text: Main Title
        fontSize: 72
        fillColor: FFFFFF
        transform:
          position: [960, 400]

      - name: subtitle
        type: text
        text: Subtitle goes here
        fontSize: 36
        fillColor: CCCCCC
        transform:
          position: [960, 500]

      - name: background
        type: solid
        color: 1a1a2e
        effects:
          - name: Gaussian Blur
            properties:
              Blurriness: 0

    essentialGraphics:
      - property: title.text
        name: Main Title
      - property: subtitle.text
        name: Subtitle
      - property: title.transform.position
        name: Title Position
      - property: background.effects.Gaussian Blur.Blurriness
        name: Background Blur
```

## Limitations

::: warning
- Not all properties can be added to Essential Graphics. Compdown checks `canAddToMotionGraphicsTemplate()` and silently skips unsupported properties.
- Custom names (`addToMotionGraphicsTemplateAs()`) require After Effects CC 2019 (16.1) or later.
- Legacy Essential Graphics entries created manually export as name-only objects without property paths.
:::
