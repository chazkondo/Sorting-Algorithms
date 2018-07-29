JavaScript Sorting Algorithms

What is an algorithm?
An algorithm is a self-contained step-by-step set of operations to be performed. Algorithms perform calculation, data processing, and/or automated reasoning tasks.

"Elegant" (compact) programs, "good" (fast) programs : The notion of "simplicity and elegance" appears informally in Knuth and precisely in Chaitin:

Knuth: ". . .we want good algorithms in some loosely defined aesthetic sense. One criterion . . . is the length of time taken to perform the algorithm . . .. Other criteria are adaptability of the algorithm to computers, its simplicity and elegance, etc"

Chaitin: " . . . a program is 'elegant,' by which I mean that it's the smallest possible program for producing the output that it does"

Getting Started
Included is 5 javascript sorting algorithms for arrays.

Bubble Sort
Insertion Sort
Merge Sort
Quick Sort 
Selection Sort

TODO:
Floyd-Warshall
Traveling Salesman
k-way merge
Matching users to servers, using Gayle-Shapely Algorithm for Stable Marriage problem
This is a beautiful algorithm for fair matching. Simple, elegant and effective. In its core form, it’s also straightforward to implement. Has numerous applications. See: Stable marriage problem - Wikipedia
A toy implementation of Viterbi algorithm
Ubiquitous in cell phone technology, and many other applications, Viterbi algorithm is a Dynamic Programming based algorithm that finds the most likely sequence of states.
SSL transport, is the bane of safe existence on Internet these days. One of the most well-known algorithms in secure transport, is RSA, named by the first initials of its inventors. Implementing RSA is fun and instructive e.g. C code to implement RSA Algorithm(Encryption and Decryption)
Safe Browsing (or similar) using Bloom filters
Bloom filters found very rare usage until the world got more online and we hit scale. But these days, we see new applications very frequently.Chrome browser uses Bloom filters to make preliminary decision on safe browsing. See some novel applications here.
Implement an LALR parser
As a CS student, you may have already implemented it as part of your compiler’s class. But if not, then you should. LALR parsing makes syntactic sense of source code, whichever language you use. Many implementations of LALR exist. e.g. Where can I find a simple, easy to understand implementation of an LR(1) parser generator? Also, use YACC to understand LALR parsing better.
Treemap using Red Black Trees!
RB Trees are not algorithms, but they are famed enough, that no discussion of tantalizing DS/Algorithms is complete without discussing them. The smoothest way to see/implement RB Trees, is to look at Treemap implementation in Java.
Circle Drawing using Bresenham’s algorithm
Ever wondered, how circles are drawn on the screen, with minimal jaggedness (aliasing)? Bresenham’s elegant algorithm is at play here. See a version here: Circle Generation Algorithm . A refreshing use of a similar algorithm, is to make properly sized tabs in Chrome. Something we see almost every day. Such hidden gems!
Implement PageRank
Can’t miss this. This transformed our lives in ways we never thought possible. Get started here: Pagerank Explained Correctly with Examples
Contributing
Don't hesitate to create a pull request. Every contribution is appreciated. In development you can start the tests by calling npm test. Checkout our contribution README for more info.

Fork it!
Create your feature branch: git checkout -b my-new-feature
Commit your changes: git commit -am 'Add some feature'
Push to the branch: git push origin my-new-feature
Submit a pull request :D