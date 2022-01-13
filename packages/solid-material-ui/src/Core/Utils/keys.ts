export function keys<T>(value: T): (keyof T)[] {
    return Object.keys(value) as any as (keyof T)[];
}