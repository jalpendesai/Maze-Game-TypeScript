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
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        function Menu(bgm) {
            var _this = _super.call(this, config.Scene.Menu, bgm) || this;
            _this._musicMuted = false;
            _this.Init();
            return _this;
        }
        Object.defineProperty(Menu.prototype, "MusicMuted", {
            get: function () {
                return this._musicMuted;
            },
            set: function (player) {
                this._musicMuted = player;
            },
            enumerable: true,
            configurable: true
        });
        Menu.prototype.OnSceneEnter = function () {
            console.log("Menu Scene Enter");
            this.Init();
        };
        Menu.prototype.Init = function () {
            var _this = this;
            var centerX = managers.GameManager.SceneManager.ScreenWidth / 2;
            var centerY = managers.GameManager.SceneManager.ScreenHeight / 2;
            // this._lbGameName = new controls.Label(config.GameInfo.GameName, centerX, centerY / 2, 50, "Arial bold", "#000000", true);
            // this._lbVersion = new controls.Label(config.GameInfo.Version, 0, 0, 15, "Arial bold", "#000000", true);
            // this._lbVersion.x = this._lbVersion.getMeasuredWidth();
            // this._lbVersion.y = managers.GameManager.SceneManager.ScreenHeight - this._lbVersion.getMeasuredHeight();
            this._btnStart = new controls.Button(managers.GameManager.AssetManager.getResult("btnStart"), centerX, centerY + 40, true);
            this._btnMute = new controls.Button(managers.GameManager.AssetManager.getResult("btnUnmute"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);
            this._btnStart.on('click', this._onStartClicked);
            //Three types of event handling and 'this' keyword inside the function actually refers to different object
            // this._btnMute.on('click', this._onMuteClicked); //  'this' refers to button
            // this._btnMute.addEventListener('click', this._onMuteClicked); //  'this' refers to windows
            this._btnMute.on('click', function () { return _this._onMuteClicked(); }); //  'this' refers to menu
            // this.addChild(this._lbGameName);
            // this.addChild(this._lbVersion);
            this.addChild(this._btnStart);
            this.addChild(this._btnMute);
        };
        Menu.prototype.Update = function () {
        };
        Menu.prototype.OnSceneExit = function () {
            console.log("Menu Scene Exit");
            this.removeAllChildren();
        };
        //#region UI Handler
        Menu.prototype._onStartClicked = function () {
            console.log("Start Game");
            managers.GameManager.SceneManager.LoadLevel(1);
        };
        Menu.prototype._onMuteClicked = function () {
            if (this.MusicMuted) {
                this._btnMute = new controls.Button(managers.GameManager.AssetManager.getResult("btnUnmute"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);
                this._btnMute.SetBackgroundImage(managers.GameManager.AssetManager.getResult("btnUnmute"));
            }
            else {
                this._btnMute = new controls.Button(managers.GameManager.AssetManager.getResult("btnMuted"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);
                //      this._btnMute.SetBackgroundImage(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnMuted"));
                //   this._btnMute.image =(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnMuted")).image;
                this.stage.addChild(this._btnMute);
                this.stage.update();
            }
            this.MusicMuted = !this.MusicMuted;
        };
        return Menu;
    }(scenes.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map