import easingFn from './easingFuncs';

// 返回动画值得当前真实值
// 参数   process：动画进度 0～1   startValue：起始值  endValue：结束值   easing：缓动函数
// todo 暂时只支持了数值类型，后续可继续支持颜色等
const animateTo = (process, startValue, endValue, easing = 'linear') => {
  return startValue + (endValue - startValue) * easingFn[easing](process);
};

export default animateTo;
