function drawDashLine(
  ctx: CanvasRenderingContext2D,
  start: { x: number; y: number },
  end: { x: number; y: number }
) {
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#FFFFFF';
  ctx.setLineDash([4, 4]);
  ctx.lineDashOffset = -10;
  ctx.stroke();
}

function drawText(
  ctx: CanvasRenderingContext2D,
  point: { x: number; y: number },
  content: string,
  textAlign: CanvasTextAlign = 'start',
  textBaseline: CanvasTextBaseline = 'alphabetic'
) {
  ctx.font = '10px serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.fillText(content, point.x, point.y);
}

/**
 * 调试用的页面坐标网格线
 */
function drawGrid(canvasElement: HTMLCanvasElement) {
  const ctx = canvasElement.getContext('2d');
  const { width, height } = canvasElement;
  console.error('canvasElement.width', canvasElement.width);

  const interval = 100;

  for (let i = interval; i < width; i += interval) {
    const start = { x: i, y: 0 };
    const end = { x: i, y: height };
    drawDashLine(ctx, start, end);
    drawText(ctx, start, ` ${i}`, 'start', 'top');
  }

  for (let i = interval; i < height; i += interval) {
    const start = { x: 0, y: i };
    const end = { x: width, y: i };
    drawDashLine(ctx, start, end);
    drawText(ctx, start, `${i}`);
  }
}

function clearCanvas(canvasElement: HTMLCanvasElement) {
  const ctx = canvasElement.getContext('2d');
  if (!ctx) {
    return;
  }
  const { width, height } = canvasElement;

  ctx.clearRect(0, 0, width, height);
  // 不加这一行，不会清空上一次绘制的path
  ctx.beginPath();
}

export { drawGrid, clearCanvas };
