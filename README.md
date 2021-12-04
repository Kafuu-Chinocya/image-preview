# image-preview

图片预览组件

用法：

```javascript
window.addEventListener("load", () => {
  const preview = new Preview();
  document
    .querySelector("img")
    .addEventListener("click", (e) => preview.show(e.target.src));
});
```
