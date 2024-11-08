type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

export const calculateShapeArea = (shapeObj: Circle | Rectangle) => {
  let area: number = 0;
  if (shapeObj.shape === "circle")
    area = Math.PI * shapeObj.radius * shapeObj.radius;
  if (shapeObj.shape === "rectangle") area = shapeObj.width * shapeObj.height;
  return area;
};

// console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
// console.log(calculateShapeArea({ shape: "rectangle", width: 6, height: 4 }));
