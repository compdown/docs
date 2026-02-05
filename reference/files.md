# Files

Files import footage and assets into the After Effects project.

## Schema

| Property | Type             | Required | Description                    |
|----------|------------------|----------|--------------------------------|
| id       | string \| number | yes      | Unique identifier for the file |
| path     | string           | yes      | Absolute file path             |
| sequence | boolean          | no       | Import as image sequence       |
| folder   | string           | no       | Target project folder          |

## Basic usage

```yaml
files:
  - id: bg
    path: /Users/me/footage/background.png
  - id: logo
    path: /Users/me/assets/logo.ai
```

## Using files in layers

Reference files by their `id` in layer definitions:

```yaml
files:
  - id: bg
    path: /path/to/background.png

compositions:
  - name: Main Comp
    layers:
      - name: Background
        file: bg  # References the file id
```

## Image sequences

Set `sequence: true` to import numbered frames as a sequence:

```yaml
files:
  - id: render
    path: /path/to/sequence/frame_0001.png
    sequence: true
```

Compdown detects the frame range from the file pattern.

### Sequence path patterns

The path should point to a specific frame. AE will detect the sequence pattern:

```yaml
# Standard numbered sequences
path: /path/to/frame_0001.png
path: /path/to/shot.0001.exr
path: /path/to/render_001.tif

# Bracket notation (explicit range)
path: /path/to/frame_[0001-0100].png
```

## Organizing in folders

Place imported files in project folders:

```yaml
folders:
  - name: Footage
  - name: Plates
    parent: Footage

files:
  - id: bg
    path: /path/to/background.png
    folder: Footage
  - id: plate
    path: /path/to/plate.exr
    folder: Plates
```

## ID types

The `id` can be a string or number. Use whatever makes sense for your workflow:

```yaml
files:
  # String IDs (descriptive)
  - id: hero-background
    path: /path/to/bg.png

  # Numeric IDs (compact)
  - id: 1
    path: /path/to/file1.png
  - id: 2
    path: /path/to/file2.png
```

Reference them the same way in layers:

```yaml
layers:
  - name: BG
    file: hero-background
  - name: Element
    file: 1
```
