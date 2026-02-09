# Animated Background

Moving backgrounds with transforms and effects.

## Simple gradient movement

A solid with position animation:

```yaml
compositions:
  - name: Moving Background
    width: 1920
    height: 1080
    duration: 10
    layers:
      - name: bg
        type: solid
        color: 1a1a2e
        width: 3000
        height: 2000
        transform:
          position:
            - time: 0
              value: [960, 540]
            - time: 10
              value: [1200, 700]
          scale: [150, 150]
```

## Rotating background

Slow rotation with scaling:

```yaml
compositions:
  - name: Rotating Background
    width: 1920
    height: 1080
    duration: 30
    layers:
      - name: bg
        type: solid
        color: 2c3e50
        width: 3000
        height: 3000
        transform:
          position: [960, 540]
          scale: [150, 150]
          rotation:
            - time: 0
              value: 0
            - time: 30
              value: 360
```

## Pulsing background

Scale animation for breathing effect:

```yaml
compositions:
  - name: Pulsing Background
    width: 1920
    height: 1080
    duration: 10
    layers:
      - name: overlay
        type: solid
        color: 2c3e50
        blendingMode: overlay
        transform:
          opacity: 30

      - name: bg
        type: solid
        color: 34495e
        transform:
          position: [960, 540]
          scale:
            - time: 0
              value: [100, 100]
              easing: easeInOut
            - time: 2.5
              value: [110, 110]
              easing: easeInOut
            - time: 5
              value: [100, 100]
              easing: easeInOut
            - time: 7.5
              value: [110, 110]
              easing: easeInOut
            - time: 10
              value: [100, 100]
```

## Wiggle with expressions

Dynamic movement using expressions:

```yaml
compositions:
  - name: Wiggle Background
    width: 1920
    height: 1080
    duration: 30
    layers:
      - name: bg
        type: solid
        color: 1a1a2e
        width: 2500
        height: 1800
        transform:
          position: [960, 540]
          scale: [130, 130]
          rotation: 0
          expressions:
            position: wiggle(0.5, 100)
            rotation: wiggle(0.3, 5)
```

## Blurred background

Background with animated blur:

```yaml
compositions:
  - name: Blurred Background
    width: 1920
    height: 1080
    duration: 10
    layers:
      - name: bg
        type: solid
        color: 3498db
        transform:
          position: [960, 540]
        effects:
          - name: Gaussian Blur
            matchName: ADBE Gaussian Blur 2
            properties:
              Blurriness:
                - time: 0
                  value: 0
                - time: 2
                  value: 50
                  easing: easeOut
                - time: 8
                  value: 50
                - time: 10
                  value: 0
                  easing: easeIn
```

## Layered background

Multiple layers with parallax:

```yaml
compositions:
  - name: Layered Background
    width: 1920
    height: 1080
    duration: 10
    layers:
      # Front layer - fastest
      - name: layer 1
        type: solid
        color: 34495e
        blendingMode: screen
        transform:
          opacity: 20
          position:
            - time: 0
              value: [960, 540]
            - time: 10
              value: [1160, 680]

      # Middle layer
      - name: layer 2
        type: solid
        color: 2c3e50
        blendingMode: screen
        transform:
          opacity: 30
          position:
            - time: 0
              value: [960, 540]
            - time: 10
              value: [1060, 600]

      # Back layer - slowest
      - name: layer 3
        type: solid
        color: 1a1a2e
        transform:
          position:
            - time: 0
              value: [960, 540]
            - time: 10
              value: [1000, 560]
```

## Soft gradient look with shapes

Using semi-transparent shape fills and blend modes to create a gradient-like look:

```yaml
compositions:
  - name: Shape Background
    width: 1920
    height: 1080
    duration: 10
    layers:
      - name: accent shape
        type: shape
        blendingMode: screen
        transform:
          position:
            - time: 0
              value: [400, 800]
            - time: 10
              value: [1520, 280]
        shapes:
          - type: ellipse
            size: [800, 800]
            fill:
              color: e74c3c
              opacity: 20

      - name: gradient shape
        type: shape
        blendingMode: screen
        transform:
          position: [960, 540]
          scale:
            - time: 0
              value: [100, 100]
            - time: 5
              value: [120, 120]
            - time: 10
              value: [100, 100]
        shapes:
          - type: ellipse
            size: [1500, 1500]
            fill:
              color: 3498db
              opacity: 30

      - name: bg solid
        type: solid
        color: 1a1a2e
```
