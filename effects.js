class HexGrid {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.hexes = [];
    this.W = 0;
    this.H = 0;
    this.mouseX = -999;
    this.mouseY = -999;
    this.time = 0;
    this.raf = null;

    this.SIZE   = 32;   // hex radius
    this.GAP    = 4;    // gap between hexes
    this.COLS   = ['#7B2BFF', '#A855F7', '#C084FC', '#E879F9'];

    this._init();
  }

  _init() {
    this._resize();
    this._bindEvents();
    this._animate();
  }

  _resize() {
    this.canvas.width  = this.W = window.innerWidth;
    this.canvas.height = this.H = window.innerHeight;
    this._buildGrid();
  }

  _buildGrid() {
    this.hexes = [];
    const R  = this.SIZE + this.GAP;
    const W  = R * 2;
    const H  = Math.sqrt(3) * R;
    const cols = Math.ceil(this.W / W) + 2;
    const rows = Math.ceil(this.H / H) + 2;

    for (let r = -1; r < rows; r++) {
      for (let c = -1; c < cols; c++) {
        const offset = (c % 2) * H / 2;
        this.hexes.push({
          cx: c * W * 0.75,
          cy: r * H + offset,
          phase: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.004,
          baseOpacity: 0.01 + Math.random() * 0.04,
        });
      }
    }
  }

  _drawHex(cx, cy, r, opacity, strokeColor) {
    this.ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      i === 0 ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();
    this.ctx.strokeStyle = strokeColor;
    this.ctx.globalAlpha = opacity;
    this.ctx.lineWidth = 0.8;
    this.ctx.stroke();
    this.ctx.globalAlpha = 1;
  }

  _animate() {
    this.time += 0.008;
    this.ctx.clearRect(0, 0, this.W, this.H);

    this.hexes.forEach(h => {
      h.phase += h.speed;
      const pulse = Math.sin(h.phase) * 0.5 + 0.5;

      const mdx = h.cx - this.mouseX;
      const mdy = h.cy - this.mouseY;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      const mouseBoost = Math.max(0, 1 - mdist / 250);

      const opacity = h.baseOpacity + pulse * 0.05 + mouseBoost * 0.25;
      const colorIdx = Math.floor((pulse + mouseBoost) * (this.COLS.length - 1));
      const color = this.COLS[Math.min(colorIdx, this.COLS.length - 1)];

      this._drawHex(h.cx, h.cy, this.SIZE, opacity, color);

      if (mouseBoost > 0.3) {
        this.ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const x = h.cx + this.SIZE * Math.cos(angle);
          const y = h.cy + this.SIZE * Math.sin(angle);
          i === 0 ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
        this.ctx.fillStyle = `rgba(123,43,255,${mouseBoost * 0.08})`;
        this.ctx.fill();
      }
    });

    this.raf = requestAnimationFrame(() => this._animate());
  }

  _bindEvents() {
    window.addEventListener('resize', () => this._resize());
    window.addEventListener('mousemove', e => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    }, { passive: true });
    window.addEventListener('touchmove', e => {
      if (e.touches[0]) {
        this.mouseX = e.touches[0].clientX;
        this.mouseY = e.touches[0].clientY;
      }
    }, { passive: true });
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}

const hexGrid = new HexGrid('hex-canvas');
export default hexGrid;
