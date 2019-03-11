var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOver = /** @class */ (function (_super) {
        __extends(GameOver, _super);
        function GameOver(bgm) {
            var _this = _super.call(this, config.Scene.GameOver, bgm) || this;
            _this.Init();
            return _this;
        }
        GameOver.prototype.OnSceneEnter = function () {
            console.log("GameOver Scene Enter");
            this.Init();
        };
        GameOver.prototype.Init = function () {
            var centerX = managers.GameManager.SceneManager.ScreenWidth / 2;
            var centerY = managers.GameManager.SceneManager.ScreenHeight / 2;
            this._btnRestart = new controls.Button(managers.GameManager.AssetManager.getResult("btnStart"), centerX, centerY + 40, true);
            this._btnRestart.on('click', this._onRestartClicked);
            this.addChild(this._btnRestart);
            // throw new Error("Method not implemented.");
        };
        GameOver.prototype.Update = function () {
            // console.log("GameOver Scene Update");
        };
        GameOver.prototype.OnSceneExit = function () {
            console.log("GameOver Scene Exit");
            this.removeAllChildren();
        };
        GameOver.prototype._onRestartClicked = function () {
            console.log("ReStarting Game");
            managers.GameManager.SceneManager.ChangeScene(config.Scene.Menu);
        };
        return GameOver;
    }(scenes.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map