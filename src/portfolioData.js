// src/portfolioData.js
const portfolioData = [
  {
    id: "work1",
    title: "ALMOST FLOODED",
    subtitle: "建筑概念 / 可持续设计", // 新增：简短的副标题或类别
    description: "基于生态环境的可持续性建筑。", // 保留，可能其他地方会用到
    image: "/images/work1.jpg", // 确保图片在 public/images/ 目录下，或者您src/images/并已正确导入
    tags: ["可持续性", "住宅", "概念设计"],
    link: "/project/work1" // 新增：指向项目详情页的链接
  },
  {
    id: "work2",
    title: "LINE(S), ROOM, BUILDING",
    subtitle: "建筑概念 / 学生作品", // 新增
    description: "从点到体的过程中探索建筑空间",
    image: "/images/work2.jpg",
    tags: ["教育建筑", "生态", "未来"],
    link: "/project/work2" // 新增
  },
  {
    id: "work3",
    title: "建筑项目的深化",
    subtitle: "项目深化 / 三维建模", // 新增
    description: "一次建筑从概念到落地的过程。",
    image: "/images/work3.jpg",
    tags: ["城市设计", "三维建模", "密度分析"],
    link: "/project/work3" // 新增
  },
  // 您可以继续添加更多项目，并确保它们都有 subtitle 和 link 字段
];

export default portfolioData;