const assetDir = import.meta.env.BASE_URL;
const assets = {
  // 波纹贴图
  ripple: `${assetDir}assets/images/star1.jpeg`,
  // 流光管道贴图
  flowTube: `${assetDir}assets/images/spark1.png`,
  // 环境贴图
  // envMap: `${assetDir}assets/environments/blouberg_sunrise_2_1k.hdr`,
  envMap: [
    {
      name: '街景(HDR)',
      url: `${assetDir}assets/environments/footprint_court_2k.hdr`,
    },
    {
      name: '蓝天(EXR)',
      url: `${assetDir}assets/environments/Sunny_000.exr`,
    },
    {
      name: '测试(EXR)',
      url: `${assetDir}assets/environments/piz_compressed.exr`,
    },

    {
      name: '黑色空间1(HDR)',
      url: `${assetDir}assets/environments/hdr3.hdr`,
    },
    {
      name: '黑色空间2(HDR)',
      url: `${assetDir}assets/environments/hdr2.hdr`,
    },
    {
      name: '4(HDR)',
      url: `${assetDir}assets/environments/hdr4.hdr`,
    },
    {
      name: '5(HDR)',
      url: `${assetDir}assets/environments/hdr5.hdr`,
    },
    {
      name: '6(HDR)',
      url: `${assetDir}assets/environments/hdr6.hdr`,
    },
    {
      name: '7(HDR)',
      url: `${assetDir}assets/environments/hdr7.hdr`,
    },
    {
      name: '8(HDR)',
      url: `${assetDir}assets/environments/hdr8.hdr`,
    },
    {
      name: '10(HDR)',
      url: `${assetDir}assets/environments/hdr10.hdr`,
    },
    {
      name: '11(HDR)',
      url: `${assetDir}assets/environments/hdr11.hdr`,
    },
    {
      name: '12(HDR)',
      url: `${assetDir}assets/environments/hdr12.hdr`,
    },
    {
      name: '13(HDR)',
      url: `${assetDir}assets/environments/hdr13.hdr`,
    },
    {
      name: '14(HDR)',
      url: `${assetDir}assets/environments/hdr14.hdr`,
    },
  ],

  // envMap: `${assetDir}assets/environments/012.hdr`,
  // envMap: `${assetDir}assets/environments/hdr3.hdr`,
};

export default assets;
