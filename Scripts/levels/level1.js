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
var levels;
(function (levels) {
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        function Level1(bg) {
            return _super.call(this, "Floor 1", bg) || this;
        }
        Level1.prototype.Init = function () {
            this.SetLevelSize(1550, 1150);
            this.SetLevelBoundarySize(1);
            this.player = new objects.Player();
            this.AddGameObject(this.player);
            // Trap
            // for (let i = 0; i < this._numberOfObstacles; i++) {
            //     let enemy = new objects.Obstacle();
            //     this.AddGameObject(enemy);
            // }
            // Background Music
            // if(this._music.MusicMuted){
            this._backgroundMusic = createjs.Sound.play("bgmFloor1");
            this._backgroundMusic.loop = -1; // looping forever
            this._backgroundMusic.volume = 0.3;
            // this._backgroundMusic.stop();
            // }
            // PlatformB
            // this.AddGameObject(new objects.Platform(0, 80, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            // Vertical Columns
            this.AddGameObject(new objects.Platform(220, 43, 30, managers.GameManager.CurrentLevel.LevelHeight - 30));
            this.AddGameObject(new objects.Platform(340, 690, 30, 374));
            this.AddGameObject(new objects.Platform(450, 163, 30, 130));
            this.AddGameObject(new objects.Platform(450, 490, 30, 243));
            this.AddGameObject(new objects.Platform(450, 810, 30, 135));
            this.AddGameObject(new objects.Platform(560, 68, 30, 325));
            this.AddGameObject(new objects.Platform(560, 590, 30, 225));
            this.AddGameObject(new objects.Platform(675, 150, 30, 240));
            this.AddGameObject(new objects.Platform(675, 590, 30, 130));
            this.AddGameObject(new objects.Platform(675, 930, 30, 100));
            this.AddGameObject(new objects.Platform(780, 150, 30, 565));
            this.AddGameObject(new objects.Platform(780, 810, 30, 125));
            this.AddGameObject(new objects.Platform(895, 45, 30, 580));
            this.AddGameObject(new objects.Platform(895, 1030, 30, 110));
            this.AddGameObject(new objects.Platform(1005, 370, 30, 355));
            this.AddGameObject(new objects.Platform(1005, 810, 30, 250));
            this.AddGameObject(new objects.Platform(1115, 480, 30, 130));
            this.AddGameObject(new objects.Platform(1115, 930, 30, 210));
            this.AddGameObject(new objects.Platform(1225, 255, 30, 120));
            this.AddGameObject(new objects.Platform(1225, 590, 30, 470));
            this.AddGameObject(new objects.Platform(1340, 45, 30, 1015));
            // // Horizontal Rows
            this.AddGameObject(new objects.Platform(380, 45, 985, 30));
            this.AddGameObject(new objects.Platform(264, 150, 101, 30));
            this.AddGameObject(new objects.Platform(710, 150, 95, 30));
            this.AddGameObject(new objects.Platform(1020, 150, 325, 30));
            this.AddGameObject(new objects.Platform(260, 260, 200, 30));
            this.AddGameObject(new objects.Platform(930, 255, 99, 30));
            this.AddGameObject(new objects.Platform(1135, 255, 110, 30));
            this.AddGameObject(new objects.Platform(365, 370, 210, 30));
            this.AddGameObject(new objects.Platform(1046, 370, 220, 30));
            this.AddGameObject(new objects.Platform(282, 480, 83, 30));
            this.AddGameObject(new objects.Platform(460, 480, 310, 30));
            this.AddGameObject(new objects.Platform(1255, 480, 85, 30));
            this.AddGameObject(new objects.Platform(355, 590, 85, 30));
            this.AddGameObject(new objects.Platform(595, 590, 110, 30));
            this.AddGameObject(new objects.Platform(1160, 590, 100, 30));
            this.AddGameObject(new objects.Platform(385, 695, 65, 30));
            this.AddGameObject(new objects.Platform(820, 695, 322, 30));
            this.AddGameObject(new objects.Platform(491, 810, 430, 30));
            this.AddGameObject(new objects.Platform(1040, 810, 225, 30));
            this.AddGameObject(new objects.Platform(491, 920, 100, 30));
            this.AddGameObject(new objects.Platform(820, 920, 200, 30));
            this.AddGameObject(new objects.Platform(385, 1030, 545, 30));
            this.AddGameObject(new objects.Platform(1260, 1030, 80, 30));
            this.AddGameObject(new objects.Platform(282, 1140, 1090, 30));
            // this.AddGameObject(new objects.Platform(1040, 150, 325, 30));
            // this.AddGameObject(new objects.Platform(0, 540, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            // this.AddGameObject(new objects.Platform(0, 767, 880, 23));
            // this.AddGameObject(new objects.Platform(1020, 767, 900, 23));
            // Ladder
            //  Game Winning
            this.AddGameObject(new objects.Ladder(247, 0, 135, 90));
            // this.AddGameObject(new objects.Ladder(1700, 334, 64, 207));
        };
        Level1.prototype.OnSceneEnter = function () {
            console.log("Loading " + this.Name + "...");
            this.Init();
        };
        Level1.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Level1.prototype.OnSceneExit = function () {
            // if(this._music.MusicMuted){
            this._backgroundMusic.stop();
            // }
        };
        Level1.prototype.OnLevelCompleted = function () {
            // managers.GameManager.SceneManager.LoadLevel(2);
            // managers.GameManager.SceneManager._createNewScene(config.Scene.GameOver);
        };
        return Level1;
    }(scenes.Play));
    levels.Level1 = Level1;
})(levels || (levels = {}));
//# sourceMappingURL=level1.js.map