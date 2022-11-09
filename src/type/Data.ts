/**
 * 新的节点数据结构，稳定后替换原有
 */
type TransformStatus = 'normal' | 'focus';
type ModelStatus = 'normal' | 'emphasis' | 'blur';
interface TransformConfig {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

interface ModelConfig {
  url?: string;
}

interface Node {
  /** UUID */
  id: string;
  /** 名称 */
  name: string;
  /** 附属名称 */
  subName?: string;
  /** 节点几何状态 */
  transformStatus?: TransformStatus;
  /** 节点几何配置项 */
  transformConfig?: Partial<Record<TransformStatus, TransformConfig>>;
  /** 节点模型状态 */
  modelStatus?: ModelStatus;
  /** 节点模型配置项 */
  modelConfig?: Partial<Record<ModelStatus, ModelConfig>>;
  /** 节点项目组编号 */
  projectGroupId?: string;
  /** 节点是否处于聚焦状态 */
  isFocus?: boolean;
  /** 子节点 */
  children?: Array<Node>;
  /** 父节点ID */
  parentId?: string;
  /** 是否可交互 */
  interactive?: boolean;
  /** 是否支持透明状态 */
  transparent?: boolean;
  /** 是否可炸开 */
  breakable?: boolean;
  /** 是否处于散开状态 */
  isBreakUp?: boolean;
  [propName: string]: any;
}

interface NewEdge {
  /** UUID */
  id: string;
  /** 注解路径 */
  path: Array<[number, number, number]>;
  /** 注解类型 */
  type: 'normal' | 'business';
  [propName: string]: any;
}

/**
 * 定位点
 * 具有继承逻辑
 */
interface Point {
  /** x坐标 */
  x?: number;
  /** y坐标 */
  y?: number;
  /** z坐标 */
  z?: number;
  /** 偏移量 */
  offset?: [number, number];
  /** 水平长度 */
  horizontalLength?: number;
  /** 垂直长度 */
  verticalLength?: number;
  /** 方向 */
  direction?: 'horizontal' | 'vertical';
}

interface Edge {
  id: string;
  name?: string;
  inverse?: boolean;
  points: Array<Point>;
}

/**
 * 连线
 */
interface EdgeBak {
  /** 来源节点的ID */
  source: string;
  /** 目标节点的ID */
  target: string;
  /** 线条类型 */
  type?: 'polyline' | 'curve';
  /** 特效类型 */
  effect?: string;
  /** CSS样式属性 */
  style?: {
    [propName: string]: string;
  };
}

export { Point, Edge, EdgeBak, Node, NewEdge };
