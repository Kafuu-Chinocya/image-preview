"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener("load", function () {
  var preview = new Preview();
  document.querySelector("img").addEventListener("click", function (e) {
    return preview.show(e.target.src);
  });
});
/**
 * 预览图组件
 * 拥有3个外部调用方法
 *      @see show
 *      @see close
 *      @see destroy
 *
 * @class
 * @author Kafuu_Chino <kafuu_chino@girigiri.love>
 */

var Preview = /*#__PURE__*/function () {
  /**
   * @constructor
   */
  function Preview() {
    _classCallCheck(this, Preview);

    // 构造ui对象
    this._ui = new ( /*#__PURE__*/function () {
      /**
       * 初始化工具包和图片参数
       *
       * @constructor
       */
      function _class() {
        var _this = this;

        _classCallCheck(this, _class);

        // 工具包
        this.tools = {
          /**
           * 批量创建同类元素
           * @param eleName - 元素标签名
           * @param num - 所需数量
           * @returns {HTMLElement[]}
           */
          createElements: function createElements(eleName, num) {
            return _toConsumableArray( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      i = 0;

                    case 1:
                      if (!(i < num)) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return document.createElement(eleName);

                    case 4:
                      i++;
                      _context.next = 1;
                      break;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })());
          },

          /**
           * 欧几里得距离
           * @param x1
           * @param y1
           * @param x2
           * @param y2
           * @returns {number}
           */
          eDistance: function eDistance(_ref, _ref2) {
            var _ref3 = _slicedToArray(_ref, 2),
                x1 = _ref3[0],
                y1 = _ref3[1];

            var _ref4 = _slicedToArray(_ref2, 2),
                x2 = _ref4[0],
                y2 = _ref4[1];

            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
          }
        }; // 图片参数

        this.imgArgs = {
          scale: 1.0,
          rotate: 0,
          translate: ["-50%", "-50%"],
          src: "",
          // 更新当前transform style样式
          updateTransformStyle: function updateTransformStyle() {
            return _this.imgLayer.style.transform = "translate(".concat(_this.translate.join(","), ") scale(").concat(_this.scale, ") rotate(").concat(_this.rotate, "deg)");
          },
          // 重置图片样式和imgLayer对象参数为默认值
          resetImgArgs: function resetImgArgs() {
            console.log(_this.imgLayer);

            _this.imgLayer.setAttribute("style", "");

            _this.scale = 1.0;
            _this.rotate = 0;
            _this.translate = ["-50%", "-50%"];
          }
        };
      } // 图片参数getter/setter 操作集


      _createClass(_class, [{
        key: "createBackgroundLayer",

        /**
         * 创建背景盒子
         */
        value: function createBackgroundLayer() {
          var _this2 = this;

          // 创建preview-background-layer盒子
          this.backgroundLayer = document.createElement("div");
          this.backgroundLayer.classList.add("preview-background-layer"); // 点击背景部分关闭

          this.backgroundLayer.addEventListener("click", function (e) {
            var filterClassList = ["iconfont", "preview-img"];

            for (var _i2 = 0, _filterClassList = filterClassList; _i2 < _filterClassList.length; _i2++) {
              var i = _filterClassList[_i2];
              if (e.target.classList.contains(i)) return;
            }

            _this2.close();
          }); // 禁止页面滚动

          ["mousewheel", "DOMMouseScroll", "touchmove"].forEach(function (i) {
            _this2.backgroundLayer.addEventListener(i, function (e) {
              e.preventDefault();
            }, {
              passive: false
            });
          });
          document.body.insertBefore(this.backgroundLayer, document.body.firstElementChild);
        }
        /**
         * 创建内容载体盒子
         */

      }, {
        key: "createContentLayer",
        value: function createContentLayer() {
          var _this3 = this;

          // 创建content-layer-box盒子
          this.contentLayer = document.createElement("div");
          this.contentLayer.classList.add("content-layer-box"); // 创建top-bar，bottom-bar，content-img-box盒子，并赋予相同的class

          var _this$tools$createEle = this.tools.createElements("div", 3),
              _this$tools$createEle2 = _slicedToArray(_this$tools$createEle, 3),
              topBar = _this$tools$createEle2[0],
              contentImgBox = _this$tools$createEle2[1],
              bottomBar = _this$tools$createEle2[2];

          var barClass = ["top-bar", "content-img-box", "bottom-bar"];
          [topBar, contentImgBox, bottomBar].forEach(function (e, i) {
            e.classList.add(barClass[i]);

            _this3.contentLayer.appendChild(e);
          }); // 创建按钮集合

          var _this$_createBtn = this._createBtn(),
              _this$_createBtn2 = _slicedToArray(_this$_createBtn, 5),
              close = _this$_createBtn2[0],
              leftRotate = _this$_createBtn2[1],
              rightRotate = _this$_createBtn2[2],
              zoomIn = _this$_createBtn2[3],
              zoomOut = _this$_createBtn2[4]; // 将相应元素添加至各自节点


          topBar.appendChild(close);
          contentImgBox.appendChild(this._createImg());
          [leftRotate, rightRotate, zoomIn, zoomOut].forEach(function (e) {
            return bottomBar.appendChild(e);
          });
          this.backgroundLayer.appendChild(this.contentLayer);
        }
        /**
         * 创建按钮集合，只能由createContentLayer调用
         *
         * @returns {HTMLElement[]}
         * @private
         * @see createContentLayer
         */

      }, {
        key: "_createBtn",
        value: function _createBtn() {
          var _this4 = this;

          // 创建5组按钮，并赋予相同的class，并编写事件
          var _this$tools$createEle3 = this.tools.createElements("span", 5),
              _this$tools$createEle4 = _slicedToArray(_this$tools$createEle3, 5),
              close = _this$tools$createEle4[0],
              leftRotate = _this$tools$createEle4[1],
              rightRotate = _this$tools$createEle4[2],
              zoomIn = _this$tools$createEle4[3],
              zoomOut = _this$tools$createEle4[4];

          var btnClass = ["icon-close", "icon-left-rotate", "icon-right-rotate", "icon-zoom-in", "icon-zoom-out"];
          [close, leftRotate, rightRotate, zoomIn, zoomOut].forEach(function (e, i) {
            e.classList.add("iconfont", btnClass[i]);
          }); // 关闭按钮

          close.addEventListener("click", function () {
            return _this4.close();
          }); // 左旋转

          leftRotate.addEventListener("click", function () {
            return _this4.rotate -= 90;
          }); // 右旋转

          rightRotate.addEventListener("click", function () {
            return _this4.rotate += 90;
          }); // 放大图片

          zoomIn.addEventListener("click", function () {
            return _this4.scale += 0.2;
          }); // 缩小图片

          zoomOut.addEventListener("click", function () {
            return _this4.scale -= 0.2;
          });
          return [close, leftRotate, rightRotate, zoomIn, zoomOut];
        }
        /**
         *
         * 创建图片对象，只能由createContentLayer调用
         * @returns {HTMLImageElement}
         * @private
         * @see createContentLayer
         */

      }, {
        key: "_createImg",
        value: function _createImg() {
          var _this5 = this;

          this.imgLayer = document.createElement("img");
          this.imgLayer.classList.add("preview-img");
          this.imgLayer.setAttribute("draggable", "false"); // 触摸坐标集合

          var touches; // 双指缩放

          this.contentLayer.addEventListener("touchmove", function (e) {
            if (e.touches.length === 2) {
              _this5.imgLayer.style.transition = "none";
              var nowTouches = [[e.touches[0].clientX, e.touches[0].clientY], [e.touches[1].clientX, e.touches[1].clientY]];

              if (touches && touches.length) {
                // 计算距离
                var nowDistance = _this5.tools.eDistance(nowTouches[0], nowTouches[1]);

                var oldDistance = _this5.tools.eDistance(touches[0], touches[1]);

                if (nowDistance === oldDistance) return; // 缩放比例

                var v = parseFloat((nowDistance / oldDistance / 10).toFixed(2));
                nowDistance > oldDistance ? _this5.scale += v : _this5.scale -= v;
              }

              touches = nowTouches;
            }
          });
          this.contentLayer.addEventListener("touchend", function (e) {
            touches = undefined;
            _this5.imgLayer.style.transition = "transform .3s";
          }); //按下的坐标

          var x1;
          var y1; //元素的left，top值

          var l;
          var t; // 是否长按

          var isLongClick = false; // 鼠标按下/触摸开始 事件 图片绑定鼠标移动事件

          ["mousedown", "touchstart"].forEach(function (i) {
            _this5.imgLayer.addEventListener(i, function (e) {
              e.preventDefault();
              isLongClick = true;
              _this5.imgLayer.style.transition = "none";
              x1 = e.touches ? e.touches[0].clientX : e.clientX;
              y1 = e.touches ? e.touches[0].clientY : e.clientY;
              l = _this5.imgLayer.offsetLeft;
              t = _this5.imgLayer.offsetTop;
            });
          }); // 鼠标/触摸 移动方法

          ["mousemove", "touchmove"].forEach(function (i) {
            _this5.imgLayer.addEventListener(i, function (e) {
              e.preventDefault();

              if (isLongClick) {
                _this5.imgLayer.style.transition = "none"; //获取鼠标移动时的坐标

                var x2 = e.touches ? e.touches[0].clientX : e.clientX;
                var y2 = e.touches ? e.touches[0].clientY : e.clientY; //计算出鼠标的移动距离

                var x = x2 - x1;
                var y = y2 - y1; //移动的数值与元素的left，top相加，得出元素的移动的距离

                var lt = y + t;
                var ls = x + l; //更改元素的left，top值

                _this5.imgLayer.style.top = lt + "px";
                _this5.imgLayer.style.left = ls + "px";
              }
            });
          }); // 鼠标松开 / 移出 / 触摸结束 事件 解绑鼠标移动事件

          ["mouseup", "mouseleave", "touchend"].forEach(function (i) {
            _this5.imgLayer.addEventListener(i, function (e) {
              e.preventDefault();
              isLongClick = false;
              _this5.imgLayer.style.transition = "transform .3s";
            });
          }); // 缩放事件

          ["mousewheel", "DOMMouseScroll"].forEach(function (i) {
            _this5.contentLayer.addEventListener(i, function (e) {
              // 兼容火狐
              var detail = e.detail ? e.detail : e.wheelDelta; // 判断浏览器类型

              var flag = Math.abs(detail) === 120; // 根据浏览器类型赋值

              if (flag) detail > 0 ? _this5.scale += 0.1 : _this5.scale -= 0.1;else detail > 0 ? _this5.scale -= 0.1 : _this5.scale += 0.1;
            });
          });
          return this.imgLayer;
        }
        /**
         * 开启预览图窗口
         * @param src - 原图路径或是base64编码
         */

      }, {
        key: "show",
        value: function show(src) {
          // 预览图元素是首次被创建
          if (!document.querySelectorAll(".preview-background-layer").length) {
            this.createBackgroundLayer();
            this.createContentLayer();
          }

          this.src = src;
        }
        /**
         * 关闭预览图窗口
         */

      }, {
        key: "close",
        value: function close() {
          this.backgroundLayer.classList.add("close");
        }
        /**
         * 销毁对象
         */

      }, {
        key: "destroy",
        value: function destroy() {
          document.body.removeChild(this.backgroundLayer);
        }
      }, {
        key: "src",
        get: function get() {
          return this.imgArgs.src;
        },
        set: function set(v) {
          this.imgArgs.src = v;
          this.imgArgs.resetImgArgs();
          this.imgLayer.src = v;
          if (this.backgroundLayer.classList.contains("close")) this.backgroundLayer.classList.remove("close");
        }
      }, {
        key: "scale",
        get: function get() {
          return this.imgArgs.scale;
        },
        set: function set(v) {
          // 处理浮点数
          this.imgArgs.scale = parseFloat(v.toFixed(2)); // 缩放最小倍率为0.5

          if (Math.abs(v) <= 0.5) this.imgArgs.scale = 0.5;
          this.imgArgs.updateTransformStyle();
        }
      }, {
        key: "rotate",
        get: function get() {
          return this.imgArgs.rotate;
        },
        set: function set(v) {
          this.imgArgs.rotate = v;
          this.imgArgs.updateTransformStyle();
        }
      }, {
        key: "translate",
        get: function get() {
          return this.imgArgs.translate;
        },
        set: function set(v) {
          if (v.length === 2) this.imgArgs.translate = v;
        }
      }]);

      return _class;
    }())();
  }
  /**
   * 开启预览图窗口
   * @param src - 原图路径或是base64编码
   */


  _createClass(Preview, [{
    key: "show",
    value: function show(src) {
      this._ui.show(src);
    }
    /**
     * 关闭预览图窗口
     */

  }, {
    key: "close",
    value: function close() {
      this._ui.close();
    }
    /**
     * 销毁ui对象
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._ui.destroy();

      this._ui = null;
    }
  }]);

  return Preview;
}();
//# sourceMappingURL=image-preview.js.map