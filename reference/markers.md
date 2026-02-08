# Markers

Composition markers for navigation, chapters, and scripting.

## Schema

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| time     | number | yes      | Time in seconds |
| comment  | string | no       | Marker text/label |
| duration | number | no       | Duration for range markers |
| chapter  | string | no       | Chapter name |
| url      | string | no       | URL link |
| label    | int    | no       | Color label (0-16) |

## Basic usage

```yaml
compositions:
  - name: My Video
    duration: 60
    markers:
      - time: 0
        comment: Intro
      - time: 10
        comment: Section 1
      - time: 30
        comment: Section 2
      - time: 50
        comment: Outro
```

## Duration markers

Create range markers with `duration`:

```yaml
markers:
  - time: 5
    comment: Main Content
    duration: 20  # Marker spans from 5s to 25s
```

## Chapters

Mark chapters for video exports:

```yaml
markers:
  - time: 0
    comment: Introduction
    chapter: Intro
  - time: 60
    comment: Main Topic
    chapter: Main
  - time: 180
    comment: Conclusion
    chapter: End
```

## URLs

Attach links to markers:

```yaml
markers:
  - time: 30
    comment: Learn more
    url: https://example.com/more-info
```

## Color labels

Set marker colors (0-16, matching AE's label colors):

```yaml
markers:
  - time: 0
    comment: Start
    label: 1   # Red
  - time: 10
    comment: Action
    label: 9   # Green
  - time: 20
    comment: End
    label: 2   # Yellow
```

## Complete example

```yaml
compositions:
  - name: Tutorial Video
    width: 1920
    height: 1080
    duration: 300
    markers:
      - time: 0
        comment: Title Card
        chapter: Intro
        label: 1

      - time: 5
        comment: Welcome
        duration: 10

      - time: 20
        comment: 'Step 1: Setup'
        chapter: Setup
        label: 9

      - time: 60
        comment: 'Step 2: Configuration'
        chapter: Config
        label: 9

      - time: 120
        comment: 'Step 3: Usage'
        chapter: Usage
        label: 9

      - time: 240
        comment: Summary
        chapter: Summary
        label: 2

      - time: 280
        comment: Subscribe link
        url: https://youtube.com/@channel

    layers:
      - name: content
        type: solid
        color: 1a1a2e
```

## Use cases

### Video chapters
Export to platforms that support chapters (YouTube, Vimeo):
```yaml
markers:
  - time: 0
    chapter: Introduction
  - time: 60
    chapter: Main Content
  - time: 180
    chapter: Conclusion
```

### Script sync points
Mark timing for synchronized elements:
```yaml
markers:
  - time: 2.5
    comment: Logo appears
  - time: 5
    comment: Title animates in
  - time: 8
    comment: Transition
```

### Render regions
Define sections for rendering:
```yaml
markers:
  - time: 0
    comment: Scene 1
    duration: 30
  - time: 30
    comment: Scene 2
    duration: 30
```
