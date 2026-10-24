'use strict';
(() => {
  const works = {
    'moss-lamp': {title:'苔灯',count:18,kind:'完整法术 / 样例等级 3',description:'苔光成形、脚边导引、静夜维持、归途熄光。从一个较小的完整法术开始，观察定义如何嵌套。',look:'沿符文带观察内容，再看子阵与父阵之间的接口。光柱连接已有的归属，不增加能量流向。'},
    contract: {title:'契约召唤',count:47,kind:'完整法术 / 样例等级 5',description:'契约与召唤内容组成多层结构。俯视观察整体排布，斜视辨认子阵和符文带的层次。',look:'同一个阵内，骨架、符文环带与盘心也有不同高度。高度改变呈现，不增加法术含义。'},
    'tidal-city': {title:'潮汐归城',count:162,kind:'完整法术 / 样例等级 10',description:'当前三个完整样例中规模最大的一例。先看整体，再打开完整 SVG 查看层次与局部文字带。',look:'阵的数量指实际绘出的实例。样例等级参与分级画法，不是已验证的魔法强度或能耗。'},
    single: {title:'守光环',count:1,kind:'局部试作 / 单阵',description:'把一个阵单独展开，看符文环带、护持骨架和盘心怎样形成内部层次。',look:'符文与包裹它的结构保持同组。部位浮起属于布局；切回俯视后仍保留同一构图。'},
    chain: {title:'接口与连接',count:3,kind:'局部试作 / 三级归属',description:'灯座维持聚光，聚光承接微光。三个阵分别保留自己的直属父子接口。',look:'看下层接口如何连接上层子阵。新版工作台移动子阵时，其后代、接口和柔光柱一起跟随。'}
  };
  let selected = 'tidal-city', mode = 'oblique', theme = 'dark';
  const $ = id => document.getElementById(id);
  const image = $('art-image'), status = $('image-status');
  image.addEventListener('load', () => {status.textContent='点击画面，在新标签页查看完整 SVG。';});
  image.addEventListener('error', () => {status.textContent='图片未能加载，请刷新后重试。离线浏览时，请确认已完整解压，assets 文件夹与此页面位于同一目录。';});
  function update() {
    const work = works[selected], file = `assets/${selected}-${theme}-${mode}.svg`;
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('[data-work]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.work === selected)));
    document.querySelectorAll('[data-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
    const themeButton = document.querySelector('.theme');
    themeButton.textContent = theme === 'dark' ? '切换明色' : '切换暗色';
    themeButton.setAttribute('aria-pressed', String(theme === 'light'));
    const hero = document.querySelector('[data-hero]'), heroFile = `assets/tidal-city-${theme}-oblique.svg`;
    if (hero.getAttribute('src') !== heroFile) hero.src = heroFile;
    for (const key of ['title','count','kind','description','look']) $('work-' + key).textContent = work[key];
    image.alt = work.title + (mode === 'flat' ? '，俯视' : '，斜视展开');
    $('art-link').href = file;
    $('art-link').setAttribute('aria-label', `打开${work.title}完整 SVG`);
    $('download').href = file;
    if (image.getAttribute('src') !== file) {status.textContent='正在载入画面…';image.src=file;}
  }
  document.querySelectorAll('[data-work]').forEach(button => button.addEventListener('click', () => {selected=button.dataset.work;update();}));
  document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {mode=button.dataset.mode;update();}));
  document.querySelector('.theme').addEventListener('click', () => {theme=theme === 'dark' ? 'light' : 'dark';update();});
})();
