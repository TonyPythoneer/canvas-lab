import * as React from 'react';

import CanvasDemo from '../CanvasDemo'


export default class SimpleExampleDemo extends React.Component < any, any > {
    renderCanvas(canvas: HTMLCanvasElement) {
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        //red rect
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 55, 50);

        //blue rect
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 55, 50);
    }
    render() {
        const attr = {
            title: "BasicUsage",
            renderCanvas: this.renderCanvas,
            width: 150,
            height: 150,
        }
        return <CanvasDemo {...attr} />
    }
}
