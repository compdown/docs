# Text Animations

Styled text layers with animated transforms.

## Fade in text

Simple opacity animation:

```yaml
compositions:
  - name: Fade In Text
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: title
        type: text
        text: "Welcome"
        fontSize: 120
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 540]
          opacity:
            - time: 0
              value: 0
            - time: 1
              value: 100
              easing: easeOut
```

## Scale in text

Pop-in effect with scale:

```yaml
compositions:
  - name: Scale In Text
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: title
        type: text
        text: "Hello"
        fontSize: 100
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 540]
          anchorPoint: [0, 0]
          scale:
            - time: 0
              value: [0, 0]
            - time: 0.5
              value: [110, 110]
              easing: easeOut
            - time: 0.8
              value: [100, 100]
              easing: easeInOut
          opacity:
            - time: 0
              value: 0
            - time: 0.3
              value: 100
```

## Slide in text

Horizontal slide with easing:

```yaml
compositions:
  - name: Slide In Text
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: title
        type: text
        text: "Slide In"
        fontSize: 80
        fillColor: FFFFFF
        justification: left
        transform:
          position:
            - time: 0
              value: [-500, 540]
            - time: 0.8
              value: [200, 540]
              easing: easeOut
          opacity:
            - time: 0
              value: 0
            - time: 0.4
              value: 100
```

## Multi-line reveal

Staggered text lines:

```yaml
compositions:
  - name: Staggered Text
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: line1
        type: text
        text: "First Line"
        fontSize: 60
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 450]
          opacity:
            - time: 0
              value: 0
            - time: 0.5
              value: 100
              easing: easeOut

      - name: line2
        type: text
        text: "Second Line"
        fontSize: 60
        fillColor: CCCCCC
        justification: center
        transform:
          position: [960, 530]
          opacity:
            - time: 0.3
              value: 0
            - time: 0.8
              value: 100
              easing: easeOut

      - name: line3
        type: text
        text: "Third Line"
        fontSize: 60
        fillColor: 999999
        justification: center
        transform:
          position: [960, 610]
          opacity:
            - time: 0.6
              value: 0
            - time: 1.1
              value: 100
              easing: easeOut
```

## Text with shadow

Styled text with drop shadow:

```yaml
compositions:
  - name: Shadow Text
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: title
        type: text
        text: "Bold Title"
        fontSize: 100
        fillColor: FFFFFF
        strokeColor: "000000"
        strokeWidth: 2
        justification: center
        transform:
          position: [960, 540]
        effects:
          - name: Drop Shadow
            properties:
              Opacity: 75
              Direction: 135
              Distance: 15
              Softness: 20
```

## Kinetic typography

Text with position and rotation:

```yaml
compositions:
  - name: Kinetic Text
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: word1
        type: text
        text: "MOVE"
        fontSize: 120
        fillColor: e74c3c
        justification: center
        transform:
          position:
            - time: 0
              value: [-200, 540]
            - time: 0.5
              value: [600, 540]
              easing: easeOut
          rotation:
            - time: 0
              value: -30
            - time: 0.5
              value: 0
              easing: easeOut

      - name: word2
        type: text
        text: "IT"
        fontSize: 120
        fillColor: 3498db
        justification: center
        transform:
          position:
            - time: 0.3
              value: [960, 1200]
            - time: 0.8
              value: [960, 540]
              easing: easeOut

      - name: word3
        type: text
        text: "NOW"
        fontSize: 120
        fillColor: 2ecc71
        justification: center
        transform:
          position:
            - time: 0.6
              value: [2120, 540]
            - time: 1.1
              value: [1320, 540]
              easing: easeOut
          rotation:
            - time: 0.6
              value: 30
            - time: 1.1
              value: 0
              easing: easeOut
```

## Text with expression wiggle

Dynamic text movement:

```yaml
compositions:
  - name: Wiggle Text
    width: 1920
    height: 1080
    duration: 10
    layers:
      - name: title
        type: text
        text: "Shake It"
        fontSize: 80
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 540]
          rotation: 0
          expressions:
            position: "wiggle(3, 20)"
            rotation: "wiggle(5, 3)"
```

## Complete title sequence

Full intro with multiple elements:

```yaml
compositions:
  - name: Title Sequence
    width: 1920
    height: 1080
    duration: 8
    color: 1a1a2e
    layers:
      - name: line top
        type: solid
        color: e74c3c
        width: 1920
        height: 3
        transform:
          position: [960, 480]
          scale:
            - time: 0.5
              value: [0, 100]
            - time: 1
              value: [100, 100]
              easing: easeOut

      - name: line bottom
        type: solid
        color: e74c3c
        width: 1920
        height: 3
        transform:
          position: [960, 600]
          scale:
            - time: 0.6
              value: [0, 100]
            - time: 1.1
              value: [100, 100]
              easing: easeOut

      - name: main title
        type: text
        text: "THE MAIN TITLE"
        fontSize: 80
        fillColor: FFFFFF
        tracking: 200
        justification: center
        transform:
          position: [960, 540]
          opacity:
            - time: 1
              value: 0
            - time: 1.5
              value: 100

      - name: subtitle
        type: text
        text: "A Short Film"
        fontSize: 24
        fillColor: 999999
        tracking: 400
        justification: center
        transform:
          position: [960, 650]
          opacity:
            - time: 1.3
              value: 0
            - time: 1.8
              value: 100
```
