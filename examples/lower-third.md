# Lower Third

Animated name plates commonly used in video production.

## Basic lower third

A simple name and title combination:

```yaml
compositions:
  - name: Lower Third Basic
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: name
        type: text
        text: Jane Smith
        fontSize: 48
        font: Arial
        fillColor: FFFFFF
        justification: left
        transform:
          position: [200, 900]

      - name: title
        type: text
        text: Senior Producer
        fontSize: 32
        fillColor: CCCCCC
        justification: left
        transform:
          position: [200, 950]
```

## Animated lower third

With bar and fade animations:

```yaml
compositions:
  - name: Lower Third Animated
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: name
        type: text
        text: Jane Smith
        fontSize: 36
        fillColor: FFFFFF
        justification: left
        transform:
          position: [220, 910]
          opacity:
            - time: 0.3
              value: 0
            - time: 0.6
              value: 100
            - time: 4.4
              value: 100
            - time: 4.7
              value: 0

      - name: title
        type: text
        text: Senior Producer
        fontSize: 24
        fillColor: EEEEEE
        justification: left
        transform:
          position: [220, 945]
          opacity:
            - time: 0.4
              value: 0
            - time: 0.7
              value: 100
            - time: 4.3
              value: 100
            - time: 4.6
              value: 0

      - name: bar
        type: solid
        color: e74c3c
        width: 400
        height: 80
        transform:
          position: [200, 920]
          anchorPoint: [0, 40]
          scale:
            - time: 0
              value: [0, 100]
              easing: easeOut
            - time: 0.5
              value: [100, 100]
            - time: 4.5
              value: [100, 100]
            - time: 5
              value: [0, 100]
              easing: easeIn
```

## Two-line lower third with accent

Professional style with accent bar:

```yaml
compositions:
  - name: Lower Third Pro
    width: 1920
    height: 1080
    duration: 6
    layers:
      - name: name
        type: text
        text: Jane Smith
        fontSize: 32
        fillColor: FFFFFF
        justification: left
        transform:
          position: [120, 900]
          opacity:
            - time: 0.4
              value: 0
            - time: 0.7
              value: 100
            - time: 5.3
              value: 100
            - time: 5.6
              value: 0

      - name: title
        type: text
        text: Creative Director
        fontSize: 22
        fillColor: 3498db
        justification: left
        transform:
          position: [120, 935]
          opacity:
            - time: 0.5
              value: 0
            - time: 0.8
              value: 100
            - time: 5.2
              value: 100
            - time: 5.5
              value: 0

      - name: accent bar
        type: solid
        color: 3498db
        width: 4
        height: 70
        transform:
          position: [98, 915]
          scale:
            - time: 0
              value: [100, 0]
            - time: 0.3
              value: [100, 100]
              easing: easeOut
            - time: 5.7
              value: [100, 100]
            - time: 6
              value: [100, 0]
              easing: easeIn

      - name: background
        type: solid
        color: 1a1a2e
        width: 400
        height: 70
        transform:
          position: [300, 915]
          anchorPoint: [0, 35]
          opacity: 90
          scale:
            - time: 0.1
              value: [0, 100]
            - time: 0.5
              value: [100, 100]
              easing: easeOut
            - time: 5.5
              value: [100, 100]
            - time: 5.9
              value: [0, 100]
              easing: easeIn
```

## Using as a template

Nest the lower third in a main composition:

```yaml
compositions:
  # Reusable lower third
  - name: LT Template
    width: 1920
    height: 200
    duration: 5
    layers:
      - name: name
        type: text
        text: Name Here
        fontSize: 36
        fillColor: FFFFFF
        transform:
          position: [220, 90]

      - name: bar
        type: solid
        color: e74c3c
        width: 400
        height: 80
        transform:
          position: [200, 100]

  # Main composition
  - name: Main Video
    duration: 60
    layers:
      - name: lower third 1
        composition: LT Template
        inPoint: 5
        outPoint: 10
        transform:
          position: [960, 980]

      - name: lower third 2
        composition: LT Template
        inPoint: 30
        outPoint: 35
        transform:
          position: [960, 980]
```

## Variations

### Right-aligned
```yaml
transform:
  position: [1720, 900]
  anchorPoint: [400, 0]  # Anchor to right edge
```

### Top placement
```yaml
transform:
  position: [200, 100]
```

### With drop shadow
```yaml
effects:
  - name: Drop Shadow
    properties:
      Opacity: 50
      Distance: 5
      Softness: 10
```
