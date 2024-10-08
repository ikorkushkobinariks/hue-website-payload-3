/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
  return !!(item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export default function deepMerge<T, R>(target: T, source: R): T {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source as any).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in (target as any))) {
          Object.assign(output as any, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output as any, { [key]: source[key] });
      }
    });
  }

  return output;
}
