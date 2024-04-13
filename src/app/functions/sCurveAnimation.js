export default function SCurveAnimation(ctx, color, startPosX, startPosY, endPosX, endPosY) {
  const increment = 0.02
  const delay = 20
  let modifier = 0

  const sCurves = [];

  for (let i = 0; i < 4; i++) {
    sCurves.push({
      startPosX: startPosX + modifier,
      startPosY,
      midPosX: ((endPosX - startPosX) / 2) + startPosX,
      midPosY:((endPosY - startPosY) / 2) + startPosY,
      endPosX,
      endPosY: endPosY - modifier,
      progress: 0,
      modifier
    })
    modifier += 20
  };

  const drawSCurve = (sCurve) => {

    const cp1x = sCurve.startPosX;
    const cp1y = sCurve.endPosY;

    let t = sCurve.progress;
    let x = ((1 - t) * (1 - t) * sCurve.startPosX + 2 * (1 - t) * t * cp1x + t * t * sCurve.endPosX);
    let y = ((1 - t) * (1 - t) * sCurve.startPosY + 2 * (1 - t) * t * cp1y + t * t * sCurve.endPosY);

    ctx.strokeStyle = color
    ctx.beginPath();
    if (sCurve.progress > 0) {
      const previousT = t - increment;
      const previousX = (1 - previousT) * (1 - previousT) * sCurve.startPosX + 2 * (1 - previousT) * previousT * cp1x + previousT * previousT * sCurve.endPosX;
      const previousY = (1 - previousT) * (1 - previousT) * sCurve.startPosY + 2 * (1 - previousT) * previousT * cp1y + previousT * previousT * sCurve.endPosY;
      ctx.moveTo(previousX, previousY)
    } else {
      ctx.moveTo(sCurve.startPosX, sCurve.startPosY)
    }
    ctx.lineTo(x, y)
    ctx.stroke();
  };

  const animate = () => {
    sCurves.forEach((sCurve) => {
      if (sCurve.progress <= 1) {
        drawSCurve(sCurve);
        sCurve.progress += increment;
      }
    });
    if (sCurves.some(sCurve => sCurve.progress <= 1)) {
      setTimeout(animate, delay);
    }
  };

  animate();
};
