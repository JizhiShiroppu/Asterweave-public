# Asterweave · 编织星辰

**一门可读、可写的法阵图形语言，以及按这门语言生成法阵的工具。**

符文写内容，几何组织结构。我希望法阵上的每个有含义的元素都能说清楚、读回来，也能在修改后继续保存和使用。

![潮汐归城 · 斜视展开](assets/tidal-city-dark-oblique.svg)

*潮汐归城：162 个阵组成的完整法术样例。斜视把层次展开，接口与柔光柱显示已有的父子归属。它们不代表新增的能量流向。*

**2026-10-24 更新 · 0.9.0 公测** · 现在可以在浏览器里试用星辰工作室：生成法阵、调整结构与构图、保存作品；也可以使用自己的 DeepSeek 临时 Key，把魔法描述整理成结构后生成。

[打开星辰工作室（免登录）](https://jizhishiroppu.github.io/Asterweave-public/try/) · [网页展示](https://jizhishiroppu.github.io/Asterweave-public/) · [看五个展示样例](docs/gallery.md) · [一个法术怎样组织](docs/program-example.md) · [原则与路线](docs/direction.md) · [参与协作](CONTRIBUTING.md)

## 直接试用

打开[星辰工作室](https://jizhishiroppu.github.io/Asterweave-public/try/)，从内置示例开始。可以切换片段生成、构图调整与结构节点，修改后导出 JSON 保存作品，或导出 SVG／PNG 画面。`Shift+F` 进入全屏展示，`P` 播放或暂停环带自转。

想用魔法描述生成，打开模型设置，填入自己的 DeepSeek API Key 并测试连接。Key 只保留在当前页面内存，刷新或关闭后清除，不写入浏览器存储、作品或导出文件。页面直接请求 DeepSeek，不经过项目中转；你输入的描述会发送给模型服务，调用费用由你的模型账户承担。模型输出仍需检查，不能把成功生成视为内容与布局都已满意。

作品和普通设置保存在当前浏览器；重要作品请导出 JSON，清理浏览器数据或更换设备前尤其如此。结构化编辑、内置示例和画面导出不需要模型 Key。下载仓库 ZIP 并解压后，双击 `try/index.html` 可离线创作，使用模型时仍需联网。

## 先看法阵

| 苔灯 · 18 个阵 | 契约召唤 · 47 个阵 |
| --- | --- |
| ![苔灯](assets/moss-lamp-dark-oblique.svg) | ![契约召唤](assets/contract-dark-oblique.svg) |
| 从苔光成形、脚边导引到静夜维持、归途熄光。 | 观察契约与召唤内容怎样组成多层结构。 |

![潮汐归城 · 俯视](assets/tidal-city-dark-flat.svg)

*潮汐归城：162 个阵。俯视看整体构图，斜视看层次；两种视角使用同一份作品。完整图见[成果图册](docs/gallery.md)。*

[网页展示](https://jizhishiroppu.github.io/Asterweave-public/)可直接免登录查看，支持俯视／斜视、明暗主题和 SVG 下载。也可以下载仓库 ZIP 并解压，双击 `index.html` 离线浏览；`try/index.html` 是可创作的工作室。

## 现在可以做什么

| 当前能力 | 实际范围 |
| --- | --- |
| 结构化内容 → 法阵 | 用定义、动作、成员组织内容，生成分级画法、嵌套子阵和环形符文。现有样例已打通；不保证任意输入都能得到满意布局。 |
| 在同一工作台创作 | 内容、画布、参数、检查、撤销／重做和文件入口共用一个界面；节点编辑原型也已接入。 |
| 看清层次 | 俯视、斜视、阵内部位浮起、直属接口和柔光柱；背景星点默认关闭。 |
| 调整局部 | 选中一个子阵，拖动位置，调整大小、旋转和整体浮起；后代、接口与连接随动。顶层阵与单个部位的平面形状编辑尚未开放。 |
| 保存与继续 | SVG 导出画面，JSON 保存可继续编辑的作品；Windows 本地版已有工作目录、作品库、自动保存、备份和重启恢复。 |
| 离线使用与复现 | 已有本地软件与网页版，两端共用生成核心；同一含义、记法、参数和版本得到同一结果，旧作品按记录版本重建。 |

目前以本地软件优先、普通网站并行推进。此公开库包含可独立运行的网页版与展示资料；Windows 本地版的工作目录、自动保存与备份恢复不属于网页试用范围。

## 「能读回」做到哪里了

它是项目的验收要求，也需要分开说明验证范围：

- 既有平面生成链已完成代表性法术的 SVG 几何读回，借助词表识别词与类别。
- 当前工作室支持从本项目的紧凑 SVG 读取结构；旧版 SVG 可能缺少必要记号，不能把借作品资料补全的结果当作独立几何识读。
- 有损字形不能反推出任意原文；不支持任意图片识别，也不模拟真实魔法效果、耗时或能量。

展示图库里的 SVG 仅保留绘图数据，不能当作完整作品重新载入编辑。五例沿用已保存的 `layered-4`；当前工作室采用 `layered-7`，底层保留旧版本重建；工作室打开旧作品时会升级到当前画法，可撤销。要继续编辑自己的作品，请保存工作室导出的完整 JSON。

## 接下来一起改善什么

我们现在最需要具体的观看和创作反馈：复杂法阵哪里遮挡、文字哪里太密、子阵怎样更紧凑，以及第一次创作时哪一步不清楚。提出新记法时，需要同时说明表达什么、如何读回、哪些属性允许自由调整。

可以从一张标注图、一个最小输入或一处说明修改开始。视觉、规则、布局、交互和测试贡献都欢迎，方向与规则由维护者审核，不要求长期投入或使用 AI。

**[发起协作或提出建议](https://github.com/JizhiShiroppu/Asterweave-public/issues/new/choose)**

## 关于公开资料

这里提供项目介绍、成果图、网页版试用与协作入口。网页包含运行所需的前端程序与内置示例，不含外部参考图、小说项目资料、作者的实际模型测试作品、凭据或私有开发历史。展示图库不含完整作品数据。尚未选定通用开源许可证；使用和再分发请先与维护者确认。

**English:** Asterweave develops a readable, writable graphical language for magic circles. [Try the browser studio](https://jizhishiroppu.github.io/Asterweave-public/try/) without signing in: edit structure, arrange layered circles, and export editable JSON or SVG／PNG artwork. Natural-language input uses your own DeepSeek API key, held only in page memory and cleared on reload. Requests go directly to DeepSeek and use your account's quota. The studio also works offline with built-in examples and structured input. This repository includes the frontend runtime and public examples, but no credentials, private project history, or personal model-test works. Compact SVGs exported by this studio support structural readback; older SVGs and display-only copies have different limits. Concrete visual and usability feedback is welcome through Issues.
