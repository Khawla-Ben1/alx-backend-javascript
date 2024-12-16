function calculateNumber(type, a, b) {
  // Round the input numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Check the type of operation
  if (type === 'SUM') {
    // Return the sum of the rounded numbers
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    // Return the difference of the rounded numbers
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    // Check if the second number is zero
    if (roundedB === 0) {
      // Return 'Error' if attempting to divide by zero
      return 'Error';
    }
    // Return the quotient of the rounded numbers
    return roundedA / roundedB;
  }
}

module.exports = calculateNumber;
