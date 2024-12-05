import { rectangles, drawRectangles, sleep, swapRectangles, swapRectangles2 } from "./drawing.js";

// Bubble Sort algorithm with visualization
export async function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
        rectangles[i].color = "red";
        rectangles[i + 1].color = "red";

        if (arr[i] > arr[i + 1]) {
            // Highlight the current elements being compared
            drawRectangles();
            await sleep(100);  // Wait for the visual effect

            // Swap the elements in the array
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;

            // Swap the corresponding rectangles
            let tmpRect = rectangles[i];
            rectangles[i] = rectangles[i + 1];
            rectangles[i + 1] = tmpRect;

            // Update positions of the rectangles
            rectangles[i].x = 100 + i * (20 + 10);  // Recalculate x position
            rectangles[i + 1].x = 100 + (i + 1) * (20 + 10);

            // Reset colors
            drawRectangles();
            await sleep(100);  // Wait for visual update

            swapped = true;
        }
        rectangles[i].color = "black";  // Restore the color after comparison
    }
    n--;  // Reduce the range of comparison
    rectangles[n].color = 'green';
    drawRectangles();
  } while (swapped);
}

// QuickSort function
export async function quickSort(arr, left, right) {
    if (left < right) {
      const pivotIndex = await partition(arr, left, right); // Partition and get pivot index
      await quickSort(arr, left, pivotIndex - 1);  // Recursively sort left part
      await quickSort(arr, pivotIndex + 1, right); // Recursively sort right part
      rectangles[pivotIndex].color = 'green';
      drawRectangles();
    }
    if(left<arr.length) {rectangles[left].color = 'green';}
    drawRectangles();
}
  
// Partition function to sort and return pivot index
async function partition(arr, left, right) {
    let pivot = arr[right]; // Choose the rightmost element as pivot
    let i = left - 1; // Pointer for the smaller element

    for (let j = left; j < right; j++) {
        // Update color for comparison
        rectangles[j].color = 'red';
        rectangles[right].color = 'red';
        drawRectangles();
        await sleep(100); // Delay for animation

        if (arr[j] < pivot) {
        i++;
        // Swap the elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapRectangles(i, j);
        }

        // Reset the color after comparison
        rectangles[j].color = 'black';
        rectangles[right].color = 'black';
        drawRectangles();
    }

    // Swap the pivot element to its correct position
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    rectangles[i+1].color = 'green';
    swapRectangles(i + 1, right);
    return i + 1; // Return pivot index
}

// Merge Sort function
export async function mergeSort(arr, left, right) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2); // Find the middle index
      await mergeSort(arr, left, mid);   // Sort the left half
      await mergeSort(arr, mid + 1, right); // Sort the right half
      await merge(arr, left, mid, right);   // Merge the two sorted halves
      console.log(arr);
    }
}
  
// Merge function to combine two sorted arrays
async function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;
  
    // Create temporary arrays to hold the two halves
    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);
    let leftRect = rectangles.slice(left, mid+1);
    let rightRect = rectangles.slice(mid+1, right+1);
  
    let i = 0, j = 0, k = left;
  
    while (i < n1 && j < n2) {
      // Update color for comparison
      rectangles[k].color = 'red';
      drawRectangles();
      await sleep(100); // Delay for animation
  
      // Merge the arrays in sorted order
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        swapRectangles2(leftRect, k, i);
        i++;
      } else {
        arr[k] = rightArr[j];
        swapRectangles2(rightRect, k, j);
        j++;
      }
      k++;
  
      // Reset color after comparison
      drawRectangles();
    }
  
    // If there are remaining elements in the left array
    while (i < n1) {
      arr[k] = leftArr[i];
      swapRectangles2(leftRect, k, i);
      k++;
      i++;
    }
  
    // If there are remaining elements in the right array
    while (j < n2) {
      arr[k] = rightArr[j];
      swapRectangles2(rightRect, k, j);
      k++;
      j++;
    }
  
    // Color the merged section as green
    for (let i = left; i <= right; i++) {
      rectangles[i].color = 'green';
    }
    drawRectangles();
}