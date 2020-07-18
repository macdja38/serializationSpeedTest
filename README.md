
> serializationspeedtests@1.0.0 test /home/runner/work/serializationSpeedTest/serializationSpeedTest
> node benchmark.js

**Encoding Outputs**

toString | 529612 | 19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,1

toJSON | 529623 | {"data":"19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,1

textDecoder | 262144 | 

theLongOne | 524288 | 1313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313

**Encoding Timings**

Generate x 8,730 ops/sec ±4.28% (76 runs sampled)
Generate achieved a mean of mean 0.00011454426699640005s and a cycle speed of 8730.249240945672ops/sec

To String x 77.17 ops/sec ±2.42% (66 runs sampled)
To String achieved a mean of mean 0.012958859057575756s and a cycle speed of 77.16728730184ops/sec

To Buffer To String x 706,083,202 ops/sec ±2.11% (87 runs sampled)
To Buffer To String achieved a mean of mean 1.416263688027657e-9s and a cycle speed of 706083202.198482ops/sec

To JSON x 69.18 ops/sec ±2.92% (71 runs sampled)
To JSON achieved a mean of mean 0.014454353940140843s and a cycle speed of 69.18330657608458ops/sec

Text Decoder x 1,786 ops/sec ±2.44% (83 runs sampled)
Text Decoder achieved a mean of mean 0.0005599819368453495s and a cycle speed of 1785.7718869174355ops/sec

array then map then toString then join x 16.17 ops/sec ±2.17% (31 runs sampled)
array then map then toString then join achieved a mean of mean 0.06182552374193548s and a cycle speed of 16.174549594987297ops/sec

**Results**

Fastest is To Buffer To String

Slowest is array then map then toString then join

