/* prettier-ignore */
const easingFuncs = { // NOSONAR
 
    linear(k) {
      return k;
    },
  
    quadraticIn(k) {
      return k * k;
    },
    quadraticOut(k) {
      return k * (2 - k);
    },
    quadraticInOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }
      return -0.5 * (--k * (k - 2) - 1);
    },
  
    // 三次方的缓动（t^3）
    cubicIn(k) {
      return k * k * k;
    },
    cubicOut(k) {
      return --k * k * k + 1;
    },
    cubicInOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }
      return 0.5 * ((k -= 2) * k * k + 2);
    },
  
    // 四次方的缓动（t^4）
    quarticIn(k) {
      return k * k * k * k;
    },
    quarticOut(k) {
      return 1 - --k * k * k * k;
    },
    quarticInOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k;
      }
      return -0.5 * ((k -= 2) * k * k * k - 2);
    },
  
    // 五次方的缓动（t^5）
    quinticIn(k) {
      return k * k * k * k * k;
    },
    quinticOut(k) {
      return --k * k * k * k * k + 1;
    },
    quinticInOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }
      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
  
    // 正弦曲线的缓动（sin(t)）
    sinusoidalIn(k) {
      return 1 - Math.cos((k * Math.PI) / 2);
    },
    sinusoidalOut(k) {
      return Math.sin((k * Math.PI) / 2);
    },
    sinusoidalInOut(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    },
  
    // 指数曲线的缓动（2^t）
    exponentialIn(k) {
      return k === 0 ? 0 : 1024 ** (k - 1);
    },
    exponentialOut(k) {
      return k === 1 ? 1 : 1 - 2 ** (-10 * k);
    },
    exponentialInOut(k) {
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if ((k *= 2) < 1) {
        return 0.5 * 1024 ** (k - 1);
      }
      return 0.5 * (-(2 ** (-10 * (k - 1))) + 2);
    },
  
    // 圆形曲线的缓动（sqrt(1-t^2)）
    circularIn(k) {
      return 1 - Math.sqrt(1 - k * k);
    },
    circularOut(k) {
      return Math.sqrt(1 - --k * k);
    },
    circularInOut(k) {
      if ((k *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
  
    // 创建类似于弹簧在停止前来回振荡的动画
    elasticIn(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      return -(a * 2 ** (10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p));
    },
    elasticOut(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      return a * 2 ** (-10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1;
    },
    elasticInOut(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      if ((k *= 2) < 1) {
        return -0.5 * (a * 2 ** (10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p));
      }
      return a * 2 ** (-10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p) * 0.5 + 1;
    },
  
    // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
    backIn(k) {
      const s = 1.70158;
      return k * k * ((s + 1) * k - s);
    },
    backOut(k) {
      const s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    },
    backInOut(k) {
      const s = 1.70158 * 1.525;
      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }
      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },
  
    // 创建弹跳效果
    bounceIn(k) {
      return 1 - easingFuncs.bounceOut(1 - k);
    },
    bounceOut(k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      }
      if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      }
      if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      }
      return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
    },
    bounceInOut(k) {
      if (k < 0.5) {
        return easingFuncs.bounceIn(k * 2) * 0.5;
      }
      return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    },
  };

export default easingFuncs;
