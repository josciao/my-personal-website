// src/portfolioData.js
const portfolioData = [
  {
    id: "work1",
    title: "ALMOST FLOODED",
    subtitle: "建筑概念 / 可持续设计",
    description: "基于生态环境的可持续性建筑。",
    image: "/images/work1.jpg", // 用于主页和作品集列表页的预览图
    detailImages: [ // 新增：专门用于详情页的图片列表
      "/images/work1_detail_1.jpg",
      "/images/work1_detail_2.jpg",
      "/images/work1_detail_3.jpg",
      "/images/work1_detail_4.jpg",
      "/images/work1_detail_5.jpg",
      "/images/work1_detail_6.jpg",
      "/images/work1_detail_7.jpg",
      "/images/work1_detail_8.jpg"
    ],
    tags: ["可持续性", "住宅", "概念设计"],
    link: "/project/work1"
  },
  {
    id: "work2",
    title: "LINE(S), ROOM, BUILDING",
    subtitle: "建筑概念 / 学生作品",
    description: "从点到体的过程中探索建筑空间。",
    image: "/images/work2.jpg", // 用于预览的主图
    detailImages: [ // 用于详情页的图片列表
      "/images/work2_detail_1.jpg",
      "/images/work2_detail_2.jpg"
    ],
    tags: ["教育建筑", "生态", "未来"],
    link: "/project/work2"
  },
  {
    id: "work3",
    title: "建筑项目的深化",
    subtitle: "项目深化 / 三维建模",
    description: "一次建筑从概念到落地的过程。",
    image: "/images/work3.jpg", // 用于预览的主图
    detailImages: [ // 用于详情页的图片列表
      "/images/work3_detail_1.jpg",
      "/images/work3_detail_2.jpg"
    ],
    tags: ["城市设计", "三维建模", "密度分析"],
    link: "/project/work3"
  },
  // 您可以继续添加更多项目
];

export default portfolioData;
