export interface Animation {
  // 是否正在动画过程中
  need: boolean;
  // 动画开始时间
  startTime: number;
  // 动画持续时长
  duration: number;
  // 当前周期的动画进度
  process: number;
}
