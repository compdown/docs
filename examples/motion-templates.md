# Motion Templates

Creating Motion Graphics Templates (.mogrt) with Essential Graphics.

## What are Motion Templates?

Motion Graphics Templates are After Effects compositions with exposed properties that editors can modify in Premiere Pro without opening After Effects.

Compdown lets you:
1. Define compositions with editable properties
2. Expose those properties via Essential Graphics
3. Export back to YAML preserving the property mappings

## Basic template

A simple title card template:

```yaml
compositions:
  - name: Title Card Template
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: title
        type: text
        text: "Your Title Here"
        fontSize: 72
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 500]

      - name: subtitle
        type: text
        text: "Subtitle text"
        fontSize: 36
        fillColor: CCCCCC
        justification: center
        transform:
          position: [960, 580]

      - name: background
        type: solid
        color: 1a1a2e

    essentialGraphics:
      - property: title.text
        name: "Main Title"
      - property: subtitle.text
        name: "Subtitle"
      - property: title.transform.position
        name: "Title Position"
```

## Lower third template

Editable lower third for interviews:

```yaml
compositions:
  - name: Lower Third Template
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: bar
        type: solid
        color: 3498db
        width: 500
        height: 80
        transform:
          position: [250, 920]
          anchorPoint: [0, 40]
          scale:
            - time: 0
              value: [0, 100]
            - time: 0.5
              value: [100, 100]
              easing: easeOut
            - time: 4.5
              value: [100, 100]
            - time: 5
              value: [0, 100]

      - name: name
        type: text
        text: "Person Name"
        fontSize: 36
        fillColor: FFFFFF
        justification: left
        transform:
          position: [100, 905]
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
        text: "Job Title"
        fontSize: 24
        fillColor: EEEEEE
        justification: left
        transform:
          position: [100, 945]
          opacity:
            - time: 0.4
              value: 0
            - time: 0.7
              value: 100
            - time: 4.3
              value: 100
            - time: 4.6
              value: 0

    essentialGraphics:
      - property: name.text
        name: "Name"
      - property: title.text
        name: "Title"
      - property: bar.transform.scale
        name: "Bar Width"
```

## Template with effects

Expose effect properties for customization:

```yaml
compositions:
  - name: Blur Title Template
    width: 1920
    height: 1080
    duration: 5
    layers:
      - name: title
        type: text
        text: "TITLE"
        fontSize: 120
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 540]
        effects:
          - name: Glow
            matchName: ADBE Glo2
            properties:
              Glow Threshold: 50
              Glow Radius: 30
              Glow Intensity: 1

      - name: background
        type: solid
        color: "000000"
        effects:
          - name: Gaussian Blur
            matchName: ADBE Gaussian Blur 2
            properties:
              Blurriness: 0

    essentialGraphics:
      - property: title.text
        name: "Title Text"
      - property: title.effects.Glow.Glow Radius
        name: "Glow Amount"
      - property: background.effects.Gaussian Blur.Blurriness
        name: "Background Blur"
```

## Call-to-action template

End screen with multiple editable elements:

```yaml
compositions:
  - name: CTA Template
    width: 1920
    height: 1080
    duration: 10
    layers:
      - name: heading
        type: text
        text: "SUBSCRIBE"
        fontSize: 80
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 400]

      - name: channel name
        type: text
        text: "@YourChannel"
        fontSize: 48
        fillColor: FF0000
        justification: center
        transform:
          position: [960, 500]

      - name: cta text
        type: text
        text: "Click the bell for notifications"
        fontSize: 32
        fillColor: CCCCCC
        justification: center
        transform:
          position: [960, 600]

      - name: button
        type: shape
        transform:
          position: [960, 720]
        shapes:
          - type: rectangle
            size: [300, 60]
            roundness: 30
            fill:
              color: FF0000

      - name: button text
        type: text
        text: "SUBSCRIBE"
        fontSize: 24
        fillColor: FFFFFF
        justification: center
        transform:
          position: [960, 720]

      - name: background
        type: solid
        color: 1a1a2e

    essentialGraphics:
      - property: heading.text
        name: "Heading"
      - property: channel name.text
        name: "Channel Name"
      - property: cta text.text
        name: "Call to Action"
      - property: button text.text
        name: "Button Text"
      - property: heading.transform.position
        name: "Heading Position"
```

## Tips for templates

### Keep it simple
Expose only the properties editors actually need to change:
```yaml
essentialGraphics:
  - property: title.text
    name: "Title"
  # Don't expose every single property
```

### Use clear names
Make property names obvious:
```yaml
essentialGraphics:
  - property: name.text
    name: "Person's Name"  # Clear
  # Not: name: "text_01"   # Confusing
```

### Group related properties
Order properties logically:
```yaml
essentialGraphics:
  # Text content first
  - property: title.text
    name: "Main Title"
  - property: subtitle.text
    name: "Subtitle"
  # Then positioning
  - property: title.transform.position
    name: "Title Position"
  # Then styling
  - property: background.effects.Gaussian Blur.Blurriness
    name: "Background Blur"
```

### Test round-trip
1. Create the template from YAML
2. Modify values in AE
3. Export back to YAML
4. Verify the properties are preserved

## Exporting as .mogrt

After creating the template:
1. Select the composition
2. Go to **Animation > Export as Motion Graphics Template**
3. Choose destination and settings
4. Click **OK**

The exported .mogrt can be used in Premiere Pro, where editors can modify the exposed properties without After Effects.
