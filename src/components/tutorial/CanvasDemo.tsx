import * as React from 'react';


interface ICanvasDemoProps {
    title: string;
    width?: number;
    height?: number;
    renderCanvas: (canvas: HTMLCanvasElement) => void;
}
export default class CanvasDemo extends React.Component<ICanvasDemoProps, any> {
    render() {
        const {title, width, height, renderCanvas} = this.props;
        return (
            <div className="demo-item">
                <div>{title}</div>
                <canvas ref={renderCanvas}
                    width={width}
                    height={height}></canvas>
            </div>
        )
    }
}
