class Crown extends HTMLElement {
  height: number
  width: number

  rendered: boolean
  _shadow: ShadowRoot

  constructor() {
    super()

    this.rendered = false
    this._shadow = this.attachShadow({ mode: "closed" })

    const dimensions = [44, 38]
    const [defaultWidth, defaultHeight] = dimensions
    const ratio = defaultWidth / defaultHeight
    const height = parseInt(
      this.getAttribute("height") || defaultHeight.toString()
    )
    const width = parseInt(
      this.getAttribute("width") || defaultWidth.toString()
    )
    this.width = width || height * ratio
    this.height = height || width / ratio
  }

  // Generators
  generateCrownBase() {
    // <rect x="2.8" y="31.48" width="38.4" height="5.76001" rx="2" fill="#FEC913"/>
    const xmlns = "http://www.w3.org/2000/svg"
    const base = document.createElementNS(xmlns, "rect")

    base.setAttributeNS(null, "x", "2.8")
    base.setAttributeNS(null, "y", "31.48")
    base.setAttributeNS(null, "width", "38.4")
    base.setAttributeNS(null, "height", "5.76001")
    base.setAttributeNS(null, "rx", "2")
    base.setAttributeNS(null, "fill", "currentColor")

    return base
  }

  generateCrownSpikes() {
    //     <path d="M1.19397 7.6661C1.0252 5.70832 3.48563 4.70649 4.73244 6.22533L11.8715 14.922C12.7938 16.0456 14.5688 15.841 15.2113 14.537L20.258 4.29514C20.9816 2.82663 23.0667 2.80206 23.8248 4.25312L29.0089 14.177C29.6702 15.443 31.4072 15.6276 32.3199 14.529L39.3411 6.07753C40.5873 4.57743 43.0244 5.56589 42.8735 7.51028L41.3432 27.2347C41.2624 28.2761 40.3937 29.08 39.3491 29.08H4.875C3.83701 29.08 2.97154 28.2859 2.88239 27.2518L1.19397 7.6661Z" fill="#FEC913"/>
    const xmlns = "http://www.w3.org/2000/svg"
    const spikes = document.createElementNS(xmlns, "path")

    spikes.setAttributeNS(
      null,
      "d",
      "M1.19397 7.6661C1.0252 5.70832 3.48563 4.70649 4.73244 6.22533L11.8715 14.922C12.7938 16.0456 14.5688 15.841 15.2113 14.537L20.258 4.29514C20.9816 2.82663 23.0667 2.80206 23.8248 4.25312L29.0089 14.177C29.6702 15.443 31.4072 15.6276 32.3199 14.529L39.3411 6.07753C40.5873 4.57743 43.0244 5.56589 42.8735 7.51028L41.3432 27.2347C41.2624 28.2761 40.3937 29.08 39.3491 29.08H4.875C3.83701 29.08 2.97154 28.2859 2.88239 27.2518L1.19397 7.6661Z"
    )
    spikes.setAttributeNS(null, "fill", "currentColor")

    return spikes
  }

  // Render
  render() {
    const xmlns = "http://www.w3.org/2000/svg"
    const crown = document.createElementNS(xmlns, "svg")
    const height = this.height.toString()
    const width = this.width.toString()

    crown.setAttributeNS(null, "height", height)
    crown.setAttributeNS(null, "width", width)
    crown.setAttributeNS(null, "viewBox", "0 0 44 38")
    crown.style.display = "inline-block"
    crown.style.height = ".8em"
    crown.style.width = "auto"

    const base = this.generateCrownBase()
    const spikes = this.generateCrownSpikes()

    crown.appendChild(base)
    crown.appendChild(spikes)

    this._shadow.innerHTML = ``
    this._shadow.appendChild(crown)
  }

  // Lifecycle Hooks
  connectedCallback() {
    if (!this.rendered) {
      this.render()
      this.rendered = true
    }
  }

  attributeChangedCallback(name: string, oldValue: object, newValue: string) {
    this.render()
  }
}

customElements.define("myosrs-crown", Crown)
