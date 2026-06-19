// @ts-check

import i32 from '@webreflection/utils/id';

/**
 * @param {(id: number) => void} [finalizationCallback]
 */
export default finalizationCallback => {
  const fr = new FinalizationRegistry(id => {
    ids.delete(id);
    finalizationCallback?.(id);
  });

  const wm = new WeakMap;
  const ids = new Set;
  const next = i32();

  /**
   * Given a reference, return its unique id and whether it was unknown.
   * @param {WeakKey} value
   * @returns {[id: number, unknown: boolean]}
   */
  return value => {
    let id = wm.get(value), unknown = id === void 0;
    if (unknown) {
      // skip retained IDs after int 32 bit roundtrip;
      // it will be stuck forever if 2 ** 31 references
      // have been retained and never collected but,
      // in such case, you'll have bigger problems than this,
      // so this is actually optimistic and better than a
      // forever i++ that will stop working at Number.MAX_SAFE_INTEGER;
      // in the best/common case scenario, this is a unique increment.
      /* c8 ignore next */
      while (ids.has((id = next())));
      ids.add(id);
      wm.set(value, id);
      fr.register(value, id);
    }
    return [id, unknown];
  };
};
