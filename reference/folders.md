# Folders

Folders organize items in the After Effects Project panel.

## Schema

| Property | Type   | Required | Description        |
|----------|--------|----------|--------------------|
| name     | string | yes      | Folder name        |
| parent   | string | no       | Parent folder name |

## Basic usage

```yaml
folders:
  - name: Footage
  - name: Renders
  - name: Compositions
```

## Nested folders

Use `parent` to create folder hierarchies:

```yaml
folders:
  - name: Footage
  - name: Plates
    parent: Footage
  - name: References
    parent: Footage
```

This creates:
```
Project
├── Footage
│   ├── Plates
│   └── References
└── ...
```

## Order matters

Parent folders must be defined before their children. This works:

```yaml
folders:
  - name: Footage        # Parent first
  - name: Plates
    parent: Footage      # Child references parent
```

This fails:

```yaml
folders:
  - name: Plates
    parent: Footage      # Error: Footage doesn't exist yet
  - name: Footage
```

## Placing items in folders

Files and compositions can be placed in folders using the `folder` property:

```yaml
folders:
  - name: Footage

files:
  - id: bg
    path: /path/to/background.png
    folder: Footage

compositions:
  - name: Main Comp
    folder: Compositions
```
