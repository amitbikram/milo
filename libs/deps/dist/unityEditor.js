var K = Object.defineProperty;
var Q = (a, t, e) => t in a ? K(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var c = (a, t, e) => (Q(a, typeof t != "symbol" ? t + "" : t, e), e);
class j {
  static init() {
    return new j();
  }
  constructor() {
    this.fabric = null, this.loadFrabric();
  }
  async loadFrabric() {
    this.fabric = await import("./fabric-T-x1IxqJ.js").then((t) => t.f);
  }
  async applyBrightnessFilter(t, e) {
    t.getObjects("image").forEach((i) => {
      i.filters = [
        new this.fabric.default.fabric.Image.filters.Brightness({ brightness: e })
      ], i.applyFilters();
    }), t.renderAll();
  }
  async applySaturationFilter(t, e) {
    t.getObjects("image").forEach((i) => {
      i.filters = [
        new this.fabric.default.fabric.Image.filters.Saturation({ saturation: e })
      ], i.applyFilters();
    }), t.renderAll();
  }
  async applyHueFilter(t, e) {
    t.getObjects("image").forEach((i) => {
      i.filters = [
        new this.fabric.default.fabric.Image.filters.HueRotation({ rotation: e })
      ], i.applyFilters();
    }), t.renderAll();
  }
  async applyConstrastFilter(t, e) {
    t.getObjects("image").forEach((i) => {
      i.filters = [
        new this.fabric.default.fabric.Image.filters.Contrast({ contrast: e })
      ], i.applyFilters();
    }), t.renderAll();
  }
}
function H(a) {
  return window.getComputedStyle(a).getPropertyValue("position") === "static";
}
function tt(a, t, e) {
  const i = document.createElement("canvas");
  return i.id = e, i.height = a, i.width = t, i;
}
class u {
  constructor() {
    c(this, "forward", (t) => {
      this.listeners.length > 0 && this.listeners.forEach((e) => e(t));
    });
    this.listeners = [];
  }
  subscribe(t) {
    this.listeners.push(t);
  }
  unsubscribe(t) {
    const e = this.listeners.indexOf(t);
    if (e >= 0)
      this.listeners.splice(e, 1);
    else
      throw new Error("Unknown listener");
  }
  count() {
    return this.listeners.length;
  }
}
class et {
  constructor(t, e) {
    this.canvas = t, this.configuration = e, this.onModeChanged = new u(), this.onLayerOrderChanged = new u(), this.onPropertiesChanged = new u();
  }
  add(t) {
    this.canvas.add(t), this.canvas.requestRenderAll();
  }
  selectObject(t) {
    this.canvas.discardActiveObject(), this.canvas.setActiveObject(t), this.canvas.renderAll();
  }
  forEachObject(t) {
    const e = this.canvas.getObjects();
    for (let i = 0; i < e.length; i++)
      t(e[i], i, i + 1 === e.length);
  }
  disableSelection() {
    this.canvas.selection = !1;
    const t = /* @__PURE__ */ new Map();
    return this.forEachObject((e) => {
      t.set(e, e.selectable), e.selectable && e.set("selectable", !1);
    }), new it(t);
  }
  setMode(t) {
    this.mode = t, this.onModeChanged.forward(t);
  }
}
class it {
  constructor(t) {
    this.map = t;
  }
  revert() {
    this.map.forEach((t, e) => e.set("selectable", t));
  }
}
class st {
  constructor(t) {
    c(this, "enableBG", () => {
      this.menuBar.querySelector(".remove-bg").classList.add("hide"), this.menuBar.querySelector(".change-bg-wrapper").classList.remove("hide");
    });
    c(this, "reset", () => {
      this.menuBar.querySelector(".remove-bg").classList.remove("hide"), this.menuBar.querySelector(".change-bg-wrapper").classList.add("hide");
    });
    c(this, "enableConnector", () => {
      this.menuBar.querySelector(".app-connector").classList.remove("hide");
    });
    c(this, "loadBGImages", (t) => {
      const e = this.workflow[t];
      if (e.experience === "mock") {
        let i = "";
        for (let s = 0; s < e.options.length; s++)
          i += `<div><img height="68" src="${e.options[s]}" /></div>`;
        return i;
      }
      return "";
    });
    c(this, "removebg", (t) => {
      this.menuBar.insertAdjacentHTML("beforeend", `<button class="remove-bg">
            <img src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/removebg.svg">
            <span>Remove Background</span>
        <div>`), this.menuBar.querySelector(".remove-bg").addEventListener("click", () => {
        this.removebgEvent.forward();
      });
    });
    c(this, "changebg", (t) => {
      let e = "";
      this.workflow[t].noInitial === !0 && (e = "hide");
      const s = `<div class="button-wrapper change-bg-wrapper ${e}"><button class="change-bg">
            <img src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/changebg.svg">
            <span>Change Background</span>
        </button>
        <div class="button-panel changebg-panel hide">
            ${this.loadBGImages(t)}
        </div></div>`;
      this.menuBar.insertAdjacentHTML("beforeend", s), this.menuBar.querySelector(".button-panel").addEventListener("click", (n) => {
        n.target.tagName === "IMG" && this.changebgEvent.forward(n.target.src);
      }), this.menuBar.querySelector(".change-bg").addEventListener("click", () => {
        this.menuBar.querySelector(".changebg-panel").classList.toggle("hide");
      });
    });
    c(this, "upload", (t) => {
      this.menuBar.insertAdjacentHTML("beforeend", `<button class="upload">
            <img src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/upload.svg">
            <span>Upload image</span>
        </button>`), this.menuBar.querySelector(".upload").addEventListener("click", () => {
        this.uploadEvent.forward();
      });
    });
    c(this, "mask", (t) => {
      this.menuBar.insertAdjacentHTML("beforeend", `<button class="mask">
            <img src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/upload.svg">
            <span>Mask</span>
        </button>`), this.menuBar.querySelector(".mask").addEventListener("click", () => {
        this.maskEvent.forward();
      });
    });
    c(this, "connector", (t) => {
      let e = "";
      this.workflow[t].noInitial === !0 && (e = "hide");
      const s = `<button class="app-connector ${e}">
            <span>Continue in app</span>
            <img height="33" src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/ps.svg">
        </button>`;
      this.menuBar.insertAdjacentHTML("beforeend", s);
    });
    c(this, "filters", (t) => {
      this.menuBar.insertAdjacentHTML("beforeend", `<div class="button-wrapper"><button class="image-filter">
            <img src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/huesat.svg">
            <span>Edit Hue/Sat</span>
        </button>
        <div class="button-panel image-filter-panel hide">
        <label for="hue">Hue</label>
        <div class="sliderContainer hue">
            <input
            id="hue-value"
            type="range"
            min="-2"
            max="2"
            class="options hue-input"
            value="0"
            step="0.002"
            />
        </div>
        <label for="saturation">Saturation</label>
        <div class="sliderContainer saturation">
            <input
            type="range"
            min="-1"
            max="1"
            id="saturation-value"
            class="options saturation-input"
            value="0"
            step="0.003921"
            />
        </div>
        </div></div>`), this.bindFilterEvents(), this.menuBar.querySelector(".image-filter").addEventListener("click", () => {
        this.menuBar.querySelector(".image-filter-panel").classList.toggle("hide");
      });
    });
    this.workflow = t, this.menuBar = document.createElement("div"), this.menuBar.classList.add("menu-bar"), this.removebgEvent = new u(), this.changebgEvent = new u(), this.uploadEvent = new u(), this.maskEvent = new u(), this.enableChangeBG = new u(), this.resetButton = new u(), this.canvasLoaded = new u(), this.hueFilter = new u(), this.satFilter = new u(), this.enableChangeBG.subscribe(this.enableBG), this.resetButton.subscribe(this.reset), this.canvasLoaded.subscribe(this.enableConnector);
  }
  initControls() {
    for (let t = 0; t < this.workflow.length; t++) {
      const e = this.workflow[t].type;
      this[e](t);
    }
    return this.menuBar;
  }
  bindFilterEvents() {
    this.menuBar.querySelector("#hue-value").addEventListener("change", (t) => {
      this.hueFilter.forward(t.target.value);
    }), this.menuBar.querySelector("#saturation-value").addEventListener("change", (t) => {
      const e = parseFloat(t.target.value);
      this.satFilter.forward(e);
    });
  }
}
function at() {
  return new Promise((a) => {
    const t = document.createElement("input");
    t.type = "file", t.accept = "image/*", t.addEventListener("change", () => {
      if (t.files && t.files.length > 0) {
        const e = t.files[0], i = new FileReader();
        i.onload = () => {
          a(i.result);
        }, i.readAsDataURL(e);
      } else
        a(null);
    }), t.click();
  });
}
const nt = function({ default: { fabric: a } }) {
  console.log(a), window.fabric = a, a.Image.filters.BlendImage.prototype.mode = "mask", a.Image.fromURL(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgYGD4DwABBAEAcCBlCwAAAABJRU5ErkJggg==",
    function(t) {
      a.Image.filters.BlendImage.prototype.image = t;
    }
  ), a.Image.filters.BlendImage.prototype.fragmentSource.mask = `
            precision highp float;
            uniform sampler2D uTexture;
            uniform sampler2D uImage;
            uniform vec4 uColor;
            varying vec2 vTexCoord;
            varying vec2 vTexCoord2;
    
            void main() {
                vec4 color = texture2D(uTexture, vTexCoord);
                vec4 color2 = texture2D(uImage, vTexCoord2);
                color.a *= color2.a;
                gl_FragColor = color;
            }`, a.MaskBrush = a.util.createClass(a.PencilBrush, {
    initialize: function(t) {
      this.canvas = t.canvas, this.width = t.width, this.target = t.target, this.shadow = t.shadow, this.blur = t.blur, this.color = t.color, this.targetMaskFilter = t.targetMaskFilter, this.mode = t.mode ? t.mode : "source-out", this._points = [];
    },
    _saveAndTransform: function(t) {
      var e = this, i = this.canvas.viewportTransform;
      t.save(), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), t.filter = e.blur ? "blur(" + e.blur + "px)" : "none";
    },
    _finalizeAndAddPath: function() {
      var t = this, e = this.canvas.contextTop;
      e.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
      var i = this.convertPointsToSVGPath(this._points).join("");
      if (i === "M 0 0 Q 0 0 0 0 L 0 0") {
        this.canvas.requestRenderAll();
        return;
      }
      var s = this.target.getBoundingRect(), n = this.canvas.contextTop.getImageData(
        s.left,
        s.top,
        s.width,
        s.height
      ), r = document.createElement("canvas"), l = r.getContext("2d");
      if (r.width = s.width, r.height = s.height, !t.targetMaskFilter.image) {
        l.fillRect(0, 0, r.width, r.height), a.Image.fromURL(r.toDataURL(), function(o) {
          t.targetMaskFilter.image = o, t.target.applyFilters(), t.canvas.requestRenderAll(), t._finalizeAndAddPath();
        });
        return;
      }
      l.putImageData(n, 0, 0), t.targetMaskFilter.image && (l.globalCompositeOperation = t.mode, l.drawImage(
        t.targetMaskFilter.image.getElement(),
        0,
        0,
        r.width,
        r.height
      )), a.Image.fromURL(r.toDataURL(), function(o) {
        t.targetMaskFilter.image = o, t.target.applyFilters(), t.canvas.requestRenderAll();
      }), this.canvas.clearContext(this.canvas.contextTop), this.canvas.requestRenderAll(), this._resetShadow();
    }
  });
}, rt = {
  editorMode: "mount"
  // 'standalone' | 'mount'
};
async function ot(a, t) {
  if ((await fetch(a, {
    method: "PUT",
    headers: { "Content-Type": "image/jpeg" },
    body: t
  })).status !== 200)
    throw "Failed to upload to s3!!";
}
class yt {
  constructor(t, e = {}) {
    c(this, "loaderEnable", () => {
      this.container.querySelector(".lds-ring").classList.remove("hide");
    });
    c(this, "loaderDisable", () => {
      this.container.querySelector(".lds-ring").classList.add("hide");
    });
    c(this, "onAnyChange", () => {
      this.onChanged.forward();
    });
    c(this, "removebg", async () => {
      this.loaderEnable(), await this.ondemandLoad();
      let t = null;
      const e = this.config.workflow.find((i) => i.type === "removebg");
      if (e.experience)
        t = e.options[0];
      else if (this.uploadedUrl) {
        const i = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.getBearerToken(),
            "x-api-key": "leo"
          }
        }, s = await fetch("https://assistant-int.adobe.io/api/v1/asset", i), { id: n, href: r } = await s.json();
        let l = atob(this.uploadedUrl.split(",")[1]), o = [];
        for (let g = 0; g < l.length; g++)
          o.push(l.charCodeAt(g));
        let p = new Blob([new Uint8Array(o)], { type: "image/jpeg" });
        await ot(r, p);
        const C = {
          method: "POST",
          headers: {
            Authorization: this.getBearerToken(),
            "Content-Type": "application/json",
            "x-api-key": "leo"
          },
          body: `{"surfaceId":"Unity","assets":[{"id": "${n}"}]}`
        }, k = await fetch("https://assistant-int.adobe.io/api/v1/providers/PhotoshopRemoveBackground", C), { outputUrl: L } = await k.json();
        t = L;
      } else {
        const i = this.container.querySelector(":scope > img").src;
        if (!i.includes("data:image/jpeg")) {
          const s = new URL(i), n = {
            method: "POST",
            headers: {
              Authorization: this.getBearerToken(),
              "Content-Type": "application/json",
              "x-api-key": "leo"
            },
            body: `{"surfaceId":"Unity","assets":[{"href": "${s}"}]}`
          }, r = await fetch("https://assistant-int.adobe.io/api/v1/providers/PhotoshopRemoveBackground", n), { outputUrl: l } = await r.json();
          t = l;
        }
      }
      fabric.Image.fromURL(t, (i) => {
        const s = {
          width: i.width,
          height: i.height,
          selectable: !1
        }, n = Math.min(this.width / i.width, this.height / i.height);
        s.left = (this.width - i.width * n) / 2, s.top = (this.height - i.height * n) / 2, s.scaleX = n, s.scaleY = n, i.set(s), this.frontImage = i;
        const r = this.canvas.getObjects();
        for (let l = 0; l < r.length; l++)
          this.canvas.remove(r[l]);
        this.canvas.add(i), this.img.style.visibility = "hidden", this.loaderDisable(), e.next === "changebg" && this.controlManager.enableChangeBG.forward();
      });
    });
    c(this, "applyMask", () => {
      this.fabric && nt(this.fabric);
      const t = this.fabric.default.fabric, e = this.canvas;
      e.isDrawingMode = !0, e.freeDrawingBrush = new t.PencilBrush(e), e.freeDrawingBrush.color = "black", e.freeDrawingBrush.width = 20, setTimeout(() => {
        const i = document.createElement("canvas");
        i.width = e.width, i.height = e.height;
        const s = i.getContext("2d");
        e.getObjects().forEach((r) => {
          r.type === "path" && r.render(s);
        });
        const n = i.toDataURL("image/png");
        t.Image.fromURL(n, (r) => {
          r.set({
            left: 0,
            top: 0,
            selectable: !1,
            globalCompositeOperation: "destination-out"
          }), e.clear(), e.add(this.bgImage), e.add(this.frontImage), e.add(r), e.renderAll();
        });
      }, 5e3);
    });
    c(this, "changebg", (t) => {
      fabric.Image.fromURL(t, (e) => {
        const i = {
          width: e.width,
          height: e.height,
          selectable: !1
        }, s = Math.min(this.width / e.width, this.height / e.height);
        i.left = (this.width - e.width * s) / 2, i.top = (this.height - e.height * s) / 2, i.scaleX = s, i.scaleY = s, e.set(i), this.bgImage && this.canvas.remove(this.bgImage), this.bgImage = e, this.canvas.sendBackwards(e);
      });
    });
    c(this, "changeHueFilter", (t) => {
      this.filters.applyHueFilter(this.canvas, t);
    });
    c(this, "changeSatFilter", (t) => {
      this.filters.applySaturationFilter(this.canvas, t);
    });
    c(this, "upload", async () => {
      await this.ondemandLoad();
      const t = await at();
      this.uploadedUrl = t, fabric.Image.fromURL(t, (e) => {
        const i = {
          width: e.width,
          height: e.height,
          selectable: !1
        }, s = Math.min(this.width / e.width, this.height / e.height);
        i.left = (this.width - e.width * s) / 2, i.top = (this.height - e.height * s) / 2, i.scaleX = s, i.scaleY = s, e.set(i);
        const n = this.canvas.getObjects();
        for (let r = 0; r < n.length; r++)
          this.canvas.remove(n[r]);
        this.canvas.add(e), this.controlManager.resetButton.forward();
      });
    });
    c(this, "ondemandLoad", async () => {
      this.canvasLoaded || (this.fabric = await import("./fabric-T-x1IxqJ.js").then((t) => t.f), this.filters = j.init(), this.loadCanvas(), this.state = new et(this.canvas, this.config), this.controlManager.canvasLoaded.forward());
    });
    this.element = t, this.img = null, this.canvasLoaded = !1, this.canvas = null, this.container = this.checkMountType(t), this.config = { ...rt, ...e }, this.onChanged = new u(), this.height = this.container.clientHeight, this.width = this.container.clientWidth, this.$ = (i) => this.container.querySelector(i), this.filters = null, this.token = this.config.token || null, this.controlManager = new st(this.config.workflow), this.loadEditor();
  }
  async loadEditor() {
    this.loadControls();
  }
  checkMountType(t) {
    if (t.tagName === "IMG") {
      const e = t.clientHeight, i = t.clientWidth, s = document.createElement("div");
      return s.style.height = `${e}px`, s.style.width = `${i}px`, H(t) && (s.style.position = "relative"), t.parentNode.insertBefore(s, t), s.appendChild(t), this.img = img, s;
    } else if (t.tagName === "PICTURE") {
      const e = t.querySelector("img"), i = e.clientHeight, s = e.clientWidth, n = document.createElement("div");
      return n.style.height = `${i}px`, n.style.width = `${s}px`, n.classList.add("editor-wrapper"), H(t) && (n.style.position = "relative"), t.parentNode.insertBefore(n, t), n.appendChild(t), this.img = e, n;
    } else
      return H(t) && (t.style.position = "relative"), t.insertAdjacentHTML("beforeend", '<div class="lds-ring hide"><div></div><div></div><div></div><div></div></div>'), this.img = t.querySelector("img"), t;
  }
  loadControls() {
    this.container.appendChild(this.controlManager.initControls()), this.controlManager.removebgEvent.subscribe(this.removebg), this.controlManager.uploadEvent.subscribe(this.upload), this.controlManager.changebgEvent.subscribe(this.changebg), this.controlManager.hueFilter.subscribe(this.changeHueFilter), this.controlManager.satFilter.subscribe(this.changeSatFilter), this.controlManager.maskEvent.subscribe(this.applyMask);
  }
  loadCanvas() {
    const t = document.createElement("div");
    t.classList.add("canvas-placeholder"), this.container.appendChild(t);
    const e = tt(this.height, this.width, "canvas");
    this.$(".canvas-placeholder").appendChild(e), window.canvas = this.canvas = new fabric.Canvas("canvas", {
      isDrawingMode: !1,
      height: this.height,
      width: this.width
      // backgroundImage: ""
    }), this.canvasLoaded = !0, fabric.Object.prototype.transparentCorners = !1;
  }
  getBearerToken() {
    return this.token ? this.token.startsWith("Bearer") ? this.token : `Bearer ${this.token}` : `Bearer ${window.adobeIMS.getAccessToken().token}`;
  }
}
const ct = `<div class="menu-bar">
<button id="vector-select">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 18 18"
    fill="currentColor"
  >
    <defs></defs>
    <g id="icons">
      <path
        class="fill"
        d="M4.252,1.027A.25.25,0,0,0,4,1.277V17.668a.25.25,0,0,0,.252.25.246.246,0,0,0,.175-.074L9.262,13h6.5a.25.25,0,0,0,.176-.427L4.427,1.1A.246.246,0,0,0,4.252,1.027Z"
      ></path>
    </g>
  </svg>
  <span>Select</span>
</button>
<button id="vector-rect">
  <svg
    id="icons"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 18 18"
    fill="currentColor"
  >
    <defs></defs>
    <path
      class="fill"
      d="M15.5,2H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,15.5,2ZM15,15H3V3H15Z"
    ></path>
  </svg>
  <span>Shape</span>
</button>
<button id="vector-line">
  <svg
    version="1.1"
    id="icons"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="28"
    height="28"
    viewBox="0 0 18 18"
    style="enable-background: new 0 0 18 18"
    xml:space="preserve"
    fill="currentColor"
  >
    <path
      d="M16.3,2.4L2.8,15.9c-0.2,0.2-0.5,0.2-0.7,0h0c-0.2-0.2-0.2-0.5,0-0.7L15.6,1.7c0.2-0.2,0.5-0.2,0.7,0v0
      C16.4,1.9,16.4,2.2,16.3,2.4z"
    ></path>
  </svg>
  <span>Line</span>
</button>
<button id="vector-path">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 18 18"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="m16.89983,7.52029l-3.45841-3.45756c-.1714-.17135-.4493-.17135-.6207,0l-1.52748,1.52713c-.14462.14457-.15967.36147-.06039.52971l3.46007,3.46007.00326-.00712.0764.07544c.17145.17105.44905.17095.6203-.0004l1.50696-1.50666c.1714-.17135.1714-.44925,0-.6206Z"
    ></path>
    <path
      fill-rule="evenodd"
      d="m6.92068,2.32005c.33269-.17524.68216-.31977,1.04145-.4307,2.94697-.90985,5.92734-.18893,8.02091,1.78475.09822.09259.24999.09335.34544-.0021l.3539-.3539c.0996-.0996.09942-.26481-.00292-.36159C14.45378.85173,11.33661.00768,8.19695.78424c-.72384.17903-1.42239.46055-2.06871.8324C.7664,4.70142.07389,11.6544,4.03296,15.75c.00964.01215.23608.24621.23608.24621l3.35168-3.34319c-.00525-.03479-.01514-.06812-.01514-.10443,0-.45392.36804-.8219.8219-.8219s.82178.36798.82178.8219c0,.45386-.36792.82184-.82178.82184-.03955,0-.07593-.01025-.11365-.01648l-3.34802,3.34802.24358.24364c.11755.11758.29437.15273.44795.08906l6.53878-2.71073c.19102-.07919.34517-.22749.43168-.41531l1.49084-3.23663-3.79102-3.79095-3.23657,1.49072c-.18785.08652-.33618.24069-.41537.43175l-2.3815,5.74507c-1.16162-1.42273-1.79419-3.18695-1.79419-5.04858,0-2.97347,1.61129-5.70015,4.42068-7.17995Z"
    ></path>
  </svg>
  <span>Pen tool</span>
</button>
<button id="vector-fhpath">
  <svg
    id="icons"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 18 18"
    fill="currentColor"
  >
    <defs></defs>
    <path
      class="fill"
      d="M4.909,10.481a2.392,2.392,0,0,0-1.66.636,6.448,6.448,0,0,0-1.34,2.391C1.253,16.258.05,15.558.05,16.171a.445.445,0,0,0,.331.408,11.833,11.833,0,0,0,2.773.343,6.233,6.233,0,0,0,3.619-.97,3.458,3.458,0,0,0,1.411-2.263A3.4,3.4,0,0,0,4.909,10.481Z"
    ></path>
    <path
      class="fill"
      d="M9.06,12.05c3.617-4.113,8.211-9.768,7.008-10.971S9.883,5.488,6.3,9.415A5.027,5.027,0,0,1,9.06,12.05Z"
    ></path>
    <path
      class="cls-1"
      d="M13.509,9.386a2.583,2.583,0,0,0-.809.141c-.521.652-1.1,1.353-1.76,2.125a2.482,2.482,0,0,0-.034.337,2.6,2.6,0,1,0,2.6-2.6Z"
    ></path>
    <path
      class="fill"
      d="M13.935,7.921q-.543.739-1.235,1.607a2.556,2.556,0,0,1,.809-.142,2.6,2.6,0,1,1-2.6,2.6,2.482,2.482,0,0,1,.034-.337c-.349.407-.714.829-1.1,1.272l-.237.269a4.091,4.091,0,1,0,4.336-5.272Z"
    ></path>
  </svg>
  <span>Brush</span>
</button>
<div class="upload-btn-wrapper">
  <button>
    <svg
      height="28"
      width="28"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 184.69 184.69"
      xml:space="preserve"
      fill="#000000"
      stroke="#000000"
      stroke-width="1.47752"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <g>
              <path
                style="fill: #010002"
                d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813 C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834 C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538 c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392 c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094 c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168 c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391 v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
              />
            </g>
            <g>
              <path
                style="fill: #010002"
                d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078 c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045 L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227 c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036 C104.91,91.608,107.183,91.608,108.586,90.201z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
    <span>Upload</span>
  </button>
  <input id="import-btn" type="file" name="myfile" />
</div>
<input type="color" id="vector-fill" />
</div>`;
function _(a) {
  return window.getComputedStyle(a).getPropertyValue("position") === "static";
}
const lt = (a, t, e) => {
  t.split(" ").forEach(
    (i) => a.addEventListener(i, e, !1)
  );
}, ht = {
  initFill: { color: "FF0000", opacity: 1 },
  initStroke: { color: "000000", opacity: 1, width: 1 },
  text: { stroke_width: 0, font_size: 24, font_family: "serif" },
  initOpacity: 1,
  canvas_expansion: 1,
  imgPath: "/public/images",
  dimensions: [1e3, 800],
  baseUnit: "px",
  editorMode: "standalone",
  // 'standalone' | 'mount'
  sourceLoad: !0
};
class St {
  checkMountType(t) {
    if (t.tagName === "IMG") {
      this.src = t.src;
      const e = t.clientHeight, i = t.clientWidth, s = document.createElement("div");
      return s.style.height = `${e}px`, s.style.width = `${i}px`, s.classList.add("editor-wrapper"), _(t) && (s.style.position = "relative"), t.parentNode.insertBefore(s, t), s.appendChild(t), s;
    } else if (t.tagName === "PICTURE") {
      const e = t.querySelector("img");
      this.src = e.src;
      const i = e.clientHeight, s = e.clientWidth, n = document.createElement("div");
      return n.style.height = `${i}px`, n.style.width = `${s}px`, n.classList.add("editor-wrapper"), _(t) && (n.style.position = "relative"), t.parentNode.insertBefore(n, t), n.appendChild(t), n;
    } else {
      const e = _(t);
      return div.classList.add("editor-wrapper"), e && (t.style.position = "relative"), t;
    }
  }
  constructor(t, e = {}) {
    this.element = t, this.src = null, this.editorWrapper = this.checkMountType(t), this.height = this.editorWrapper.clientHeight, this.width = this.editorWrapper.clientWidth, this.config = { ...ht, ...e, dimensions: [this.width, this.height] }, this.editorWrapper.insertAdjacentHTML("beforeend", ct), this.config.editorMode === "standalone" && this.bindEvents();
  }
  bindEvents() {
    window.addEventListener("keydown", (t) => this.onKeyDownHandler(t)), this.editorWrapper.querySelector("#import-btn").addEventListener("change", (t) => {
      const e = t.target.files[0];
      if (e && e.type === "image/svg+xml") {
        const i = new FileReader();
        i.onload = (s) => {
          const n = s.target.result;
          this.canvas.clear(), this.canvas.setSvgString(n);
          const r = this.editorWrapper, l = getComputedStyle(r, null).height.replace("px", ""), o = getComputedStyle(r, null).width.replace("px", "");
          this.canvas.setCurrentZoom(l / this.canvas.contentH), this.canvas.updateCanvas(o, l);
        }, i.readAsText(e);
      } else
        alert("Please upload a valid SVG file.");
    }), this.editorWrapper.querySelector("#vector-select").addEventListener("click", async () => {
      if (this.canvas) {
        this.canvas.setMode("select");
        return;
      }
      this.container = document.createElement("div"), this.container.id = "svgcanvas", this.editorWrapper.appendChild(this.container), this.hiddenTextTag = document.createElement("input"), this.hiddenTextTag.style.height = 0, this.hiddenTextTag.style.width = 0, this.hiddenTextTag.style.opacity = 0;
      const t = await import("./svgcanvas-Bz7YzuSu.js");
      this.canvas = new t.default(this.container, this.config), this.canvas.updateCanvas(this.width, this.height), this.fill = (e = "#ff0000") => {
        this.canvas.getSelectedElements().forEach((i) => {
          i.setAttribute("fill", e);
        });
      }, this.canvas.textActions.setInputElem(this.hiddenTextTag), this.bindEvents(), this.config.sourceLoad === !0 && this.src !== null && window.fetch(this.src).then((e) => e.text()).then((e) => {
        this.canvas.setSvgString(e), this.editorWrapper;
        const i = this.editorWrapper.clientHeight, s = this.editorWrapper.clientWidth;
        this.canvas.setCurrentZoom(i / this.canvas.contentH), this.canvas.updateCanvas(s, i);
      }), this.canvas.setMode("select"), lt(this.hiddenTextTag, "keyup input", (e) => {
        this.canvas.setTextContent(e.currentTarget.value);
      });
    }), this.editorWrapper.querySelector("#vector-rect").addEventListener("click", () => this.canvas.setMode("rect")), this.editorWrapper.querySelector("#vector-line").addEventListener("click", () => this.canvas.setMode("line")), this.editorWrapper.querySelector("#vector-path").addEventListener("click", () => this.canvas.setMode("path")), this.editorWrapper.querySelector("#vector-fhpath").addEventListener("click", () => this.canvas.setMode("fhpath")), this.editorWrapper.querySelector("#vector-fill").addEventListener("input", (t) => {
      this.fill(t.target.value);
    });
  }
  onKeyDownHandler(t) {
    switch (t.preventDefault(), t.target.id, t.keyCode) {
      case 46:
      case 8:
        this.canvas.deleteSelectedElements();
        break;
    }
  }
}
const dt = `
<div id="rangePack" class="range_pack"></div>
<div class="menu-bar">
<div class="upload-btn-wrapper-video">
  <button class="video-frames">
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28" height="28"><path d="M22,24h-2V0h2V24ZM4,0H2V24h2V0Zm13,4H7V20h10V4Zm-8,2h6v12h-6V6Z"/></svg>
  </button>
  <button class="video-trim">
  <svg id="Layer_1" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m19 14a4.929 4.929 0 0 0 -2.352.615l-3.348-4.015 7.467-8.96-1.536-1.28-7.231 8.678-7.232-8.678-1.536 1.28 7.468 8.96-3.348 4.015a4.941 4.941 0 0 0 -2.352-.615 5 5 0 1 0 5 5 4.947 4.947 0 0 0 -1.112-3.1l3.112-3.738 3.111 3.738a4.955 4.955 0 0 0 -1.111 3.1 5 5 0 1 0 5-5zm-14 8a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z"/></svg>
  </button>
  <button class="unity-upload">
    <svg
      height="28"
      width="28"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 184.69 184.69"
      xml:space="preserve"
      fill="#000000"
      stroke="#000000"
      stroke-width="1.47752"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <g>
              <path
                style="fill: #010002"
                d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813 C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834 C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538 c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392 c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094 c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168 c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391 v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
              />
            </g>
            <g>
              <path
                style="fill: #010002"
                d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078 c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045 L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227 c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036 C104.91,91.608,107.183,91.608,108.586,90.201z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
    <input id="import-btn-video" type="file" name="myfile" />
  </button>
</div>
</div>`, m = (a, t = !0) => {
  a = parseFloat(a);
  let e = Math.floor(a / 3600), i = Math.floor((a - e * 3600) / 60), s = a - e * 3600 - i * 60;
  e < 10 && (e = "0" + e), i < 10 && (i = "0" + i), s < 10 && (s = "0" + s);
  let n = /\..*$/, r = String(s).match(n);
  return e + ":" + i + ":" + String(s).replace(n, "") + (t ? r ? r[0] : ".000" : "");
}, F = async (a) => new Promise((t, e) => {
  const i = new FileReader();
  i.onload = () => {
    t(i.result);
  }, i.onerror = e, i.readAsDataURL(a);
}), b = (a, t, ...e) => {
  const i = document.createElement(a);
  for (let s in t)
    if (s.startsWith("on") && i.addEventListener(s.substring(2).toLowerCase(), t[s]), s.startsWith("data-")) {
      const n = s.split("-");
      i.dataset[n[1]] = t[s];
    } else
      s === "class" ? i.classList.add(t[s]) : s === "value" ? i.value = t[s] : i[s] = t[s];
  return e.forEach((s) => {
    typeof s == "string" ? i.appendChild(document.createTextNode(s)) : i.appendChild(s);
  }), i;
};
function y(a) {
  let t = a;
  return [() => t, (s) => {
    t = s;
  }];
}
const O = (a) => new Promise((t, e) => {
  const i = document.createElement("script");
  i.src = a, i.onload = t, i.onerror = () => e(new Error(`Script load error: ${a}`)), document.head.appendChild(i);
});
function pt(a) {
  return window.getComputedStyle(a).getPropertyValue("position") === "static";
}
async function gt(a) {
  return await (await fetch(a)).blob();
}
let T = 100;
function ut({
  thumbNails: a,
  rEnd: t,
  rStart: e,
  handleUpdaterStart: i,
  handleUpdaterEnd: s,
  loading: n,
  videoMeta: r,
  handleTrim: l
}) {
  if (a.length === 0 && !n)
    return null;
  if (n) {
    const g = b("h2", {}, "Processing thumbnails.....");
    return b("center", {}, g);
  }
  const o = document.getElementById("rangePack");
  o.innerHTML = "";
  const p = b("div", { class: "image_box" });
  a.forEach((g, B) => {
    const R = b("img", {
      src: g,
      alt: `sample_video_thumbnail_${B}`
    });
    p.appendChild(R);
  });
  const C = b("div", {
    class: "clip_box",
    style: `width: calc(${t - e}%); left: ${e}%;`,
    "data-start": m(
      `${e / T * r.duration}`,
      !1
    ),
    "data-end": m(
      `${t / T * r.duration}`,
      !1
    )
  });
  for (let g = 0; g < 2; g++) {
    const B = b("span", { class: "clip_box_des" });
    C.appendChild(B);
  }
  p.appendChild(C);
  const k = b("input", {
    class: "range",
    type: "range",
    min: 0,
    max: T,
    onInput: i,
    value: e
  }), L = b("input", {
    class: "range",
    type: "range",
    min: 0,
    max: T,
    onInput: s,
    value: t
  });
  p.appendChild(k), p.appendChild(L), o.appendChild(p);
}
let G = 100, I = null, N = null, f = null;
const vt = {
  load: "lazy"
};
async function ft(a = "") {
  await O(`${a}/assets/ffmpeg/package/dist/umd/ffmpeg.js`), await O(`${a}/assets/util/package/dist/umd/index.js`), I = FFmpegUtil.fetchFile, N = FFmpegWASM.FFmpeg, f = new N(), f.on("log", ({ message: t }) => {
    console.log(t);
  }), f.on("progress", ({ progress: t }) => {
    console.log(`${t * 100} %`);
  }), await f.load({
    coreURL: `${a}/assets/core/package/dist/umd/ffmpeg-core.js`
  });
}
async function mt(a, t) {
  t = { ...vt, ...t };
  const e = a.clientHeight, i = a.clientWidth > window.innerWidth ? window.innerWidth : a.clientWidth, s = document.createElement("div");
  s.style.height = `${e}px`, s.style.width = `${i}px`, s.classList.add("editor-wrapper"), pt(a) && (s.style.position = "relative"), a.parentNode.insertBefore(s, a), s.appendChild(a);
  const [r, l] = y(null), [o, p] = y({}), [C, k] = y([]), [L, g] = y(!1), [B, R] = y(null), [wt, W] = y(!1), [E, z] = y(0), [M, Z] = y(10);
  a.insertAdjacentHTML("afterend", dt), document.querySelector("#import-btn-video").addEventListener("change", X), a.addEventListener("loadedmetadata", Y);
  async function X({ target: { files: h } }) {
    const d = h[0];
    a.src = await F(d), p(d), k(await F(d));
  }
  document.querySelector(".video-trim").addEventListener("click", () => P()), document.querySelector(".video-frames").addEventListener("click", async () => {
    const h = a.querySelector("source").src, d = await gt(h), v = "input.mp4";
    await f.writeFile(v, await I(d));
    const w = await f.readFile(v);
    p(w), D(a);
  });
  async function P() {
    W(!0);
    let h = (E() / 100 * r().duration).toFixed(2), d = (M() / 100 * r().duration - h).toFixed(2);
    console.log(
      h,
      d,
      m(h),
      m(d)
    );
    try {
      await f.writeFile(
        o().name,
        await I(o())
      ), await f.exec([
        "-ss",
        m(h),
        "-i",
        o().name,
        "-t",
        m(d),
        "-c",
        "copy",
        "ping.mp4"
      ]);
      const v = await f.readFile("ping.mp4"), w = await F(
        new Blob([v.buffer], { type: "video/mp4" })
      );
      document.querySelector("video").src = w, R(w);
    } catch (v) {
      console.log(v);
    } finally {
      W(!1);
    }
  }
  async function Y(h) {
    const d = h.target;
    s.style.width = `${d.videoWidth}px`, s.style.height = `${d.videoHeight}px`, D(d);
  }
  async function D(h) {
    const d = (U) => (V) => {
      U(V.target.value);
      const q = document.querySelector(".clip_box");
      q.style = `width: calc(${M() - E()}%); left: ${E()}%;`, q.dataset.start = m(
        `${E() / G * x.duration}`,
        !1
      ), q.dataset.end = m(
        `${M() / G * x.duration}`,
        !1
      );
    }, v = {
      name: o().name,
      duration: h.duration,
      videoWidth: h.videoWidth,
      videoHeight: h.videoHeight
    };
    l(v);
    const w = await J(v), A = d(z), S = d(Z), $ = !1, x = { duration: 60 };
    ut({
      thumbNails: w,
      rEnd: M(),
      rStart: E(),
      handleUpdaterStart: A,
      handleUpdaterEnd: S,
      loading: $,
      videoMeta: x,
      handleTrim: P
    });
  }
  const J = async ({ duration: h }) => {
    g(!0);
    let d = 15, v = h < d ? h : 15, w = h === d ? 1 : h / v;
    const A = [];
    await f.writeFile(
      o().name,
      await I(o())
    );
    for (let S = 0; S < v; S++) {
      let $ = m(Math.round(S * w));
      try {
        await f.exec([
          "-ss",
          $,
          "-i",
          o().name,
          "-t",
          "00:00:1.000",
          "-vf",
          "scale=150:-1",
          `img${S}.png`
        ]);
        const x = await f.readFile(`img${S}.png`);
        let U = new Blob([x.buffer], { type: "image/png" }), V = await F(U);
        A.push(V);
      } catch (x) {
        console.log({ message: x });
      }
    }
    return g(!1), A;
  };
  await ft(t.basePath);
}
class xt {
  constructor(t, e) {
    mt(t, e);
  }
}
function Ct(a, t) {
  const e = [
    ...a.querySelectorAll("li:not(ul li ul li)")
  ].map((s) => {
    var o;
    const n = (o = s.querySelector(".icon")) == null ? void 0 : o.classList.value, r = {}, l = n == null ? void 0 : n.split("-")[1];
    return r.type = l, s.innerHTML.includes("noInitial") && (r.noInitial = !0), s.querySelectorAll("li img").length > 0 && (r.experience = "mock", r.options = [...s.querySelectorAll("li img")].map(
      (p) => `${t}${p == null ? void 0 : p.getAttribute("src")}`
    )), r;
  });
  return e.find((s) => s.type === "changebg") && (e[0].next = "changebg"), e;
}
export {
  yt as Editor,
  St as VectorEditor,
  xt as VideoEditor,
  Ct as getWorkflow
};
