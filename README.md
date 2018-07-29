JavaScript Sorting Algorithms

What is an algorithm?
An algorithm is a self-contained step-by-step set of operations to be performed. Algorithms perform calculation, data processing, and/or automated reasoning tasks.

"Elegant" (compact) programs, "good" (fast) programs : The notion of "simplicity and elegance" appears informally in Knuth and precisely in Chaitin:

Knuth: ". . .we want good algorithms in some loosely defined aesthetic sense. One criterion . . . is the length of time taken to perform the algorithm . . .. Other criteria are adaptability of the algorithm to computers, its simplicity and elegance, etc"

Chaitin: " . . . a program is 'elegant,' by which I mean that it's the smallest possible program for producing the output that it does"

Getting Started
Included is 5 javascript sorting algorithms for arrays.

Clone file and run npm install. 
To check if tests pass, run npm test.

1. Quick Sort
2. Bubble Sort
3. Merge Sort
4. Insertion Sort
5. Selection Sort

How each algorithm works
Each sorting algorithm sorts an array differently, and in turn, varies in performance.

1. Quick Sort - Sorts by first taking out a number within the array, and puts the rest of the array in two groups: left group (or the group of numbers less than the first number) and right group (all of the numbers greater than the first number). It will continually break down all the numbers and return the sorted array in terms of left, middle (or the reference number), and right.

2. Bubble Sort - This method sorts an array by comparing the first number to the second number. If the first number is less than the second number, nothing happens, and the alogorithm continues to the next closest pair: the second and third number. At any point, if the first number is greater than the first, Bubble Sort switches the numbers, so it is in the right order. This continues until the array is in the correct order.

3. Merge Sort - This algorithm works by breaking down the first array into two separate arrays divided by its middle point (if odd, then the middle is rounded up or down). This algorithm continues to divide the array until it is groups of indivdual arrays with individual numbers. At the lowest point, another function: merge will compare the numbers and group them correctly. This happens until the array is sorted.

4. Insertion Sort - Similar to Bubble Sort, this method will look at each number in the array compared to the last. When a number is not correctly placed within the array, Insertion Sort will take that number, and reference the number before it. It is not until the number finds its correct spot within the array, that it is "inserted."

5. Selection Sort - Selection Sort takes a similar approach to Insertion Sort as it takes the next number in the array and compares it to the rest of the numbers in the array. When the min value is identified, this algorithm takes the lowest number and puts it next to the smallest numbers already identified. 

Implementation

1. Quick Sort. 

Within a function create a if-statement that will "break" the recursion that will be found in the return statement. If the length of the array is 1 or less, return the array. 

Next set a variable for your left array, right array, pivot (I like to use .pop) and result array. 

Use a nested for-loop to push anything less than pivot to the left and anything greater to the right.

Finally return your result .concat of the recursed function on left, the pivot, and a recursed function on the right. I.e. newArray.concat(quickSort(left), pivot, quickSort(right)).

2. Bubble Sort. 

Set up your function and set a variable for the length of the array minus 1. Also declare a variable for a temporary number container (this will hold the number while we do swapping).

Next created a nested for-loop. Within the nested for loop, set "j" or whatever variable you used to "j"< the variable you set to the length of the array minus 1, minus "i," or the variable you used in the first for-loop.

Fork it!
Create your feature branch: git checkout -b my-new-feature
Commit your changes: git commit -am 'Add some feature'
Push to the branch: git push origin my-new-feature
Submit a pull request :D