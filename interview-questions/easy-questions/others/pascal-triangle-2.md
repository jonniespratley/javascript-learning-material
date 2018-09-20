
        # pascal-triangle-2.js
        /**
   * @param {number} rowIndex
   * @return {number[]}
   */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            function pascalTriangle(lineNumber) {
    const currentLine = [1];
    const currentLineSize = lineNumber + 1;
    for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
      currentLine[numIndex] = currentLine[numIndex - 1] * (lineNumber - numIndex + 1) / numIndex;
    }
    return currentLine;
  }
  /**
   * @param {number} rowIndex
   * @return {number[]}
   */
  var getRow = function(rowIndex) {
      return pascalTriangle(rowIndex);
  };
  
        ```
        
        > Reference: ..
        
        