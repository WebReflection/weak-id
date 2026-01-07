// @ts-check

/**
 * @param {number} [start]
 * @returns {() => number}
 */
export default start => {
  const i32 = new Int32Array(1);
  if (start) i32[0] = start;
  return () => i32[0]++;
};
