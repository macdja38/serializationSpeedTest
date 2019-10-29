
> serializationspeedtests@1.0.0 test /home/runner/work/serializationSpeedTest/serializationSpeedTest
> node benchmark.js

**Encoding Outputs**

toString | 529612 | 19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,1

toJSON | 529623 | {"data":"19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,1

textDecoder | 262144 | 

theLongOne | 524288 | 1313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313

**Encoding Timings**

Generate x 7,901 ops/sec ±3.34% (81 runs sampled)
Generate achieved a mean of mean 0.00012656034187542284s and a cycle speed of 7901.369300853582ops/sec

To String x 72.15 ops/sec ±1.03% (72 runs sampled)
To String achieved a mean of mean 0.013860179298611112s and a cycle speed of 72.1491387993954ops/sec

To Buffer To String x 650,855,479 ops/sec ±0.56% (89 runs sampled)
To Buffer To String achieved a mean of mean 1.536439397358258e-9s and a cycle speed of 650855479.0507144ops/sec

To JSON x 64.00 ops/sec ±1.21% (65 runs sampled)
To JSON achieved a mean of mean 0.015624472930769228s and a cycle speed of 64.00215894839582ops/sec

Text Decoder x 1,745 ops/sec ±1.48% (89 runs sampled)
Text Decoder achieved a mean of mean 0.0005730067690777154s and a cycle speed of 1745.1800815713796ops/sec

array then map then toString then join x 13.92 ops/sec ±3.47% (38 runs sampled)
array then map then toString then join achieved a mean of mean 0.07186098928947368s and a cycle speed of 13.915756099206412ops/sec

**Results**

Fastest is To Buffer To String

Slowest is array then map then toString then join

