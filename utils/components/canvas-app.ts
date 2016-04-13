export class CanvasApp {
    private _containerDiv: HTMLDivElement;
    private _titleDiv: HTMLDivElement;
    private _canvasDiv: HTMLDivElement;
    private _canvas: HTMLCanvasElement = document.createElement('canvas');
    private _generateDiv(className: string): HTMLDivElement {
        let div: HTMLDivElement = document.createElement('div');
        div.className = className;
        return div;
    }
    private _generateComponent(): void {
        this._containerDiv = this._generateDiv('canvas-container');
        this._titleDiv = this._generateDiv('canvas-title');
        this._canvasDiv = this._generateDiv('canvas');

        ///

        this._containerDiv.appendChild(this._titleDiv);
        this._containerDiv.appendChild(this._canvasDiv);
        this._canvasDiv.appendChild(this._canvas);
        document.body.appendChild(this._containerDiv);
    }
    constructor(w: number = 300, h: number = 150) {
        // Initial html
        this._generateComponent();
        this._canvas.width = w;
        this._canvas.height = h;
    }
    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }
    set title(title: string) {
        this._titleDiv.innerText = title;
    }
}
