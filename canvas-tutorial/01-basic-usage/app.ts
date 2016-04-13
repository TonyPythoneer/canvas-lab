import { CanvasApp } from './../../utils/components/canvas-app';
import { Rect } from './../../utils/components/rect';
import { DrawFactory } from './../../utils/factories/draw-factory.ts';


/* DrawFactory */
class RectDrawFactory extends DrawFactory {
    drawRect(Rect: Rect) {
        let parsedStyle = Rect.style;
        let {x, y, w, h} = Rect.rect;

        this._ctx.fillStyle = parsedStyle;
        this._ctx.fillRect(x, y, w, h);
    }
}


/* Global variables*/
const canvasApp = new CanvasApp(150, 150);
const rectDrawFactory = new RectDrawFactory(canvasApp.canvas)


/* Main */
function main() {
    let rects = {
        redRect: new Rect(
            { x: 10, y: 10, w: 55, h: 50 },
            { r: 200, g: 0, b: 0 }
        ),
        blueRect: new Rect(
            { x: 30, y: 30, w: 55, h: 50 },
            { r: 0, g: 0, b: 200, a: 0.5 }
        )
    };
    rectDrawFactory.drawRect(rects.redRect);
    rectDrawFactory.drawRect(rects.blueRect);
}
main()
