# EatWhat GitHub 私人仓库接入说明

本轮以 Markdown 管理产品资料。给同学看[分工说明](./产品组分工说明.md)，开会用[会议提纲](./分工会议提纲.md)，给 AI 看[Git 协作约定](./Git协作约定-给AI.md)。PRD、模块稿和任务看板维护在同一个仓库。

## 当前仓库已经具备什么

2026-10-18 仓库配置与核对结果，成员接入状态统一见任务看板：

| 项目 | 实际状态 |
| --- | --- |
| GitHub 仓库 | [lennney/eatwhat](https://github.com/lennney/eatwhat) |
| 可见性 | PRIVATE，已经是私人仓库 |
| 当前登录账户对仓库的权限 | ADMIN |
| 默认分支／本地当前分支 | main |
| 仓库归档状态 | 已取消归档，可进行产品协作 |
| main 更新权 | [product-main-owner-only](https://github.com/lennney/eatwhat/rules/25347151) 已启用，只有 lennney 可例外更新 |
| 成员权限 | 四位同学按普通协作者读写权限邀请，不授予管理权限；接受情况见看板 |

**本轮沿用这个私人仓库，只管理产品资料。** 使用 README、Markdown 看板和 PR 管理即可。账号已经核实；邀请发出和成员接受是不同状态，实际记录以看板为准。

## 已同步的产品资料

共同起点已同步，提交号见任务看板，包含：

- 根目录 README.md、PRD.md、AGENTS.md、.gitignore，以及 PR 提交说明模板。
- 协作区的分工、会议、入门、Git 说明、看板、决策、模块、模板及既有规则依据。
- 现有原型的源文件、预览导出、导出脚本和说明。
- output/prototype-20261018 下已有的原型检查记录和截图，用于说明样例原型已检查的行为；不代表真实业务或推荐效果已验证。

output/pdf、tmp、早期开发计划和团队背景资料已加入忽略规则，保留本地文件。PDF 是阶段导出，正式协作编辑 Markdown；不批量添加所有未跟踪内容。旧开发任务不进入当前产品任务看板。

早期 chat.md、PRODUCT.md、ISSUES.md 保留在 A 本地，并从当前产品版本退出跟踪。Git 历史没有改写，早期已提交内容仍可在历史中查看；**移出当前版本和 .gitignore 都不能隐藏已有历史。** 本轮不删除本地聊天文件或改写历史。[忽略规则说明](https://docs.github.com/en/get-started/git-basics/ignoring-files)

整理时按明确路径暂存、检查内容，再按当前用户授权提交与推送。推送前核对远端最新 main；如已变化，按正常合并处理，不强推。同步后从 GitHub 打开 README，核对文档链接与原型文件都在，并把共同起点提交号填回看板。

## 你和同学每天怎样用

| 人员 | 工作方式 |
| --- | --- |
| A | 在整合分支接收稿件，维护 PRD、看板、决策和共享原型；统一合入 main |
| B/C/D | 各用任务分支，只改自己的模块与草图，交需求、图、行为例子和未定问题 |
| E | 用设计任务分支维护 E 模块和自己的设计文件入口；共享 HTML 改动单独与 A 协调 |

建议用 PR 交稿：它集中显示修改和讨论，不代表必须互评。成员自查后提交，A 按收到的稿件分批合并；不需要等待其他模块全部齐交。服务器规则已限制 main，成员不能自行更新主干或合并到主干。现有 Markdown 看板继续作为唯一任务状态记录，PR 只承载本次改稿和问题。

个人账号的私人仓库给 collaborator 的是仓库读写权限，不能按 B/C/D 文件夹分别授予权限。“只改自己的模块”仍是协作约定；“main 只由 A 更新”已用实际规则限制。[个人仓库权限](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository)

所有者现有 Pro 方案支持本轮规则。main 的更新、删除和强推受到规则限制，唯一例外为用户 lennney；其余任务分支不匹配该规则。不设置互评人数、CI 或发布检查，A 保留维护权限。[规则含义](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)

## 怎样把同学拉进来

本轮用户已提供四个账号并授权设置访问权限。后续新增成员时，由 A 执行：

1. 收集其余产品成员的 GitHub 用户名，在[看板](./任务看板.md)登记。首次可先请一位同学验证接入，再邀请其余成员。
2. 打开仓库 **Settings → Collaborators → Add people**，搜索并核对用户名，发出邀请。
3. 同学接受邀请后访问私人仓库，按 README 找到自己模块。GitHub Free 也允许私人仓库添加 collaborators；这一步不需要先购买团队方案。[官方邀请步骤](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)
4. 让同学把下方提示交给自己的 AI；先试一次小范围改稿和交付，确认能拉取、推任务分支和提交 PR，再开始完整首稿。

本轮四个已核实账号为 KONGLingyi075、lixiaonan572-commits、Qiao506、Camellia3zzx。第二个账号在用户消息中含特殊连字符，已按 GitHub 返回的普通连字符形式登记。没有按账号顺序推断 B/C/D/E；设计专业成员与其余模块在会议中认领。

## 同学第一次交给 AI 的话

```text
我加入了 EatWhat 产品组，方向是【B/C/D/E】，任务编号是【编号】。
团队私人仓库：https://github.com/lennney/eatwhat
先核对我已接受邀请且能访问仓库；在独立目录 clone，已有目录则先查实际状态。
先读 AGENTS.md、README、协作区/Git协作约定-给AI.md、产品组分工说明及我的模块。
从最新共同起点创建自己的 codex/prd-... 任务分支；不要在 main 直接改稿。
按分工补需求、草图说明、至少 3 条行为例子和未定问题。
只修改本模块和自己的草图，用共同样例起草，不等待其他模块。
根据我本次要求完成本地编辑或远端交稿；推送与 PR 沿用有效授权。
最后交代修改文件、检查结果、分支与提交号、未定问题和模块影响。
```

没有本地 Git 操作经验的成员也可在 GitHub 编辑自己的 Markdown，选择创建新分支并提交 PR；需要体验原型时下载完整目录或 clone 后，用浏览器打开 `协作区/原型/index.html`。先采用本地预览，不为了预览去改变私人仓库的公开范围。

## 会上确定什么，会后做什么

共同起点已同步，账号接入状态见看板。会上确定成员方向、账号与方向的对应关系、首稿截止和 A 汇总时间。成员接受邀请后先验证一人的拉取、任务分支推送和 PR 交稿，再各自异步推进；目前尚未完成成员侧接入验证。

会后通知可直接使用：

```text
项目资料统一在 EatWhat 私人仓库管理：【仓库链接】。
请先接受邀请，阅读 README、产品组分工说明，再看自己的模块。
首稿时间：【实际日期】；交需求、草图／设计稿、至少 3 条行为例子和待定问题。
各自使用任务分支，自查后交 PR，我分批整合；不用相互等稿。
Git 操作可以让 AI 按仓库约定执行，遇到接入问题把实际报错发回。
```
