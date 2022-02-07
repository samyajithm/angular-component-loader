/**
 * @author MSamyajith on 06/21/2020
 */

export const ComponentLookupRegistry: Map<string, any> = new Map();

export function registerComponent(key: string): any {
  return (cls) => {
    ComponentLookupRegistry.set(key, cls);
  };
}

export function getRegisteredComponent(className: string): any {
  return ComponentLookupRegistry.get(className);
}
