---
layout: home

hero:
  name: Compdown
  text: A natural language for After Effects
  tagline: Describe compositions in YAML, create them with a click
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/compdown/compdown

features:
  - icon: 📖
    title: Readable
    details: An elegant syntax that's simple to read and write
  - icon: 🔗
    title: Shareable
    details: Save it, gist it, email it, or drop it in a repo. Text travels well
  - icon: ⚡
    title: Fast
    details: Copy, paste, process. Stay in After Effects and skip binary presets
  - icon: 🤖
    title: AI-friendly
    details: If an AI can read and write the same text you use, it can help draft scenes and explore variations
---

## Quick Example

```yaml
compositions:
  - name: My Comp
    layers:
      - name: title
        type: text
        text: Hello World
        transform:
          position: [960, 540]
      - name: background
        type: solid
        color: 1a1a2e
```

This creates a composition with a dark solid background and centered text. That's it — no scripting, no clicking through menus.

<div style="margin-top: 2rem; text-align: center;">
  <a href="./guide/" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">Read the Guide →</a>
</div>
