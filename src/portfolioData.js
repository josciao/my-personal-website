// src/portfolioData.js
const portfolioData = [
  {
    id: "work1",
    title: "ALMOST FLOODED",
    subtitle: "建筑概念 / 可持续设计",
    description: "基于生态环境的可持续性建筑。",
    detailDescription: `此项目为本人毕业设计，在经历反复与自我探索和磨合的前半个学期。我终于做了我自己想做的主题---探索人与建筑与自然的共生关系。世间万物时刻变化，并无永恒。
    
    此项目的假想地点在美国德克萨斯的Baytown,因为近地的石油开采所导致的地势下沉以及每年的季风影响，每年旱季这里的相当一部分土地会因为海平面的下降露出来，而雨季就会因为海平面上被海水淹没。
    这样的反复的季节性的状态能够提供给建筑的不同状态。而此项目旨在探索建筑该如何面对不同自然条件以及人类活动是怎么样将智慧带到不同时期的建筑并且适应这些不同的状态。
    `,
    image: "/images/work1/work1.jpg", // 用于主页和作品集列表页的预览图
    detailImages: [ // 新增：专门用于详情页的图片列表
      "/images/work1/work1_detail_1.jpg",
      "/images/work1/work1_detail_2.jpg",
      "/images/work1/work1_detail_3.jpg",
      "/images/work1/work1_detail_4.jpg",
      "/images/work1/work1_detail_5.jpg",
      "/images/work1/work1_detail_6.jpg",
      "/images/work1/work1_detail_7.jpg",
      "/images/work1/work1_detail_8.jpg"
    ],
    tags: ["可持续性", "住宅", "概念设计"],
    link: "/project/work1"
  },
  {
    id: "work2",
    title: "LINE(S), ROOM, BUILDING",
    subtitle: "建筑概念 / 学生作品",
    description: "从点到体的过程中探索建筑空间。",
    detailDescription: "这个作品展示了从建筑最基本单元到整体的空间理解。内容从点到线，线到面，面到体再成为能够承载人类活动的建筑。",
    image: "/images/work2/work2.jpg", // 用于预览的主图
    detailImages: [ // 用于详情页的图片列表
      "/images/work2/work2_detail_1.jpg",
      "/images/work2/work2_detail_2.jpg",
      "/images/work2/work2_detail_3.jpg",
      "/images/work2/work2_detail_4.jpg",
      "/images/work2/work2_detail_5.jpg",
      "/images/work2/work2_detail_6.jpg",
      "/images/work2/work2_detail_7.jpg",
      "/images/work2/work2_detail_8.jpg"
    ],
    tags: ["教育建筑", "生态", "未来"],
    link: "/project/work2"
  },
  {
    id: "work3",
    title: "建筑项目的深化",
    subtitle: "项目深化 / 三维建模",
    description: "一次建筑从概念到落地的过程。",
    detailDescription: "此项目从概念到深化为期一个学期。过程从概念到设计，结构，连接，材料，排水，消防，疏散，施工以及后期的动画制作，制图，建模，渲染，视频剪辑。是一次离开乌托邦式地真正的对可落地建筑的理解力扩展。",
    image: "/images/work3/work3.jpg", // 用于预览的主图
    detailImages: [ // 用于详情页的图片列表
      "/images/work3/work3_detail_1.png",
      "/images/work3/work3_detail_2.png",
      "/images/work3/work3_detail_3.png",
      "/images/work3/work3_detail_4.png",
      "/images/work3/work3_detail_5.png",
      "/images/work3/work3_detail_6.png",
      "/images/work3/work3_detail_7.png",
      "/images/work3/work3_detail_8.png"
    ],
    tags: ["城市设计", "三维建模", "团队作品"],
    link: "/project/work3"
  },
  // 您可以继续添加更多项目
];

export default portfolioData;
