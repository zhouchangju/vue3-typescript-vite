/* eslint-disable no-magic-numbers */
import { Node } from '../type/Data';
import { getPlatform } from '../util/common';

/**
 * @see https://cn.vitejs.dev/guide/env-and-mode.html
 */
const assetDir = import.meta.env.BASE_URL;

const pcNodes: Node[] = [
  {
    id: 'car',
    name: '汽车',
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 0, 0],
        scale: [1, 1, 1],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/test/新能源整车.glb`,
    projectGroupId: 'AIE-91',
    interactive: true,
  },
];

const mobileNodes: Node[] = [
  {
    id: 'QualityInspection',
    name: '质检',
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 0, 0],
        scale: [0.5, 0.5, 0.5],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/质检.glb`,
    projectGroupId: 'AIE-91',
    interactive: true,
  },
  {
    id: 'ResultPage',
    name: '结果页',
    transparent: true,
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 125, 110],
        scale: [10, 10, 10],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/结果页.glb`,
    autoRotationPeriod: 6000,
    projectGroupId: 'AIE-51',
    interactive: true,
    status: 'notAchieved',
  },
  {
    id: 'SpeechDialogue',
    name: '语音&对话&解析',
    isFocus: false,
    children: [
      {
        id: 'Speech',
        name: '语音',
        transparent: true,
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 30, 110],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
          focus: {
            position: [0, 30, 250],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/语音.glb`,
        projectGroupId: 'A11',
        interactive: true,
      },
      {
        id: 'Dialogue',
        name: '对话解析',
        transparent: true,
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 50, 75],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
          focus: {
            position: [0, 50, 175],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/对话解析.glb`,
        projectGroupId: 'AIE-21&AIE-2X',
        interactive: true,
      },
    ],
  },
  {
    id: 'SearchSiphon',
    name: '搜索&抽取',
    isFocus: false,
    children: [
      {
        id: 'Search',
        name: '搜索',
        transparent: true,
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 235, -65],
            scale: [10, 10, 10],
            rotation: [Math.PI / 16, 0, 0],
          },
          focus: {
            position: [0, 295, -125],
            scale: [10, 10, 10],
            rotation: [Math.PI / 16, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/搜索.glb`,
        // autoRotationPeriod: 6000,
        projectGroupId: 'AIE-33',
        interactive: true,
      },
      {
        id: 'Siphon',
        name: '抽取',
        transparent: true,
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 235, -65],
            scale: [10, 10, 10],
            rotation: [Math.PI / 16, 0, 0],
          },
          focus: {
            position: [0, 265, -100],
            scale: [10, 10, 10],
            rotation: [Math.PI / 16, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/抽取.glb`,
        // autoRotationPeriod: 6000,
        projectGroupId: 'A3',
        interactive: true,
      },
      {
        id: 'Ring',
        name: '环',
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 250, -115],
            scale: [10, 10, 10],
            rotation: [Math.PI / 32, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/圈.glb`,
      },
    ],
  },
  {
    id: 'KnowledgeGraphStorage',
    name: '知识图谱&存储',
    isFocus: false,
    children: [
      {
        id: 'KnowledgeGraphStorageWrapper',
        name: '外壳',
        transparent: true,
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 185, 2],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/外壳.glb`,
      },
      {
        id: 'Storage',
        name: '数据存储',
        transparent: true,
        breakable: true,
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 185, 0],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
          focus: {
            position: [0, 295, 0],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/数据存储.glb`,
        projectGroupId: 'A10',
        interactive: true,
      },
      {
        id: 'KnowledgeGraph',
        name: '知识图谱',
        transparent: true,
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [0, 185, 0],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
          focus: {
            position: [0, 400, 0],
            scale: [10, 10, 10],
            rotation: [0, 0, 0],
          },
        },
        model: `${assetDir}assets/models/designer/知识图谱.glb`,
        projectGroupId: 'A3',
        interactive: true,
      },
      {
        id: 'Advisor',
        name: '投顾',
        subName: 'Be Your Advisor',
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [47, 222, -15],
          },
          focus: {
            position: [47, 437, -15],
          },
        },
      },
      {
        id: 'Teacher',
        name: '投教',
        subName: 'Be Your Teacher',
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [27, 240, 25],
          },
          focus: {
            position: [27, 455, 25],
          },
        },
      },
      {
        id: 'Friend',
        name: '朋友',
        subName: 'Be Your Friend',
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [-35, 232, 27],
          },
          focus: {
            position: [-35, 447, 27],
          },
        },
      },
      {
        id: 'Server',
        name: '客服',
        subName: 'Be Your Server',
        transformStatus: 'normal',
        transformConfig: {
          normal: {
            position: [-27, 229, -35],
          },
          focus: {
            position: [-27, 444, -35],
          },
        },
      },
    ],
  },

  {
    id: 'Head',
    name: '头',
    transparent: true,
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 40, 0],
        scale: [10, 10, 10],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/头.glb`,
  },
  {
    id: 'Mask',
    name: '面罩',
    transparent: true,
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 90, 18],
        scale: [10, 10, 10],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/面罩.glb`,
  },
  {
    id: 'Body',
    name: '身体',
    transparent: true,
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, -170, 0],
        scale: [10, 10, 10],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/身体.glb`,
  },
  {
    id: 'TagFigureRecommend',
    name: '标签&画像&推荐',
    transparent: true,
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        scale: [10, 10, 10],
        position: [0, 129, -12],
        rotation: [(Math.PI * 3) / 16, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/标签&画像&推荐.glb`,
    projectGroupId: 'AIE-61',
    interactive: true,
  },
  {
    id: 'AlgorithmCenter',
    name: '算法中枢',
    transparent: true,
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 82, 50],
        scale: [10, 10, 10],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/中枢.glb`,
    autoRotationPeriod: 5000,
    projectGroupId: 'AIE-99',
    interactive: true,
  },
  {
    id: 'DataVisualization',
    name: '可视化',
    transparent: true,
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 125, 67.5],
        scale: [10, 10, 10],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/可视化.glb`,
    interactive: true,
    projectGroupId: 'A5',
  },
  {
    id: 'Lines',
    name: '线',
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 55, 25],
        scale: [10, 10, 10],
        rotation: [0, 0, 0],
      },
    },
    model: `${assetDir}assets/models/designer/线.glb`,
  },

  {
    id: 'Tag',
    name: '标签',
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [30, 125, -15],
        scale: [10, 10, 10],
        rotation: [Math.PI / 4, 0, 0],
      },
    },
  },
  {
    id: 'Figure',
    name: '画像',
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [0, 125, -15],
        scale: [5, 5, 5],
        rotation: [Math.PI / 4, 0, 0],
      },
    },
  },
  {
    id: 'Recommend',
    name: '推荐',
    transformStatus: 'normal',
    transformConfig: {
      normal: {
        position: [-30, 125, -15],
        scale: [8, 8, 8],
        rotation: [Math.PI / 4, 0, 0],
      },
    },
    projectGroupId: 'AIE-61',
  },
];

const car = getPlatform() === 'pc' ? pcNodes : mobileNodes;

export function flatNodes(nodesTemp: Node[]): Node[] {
  const result: Node[] = [];
  nodesTemp.forEach(node => {
    result.push(node);
    if (node.children) {
      result.push(...flatNodes(node.children));
    }
  });
  return result;
}

export default car;
