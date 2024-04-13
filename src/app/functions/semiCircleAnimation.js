export default function SemiCircleAnimation(ctx, color, centerX, centerY, radius, startAngle, endAngle) {
  const increment = 0.02
  const delay = 10
  let rad = radius

  const semiCircles = [];

  for (let i = 0; i < 4; i++) {
    rad += 20;
    semiCircles.push({centerX, centerY, rad, startAngle, currentAngle: startAngle, endAngle })
  };

  const drawSemiCircle = (semiCircle) => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(semiCircle.centerX, semiCircle.centerY, semiCircle.rad, semiCircle.startAngle, semiCircle.currentAngle);
    ctx.stroke();

    if (semiCircle.currentAngle < semiCircle.endAngle) {
      semiCircle.currentAngle += increment;
    }

  };

  const animate = () => {
    semiCircles.forEach(drawSemiCircle);
    setTimeout(animate, delay);
  };

  animate();
};
