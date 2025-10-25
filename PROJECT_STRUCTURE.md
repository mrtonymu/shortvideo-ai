# 项目结构说明

## 📁 根目录文件

```
herohook-demo/
├── .github/                 # GitHub配置
│   ├── ISSUE_TEMPLATE/     # Issues模板
│   └── workflows/          # GitHub Actions
├── public/                 # 静态资源
├── src/                    # 源代码
├── .gitignore             # Git忽略文件
├── CONTRIBUTING.md        # 贡献指南
├── LICENSE                # 许可证
├── PROJECT_STRUCTURE.md   # 项目结构说明（本文件）
├── README.md              # 项目说明
├── eslint.config.mjs      # ESLint配置
├── next.config.ts         # Next.js配置
├── package.json           # 项目依赖
├── package-lock.json      # 依赖锁定文件
├── postcss.config.mjs     # PostCSS配置
├── tailwind.config.js     # Tailwind CSS配置
└── tsconfig.json          # TypeScript配置
```

## 📁 源代码结构 (src/)

```
src/
├── app/                   # Next.js App Router
│   ├── dashboard/        # 用户面板页面
│   ├── login/           # 登录页面
│   ├── register/        # 注册页面
│   ├── favicon.ico      # 网站图标
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx        # 主页面
├── components/          # React组件
│   ├── auth/           # 认证相关组件
│   ├── chat/           # 聊天功能组件
│   ├── debug/          # 调试组件
│   ├── layout/         # 布局组件
│   ├── sections/       # 页面区块组件
│   └── ui/             # 基础UI组件
├── contexts/           # React Context
│   └── AuthContext.tsx # 认证上下文
└── hooks/              # 自定义Hooks
    └── useDemoState.ts # 演示状态管理
```

## 📁 组件分类

### UI组件 (src/components/ui/)
- `ModernButton.tsx` - 现代化按钮
- `ModernCard.tsx` - 现代化卡片
- `ModernLoader.tsx` - 加载动画
- `GradientBackground.tsx` - 渐变背景

### 页面区块 (src/components/sections/)
- `HeroSection.tsx` - 首页Hero区域
- `ProblemSection.tsx` - 问题展示
- `SolutionSection.tsx` - 解决方案
- `PricingSection.tsx` - 定价方案

### 聊天功能 (src/components/chat/)
- `ChatInterface.tsx` - 聊天界面
- `BubbleChat.tsx` - 浮动聊天泡泡
- `ControlledInput.tsx` - 受控输入组件

### 认证组件 (src/components/auth/)
- `LoginPrompt.tsx` - 登录提示弹窗

### 布局组件 (src/components/layout/)
- `Navbar.tsx` - 导航栏

### 调试组件 (src/components/debug/)
- `DemoReset.tsx` - 演示重置功能

## 📁 页面结构 (src/app/)

### 主页面
- `page.tsx` - 首页，包含所有区块组件

### 认证页面
- `login/page.tsx` - 登录页面
- `register/page.tsx` - 注册页面

### 用户页面
- `dashboard/page.tsx` - 用户面板

### 配置文件
- `layout.tsx` - 根布局，包含认证提供者
- `globals.css` - 全局样式
- `favicon.ico` - 网站图标

## 📁 状态管理

### Context (src/contexts/)
- `AuthContext.tsx` - 用户认证状态管理

### Hooks (src/hooks/)
- `useDemoState.ts` - 演示状态管理Hook

## 📁 静态资源 (public/)

- `file.svg` - 文件图标
- `globe.svg` - 地球图标
- `next.svg` - Next.js图标
- `vercel.svg` - Vercel图标
- `window.svg` - 窗口图标

## 📁 GitHub配置 (.github/)

### Issues模板 (.github/ISSUE_TEMPLATE/)
- `bug_report.md` - Bug报告模板
- `feature_request.md` - 功能请求模板
- `improvement.md` - 改进建议模板

### 工作流 (.github/workflows/)
- `ci.yml` - CI/CD自动化流程

## 🔧 配置文件说明

### 核心配置
- `package.json` - 项目依赖和脚本
- `tsconfig.json` - TypeScript配置
- `next.config.ts` - Next.js配置
- `tailwind.config.js` - Tailwind CSS配置

### 代码质量
- `eslint.config.mjs` - ESLint代码检查
- `postcss.config.mjs` - PostCSS配置

### 项目管理
- `.gitignore` - Git忽略文件
- `README.md` - 项目说明文档
- `CONTRIBUTING.md` - 贡献指南
- `LICENSE` - MIT许可证

## 🎯 开发建议

1. **组件复用** - 优先使用 `src/components/ui/` 中的基础组件
2. **状态管理** - 使用 Context 和自定义 Hooks
3. **样式规范** - 使用 Tailwind CSS 类名
4. **类型安全** - 充分利用 TypeScript
5. **代码质量** - 遵循 ESLint 规则
