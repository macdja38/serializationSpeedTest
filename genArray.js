const SimplexNoise = require('simplex-noise');

const CONFIG = {
  CHUNK_SIZE: 32,
  MAP_HEIGHT: 256,
  GROUND_HEIGHT: 3,
};

function to1D(x, y, z) {
  return (z * CONFIG.MAP_HEIGHT * CONFIG.CHUNK_SIZE) + (y * CONFIG.CHUNK_SIZE) + x;
}

function getBlockSerialized(typeID, health) {
  // eslint-disable-next-line no-bitwise
  return (typeID << 3) + health;
}

/**
 * Takes a chunk coordinate and generates a chunk, (chunk coordinates are not absolute coordinates)
 * @param {number} x
 * @param {number} z
 * @param {string} [seed]
 */
module.exports = function genChunk(x, z, seed = 'seed') {
  const simplex = new SimplexNoise(seed);

  const dataArray = new Uint8Array(CONFIG.CHUNK_SIZE * CONFIG.CHUNK_SIZE * CONFIG.MAP_HEIGHT);

  for (let relativeX = 0; relativeX < CONFIG.CHUNK_SIZE; relativeX += 1) {
    const absoluteX = (x * CONFIG.CHUNK_SIZE) + relativeX;
    for (let relativeZ = 0; relativeZ < CONFIG.CHUNK_SIZE; relativeZ += 1) {
      const absoluteZ = (z * CONFIG.CHUNK_SIZE) + relativeZ;
      const height = Math.max(
        0,
        CONFIG.GROUND_HEIGHT + (5 * simplex.noise2D(0.02 * absoluteX, 0.02 * absoluteZ)),
      );

      for (let absoluteY = 0; absoluteY < height; absoluteY += 1) {
        dataArray[to1D(relativeX, absoluteY, relativeZ)] = getBlockSerialized(2, 3);
      }
    }
  }

  return dataArray;
};
