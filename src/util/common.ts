const TWO = 2;
interface IPoint {
  x: number;
  y: number;
}

/**
 * deep clone
 * @param {*} obj
 */
export function deepClone(obj: unknown) {
  // 递归拷贝
  if (obj === null) {
    return null;
  }
  // null 的情况
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (typeof obj !== 'object') {
    // 如果不是复杂数据类型，直接返回
    return obj;
  }
  /**
   * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
   * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
   */
  const t = new (obj as any).constructor();
  for (const key in obj) {
    // 如果 obj[key] 是复杂数据类型，递归
    t[key] = deepClone((obj as any)[key]);
  }
  return t;
}

/**
 * 深度合并2个对象
 * 常用于基础配置和用户自定义配置的合并
 * @param {*} target
 * @param {*} obj
 */
export function merge(target: any, obj: unknown) {
  if (obj === null) {
    return null;
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (typeof obj !== 'object') {
    // 如果不是复杂数据类型，直接返回
    return obj;
  }

  for (const key in obj) {
    if (typeof target[key] === 'undefined') {
      target[key] = (obj as any)[key];
    } else {
      target[key] = merge(target[key], (obj as any)[key]);
    }
  }

  return target;
}

/**
 * 计算一条线段上，距离起点length的那个点的坐标
 * 通过平移来简化计算
 * @param {*} startPoint 起点的坐标
 * @param {*} endPoint 终点的坐标
 * @param {*} distance 需要计算的点与起点的距离
 */
export function getCoordinateForPointOnTheLineByDistance(
  startPoint: IPoint,
  endPoint: IPoint,
  distance: number
) {
  const relativeEndPoint = {
    x: endPoint.x - startPoint.x,
    y: endPoint.y - startPoint.y,
  };

  // 2个线条的夹角，和最终作图的角度，是不同的概念
  // 夹角只是夹角
  // 最终作图的角度，是以【x轴正向】，【顺时针】作为参考值的
  const tan = relativeEndPoint.y / relativeEndPoint.x;
  let angle = Math.atan(tan) / (Math.PI / 180);

  // 对于2、3象限的数据(x为负数)，需要做角度修正(这个可能不大好理解)
  // 如果终点减去起点后的相对点坐标，其x值为负数，那么最终的夹角应该要特殊处理下
  // 只要x小于0，就要补上180度
  if (relativeEndPoint.x < 0) {
    angle = 180 + angle;
  }
  return {
    x: Math.cos((Math.PI / 180) * angle) * distance + startPoint.x,
    y: Math.sin((Math.PI / 180) * angle) * distance + startPoint.y,
  };
}

/**
 * 计算文本的长度
 * 数字和英文算作1个长度单位，中文算作2个长度单位
 * @param {*} str
 */
export function computeLengthOfContent(str: string): number {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    const ascii = str[i].charCodeAt(0);
    if (ascii > 127) {
      length += 2;
    } else {
      length += 1;
    }
  }
  return length;
}

/**
 * 将Ymd格式的日期转为Y/m/d格式
 */
export function formatDate(ymd: string): string {
  return `${ymd.substr(0, 4)}/${ymd.substr(4, 2)}/${ymd.substr(6, 2)}`;
}
/**
 * TODO:将数字/字符串类型的日期转为Date对象
 */
export function stringToDate(str: string): Date | null {
  str += '';
  if (str.indexOf('/') !== -1) {
    return new Date(str);
  }
  // 年月日
  if (str.length === 8) {
    return new Date(`${str.substr(0, 4)}/${str.substr(4, 2)}/${str.substr(6, 2)}`);
  }
  // 年月
  if (str.length === 6) {
    return new Date(`${str.substr(0, 4)}/${str.substr(4, 2)}`);
  }
  // 只有年份
  if (str.length === 4) {
    return new Date(str);
  }
  console.error(`日期格式不正确:${str}`);
  return null;
}

export function stringToASCII(str: string): string {
  const strCodes = [];
  for (let i = 0; i < str.length; i += 1) {
    strCodes.push(str.charAt(i).charCodeAt(0));
  }
  return strCodes.join('');
}

export function generateUUID() {
  const crypto = window.crypto || (window as any).msCrypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0];
}

/**
 * 获取URL参数
 * @param {string} name
 * @returns {string | null}
 */
export function getURLParam(name: string): string | null {
  // eslint-disable-next-line no-restricted-globals
  const matches = new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`, 'ig').exec(location.search);
  if (!matches || matches.length < TWO || !matches[1]) {
    return null;
  }
  return matches[1].replace(/\+/g, '%20');
}

/**
 * 追加script脚本
 * @param {*} src
 */
export function appendScript(src: string, callback?: Function) {
  const myScript: any = document.createElement('script');
  myScript.type = 'text/javascript';
  myScript.src = src;

  // 需要在这个script加载完成后，才能执行回调
  if (myScript.readyState) {
    // IE
    myScript.onreadystatechange = () => {
      if (myScript.readyState === 'loaded' || myScript.readyState === 'complete') {
        myScript.onreadystatechange = null;
        if (typeof callback === 'function') {
          callback();
        }
      }
    };
  } else {
    // 其他浏览器
    myScript.onload = () => {
      if (typeof callback === 'function') {
        callback();
      }
    };
  }

  document.body.appendChild(myScript);
}

/**
 * 判断一个变量是否为函数
 * @param {any} obj
 * @returns {boolean}
 */
export function isFunction(obj: any): obj is (...args: any) => any {
  return typeof obj === 'function' && typeof obj?.nodeType !== 'number';
}

/**
 * 判断一个变量是否是undefined
 * @param param
 * @returns
 */
export function isUndefined(param: any): param is undefined {
  return typeof param === 'undefined';
}

/**
 * 判断一个变量是否是null
 * @param param
 * @returns
 */
export function isNull(param: any): param is null {
  return param === null;
}

/**
 * 判断一个变量是否是null或者undefined
 * @param param
 * @returns
 */
export function isNil(param: any): param is undefined | null {
  return isUndefined(param) || isNull(param);
}

// 计算文本每个字的charCode之和
export function sumTextCharCode(text: string) {
  return text
    .split('')
    .reduce((prev: number, _: string, i: number) => prev + text.charCodeAt(i), 0);
}

// 判断是否为undefined或者空字符串
export function isNilOrEmptyString(val: any) {
  return val === undefined || val === null || val === '';
}

/**
 * 判断是移动端还是pc端
 * @return {string}
 */
export function getPlatform() {
  const isMobile = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  if (isMobile) {
    return 'mobile';
  }
  return 'pc';
}

/**
 * ! 仅处理主题配置合并，逻辑不通用
 * 如果target(也就是firstObj[key])存在，
 * 且是对象的话再去调用deepObjectMerge，
 * 否则就是firstObj[key]里面没这个对象，需要与SecondObj[key]合并
 */
export function deepObjectMerge(
  target_: Record<string, unknown>,
  source_: Record<string, unknown>
) {
  const target = deepClone(target_);
  const source = deepClone(source_);

  if (Object.prototype.toString.call(source) !== '[object Object]' && !Array.isArray(source)) {
    return target;
  }

  // eslint-disable-next-line sonarjs/no-duplicate-string
  if (Object.prototype.toString.call(target) === '[object Object]') {
    Object.keys(source).forEach(key => {
      let value = source[key];

      if (
        typeof value !== 'undefined' &&
        value !== null &&
        (Object.prototype.toString.call(target[key]) === '[object Object]' ||
          Array.isArray(target[key]))
      ) {
        value = deepObjectMerge(target[key], source[key]);
      }

      target[key] = value;
    });
  } else if (Array.isArray(target) && Array.isArray(source)) {
    target.forEach((item, index) => {
      let value = source[index];
      if (
        Object.prototype.toString.call(target[index]) === '[object Object]' ||
        Array.isArray(target[index])
      ) {
        value = deepObjectMerge(target[index], source[index]);
      }

      target[index] = value;
    });
  }

  return target;
}

// 画圆角柱子
export function drawRoundedRect(option: {
  x: number;
  y: number;
  width: number;
  height: number;
  topLeftRadius: number;
  topRightRadius: number;
  bottomRightRadius: number;
  bottomLeftRadius: number;
}): string {
  const {
    x,
    y,
    width,
    height,
    topLeftRadius,
    topRightRadius,
    bottomRightRadius,
    bottomLeftRadius,
  } = option;
  return `M${x},${
    y + topLeftRadius
  }a${topLeftRadius} ${topLeftRadius} 0 0 1 ${topLeftRadius} ${-topLeftRadius}h${
    width - topRightRadius - topLeftRadius
  }a${topRightRadius} ${topRightRadius} 0 0 1 ${topRightRadius} ${topRightRadius}v${
    height - TWO * topRightRadius
  }a${bottomRightRadius} ${bottomRightRadius} 0 0 1 ${-bottomRightRadius} ${bottomRightRadius}h${
    bottomRightRadius - width + bottomLeftRadius
  }a${bottomLeftRadius} ${bottomLeftRadius} 0 0 1 ${-bottomLeftRadius} ${-bottomLeftRadius}z`;
}
