/*
 * Calculates the intermediate viewport between two viewports based on move steps.
 *
 * @param {string} from - The starting viewport represented as a space-separated string of four numbers.
 * @param {string} to - The destination viewport represented as a space-separated string of four numbers.
 * @param {number} steps - The number of steps for the viewport move.
 * @param {number} maxSteps - The maximum number of steps for the viewport move.
 * @returns {string} - The calculated viewport represented as a space-separated string of four numbers.
 */
function calculateView(from, to, steps, maxSteps) {
  // Parse viewport values from strings
  const fromViewport = from.split(" ").map(parseFloat);
  const toViewport = to.split(" ").map(parseFloat);
  // Calculate the intermediate viewport based on the move steps
  const intermediateViewport = fromViewport.map((value, index) => {
    const delta = (toViewport[index] - value) * (steps / maxSteps);
    const result = value + delta;
    return Math.max(result, 0); // Ensure non-negative values
  });
  // Return the intermediate viewport string
  return intermediateViewport.join(" ");
}

export default calculateView;
