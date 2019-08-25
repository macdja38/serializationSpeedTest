
> serializationspeedtests@1.0.0 test /home/runner/work/serializationSpeedTest/serializationSpeedTest
> node benchmark.js

**Encoding Outputs**

toString | 529612 | 19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,1

toJSON | 529623 | {"data":"19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,1

textDecoder | 262144 | 

theLongOne | 524288 | 1313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313

**Encoding Timings**

Generate x 10,466 ops/sec ±2.15% (84 runs sampled)
Generate achieved a mean of mean 0.000095545337476696s and a cycle speed of 10466.235469040079ops/sec

To String x 76.38 ops/sec ±1.65% (66 runs sampled)
To String achieved a mean of mean 0.013091982758333329s and a cycle speed of 76.38262427159694ops/sec

To Buffer To String x 783,907,795 ops/sec ±1.34% (86 runs sampled)
To Buffer To String achieved a mean of mean 1.2756602331416176e-9s and a cycle speed of 783907794.5835636ops/sec

To JSON x 70.94 ops/sec ±2.08% (72 runs sampled)
To JSON achieved a mean of mean 0.01409556392361111s and a cycle speed of 70.94430598302819ops/sec

Text Decoder x 1,771 ops/sec ±2.53% (82 runs sampled)
Text Decoder achieved a mean of mean 0.0005646591413265004s and a cycle speed of 1770.9799183464813ops/sec

array then map then toString then join x 15.10 ops/sec ±2.85% (29 runs sampled)
array then map then toString then join achieved a mean of mean 0.06621334805172414s and a cycle speed of 15.102694991632594ops/sec

**Results**

Fastest is To Buffer To String

Slowest is array then map then toString then join

