# 简易计算器 / Simple Calculator

> 中文与英文双语说明。下面先给出中文说明，随后是英文翻译。

---

## 中文说明

这是一个简单的计算器示例，使用纯 HTML、CSS 和 JavaScript 实现，演示基本的前端交互和表达式计算。

### 文件
- `index.html` — 应用入口，包含布局与按钮。
- `styles.css` — 样式文件��负责外观与响应式布局。
- `script.js` — 交互与计算逻辑（支持点击与键盘输入）。

### 功能
- 四则运算：加、减、乘、除（+ − × ÷）。
- 百分号支持（例如 `50%` 将作为 `0.5` 处理）。
- 小数点输入。
- 清除（C）与退格（⌫）。
- 点击和键盘两种交互方式（支持数字、运算符、回车计算、Esc 清除和退格）。

### 在本地运行
1. 克隆仓库：
   git clone https://github.com/MaFei24/test7.24.git
2. 打开文件 `index.html`：在浏览器中直接打开，或在 VS Code 中使用 Live Server 插件以获得实时预览。

### 注意事项
- 当前的表达式求值使用了 `Function(...)` 来执行计算（类似 `eval`）。为尽量降低风险，代码中对输入做了简单的过滤，仅允许数字、运算符、小数点、括号和 `%`。但仍建议不要在不受信任的环境中直接把用户输入当作代码执行。
- 如果你需要更安全的求值器，我可以将计算逻辑替换为不依赖 `eval`/`Function` 的解析器（例如基于逆波兰表示法或使用现成的数学表达式解析库）。

### 后续改进建议
- 添加括号优先级高亮与更严格的表达式解析。
- 支持科学计算（如幂、三角函数、对数）或历史记录功能。
- 为无障��（a11y）增强键盘导航与屏幕阅读器支持。

---

## English (Translation)

This is a simple calculator example implemented with plain HTML, CSS, and JavaScript, demonstrating basic front-end interaction and expression evaluation.

### Files
- `index.html` — App entry, contains layout and buttons.
- `styles.css` — Styling for appearance and responsive layout.
- `script.js` — Interaction and calculation logic (supports click and keyboard input).

### Features
- Basic arithmetic: addition, subtraction, multiplication, division (+ − × ÷).
- Percent support (e.g. `50%` is treated as `0.5`).
- Decimal point input.
- Clear (C) and backspace (⌫).
- Both mouse and keyboard input supported (numbers, operators, Enter to compute, Esc to clear, Backspace to delete).

### Run locally
1. Clone the repo:
   git clone https://github.com/MaFei24/test7.24.git
2. Open `index.html` in a browser, or use the Live Server extension in VS Code for live preview.

### Notes
- The expression evaluation currently uses `Function(...)` to execute the expression (similar to `eval`). To reduce risk, the code applies a simple filter that allows only digits, operators, decimal point, parentheses, and `%`. Still, avoid using this UI to execute untrusted input.
- If you prefer a safer evaluator, I can replace the calculation logic with a non-`eval` parser (for example, based on Reverse Polish Notation or by using a vetted math expression library).

### Suggested improvements
- Add parentheses highlighting and stricter expression parsing.
- Support scientific functions (power, trig, log) or calculation history.
- Improve accessibility (a11y) for keyboard navigation and screen readers.

---

## License / 许可证
示例代码默认开放使用；如果你需要明确许可（如 MIT），我可以为仓库添加 `LICENSE` 文件。

---

如果你想，我可以继续：
- 将 README 中添加示例截图或 GIF；
- 在仓库启用 GitHub Pages 并部署在线演示；
- 将 README 中的英文改为更正式的文档风格或添加使用案例与 API（如果增加功能）。

If you want, I can also:
- Add example screenshots or GIFs to the README;
- Enable GitHub Pages for this repository and deploy an online demo;
- Expand the English section into formal documentation or add usage examples if new features are added.
