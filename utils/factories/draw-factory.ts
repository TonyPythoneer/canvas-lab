export class DrawFactory {
    protected _ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this._ctx = canvas.getContext("2d");
    }
    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }
    beginPath(): DrawFactory {
        this._ctx.beginPath();
        return this;
    }
    moveTo(x: number, y: number): DrawFactory {
        this._ctx.moveTo(x, y);
        return this;
    }
    lineTo(x: number, y: number): DrawFactory {
        this._ctx.lineTo(x, y);
        return this;
    }
    fill(): DrawFactory {
        this._ctx.fill();
        return this;
    }
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): DrawFactory {
        this._ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        return this;
    }
    stroke(): DrawFactory {
        this._ctx.stroke();
        return this;
    }
    closePath(): DrawFactory {
        this._ctx.closePath();
        return this;
    }
    fillStyle(style: string | CanvasGradient | CanvasPattern): DrawFactory {
        this._ctx.fillStyle = style;
        return this
    }
    fillRect(x: number, y: number, w: number, h: number): DrawFactory {
        this._ctx.fillRect(x, y, w, h)
        return this
    }
    strokeRect(x: number, y: number, w: number, h: number): DrawFactory {
        this._ctx.strokeRect(x, y, w, h)
        return this
    }
    clearRect(x: number, y: number, w: number, h: number): DrawFactory {
        this._ctx.clearRect(x, y, w, h)
        return this
    }
    strokeStyle(style: string | CanvasGradient | CanvasPattern): DrawFactory {
        this._ctx.strokeStyle = style;
        return this
    }
    lineWidth(w: number): DrawFactory {
        this._ctx.lineWidth = w
        return this;
    }
}