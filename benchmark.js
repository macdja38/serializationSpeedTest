const Benchmark = require('benchmark');
const genArray = require('./genArray');
let length = {};

const array = genArray(1, 1, "seed");

const suit = new Benchmark.Suite;

/**
 * Converts a typed array to a buffer
 * @param {Uint8Array} array
 * @returns {ArrayBuffer}
 */
function typedArrayToBuffer(array) {
  return array.buffer.slice(array.byteOffset, array.byteLength + array.byteOffset)
}

suit
  .add('Generate', () => {
    return genArray(1, 1, "seed");
  })

  .add('To String', () => {
    const str = array.toString();
    length.toString = str;
    return str;
  })

  .add('To Buffer To String', () => {

  })

  .add('To JSON', () => {
    const str = JSON.stringify({ data: array.toString()});
    length.toJSON = str;
    return str;
  })

  .add('Text Decoder', () => {
    const str = new TextDecoder('utf-8').decode(array);
    length.textDecoder = str;
    return str;
  })

  .add('array then map then toString then join', () => {
    const str = [...array]
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    length.theLongOne = str;
    return str;
  })

  .on('complete', function () {
    console.log("**Encoding Outputs**\n");
    Object.entries(length).map(([key, entry]) => `${key} | ${entry.length} | ${entry.slice(0, 100)}`).forEach((r) => {
      return console.log(`${r}\n`);
    });
    console.log("**Encoding Timings**\n");
    for (let i = 0; i < this.length; i++) {
      console.log(String(this[i]));
      console.log(`${this[i].name} achieved a mean of mean ${this[i].stats.mean}s and a cycle speed of ${this[i].hz}ops/sec\n`);
    }
    console.log("**Results**\n");
    console.log(`Fastest is ${this.filter('fastest').map('name')}\n`);
    console.log(`Slowest is ${this.filter('slowest').map('name')}\n`);
  })

  .run();