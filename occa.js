function adjustRange(min, max, lo, span) {
    return span >= max - min ? [min, max] : [lo = Math.min(Math.max(lo, min), max - span), lo + span];
}

// Example usage
const min = 10;
const max = 50;
let lo = 30;
const span = 15;

const adjustedRange = adjustRange(min, max, lo, span);
console.log(adjustedRange); // Output: [30, 45]
