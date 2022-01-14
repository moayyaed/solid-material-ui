export interface ITouchPoint {
    get isTouch(): boolean;

    get clientX(): number;
    
    get clientY(): number;
}