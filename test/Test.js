const expect = require("chai").expect;
const quickSortModule = require("../QuickSort")
const mergeSortModule = require("../MergeSort")
const bubbleSortModule = require("../BubbleSort")
const insertionSortModule = require("../InsertionSort")
const selectionSortModule = require("../SelectionSort")

describe("Quick Sort", function() {
    it ("should be a function", function() {
        expect(typeof quickSortModule.quickSort).to.equal("function");
    });

    it ("should sort a given array", function() {
        let sorted = quickSortModule.quickSort([3,2,1]);
        expect(sorted).to.eql([1,2,3]);
    })

    it ("should sort out duplicates in an array", function() {
        sorted = quickSortModule.quickSort([2,2,5,3,1]);
        expect(sorted).to.eql([1,2,2,3,5]);
    })

    it ("should sort out negative integers in an array", function() {
        sorted = quickSortModule.quickSort([-3,5,1,-2]);
        expect(sorted).to.eql([-3,-2,1,5]);
    })
});

describe("Merge Sort", function() {
      it ("should be a function", function() {
          expect(typeof mergeSortModule.mergeSort).to.equal("function");
      });
  
      it ("should sort a given array", function() {
          sorted = mergeSortModule.mergeSort([3,2,1]);
          expect(sorted).to.eql([1,2,3]);
      })
  
      it ("should sort out duplicates in an array", function() {
          sorted = mergeSortModule.mergeSort([2,2,5,3,1]);
          expect(sorted).to.eql([1,2,2,3,5]);
      })
  
      it ("should sort out negative integers in an array", function() {
          sorted = mergeSortModule.mergeSort([-3,5,1,-2]);
          expect(sorted).to.eql([-3,-2,1,5]);
      })
  });

  describe("Bubble Sort", function() {
        it ("should be a function", function() {
            expect(typeof bubbleSortModule.bubbleSort).to.equal("function");
        });
    
        it ("should sort a given array", function() {
            sorted = bubbleSortModule.bubbleSort([3,2,1]);
            expect(sorted).to.eql([1,2,3]);
        })
    
        it ("should sort out duplicates in an array", function() {
            sorted = bubbleSortModule.bubbleSort([2,2,5,3,1]);
            expect(sorted).to.eql([1,2,2,3,5]);
        })
    
        it ("should sort out negative integers in an array", function() {
            sorted = bubbleSortModule.bubbleSort([-3,5,1,-2]);
            expect(sorted).to.eql([-3,-2,1,5]);
        })
    });

    describe("Insertion Sort", function() {
          it ("should be a function", function() {
              expect(typeof insertionSortModule.insertionSort).to.equal("function");
          });
      
          it ("should sort a given array", function() {
              sorted = insertionSortModule.insertionSort([3,2,1]);
              expect(sorted).to.eql([1,2,3]);
          })
      
          it ("should sort out duplicates in an array", function() {
              sorted = insertionSortModule.insertionSort([2,2,5,3,1]);
              expect(sorted).to.eql([1,2,2,3,5]);
          })
      
          it ("should sort out negative integers in an array", function() {
              sorted = insertionSortModule.insertionSort([-3,5,1,-2]);
              expect(sorted).to.eql([-3,-2,1,5]);
          })
      });

      describe("Selection Sort", function() {
            it ("should be a function", function() {
                expect(typeof selectionSortModule.selectionSort).to.equal("function");
            });
        
            it ("should sort a given array", function() {
                sorted = selectionSortModule.selectionSort([3,2,1]);
                expect(sorted).to.eql([1,2,3]);
            })
        
            it ("should sort out duplicates in an array", function() {
                sorted = selectionSortModule.selectionSort([2,2,5,3,1]);
                expect(sorted).to.eql([1,2,2,3,5]);
            })
        
            it ("should sort out negative integers in an array", function() {
                sorted = selectionSortModule.selectionSort([-3,5,1,-2]);
                expect(sorted).to.eql([-3,-2,1,5]);
            })
        });