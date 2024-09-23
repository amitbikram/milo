var rt = Object.defineProperty;
var ot = (a, t, e) => t in a ? rt(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var r = (a, t, e) => (ot(a, typeof t != "symbol" ? t + "" : t, e), e);
class W {
  static init() {
    return new W();
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
const ct = `<div class="menu">
  <div class="hue-sat-title">
    <div class="hue-sat-title-icon">
      <div class="svgicon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          height="8"
          viewBox="0 0 122.88 66.91"
          style="enable-background: new 0 0 122.88 66.91"
          xml:space="preserve"
        >
          <g>
            <path
              d="M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z"
            ></path>
          </g>
        </svg>
      </div>
      <div>Edit Hue/Sat</div>
    </div>
    <div class="slider-svg">
      <svg
        width="18"
        height="18"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.14059 9.43079H6.57362C7.01183 11.2706 8.65925 12.6468 10.631 12.6468C12.6028 12.6468 14.2502 11.2706 14.6884 9.43079H24.3663C24.899 9.43079 25.3311 8.99863 25.3311 8.46598C25.3311 7.93333 24.899 7.50118 24.3663 7.50118H14.6884C14.2502 5.66138 12.6028 4.28516 10.631 4.28516C8.65925 4.28516 7.01181 5.66138 6.57362 7.50118H3.14059C2.60794 7.50118 2.17578 7.93333 2.17578 8.46598C2.17578 8.99863 2.60794 9.43079 3.14059 9.43079ZM10.631 6.21477C11.8722 6.21477 12.8822 7.2248 12.8822 8.46598C12.8822 9.70716 11.8722 10.7172 10.631 10.7172C9.38984 10.7172 8.3798 9.70716 8.3798 8.46598C8.3798 7.2248 9.38984 6.21477 10.631 6.21477Z"
          fill="#292929"
        ></path>
        <path
          d="M24.3663 17.7922H21.1205C20.6823 15.9524 19.0348 14.5762 17.0631 14.5762C15.0913 14.5762 13.4439 15.9524 13.0057 17.7922H3.14059C2.60794 17.7922 2.17578 18.2243 2.17578 18.757C2.17578 19.2896 2.60794 19.7218 3.14059 19.7218H13.0057C13.4439 21.5616 15.0913 22.9378 17.0631 22.9378C19.0348 22.9378 20.6823 21.5616 21.1205 19.7218H24.3663C24.899 19.7218 25.3311 19.2896 25.3311 18.757C25.3311 18.2243 24.899 17.7922 24.3663 17.7922ZM17.0631 21.0082C15.8219 21.0082 14.8118 19.9982 14.8118 18.757C14.8118 17.5158 15.8219 16.5058 17.0631 16.5058C18.3042 16.5058 19.3143 17.5158 19.3143 18.757C19.3143 19.9982 18.3042 21.0082 17.0631 21.0082Z"
          fill="#292929"
        ></path>
      </svg>
    </div>
  </div>
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
  <label for="saturation">Contrast</label>
  <div class="sliderContainer saturation">
    <input
      id="contrast-value"
      type="range"
      min="-1"
      max="1"
      class="options saturation-input"
      value="0"
      step="0.003921"
    />
  </div>
  <label for="saturation">Brightness</label>
  <div class="sliderContainer saturation">
    <input
      id="brightness-value"
      type="range"
      min="-1"
      max="1"
      class="options saturation-input"
      value="0.1"
      step="0.003921"
    />
  </div>
</div>`, lt = `<div class="menu">
<div id="placeholder"></div>
<div class="debug" style="display: flex">
    <img style="width:100px" id="previewImage" class="preview-image" />
    <img style="width:100px" id="previewMaskImage" class="preview-image" />
</div></div>`, dt = `<div class="menu">
  <div class="hue-sat-title">
    <div class="hue-sat-title-icon">
      <div class="svgicon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          height="8"
          viewBox="0 0 122.88 66.91"
          style="enable-background: new 0 0 122.88 66.91"
          xml:space="preserve"
        >
          <g>
            <path
              d="M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z"
            ></path>
          </g>
        </svg>
      </div>
      <div>Change Background</div>
    </div>
    <div class="slider-svg">
      <svg
        width="18"
        height="18"
        viewBox="0 0 27 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame" clip-path="url(#clip0_1530_17792)">
          <path
            id="iconPrimary"
            d="M19.5428 9.72746C19.5428 10.7932 18.6789 11.6571 17.6132 11.6571C16.5475 11.6571 15.6836 10.7932 15.6836 9.72746C15.6836 8.66176 16.5475 7.79785 17.6132 7.79785C18.6789 7.79785 19.5428 8.66176 19.5428 9.72746Z"
            fill="#292929"
          />
          <path
            id="iconPrimary_2"
            d="M20.1873 13.5615C16.9902 13.5615 14.3984 16.1533 14.3984 19.3504C14.3984 22.5475 16.9902 25.1392 20.1873 25.1392C23.3844 25.1392 25.9761 22.5475 25.9761 19.3504C25.9761 16.1533 23.3844 13.5615 20.1873 13.5615ZM23.4033 20.1544H20.9913V22.5664C20.9913 23.0098 20.6307 23.3704 20.1873 23.3704C19.7438 23.3704 19.3833 23.0098 19.3833 22.5664V20.1544H16.9713C16.5278 20.1544 16.1672 19.7938 16.1672 19.3504C16.1672 18.9069 16.5278 18.5464 16.9713 18.5464H19.3833V16.1343C19.3833 15.6909 19.7438 15.3303 20.1873 15.3303C20.6307 15.3303 20.9913 15.6909 20.9913 16.1343V18.5464H23.4033C23.8468 18.5464 24.2073 18.9069 24.2073 19.3504C24.2073 19.7938 23.8468 20.1544 23.4033 20.1544Z"
            fill="#292929"
          />
          <path
            id="iconPrimary_3"
            d="M22.4367 3.91408H5.0702C3.47476 3.91408 2.17578 5.21305 2.17578 6.80849V19.0294C2.17578 20.6248 3.47476 21.9238 5.0702 21.9238H11.6178C12.1505 21.9238 12.5826 21.4916 12.5826 20.959C12.5826 20.4263 12.1505 19.9942 11.6178 19.9942H5.0702C4.5388 19.9942 4.10539 19.5608 4.10539 19.0294V17.5256L7.92568 13.7066C8.30256 13.3297 8.9131 13.3297 9.28998 13.7066L11.7535 16.1701C12.1304 16.547 12.7409 16.547 13.1178 16.1701C13.4947 15.7932 13.4947 15.1827 13.1178 14.8058L10.6543 12.3423C9.52616 11.2142 7.68951 11.2142 6.56139 12.3423L4.10541 14.7976V6.80848C4.10541 6.27708 4.53881 5.84367 5.07021 5.84367H22.4367C22.9681 5.84367 23.4015 6.27708 23.4015 6.80848V11.7569C23.4015 12.2895 23.8337 12.7217 24.3663 12.7217C24.899 12.7217 25.3311 12.2895 25.3311 11.7569V6.80848C25.3311 5.21304 24.0321 3.91408 22.4367 3.91408Z"
            fill="#292929"
          />
        </g>
        <defs>
          <clipPath id="clip0_1530_17792">
            <rect
              width="25.7282"
              height="25.7282"
              fill="white"
              transform="translate(0.890625 0.0546875)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  <div class="bg-tiles">
    <button><img height="90px" src="./preview-1.png" /></button>
    <button><img height="90px" src="./preview-2.png" /></button>
  </div>
</div>`;
function P(a) {
  return window.getComputedStyle(a).getPropertyValue("position") === "static";
}
function ht(a, t, e) {
  const i = document.createElement("canvas");
  return i.id = e, i.height = a, i.width = t, i;
}
class m {
  constructor() {
    r(this, "forward", (t) => {
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
class pt {
  constructor(t, e) {
    this.canvas = t, this.configuration = e, this.onModeChanged = new m(), this.onLayerOrderChanged = new m(), this.onPropertiesChanged = new m();
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
    }), new gt(t);
  }
  setMode(t) {
    this.mode = t, this.onModeChanged.forward(t);
  }
}
class gt {
  constructor(t) {
    this.map = t;
  }
  revert() {
    this.map.forEach((t, e) => e.set("selectable", t));
  }
}
class w {
  static attrs(t, e) {
    Object.keys(e).forEach((i) => {
      const s = e[i];
      t.setAttribute(i, typeof s == "string" ? s : s.toString());
    });
  }
  static element(t, e) {
    const i = document.createElement(t);
    return e && w.attrs(i, e), i;
  }
  static div(t) {
    return w.element("div", t);
  }
}
const X = "http://www.w3.org/2000/svg";
class c {
  static createSvg(t, e) {
    const i = document.createElementNS(X, "svg");
    i.setAttribute("viewBox", "0 -960 960 960"), i.setAttribute("height", "18"), i.classList.add(e);
    const s = document.createElementNS(X, "path");
    return s.setAttribute("d", t), i.appendChild(s), i;
  }
}
r(c, "cursor", "m320-410 79-110h170L320-716v306ZM551-80 406-392 240-160v-720l560 440H516l144 309-109 51ZM399-520Z"), r(c, "rect", "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Z"), r(c, "eye", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), r(c, "eyeOff", "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"), r(c, "locked", "M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"), r(c, "close", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"), r(c, "text", "M420-160v-520H200v-120h560v120H540v520H420Z"), r(c, "image", "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"), r(c, "brush", "M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 23-5.5 42T220-202q5 2 10 2h10Zm230-160L360-470l358-358q11-11 27.5-11.5T774-828l54 54q12 12 12 28t-12 28L470-360Zm-190 80Z"), r(c, "erase", "M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"), r(c, "arrowUp", "M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"), r(c, "arrowDown", "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"), r(c, "menu", "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z");
function F(a, t, e) {
  const i = new m(), s = w.element("span", {
    class: `icon-button icon-button-${e}`,
    title: t
  }), n = c.createSvg(a, "icon-button-icon"), o = n.querySelector("path");
  return s.appendChild(n), s.addEventListener(
    "click",
    (h) => {
      h.preventDefault(), h.stopPropagation(), i.forward();
    },
    !1
  ), {
    view: s,
    onClicked: i,
    setIcon(h) {
      o.setAttribute("d", h);
    }
  };
}
class _ {
  constructor(t, e, i, s, n) {
    r(this, "onItemClicked", (t) => {
      t.preventDefault(), t.stopPropagation(), this.state.selectObject(this.object);
    });
    r(this, "onVisibilityClicked", () => {
      this.object.selectable && this.object.visible ? (this.object.visible = !0, this.object.selectable = !1, this.state.canvas.getActiveObject() === this.object && this.state.canvas.discardActiveObject()) : this.object.visible && !this.object.selectable ? (this.object.visible = !1, this.object.selectable = !0) : (this.object.visible = !0, this.object.selectable = !0), this.visibilityButton.setIcon(Y(this.object)), this.state.canvas.requestRenderAll(), this.state.onPropertiesChanged.forward(this.object);
    });
    r(this, "onMoveUpClicked", () => {
      this.state.canvas.bringForward(this.object), this.state.onLayerOrderChanged.forward();
    });
    r(this, "onMoveDownClicked", () => {
      this.state.canvas.sendBackwards(this.object), this.state.onLayerOrderChanged.forward();
    });
    r(this, "onDeleteClicked", () => {
      this.state.canvas.remove(this.object);
    });
    r(this, "onLabelChanged", () => {
      this.object.set("label", this.labelInput.value), this.state.onPropertiesChanged.forward(this.object);
    });
    this.isSelected = !1, this.view = t, this.state = e, this.object = i, this.labelInput = s, this.visibilityButton = n;
  }
  static create(t, e, i, s) {
    const n = document.createElement("div");
    n.className = "layers-panel-item";
    const o = F(Y(e), "Toggle visibility", "sm"), h = F(c.close, "Delete layer", "sm");
    let p, g;
    const q = w.div({
      class: "layers-panel-item-label"
    }), C = w.element("div", {
      class: "layers-panel-item-label-input"
    });
    C.innerHTML = e.get("label") ?? e.type, q.appendChild(C), n.appendChild(o.view), n.appendChild(q), p = F(c.arrowUp, "Move layer up", "sm"), n.appendChild(p.view), g = F(c.arrowDown, "Move layer down", "sm"), n.appendChild(g.view), n.appendChild(h.view);
    const f = new _(n, t, e, C, o);
    return n.addEventListener("click", f.onItemClicked, !1), C.addEventListener("input", f.onLabelChanged, !1), o.onClicked.subscribe(f.onVisibilityClicked), p == null || p.onClicked.subscribe(f.onMoveUpClicked), g == null || g.onClicked.subscribe(f.onMoveDownClicked), h.onClicked.subscribe(f.onDeleteClicked), f;
  }
  setIsSelected(t) {
    this.isSelected = t, this.labelInput.readOnly = !t, this.view.classList.toggle("selected", t);
  }
}
function Y(a) {
  if (!a.selectable) {
    if (!a.visible)
      throw new Error("Unsupported state");
    return c.locked;
  }
  return a.visible ? c.eye : c.eyeOff;
}
function vt(a, t) {
  const e = w.div({
    class: "menu"
  }), i = w.div({
    class: "hue-sat-title"
  }), s = w.div({
    class: "hue-sat-title-icon"
  });
  s.innerText = a, i.appendChild(s);
  const n = w.div({
    class: "panel-body"
  });
  return n.className = "panel-body", n.appendChild(t), e.appendChild(i), e.appendChild(n), { view: e };
}
class D {
  constructor(t, e, i) {
    r(this, "reloadList", () => {
      for (; this.list.firstChild; )
        this.list.removeChild(this.list.firstChild);
      this.state.forEachObject((t, e, i) => {
        const s = e === 0, n = _.create(this.state, t, s, i);
        this.layers.push(n), this.list.firstChild ? this.list.insertBefore(n.view, this.list.firstChild) : this.list.appendChild(n.view);
      }), this.reloadSelection();
    });
    r(this, "reloadSelection", () => {
      const t = this.state.canvas.getActiveObjects();
      for (const e of this.layers)
        e.setIsSelected(t.includes(e.object));
    });
    this.view = t, this.state = e, this.list = i, this.layers = [];
  }
  static create(t) {
    const e = document.createElement("div");
    e.className = "layers-list";
    const i = vt("Layers", e), s = new D(i.view, t, e);
    return t.canvas.on("object:added", s.reloadList), t.canvas.on("object:removed", s.reloadList), t.canvas.on("selection:cleared", s.reloadSelection), t.canvas.on("selection:created", s.reloadSelection), t.canvas.on("selection:updated", s.reloadSelection), t.onLayerOrderChanged.subscribe(s.reloadList), s.reloadList(), s;
  }
}
class ut {
  constructor(t) {
    r(this, "enableBG", () => {
      this.menuBar.querySelector(".remove-bg").classList.add("hide"), this.menuBar.querySelector(".change-bg-wrapper").classList.remove("hide");
    });
    r(this, "enableConnector", () => {
      this.menuBar.querySelector(".app-connector").classList.remove("hide");
    });
    r(this, "loadBGImages", (t) => {
      const e = this.workflow[t];
      if (e.experience === "mock") {
        let i = "";
        for (let s = 0; s < e.options.length; s++)
          i += `<div><img height="68" src="${e.options[s]}" /></div>`;
        return i;
      }
      return "";
    });
    r(this, "removebg", (t) => {
      this.menuBar.insertAdjacentHTML("beforeend", `<button class="remove-bg">
            <img src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/removebg.svg">
            <span>Remove Background</span>
        <div>`), this.menuBar.querySelector(".remove-bg").addEventListener("click", () => {
        this.removebgEvent.forward();
      });
    });
    r(this, "changebg", (t) => {
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
    r(this, "upload", (t) => {
      this.menuBar.insertAdjacentHTML("beforeend", `<button class="upload">
            <img src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/upload.svg">
            <span>Upload image</span>
        </button>`), this.menuBar.querySelector(".upload").addEventListener("click", () => {
        this.uploadEvent.forward();
      });
    });
    r(this, "connector", (t) => {
      let e = "";
      this.workflow[t].noInitial === !0 && (e = "hide");
      const s = `<button class="app-connector ${e}">
            <span>Contine in app</span>
            <img height="33" src="https://main--milo--adobecom.hlx.page/drafts/sarangi/pepc/assets/ps.svg">
        </button>`;
      this.menuBar.insertAdjacentHTML("beforeend", s);
    });
    r(this, "filters", (t) => {
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
    this.workflow = t, this.menuBar = document.createElement("div"), this.menuBar.classList.add("menu-bar"), this.removebgEvent = new m(), this.changebgEvent = new m(), this.uploadEvent = new m(), this.enableChangeBG = new m(), this.canvasLoaded = new m(), this.hueFilter = new m(), this.satFilter = new m(), this.enableChangeBG.subscribe(this.enableBG), this.canvasLoaded.subscribe(this.enableConnector);
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
function mt() {
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
const ft = {
  editorMode: "mount"
  // 'standalone' | 'mount'
};
function K(a, t) {
  const e = document.createElement("canvas");
  e.width = a, e.height = t;
  const i = e.getContext("2d");
  return i.fillStyle = "#ffffff00", i.fillRect(0, 0, a, t), [e, i];
}
function wt(a, t, e, i) {
  const s = e.getImageData(0, 0, a, t), n = i.getImageData(0, 0, a, t);
  for (let o = 0; o < s.data.length; o += 4)
    s.data[o + 3] = 255 - n.data[o + 3];
  e.putImageData(s, 0, 0);
}
class Bt {
  constructor(t, e = {}) {
    r(this, "onAnyChange", () => {
      this.onChanged.forward();
    });
    r(this, "removebg", async () => {
      await this.ondemandLoad();
      const t = this.config.workflow.find((e) => e.type === "removebg");
      if (t.experience === "mock") {
        const e = t.options[0];
        fabric.Image.fromURL(e, (i) => {
          const s = {
            width: i.width,
            height: i.height,
            selectable: !1
          }, n = Math.min(this.width / i.width, this.height / i.height);
          s.left = (this.width - i.width * n) / 2, s.top = (this.height - i.height * n) / 2, s.scaleX = n, s.scaleY = n, i.set(s), this.canvas.add(i), t.next === "changebg" && this.controlManager.enableChangeBG.forward();
        });
      }
    });
    r(this, "changebg", (t) => {
      fabric.Image.fromURL(t, (e) => {
        const i = {
          width: e.width,
          height: e.height,
          selectable: !1
        }, s = Math.min(this.width / e.width, this.height / e.height);
        i.left = (this.width - e.width * s) / 2, i.top = (this.height - e.height * s) / 2, i.scaleX = s, i.scaleY = s, e.set(i), this.bgImage && this.canvas.remove(this.bgImage), this.bgImage = e, this.canvas.sendBackwards(e);
      });
    });
    r(this, "changeHueFilter", (t) => {
      this.filters.applyHueFilter(this.canvas, t);
    });
    r(this, "changeSatFilter", (t) => {
      this.filters.applySaturationFilter(this.canvas, t);
    });
    r(this, "upload", async () => {
      await this.ondemandLoad();
      const t = await mt();
      fabric.Image.fromURL(t, (e) => {
        const i = {
          width: e.width,
          height: e.height,
          selectable: !1
        }, s = Math.min(this.width / e.width, this.height / e.height);
        i.left = (this.width - e.width * s) / 2, i.top = (this.height - e.height * s) / 2, i.scaleX = s, i.scaleY = s, e.set(i);
        const n = this.canvas.getObjects();
        for (let o = 0; o < n.length; o++)
          this.canvas.remove(n[o]);
        this.canvas.add(e);
      });
    });
    r(this, "enableMask", async () => {
      this.placeholder = document.getElementById("placeholder"), this.previewImage = document.getElementById("previewImage"), this.previewMaskImage = document.getElementById("previewMaskImage"), this.canvas.isDrawingMode = !0, this.canvas.freeDrawingBrush.color = "ff0000", this.canvas.freeDrawingBrush.width = 20, this.onChanged.subscribe(this.reloadPreview), this.reloadPreview();
    });
    r(this, "ondemandLoad", async () => {
      this.canvasLoaded || (this.fabric = await import("./fabric-T-x1IxqJ.js").then((t) => t.f), this.filters = W.init(), this.loadCanvas(), this.state = new pt(this.canvas, this.config), this.controlManager.canvasLoaded.forward());
    });
    r(this, "reloadPreview", async () => {
      const t = this.canvas.getObjects(), e = t.find((h) => h instanceof this.fabric.default.fabric.Image);
      if (!e || !e.visible) {
        this.previewImage.src = "", this.previewMaskImage.src = "";
        return;
      }
      const [i, s] = K(this.canvas.getWidth(), this.canvas.getHeight());
      t.forEach((h) => {
        h !== e && h.render(s);
      });
      const [n, o] = K(this.canvas.getWidth(), this.canvas.getHeight());
      e.render(o), wt(this.canvas.getWidth(), this.canvas.getHeight(), o, s), this.previewImage.src = n.toDataURL(), this.previewMaskImage.src = i.toDataURL();
    });
    this.element = t, this.img = null, this.canvasLoaded = !1, this.canvas = null, this.container = this.checkMountType(t), this.config = { ...ft, ...e }, this.onChanged = new m(), this.height = this.container.clientHeight, this.width = this.container.clientWidth, this.$ = (i) => this.container.querySelector(i), this.filters = null, this.controlManager = new ut(this.config.workflow), this.loadEditor();
  }
  async loadEditor() {
    this.loadControls();
  }
  checkMountType(t) {
    if (t.tagName === "IMG") {
      const e = t.clientHeight, i = t.clientWidth, s = document.createElement("div");
      return s.style.height = `${e}px`, s.style.width = `${i}px`, P(t) && (s.style.position = "relative"), t.parentNode.insertBefore(s, t), s.appendChild(t), this.img = img, s;
    } else if (t.tagName === "PICTURE") {
      const e = t.querySelector("img"), i = e.clientHeight, s = e.clientWidth, n = document.createElement("div");
      return n.style.height = `${i}px`, n.style.width = `${s}px`, n.classList.add("editor-wrapper"), P(t) && (n.style.position = "relative"), t.parentNode.insertBefore(n, t), n.appendChild(t), this.img = e, n;
    } else
      return P(t) && (t.style.position = "relative"), this.img = t.querySelector("img"), t;
  }
  loadRightMenu() {
    const t = document.createElement("div");
    t.classList.add("menu-right"), t.classList.add("sliderTray"), this.container.appendChild(t), this.$(".sliderTray").insertAdjacentHTML("beforeend", dt), this.$(".sliderTray").insertAdjacentHTML("beforeend", ct), this.$(".sliderTray").insertAdjacentHTML("beforeend", lt);
  }
  loadControls() {
    this.container.appendChild(this.controlManager.initControls()), this.controlManager.removebgEvent.subscribe(this.removebg), this.controlManager.uploadEvent.subscribe(this.upload), this.controlManager.changebgEvent.subscribe(this.changebg), this.controlManager.hueFilter.subscribe(this.changeHueFilter), this.controlManager.satFilter.subscribe(this.changeSatFilter);
  }
  loadCanvas() {
    const t = document.createElement("div");
    t.classList.add("canvas-placeholder"), this.container.appendChild(t);
    const e = ht(this.height, this.width, "canvas");
    this.$(".canvas-placeholder").appendChild(e), window.canvas = this.canvas = new fabric.Canvas("canvas", {
      isDrawingMode: !1,
      height: this.height,
      width: this.width,
      backgroundColor: "#d3d3d3"
    }), this.canvasLoaded = !0, fabric.Object.prototype.transparentCorners = !1, this.img.style.visibility = "hidden";
  }
  initLayerPanel() {
    const t = D.create(this.state);
    this.$(".sliderTray").appendChild(t.view), this.canvas.on("object:added", this.onAnyChange), this.canvas.on("object:modified", this.onAnyChange), this.canvas.on("object:moving", this.onAnyChange), this.canvas.on("object:removed", this.onAnyChange), this.canvas.on("object:resizing", this.onAnyChange), this.canvas.on("object:rotating", this.onAnyChange), this.canvas.on("object:scaling", this.onAnyChange), this.canvas.on("object:skewing", this.onAnyChange), this.canvas.on("text:changed", this.onAnyChange), this.canvas.on("text:editing:exited", this.onAnyChange), this.canvas.on("selection:cleared", this.onAnyChange), this.canvas.on("selection:created", this.onAnyChange), this.canvas.on("selection:updated", this.onAnyChange), this.state.onLayerOrderChanged.subscribe(this.onAnyChange), this.state.onPropertiesChanged.subscribe(this.onAnyChange);
  }
  bindFilterEvents() {
    this.$("#brightness-value").addEventListener("change", (t) => {
      const e = parseFloat(t.target.value);
      this.filters.applyBrightnessFilter(this.canvas, e);
    }), this.$("#hue-value").addEventListener("change", (t) => {
      this.filters.applyHueFilter(this.canvas, t.target.value);
    }), this.$("#contrast-value").addEventListener("change", (t) => {
      const e = parseFloat(t.target.value);
      this.filters.applyConstrastFilter(this.canvas, e);
    }), this.$("#saturation-value").addEventListener("change", (t) => {
      const e = parseFloat(t.target.value);
      this.filters.applySaturationFilter(this.canvas, e);
    });
  }
}
const bt = `<div class="menu-bar">
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
function U(a) {
  return window.getComputedStyle(a).getPropertyValue("position") === "static";
}
const yt = (a, t, e) => {
  t.split(" ").forEach(
    (i) => a.addEventListener(i, e, !1)
  );
}, Ct = {
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
class Ft {
  checkMountType(t) {
    if (t.tagName === "IMG") {
      this.src = t.src;
      const e = t.clientHeight, i = t.clientWidth, s = document.createElement("div");
      return s.style.height = `${e}px`, s.style.width = `${i}px`, s.classList.add("editor-wrapper"), U(t) && (s.style.position = "relative"), t.parentNode.insertBefore(s, t), s.appendChild(t), s;
    } else if (t.tagName === "PICTURE") {
      const e = t.querySelector("img");
      this.src = e.src;
      const i = e.clientHeight, s = e.clientWidth, n = document.createElement("div");
      return n.style.height = `${i}px`, n.style.width = `${s}px`, n.classList.add("editor-wrapper"), U(t) && (n.style.position = "relative"), t.parentNode.insertBefore(n, t), n.appendChild(t), n;
    } else {
      const e = U(t);
      return div.classList.add("editor-wrapper"), e && (t.style.position = "relative"), t;
    }
  }
  constructor(t, e = {}) {
    this.element = t, this.src = null, this.editorWrapper = this.checkMountType(t), this.height = this.editorWrapper.clientHeight, this.width = this.editorWrapper.clientWidth, this.config = { ...Ct, ...e, dimensions: [this.width, this.height] }, this.editorWrapper.insertAdjacentHTML("beforeend", bt), this.config.editorMode === "standalone" && this.bindEvents();
  }
  bindEvents() {
    window.addEventListener("keydown", (t) => this.onKeyDownHandler(t)), this.editorWrapper.querySelector("#import-btn").addEventListener("change", (t) => {
      const e = t.target.files[0];
      if (e && e.type === "image/svg+xml") {
        const i = new FileReader();
        i.onload = (s) => {
          const n = s.target.result;
          this.canvas.clear(), this.canvas.setSvgString(n);
          const o = this.editorWrapper, h = getComputedStyle(o, null).height.replace("px", ""), p = getComputedStyle(o, null).width.replace("px", "");
          this.canvas.setCurrentZoom(h / this.canvas.contentH), this.canvas.updateCanvas(p, h);
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
      }), this.canvas.setMode("select"), yt(this.hiddenTextTag, "keyup input", (e) => {
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
const xt = `
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
</div>`, y = (a, t = !0) => {
  a = parseFloat(a);
  let e = Math.floor(a / 3600), i = Math.floor((a - e * 3600) / 60), s = a - e * 3600 - i * 60;
  e < 10 && (e = "0" + e), i < 10 && (i = "0" + i), s < 10 && (s = "0" + s);
  let n = /\..*$/, o = String(s).match(n);
  return e + ":" + i + ":" + String(s).replace(n, "") + (t ? o ? o[0] : ".000" : "");
}, Z = async (a) => new Promise((t, e) => {
  const i = new FileReader();
  i.onload = () => {
    t(i.result);
  }, i.onerror = e, i.readAsDataURL(a);
}), L = (a, t, ...e) => {
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
function S(a) {
  let t = a;
  return [() => t, (s) => {
    t = s;
  }];
}
const J = (a) => new Promise((t, e) => {
  const i = document.createElement("script");
  i.src = a, i.onload = t, i.onerror = () => e(new Error(`Script load error: ${a}`)), document.head.appendChild(i);
});
function Lt(a) {
  return window.getComputedStyle(a).getPropertyValue("position") === "static";
}
async function St(a) {
  return await (await fetch(a)).blob();
}
let A = 100;
function Mt({
  thumbNails: a,
  rEnd: t,
  rStart: e,
  handleUpdaterStart: i,
  handleUpdaterEnd: s,
  loading: n,
  videoMeta: o,
  handleTrim: h
}) {
  if (a.length === 0 && !n)
    return null;
  if (n) {
    const b = L("h2", {}, "Processing thumbnails.....");
    return L("center", {}, b);
  }
  const p = document.getElementById("rangePack");
  p.innerHTML = "";
  const g = L("div", { class: "image_box" });
  a.forEach((b, T) => {
    const $ = L("img", {
      src: b,
      alt: `sample_video_thumbnail_${T}`
    });
    g.appendChild($);
  });
  const q = L("div", {
    class: "clip_box",
    style: `width: calc(${t - e}%); left: ${e}%;`,
    "data-start": y(
      `${e / A * o.duration}`,
      !1
    ),
    "data-end": y(
      `${t / A * o.duration}`,
      !1
    )
  });
  for (let b = 0; b < 2; b++) {
    const T = L("span", { class: "clip_box_des" });
    q.appendChild(T);
  }
  g.appendChild(q);
  const C = L("input", {
    class: "range",
    type: "range",
    min: 0,
    max: A,
    onInput: i,
    value: e
  }), f = L("input", {
    class: "range",
    type: "range",
    min: 0,
    max: A,
    onInput: s,
    value: t
  });
  g.appendChild(C), g.appendChild(f), p.appendChild(g);
}
let Q = 100, j = null, tt = null, u = null;
const Et = {
  load: "lazy"
};
async function qt(a = "") {
  await J(`${a}/assets/ffmpeg/package/dist/umd/ffmpeg.js`), await J(`${a}/assets/util/package/dist/umd/index.js`), j = FFmpegUtil.fetchFile, tt = FFmpegWASM.FFmpeg, u = new tt(), u.on("log", ({ message: t }) => {
    console.log(t);
  }), u.on("progress", ({ progress: t }) => {
    console.log(`${t * 100} %`);
  }), await u.load({
    coreURL: `${a}/assets/core/package/dist/umd/ffmpeg-core.js`
  });
}
async function kt(a, t) {
  t = { ...Et, ...t };
  const e = a.clientHeight, i = a.clientWidth, s = document.createElement("div");
  s.style.height = `${e}px`, s.style.width = `${i}px`, s.classList.add("editor-wrapper"), Lt(a) && (s.style.position = "relative"), a.parentNode.insertBefore(s, a), s.appendChild(a);
  const [o, h] = S(null), [p, g] = S({}), [q, C] = S([]), [f, b] = S(!1), [T, $] = S(null), [Tt, G] = S(!1), [k, et] = S(0), [H, it] = S(10);
  a.insertAdjacentHTML("afterend", xt), document.querySelector("#import-btn-video").addEventListener("change", st), a.addEventListener("loadedmetadata", at);
  async function st({ target: { files: l } }) {
    const d = l[0];
    a.src = await Z(d), g(d), C(await Z(d));
  }
  document.querySelector(".video-trim").addEventListener("click", () => N()), document.querySelector(".video-frames").addEventListener("click", async () => {
    const l = a.querySelector("source").src, d = await St(l), v = "input.mp4";
    await u.writeFile(v, await j(d));
    const x = await u.readFile(v);
    g(x), z(a);
  });
  async function N() {
    G(!0);
    let l = (k() / 100 * o().duration).toFixed(2), d = (H() / 100 * o().duration - l).toFixed(2);
    console.log(
      l,
      d,
      y(l),
      y(d)
    );
    try {
      await u.writeFile(
        p().name,
        await j(p())
      ), await u.exec([
        "-ss",
        y(l),
        "-i",
        p().name,
        "-t",
        y(d),
        "-c",
        "copy",
        "ping.mp4"
      ]);
      const v = await u.readFile("ping.mp4"), x = await Z(
        new Blob([v.buffer], { type: "video/mp4" })
      );
      document.querySelector("video").src = x, $(x);
    } catch (v) {
      console.log(v);
    } finally {
      G(!1);
    }
  }
  async function at(l) {
    const d = l.target;
    s.style.width = `${d.videoWidth}px`, s.style.height = `${d.videoHeight}px`, z(d);
  }
  async function z(l) {
    const d = (I) => (R) => {
      I(R.target.value);
      const O = document.querySelector(".clip_box");
      O.style = `width: calc(${H() - k()}%); left: ${k()}%;`, O.dataset.start = y(
        `${k() / Q * E.duration}`,
        !1
      ), O.dataset.end = y(
        `${H() / Q * E.duration}`,
        !1
      );
    }, v = {
      name: p().name,
      duration: l.duration,
      videoWidth: l.videoWidth,
      videoHeight: l.videoHeight
    };
    h(v);
    const x = await nt(v), B = d(et), M = d(it), V = !1, E = { duration: 60 };
    Mt({
      thumbNails: x,
      rEnd: H(),
      rStart: k(),
      handleUpdaterStart: B,
      handleUpdaterEnd: M,
      loading: V,
      videoMeta: E,
      handleTrim: N
    });
  }
  const nt = async ({ duration: l }) => {
    b(!0);
    let d = 15, v = l < d ? l : 15, x = l === d ? 1 : l / v;
    const B = [];
    await u.writeFile(
      p().name,
      await j(p())
    );
    for (let M = 0; M < v; M++) {
      let V = y(Math.round(M * x));
      try {
        await u.exec([
          "-ss",
          V,
          "-i",
          p().name,
          "-t",
          "00:00:1.000",
          "-vf",
          "scale=150:-1",
          `img${M}.png`
        ]);
        const E = await u.readFile(`img${M}.png`);
        let I = new Blob([E.buffer], { type: "image/png" }), R = await Z(I);
        B.push(R);
      } catch (E) {
        console.log({ message: E });
      }
    }
    return b(!1), B;
  };
  await qt(t.basePath);
}
class Zt {
  constructor(t, e) {
    kt(t, e);
  }
}
export {
  Bt as Editor,
  Ft as VectorEditor,
  Zt as VideoEditor
};
