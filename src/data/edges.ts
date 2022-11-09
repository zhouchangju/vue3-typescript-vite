/* eslint-disable @typescript-eslint/no-loss-of-precision */
/**
 * 连线
 * 连线的起点一般配置为模型的position，不用配置
 * 第二个点只需要配置x坐标，Y坐标根据第一个点自动生成，否则不是水平线
 * 为了自适应屏幕，这里最终会采用归一化的百分比作为定位坐标
 *
 * 两段式的折线，只需要配置起止点坐标
 * N段式的折线，
 */
import { getPlatform } from '../util/common';
import views from './views';

const bestEdgeBasedView = views.overlook;

const pcEdges = [
  {
    id: 'KnowledgeGraph',
    name: '知识图谱',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.11458333333333333,
        y: -0.076296296296296294,
      },
      {
        x: -0.1875,
        y: -0.076296296296296294,
      },
    ],
  },
  {
    id: 'Storage',
    name: '数据存储',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.11458333333333333,
        y: 0.076296296296296294,
      },
      {
        x: -0.1875,
        y: 0.076296296296296294,
      },
    ],
  },
  {
    id: 'DataVisualization',
    name: '可视化',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.0859375,
        y: -0.16666666666666666,
      },
      {
        x: 0.11979166666666667,
        y: -0.16666666666666666,
      },
    ],
  },
  {
    id: 'Speech',
    name: '语音',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.09375,
        y: 0.106296296296296294,
      },
      {
        x: 0.1171875,
        y: 0.106296296296296294,
      },
    ],
  },
  {
    id: 'Dialogue',
    name: '对话解析',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.02375,
        y: 0.12185185185185185,
      },
      {
        x: 0.07583333333333334,
        y: 0.12185185185185185,
      },
    ],
  },
  {
    id: 'Search',
    name: '搜索',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.036458333333333336,
        y: -0.087037037037037035,
      },
      {
        x: 0.08854166666666667,
        y: -0.087037037037037035,
      },
    ],
  },
  {
    id: 'Siphon',
    name: '抽取',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.036458333333333336,
        y: -0.037037037037037035,
      },
      {
        x: -0.08854166666666667,
        y: -0.037037037037037035,
      },
    ],
  },
  {
    id: 'AlgorithmCenter',
    name: '算法中枢',
    points: [
      {
        x: -0.015625,
        y: -0.027777777777777776,
      },
      {
        x: -0.08854166666666667,
        y: 0.1388888888888889,
      },
      {
        x: -0.1328125,
        y: 0.1388888888888889,
      },
    ],
  },
  {
    id: 'ResultPage',
    name: '结果页',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.052083333333333336,
        y: -0.09259259259259259,
      },
      {
        x: 0.0859375,
        y: -0.09259259259259259,
      },
    ],
  },
  {
    id: 'Tag',
    name: '标签',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.109375,
        y: 0.18055555555555555,
      },
      {
        x: -0.1328125,
        y: 0.18055555555555555,
      },
    ],
  },
  {
    id: 'Figure',
    name: '画像',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.109375,
        y: 0.14351851851851852,
      },
      {
        x: -0.1328125,
        y: 0.14351851851851852,
      },
    ],
  },
  {
    id: 'Recommend',
    name: '推荐',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.109375,
        y: 0.10648148148148148,
      },
      {
        x: -0.1328125,
        y: 0.10648148148148148,
      },
    ],
  },
  {
    id: 'Advisor',
    name: '投顾',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.020833333333333332,
        y: -0.08333333333333333,
      },
      {
        x: 0.078125,
        y: -0.08333333333333333,
      },
    ],
  },
  {
    id: 'Teacher',
    name: '投教',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.03125,
        y: -0.046296296296296294,
      },
      {
        x: 0.08854166666666667,
        y: -0.046296296296296294,
      },
    ],
  },
  {
    id: 'Friend',
    name: '朋友',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.010416666666666666,
        y: 0.12962962962962962,
      },
      {
        x: 0.06510416666666667,
        y: 0.12962962962962962,
      },
    ],
  },
  {
    id: 'Server',
    name: '客服',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.03125,
        y: 0.05555555555555555,
      },
      {
        x: -0.0859375,
        y: 0.05555555555555555,
      },
    ],
  },
];

const mobileEdges = [
  {
    id: 'KnowledgeGraph',
    name: '知识图谱',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.12,
        y: 0.02,
      },
      {
        x: -0.23,
        y: 0.02,
      },
    ],
  },
  {
    id: 'Storage',
    name: '数据存储',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.12,
        y: 0.08,
      },
      {
        x: -0.23,
        y: 0.08,
      },
    ],
  },
  {
    id: 'DataVisualization',
    name: '可视化',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.12,
        y: -0.1,
      },
      {
        x: 0.2,
        y: -0.1,
      },
    ],
  },
  {
    id: 'Speech',
    name: '语音',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.08,
        y: 0.06,
      },
      {
        x: 0.15,
        y: 0.06,
      },
    ],
  },
  {
    id: 'Dialogue',
    name: '对话解析',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.06,
        y: -0.05,
      },
      {
        x: 0.14,
        y: -0.05,
      },
    ],
  },
  {
    id: 'Search',
    name: '搜索',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.08,
        y: -0.12,
      },
      {
        x: -0.2,
        y: -0.12,
      },
    ],
  },
  {
    id: 'Siphon',
    name: '抽取',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.08,
        y: -0.06,
      },
      {
        x: -0.2,
        y: -0.06,
      },
    ],
  },
  {
    id: 'AlgorithmCenter',
    name: '算法中枢',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.22,
        y: 0.17,
      },
      {
        x: -0.335,
        y: 0.17,
      },
    ],
  },
  {
    id: 'ResultPage',
    name: '结果页',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.04,
        y: -0.03,
      },
      {
        x: 0.1,
        y: -0.03,
      },
    ],
  },
  {
    id: 'Tag',
    name: '标签',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.28,
        y: 0.2,
      },
      {
        x: -0.38,
        y: 0.2,
      },
    ],
  },
  {
    id: 'Figure',
    name: '画像',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.2,
        y: 0.14,
      },
      {
        x: -0.3,
        y: 0.14,
      },
    ],
  },
  {
    id: 'Recommend',
    name: '推荐',
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.12,
        y: 0.08,
      },
      {
        x: -0.22,
        y: 0.08,
      },
    ],
  },
  {
    id: 'Advisor',
    name: '投顾',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.12,
        y: 0.1,
      },
      {
        x: -0.16,
        y: 0.1,
      },
    ],
  },
  {
    id: 'Teacher',
    name: '投教',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.15,
        y: 0.29,
      },
      {
        x: -0.29,
        y: 0.29,
      },
    ],
  },
  {
    id: 'Friend',
    name: '朋友',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: -0.17,
        y: 0.15,
      },
      {
        x: -0.25,
        y: 0.15,
      },
    ],
  },
  {
    id: 'Server',
    name: '客服',
    inverse: true,
    points: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.12,
        y: -0.1,
      },
      {
        x: 0.16,
        y: -0.1,
      },
    ],
  },
];

const edges = getPlatform() === 'pc' ? pcEdges : mobileEdges;

export default edges;