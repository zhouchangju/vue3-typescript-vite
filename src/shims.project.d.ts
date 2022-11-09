import { Object3D } from 'three';
import { Node } from './type/Data';
/**
 * 项目级别的类型扩展
 */
declare global {
  interface Window {
    msCrypto?: any;
  }
}

/**
 * 扩展自定义的节点属性
 */
declare module 'three' {
  export class Group extends Object3D {
    constructor();
    type: 'Group';

    readonly isGroup: true;

    node: Node;
  }
}
