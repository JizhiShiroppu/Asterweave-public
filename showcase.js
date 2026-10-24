'use strict';
(() => {
  const works = {
    'moss-lamp': {title:'苔灯',count:18,kind:'展示样例 / 等级 3',description:'脚边的微光，静夜里的引路灯。',look:'换到俯视，看看这盏小灯的完整轮廓。'},
    contract: {title:'契约召唤',count:47,kind:'展示样例 / 等级 5',description:'契约与召唤交叠，细密的符文围绕中心展开。',look:'在明暗主题之间切换，找一种喜欢的气氛。'},
    'tidal-city': {title:'潮汐归城',count:162,kind:'展示样例 / 等级 10',description:'将城市与潮汐的想象，铺成一张多层法阵。',look:'先看全貌，再打开大图，找一处喜欢的细节。'},
    single: {title:'守光环',count:1,kind:'局部试作 / 单阵',description:'从一圈守光环，看看法阵里的细节。',look:'放大画面，看看环带与中心的不同层次。'},
    chain: {title:'接口与连接',count:3,kind:'局部试作 / 三层',description:'三层微光逐次展开，一份小巧的叠层试作。',look:'试试俯视和斜视，两种角度各有趣味。'}
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
