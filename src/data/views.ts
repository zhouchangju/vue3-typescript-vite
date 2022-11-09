/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { getPlatform } from '../util/common';

// ${name}PlayView 命名风格的配置，为播放过程中的剧本视角
const pcViews = {
  // 俯视3/4角度
  overlook: {
    position: {
      // x: -322.162835181737,
      // y: 233.53111006784053,
      // z: 351.0455468154633,
      x: -340.59700710526306,
      y: 241.21464931578936,
      z: 371.29346994736846,
    },
    target: {
      x: 28.086435216762933,
      y: 87.54386253269227,
      z: -33.66498914787995,
    },
  },

  // 侧面1/2标准视角
  right: {
    position: {
      x: -400,
      y: 200,
      z: 0,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  // 另一侧面1/2标准视角
  left: {
    position: {
      x: 400,
      y: 200,
      z: 0,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  // 正面
  front: {
    position: {
      x: 0,
      y: 200,
      z: 400,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  // 背面
  back: {
    position: {
      x: 0,
      y: 200,
      z: -400,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  // 俯视
  lookDown: {
    position: {
      x: 5.445631561297121,
      y: 671.0088964533898,
      z: 47.811456802521974,
    },
    target: {
      x: 6.061991871353159,
      y: 133.3069027479314,
      z: -5.716203373420405,
    },
  },

  // 数据存储视角
  Storage: {
    position: {
      x: -351.61700830292557,
      y: 322.65476805079606,
      z: 116.88759047716816,
    },
    target: {
      x: 46.26909567846343,
      y: 287.19453469828082,
      z: 10.7391100119987,
    },
  },

  // 知识图谱视角
  KnowledgeGraph: {
    position: {
      x: -351.61700830292557,
      y: 322.65476805079606,
      z: 116.88759047716816,
    },
    target: {
      x: 46.26909567846343,
      y: 287.19453469828082,
      z: 10.7391100119987,
    },
  },

  // 抽取视角
  Siphon: {
    position: {
      x: -311.5245078302491,
      y: 471.08665631835953,
      z: -78.77728672881463,
    },
    target: {
      x: -6.555071052854534,
      y: 267.0463485146238,
      z: -30.273199851048798,
    },
  },

  // 搜索视角
  Search: {
    position: {
      x: -311.5245078302491,
      y: 471.08665631835953,
      z: -78.77728672881463,
    },
    target: {
      x: -6.555071052854534,
      y: 267.0463485146238,
      z: -30.273199851048798,
    },
  },

  // 算法中枢
  AlgorithmCenter: {
    position: {
      x: -293.42190050633377,
      y: 144.70507727110618,
      z: 174.9332966992915,
    },
    target: {
      x: 11.491871535894656,
      y: 96.69745165103365,
      z: 6.536017454211118,
    },
  },

  // 语音视角
  Speech: {
    position: {
      x: -207.34056663962963,
      y: 127.26184284791412,
      z: 302.8906252728443,
    },
    target: {
      x: 86.828979,
      y: 14.08509,
      z: 176.201175,
    },
  },

  // 对话解析视角
  Dialogue: {
    position: {
      x: -207.34056663962963,
      y: 127.26184284791412,
      z: 302.8906252728443,
    },
    target: {
      x: 86.828979,
      y: 14.08509,
      z: 176.201175,
    },
  },

  // 结果页
  ResultPage: {
    position: {
      x: -188.10210889078743,
      y: 166.8861851698514,
      z: 308.7359693060581,
    },
    target: {
      x: 57.81978171310133,
      y: 96.72287286037457,
      z: 57.51556827804984,
    },
  },

  // 可视化
  DataVisualization: {
    position: {
      x: -259.5657639025667,
      y: 156.78406615160014,
      z: 184.24708838336508,
    },
    target: {
      x: 41.5569182690742,
      y: 108.04658029308175,
      z: 48.121482949970506,
    },
  },

  // 标签&画像&推荐
  TagFigureRecommend: {
    position: {
      x: -235.16906763787242,
      y: 158.7286013883869,
      z: 264.6463333145573,
    },
    target: {
      x: 2.3672034469660055,
      y: 129.9521089196698,
      z: -2.3004590718839215,
    },
  },

  // 知识图谱播放剧本
  KnowledgeGraphPlayView: {
    position: {
      x: -261.99296800827074,
      y: 342.69686735302434,
      z: 108.7114431449101,
    },
    target: {
      x: 49.61416676461416,
      y: 195.22396637750833,
      z: -44.74369161073858,
    },
  },

  // 结果页播放剧本
  ResultPagePlayView: {
    position: {
      x: -327.18261870081506,
      y: 134.76016277561146,
      z: 284.3971507744323,
    },
    target: {
      x: 38.49574310711776,
      y: 110.69035366261727,
      z: 56.23140608441482,
    },
  },
};

const mobileViews = {
  overlook: {
    position: {
      // x: -322.162835181737,
      // y: 233.53111006784053,
      // z: 351.0455468154633,
      x: -479.2322320363619,
      y: 297.2783560536906,
      z: 521.5434485470352,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  right: {
    position: {
      x: -680,
      y: 270,
      z: 0,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  left: {
    position: {
      x: 680,
      y: 270,
      z: 0,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  front: {
    position: {
      x: 0,
      y: 270,
      z: 680,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  back: {
    position: {
      x: 0,
      y: 270,
      z: -680,
    },
    target: {
      x: 0,
      y: 100,
      z: 0,
    },
  },

  // 俯视
  lookDown: {
    position: {
      x: 5.441605997794199,
      y: 731.7291878386285,
      z: 54.59972611818674,
    },
    target: {
      x: 6.061991871353159,
      y: 133.3069027479314,
      z: -5.716203373420405,
    },
  },

  // 数据存储视角
  Storage: {
    position: {
      x: -307,
      y: 312,
      z: 141,
    },
    target: {
      x: 44,
      y: 367,
      z: -15,
    },
  },

  // 知识图谱视角
  KnowledgeGraph: {
    position: {
      x: -307,
      y: 312,
      z: 141,
    },
    target: {
      x: 44,
      y: 367,
      z: -15,
    },
  },

  // 抽取视角
  Siphon: {
    position: {
      x: -266,
      y: 413,
      z: -135,
    },
    target: {
      x: 20,
      y: 289,
      z: -127,
    },
  },

  // 搜索视角
  Search: {
    position: {
      x: -266,
      y: 413,
      z: -135,
    },
    target: {
      x: 20,
      y: 289,
      z: -127,
    },
  },

  // 算法中枢
  AlgorithmCenter: {
    position: {
      x: -293.42190050633377,
      y: 144.70507727110618,
      z: 174.9332966992915,
    },
    target: {
      x: 11.491871535894656,
      y: 96.69745165103365,
      z: 6.536017454211118,
    },
  },

  // 语音视角
  Speech: {
    position: {
      x: -207.34056663962963,
      y: 127.26184284791412,
      z: 302.8906252728443,
    },
    target: {
      x: 86.828979,
      y: 14.08509,
      z: 176.201175,
    },
  },

  // 对话解析视角
  Dialogue: {
    position: {
      x: -207.34056663962963,
      y: 127.26184284791412,
      z: 302.8906252728443,
    },
    target: {
      x: 86.828979,
      y: 14.08509,
      z: 176.201175,
    },
  },

  // 结果页
  ResultPage: {
    position: {
      x: -188.10210889078743,
      y: 166.8861851698514,
      z: 308.7359693060581,
    },
    target: {
      x: 57.81978171310133,
      y: 96.72287286037457,
      z: 57.51556827804984,
    },
  },

  // 可视化
  DataVisualization: {
    position: {
      x: -259.5657639025667,
      y: 156.78406615160014,
      z: 184.24708838336508,
    },
    target: {
      x: 41.5569182690742,
      y: 108.04658029308175,
      z: 48.121482949970506,
    },
  },

  // 标签&画像&推荐
  TagFigureRecommend: {
    position: {
      x: -224,
      y: 85,
      z: 255,
    },
    target: {
      x: -9,
      y: 135,
      z: -10,
    },
  },

  // 知识图谱播放剧本
  KnowledgeGraphPlayView: {
    position: {
      x: -466,
      y: 366,
      z: 109,
    },
    target: {
      x: 54,
      y: 191,
      z: -31,
    },
  },

  // 结果页播放剧本
  ResultPagePlayView: {
    position: {
      x: -327.18261870081506,
      y: 134.76016277561146,
      z: 284.3971507744323,
    },
    target: {
      x: 38.49574310711776,
      y: 110.69035366261727,
      z: 56.23140608441482,
    },
  },
};

const views = getPlatform() === 'pc' ? pcViews : mobileViews;

const ModelYOffset = -180;
const ModelScale = 0.5;

export function getViews(isDrawerShow = false) {
  if (isDrawerShow) {
    const viewsTemp: { [prop: string]: any } = {};
    Object.keys(views).forEach(key => {
      const origin = views[key] as {
        position: { x: number; y: number; z: number };
        target: { x: number; y: number; z: number };
      };
      const { position: originPosition, target: originTarget } = origin;
      const scaledPosition = {
        x: (originPosition.x - originTarget.x) / ModelScale + originTarget.x,
        y: (originPosition.y - originTarget.y) / ModelScale + originTarget.y,
        z: (originPosition.z - originTarget.z) / ModelScale + originTarget.z,
      };
      const offsetedPosition = {
        x: scaledPosition.x,
        y: scaledPosition.y + ModelYOffset,
        z: scaledPosition.z,
      };

      const offsetedTarget = {
        x: originTarget.x,
        y: originTarget.y + ModelYOffset,
        z: originTarget.z,
      };

      viewsTemp[key] = {
        position: offsetedPosition,
        target: offsetedTarget,
      };
    });
    return viewsTemp;
  }
  return views;
}

export default views;
