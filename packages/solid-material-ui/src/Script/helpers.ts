export function generateId() {
    return Math.random().toString(36).substr(2);
}

export function ownerDocument(node?: Element) {
    return (node && node.ownerDocument) || document
}