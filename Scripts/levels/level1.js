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
            /* Background Music
            this._backgroundMusic = createjs.Sound.play("bgmFloor1");
            this._backgroundMusic.loop = -1; // looping forever
            this._backgroundMusic.volume = 0.3;
            */
            // PlatformB
            // this.AddGameObject(new objects.Platform(0, 80, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            // Vertical Columns
            this.AddGameObject(new objects.Platform(250, 43, 10, managers.GameManager.CurrentLevel.LevelHeight - 30));
            this.AddGameObject(new objects.Platform(375, 690, 5, 374));
            this.AddGameObject(new objects.Platform(485, 163, 1, 130));
            this.AddGameObject(new objects.Platform(485, 490, 1, 243));
            this.AddGameObject(new objects.Platform(485, 810, 1, 135));
            this.AddGameObject(new objects.Platform(595, 68, 1, 325));
            this.AddGameObject(new objects.Platform(595, 590, 1, 225));
            this.AddGameObject(new objects.Platform(710, 150, 1, 240));
            this.AddGameObject(new objects.Platform(710, 590, 1, 130));
            this.AddGameObject(new objects.Platform(710, 930, 1, 100));
            this.AddGameObject(new objects.Platform(820, 150, 1, 550));
            this.AddGameObject(new objects.Platform(820, 810, 1, 110));
            this.AddGameObject(new objects.Platform(940, 45, 1, 580));
            this.AddGameObject(new objects.Platform(940, 1030, 1, 110));
            this.AddGameObject(new objects.Platform(1040, 370, 1, 355));
            this.AddGameObject(new objects.Platform(1040, 810, 1, 250));
            this.AddGameObject(new objects.Platform(1155, 480, 1, 130));
            this.AddGameObject(new objects.Platform(1155, 930, 1, 210));
            this.AddGameObject(new objects.Platform(1265, 255, 1, 120));
            this.AddGameObject(new objects.Platform(1265, 590, 1, 470));
            this.AddGameObject(new objects.Platform(1370, 45, 1, 1015));
            // // Horizontal Rows
            this.AddGameObject(new objects.Platform(380, 45, 985, 30));
            this.AddGameObject(new objects.Platform(282, 150, 83, 30));
            this.AddGameObject(new objects.Platform(710, 150, 95, 30));
            this.AddGameObject(new objects.Platform(1040, 150, 325, 30));
            this.AddGameObject(new objects.Platform(282, 260, 200, 30));
            this.AddGameObject(new objects.Platform(950, 255, 79, 30));
            this.AddGameObject(new objects.Platform(1155, 255, 110, 30));
            this.AddGameObject(new objects.Platform(385, 370, 200, 30));
            this.AddGameObject(new objects.Platform(1046, 370, 220, 30));
            this.AddGameObject(new objects.Platform(282, 480, 83, 30));
            this.AddGameObject(new objects.Platform(490, 480, 290, 30));
            this.AddGameObject(new objects.Platform(1275, 480, 65, 30));
            this.AddGameObject(new objects.Platform(385, 590, 65, 30));
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
            // this.AddGameObject(new objects.Ladder(54, 75, 69, 260));
            this.AddGameObject(new objects.Ladder(90, 537, 66, 229));
            this.AddGameObject(new objects.Ladder(1700, 334, 64, 207));
        };
        Level1.prototype.OnSceneEnter = function () {
            console.log("Loading " + this.Name + "...");
            this.Init();
        };
        Level1.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Level1.prototype.OnSceneExit = function () {
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