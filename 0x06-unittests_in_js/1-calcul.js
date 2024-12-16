function calculateNumber(type, a, b) {
  // Round the numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Check the type of operation
  if (type === 'SUM') {
    // Return the sum of rounded numbers
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    // Return the subtraction of rounded numbers
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    // Check if the rounded value of b is zero
    if (roundedB === 0) {
      return 'Error'; // Division by zero error
    } else {
      // Perform division and return the result
      return roundedA / roundedB;
    }
  }
  return 'Error'; // Invalid operation type
}

module.exports = calculateNumber;
