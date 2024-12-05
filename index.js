import { initializeRectangles } from "./drawing.js";
import { bubbleSort, mergeSort, quickSort } from "./algos.js";
import './chatrs.js'

const toSort = [10, 9, 2, 5, 3, 4, 6, 7, 8, 1];  // The array to be sorted

document.getElementById("app").innerHTML = `
<h1>Sorting Algorithms Visualization</h1>
`;

document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

// Add event listeners for each sorting algorithm option
document.getElementById('bubbleSortOption').addEventListener('click', function() {
    startBubbleSort(); // Call the bubbleSort function when Bubble Sort is selected
    closeDropdown();
  });
  
document.getElementById('mergeSortOption').addEventListener('click', function() {
    startMergeSort(); // Call the mergeSort function when Merge Sort is selected
    closeDropdown();
});

document.getElementById('quickSortOption').addEventListener('click', function() {
    startQuickSort(); // Call the quickSort function when Quick Sort is selected
    closeDropdown();
});

// Function to close the dropdown
function closeDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = 'none'; // Close the dropdown
}

// Close the dropdown if the user clicks outside the dropdown
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropbtn');
  
    // Check if the click is outside the dropdown or the button
    if (!dropdown.contains(event.target) && event.target !== dropdownButton) {
      dropdown.style.display = 'none'; // Close the dropdown
    }
  });

// Initialize the rectangles for visualization
initializeRectangles(toSort);

function startBubbleSort() {
    console.log("Bubble Sort selected");
    const toSort = [10, 9, 2, 5, 3, 4, 6, 7, 8, 1];  // The array to be sorted
    initializeRectangles(toSort);
    bubbleSort(toSort);
}

function startMergeSort() {
    console.log("Merge Sort selected");
    const toSort = [10, 9, 2, 5, 3, 4, 6, 7, 8, 1];  // The array to be sorted
    initializeRectangles(toSort);
    mergeSort(toSort, 0, toSort.length-1);
}

function startQuickSort() {
    console.log("Quick Sort selected");
    const toSort = [10, 9, 2, 5, 3, 4, 6, 7, 8, 1];  // The array to be sorted
    initializeRectangles(toSort);
    quickSort(toSort, 0, toSort.length-1);
}
