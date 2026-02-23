# Compositions

Compositions are the core containers in After Effects — timelines that hold layers.

## Schema

| Property    | Type   | Required | Default    | Description            |
|-------------|--------|----------|------------|------------------------|
| _id         | string | no       |            | Reusable composition template id |
| _extends    | string | no       |            | Inherit from a composition `_id` in the same array |
| name        | string | yes      |            | Composition name       |
| width       | int    | no       | 1920       | Width in pixels        |
| height      | int    | no       | 1080       | Height in pixels       |
| duration    | number | no       | 10         | Duration in seconds    |
| framerate   | number | no       | 30         | Frames per second      |
| pixelAspect | number | no       | 1          | Pixel aspect ratio     |
| color       | string | no       | `000000`   | Background hex color   |
| folder      | string | no       |            | Target project folder  |
| layers      | array  | no       |            | List of layers         |
| markers     | array  | no       |            | List of markers        |
| essentialGraphics | array | no  |            | Essential Graphics properties |

## Basic usage

Minimal composition (uses all defaults):

```yaml
compositions:
  - name: My Comp
```

Creates a 1920x1080, 30fps, 10-second composition.

## Custom settings

Override defaults as needed:

```yaml
compositions:
  - name: Instagram Story
    width: 1080
    height: 1920
    duration: 15
    framerate: 30

  - name: 4K Master
    width: 3840
    height: 2160
    framerate: 24
    duration: 120
    color: 1a1a2e
```

## Adding layers

Layers are defined in a `layers` array:

```yaml
compositions:
  - name: Title Card
    layers:
      - name: title
        type: text
        text: Chapter One
      - name: background
        type: solid
        color: 000000
```

See [Layers](/reference/layers) for complete layer documentation.

::: tip Layer stack order
Layer order in Compdown syntax maps to the AE stack with the first layer on top. Put background layers later in the list so they render behind foreground layers.
:::

## Composition nesting

Reference other compositions using the `composition` key on a layer:

```yaml
compositions:
  - name: Lower Third
    width: 1920
    height: 200
    layers:
      - name: bar
        type: solid
        color: FF5500

  - name: Main Comp
    layers:
      - name: lower third
        composition: Lower Third  # Nests the Lower Third composition
        transform:
          position: [960, 980]
```

::: tip Reference behavior
Compositions are created before layers, so forward references are allowed.
Use unique composition names to avoid ambiguous references.
:::

## Inheritance (`_id` / `_extends`)

Use `_id` to define a reusable base composition and `_extends` to inherit and override fields.

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

Rules:
- `_extends` can only target `_id` values in the same `compositions` array.
- Object values are merged deeply.
- Array values are replaced (not concatenated).
- Duplicate `_id`, missing `_extends` targets, and circular inheritance fail validation.

## Placing in folders

Organize compositions in project folders:

```yaml
folders:
  - name: Comps
  - name: Precomps
    parent: Comps

compositions:
  - name: Lower Third
    folder: Precomps

  - name: Main Comp
    folder: Comps
```

## Markers

Add composition markers for navigation and scripting:

```yaml
compositions:
  - name: Main Comp
    markers:
      - time: 0
        comment: Intro
      - time: 5
        comment: Main Content
      - time: 10
        comment: Outro
```

See [Markers](/reference/markers) for full marker documentation.

## Essential Graphics

Expose properties to the Essential Graphics Panel:

```yaml
compositions:
  - name: Template
    layers:
      - name: title
        type: text
        text: Edit Me
    essentialGraphics:
      - title.text
      - title.transform.position
```

See [Essential Graphics](/reference/essential-graphics) for full documentation.
