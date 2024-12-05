const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export let rectangles = [];
const rectWidth = 20;  // Width of the rectangle
const spacing = 10;    // Spacing between rectangles
const startX = 100;    // Starting X position

// Initialize rectangles for the sorting visualization
export function initializeRectangles(toSort) {
  rectangles = [];  // Clear any previous rectangles

  for (let i = 0; i < toSort.length; i++) {
    const height = toSort[i] * 40;  // Scale the height for better visibility
    const x = startX + i * (rectWidth + spacing);
    const y = canvas.height - height;  // Start from the bottom

    rectangles.push({
      x: x,
      y: y,
      width: rectWidth,
      height: height,
      color: "black",  // Initial color of the rectangle
    });
  }
  drawRectangles();
}

// Function to draw all rectangles on the canvas
export function drawRectangles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas before drawing

  rectangles.forEach((rect) => {
    ctx.beginPath();
    ctx.fillStyle = rect.color;  // Use the color from the rectangle object
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    ctx.stroke();
  });
}

// Utility function to introduce a delay
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Helper function to swap rectangles visually
export async function swapRectangles(i, j) {
    let tmp = rectangles[i];
    rectangles[i] = rectangles[j];
    rectangles[j] = tmp;
    
    // Update x positions for correct display
    rectangles[i].x = startX + i * (rectWidth + spacing);
    rectangles[j].x = startX + j * (rectWidth + spacing);
    
    drawRectangles();
  }

  // Helper function to swap rectangles visually
export async function swapRectangles2(r2, i, j) {
    rectangles[i] = r2[j];
    
    // Update x positions for correct display
    rectangles[i].x = startX + i * (rectWidth + spacing);
    
    drawRectangles();
  }