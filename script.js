const shapes = {
  square: { red: 4, green: 9, black: 10 },
  circle: { green: 40, black: 23, yellow: 7 },
  star: { yellow: 10, red: 8, green: 7, black: 9, orange: 10 },
  triangle: { red: 8, yellow: 9, green: 19, black: 10 }
};




const shapeArray = [];

// Iterate through each shape and its colors
for (const shape in shapes) {
  for (const color in shapes[shape]) {
    const count = shapes[shape][color];
    
    shapeArray.push({ shape, color, count });
  }
}


console.log(shapeArray);


function filterShapesByColor(shapeArray, targetColor) {
  return shapeArray.filter(shape => shape.color === targetColor);
}


const redShapes = filterShapesByColor(shapeArray, 'red');
console.log(redShapes);




function changeGreenToBlack(shapeArray) {
  return shapeArray.map(shape => {
    if (shape.shape === 'circle' && shape.color === 'green') {
      return { ...shape, color: 'black' };
    }
    return shape;
  });
}

const modifiedShapes = changeGreenToBlack(shapeArray);
console.log(modifiedShapes);




function orderShapesByColor(shapesArray) {
  const colorOrder = ['red', 'yellow', 'green', 'black', 'orange'];

  // Sort the array by the predefined color order
  shapesArray.sort((a, b) => {
    const aIndex = colorOrder.indexOf(a.color);
    const bIndex = colorOrder.indexOf(b.color);
    return aIndex - bIndex;
  });

  return shapesArray;
}


const orderedShapes = orderShapesByColor(modifiedShapes);
console.log(orderedShapes);