/* eslint-disable no-console */
import Stats from 'stats.js';
import { getURLParam } from './common';
/**
 * 创建单个性能监控面板
 * @param type - 类型
 * @param left - left定位
 * @returns
 */
export function createStat(type: number, left: number): Stats {
  const stat = new Stats();
  // 0: fps, 1: ms, 2: mb, 3+: custom
  stat.showPanel(type);
  stat.dom.style.cssText = `position:absolute;top:0px;left:${left}px;`;
  document.body.appendChild(stat.dom);
  return stat;
}

export function createStats() {
  return {
    fps: createStat(0, 0),
    // eslint-disable-next-line no-magic-numbers
    ms: createStat(1, 80),
    // eslint-disable-next-line no-magic-numbers
    mb: createStat(2, 160),
  };
}

export function initStat() {
  return new Stats();
}

/**
 * 是否是调试模式
 */
export function isDebug() {
  return getURLParam('debug');
}

