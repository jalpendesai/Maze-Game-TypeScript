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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // constructor() {
        //     super(1450, 1100, 32, 32, {
        //         framerate: 1,
        //         images: [managers.GameManager.AssetManager.getResult("spritesheet_player")],
        //         frames: { width: 32, height: 32 },
        //         animations: {
        //             standRight: 15,
        //             standLeft: 14,
        //             runLeft: [16, 18, "runLeft", 0.5], // Frames, next, speed
        //             runRight: [19, 21, "runRight", 0.5],
        //             jumpLeft: [1, 6, "jumpLeft"],
        //             jumpRight: [8, 13, "jumpRight"],
        //             climbing: [22, 23]
        //         }
        //     });
        function Player() {
            var _this = _super.call(this, 1450, 1100, 32, 32, {
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("player")],
                frames: { width: 32, height: 32 }
            }) || this;
            _this._movementSpeed = 5;
            _this._jumpForce = 100;
            console.log(_this.x, _this.y);
            _this.name = "player";
            _this._direction = objects.Direction.LEFT;
            // this.playAndStopAnimation("stand");
            // Add Rigidbody to allow gravity
            _this._rb2d = new components.Rigidbody2D(_this);
            _this.AddComponent(_this._rb2d);
            // Add Health
            _this._hp = new components.HealthComponent(_this, 100);
            _this._hp.RegenerateRate = 0.1;
            _this.AddComponent(_this._hp);
            // Add Shield
            _this._shield = new components.HealthComponent(_this, 80);
            _this._shield.RegenerateRate = 0.1;
            _this.AddComponent(_this._shield);
            // Add Collider
            _this.collider = new components.Collider(_this, _this.PivotX, _this.PivotY, _this.Width, _this.Height);
            _this.AddComponent(_this.collider);
            return _this;
            // managers.GameManager.CameraManager.Follow(this);
            // this._healthBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 24, 150, 20, this._hp.Value, "black", "red", 2, "#D3D3D3");
            // this._healthBar.Value = 100;
            // this._shieldBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 54, 150, 20, this._shield.Value, "black", "cyan", 2, "#D3D3D3");
            // this._shieldBar.Value = this._shield.Value;
            // managers.GameManager.CurrentLevel.AddInGameGUIControl(this._healthBar);
            // managers.GameManager.CurrentLevel.AddInGameGUIControl(this._shieldBar);
        }
        Player.prototype.Init = function () {
            this.SetPivotPoint(this.Width / 2, this.Height);
            // this._reloadScene = new managers.SceneManager();
            // managers.GameManager.SceneManager = this._reloadScene;
        };
        Player.prototype.OnSceneEnter = function () {
            console.log("x=", this.x);
            console.log("y=", this.y);
        };
        Player.prototype.UpdateTransform = function () {
            this.checkMovementInput();
            // this.checkJumpInput();
            // Testing
            // if (managers.InputManager.KeyUp(config.Key.G)) {
            //     this._hp.Reduce(10);
            //     this._healthBar.Value = this._hp.Value;
            // }
            //this.x = managers.GameManager.SceneManager.CurrentStage.mouseX;
            //this.y = managers.GameManager.SceneManager.CurrentStage.mouseY;
        };
        Player.prototype.OnAction = function () {
            switch (this._action) {
                case objects.Action.STANDING:
                    // this.playAndStopAnimation("stand");
                    break;
                case objects.Action.WALKING:
                    if (!this._isPlayingAnimation) {
                        // this.playAnimation("run");
                    }
                    break;
                case objects.Action.JUMPING:
                    if (!this._isPlayingAnimation) {
                        // this.playAndStopAnimation("jump");
                    }
                    break;
                case objects.Action.CLIMBING:
                    if (!this._isPlayingAnimation) {
                        // this.playAnimation("climbing");
                    }
                    break;
                case objects.Action.INTERACTING:
                    break;
            }
        };
        Player.prototype.checkMovementInput = function () {
            // If not climbing then player can move left or right
            if (this._action != objects.Action.CLIMBING) {
                if (managers.InputManager.KeyDown(config.Key.LEFT)) {
                    this._action = objects.Action.WALKING;
                    this._direction = objects.Direction.LEFT;
                }
                else if (managers.InputManager.KeyDown(config.Key.RIGHT)) {
                    this._action = objects.Action.WALKING;
                    this._direction = objects.Direction.RIGHT;
                }
                else if (managers.InputManager.KeyDown(config.Key.UP)) {
                    this._action = objects.Action.WALKINGy;
                    // this._rb2d.GravityScale = 0;
                    this.y -= this._movementSpeed;
                }
                else if (managers.InputManager.KeyDown(config.Key.DOWN)) {
                    this._action = objects.Action.WALKINGy;
                    this.y += this._movementSpeed;
                }
                else {
                    if (this._action == objects.Action.WALKING) {
                        this._action = objects.Action.STANDING;
                    }
                }
            }
            if (managers.InputManager.KeyDown(config.Key.F)) {
                // this.y -= this._jumpForce;
                console.log("Current X= ", this.x);
                console.log("Current Y= ", this.y);
            }
            if (this._action == objects.Action.WALKING) {
                this.x += this._movementSpeed * this._direction;
            }
        };
        // private checkJumpInput() {
        //     if (managers.InputManager.KeyUp(config.Key.SPACE) && this._action != Action.JUMPING) {
        //         this._action = Action.JUMPING;
        //         createjs.Tween.get(this).to({ y: this.y - this._jumpForce }, 300).call(this.onFinishJump);
        //         //createjs.Sound.play("sfxHit");
        //     }
        //     // if (managers.InputManager.KeyDown(config.Key.F)) {
        //     //     // this.y -= this._jumpForce;
        //     //     console.log("Current X= ",this.x);
        //     //     console.log("Current Y= ",this.y);
        //     // }
        //     if (managers.InputManager.KeyDown(config.Key.V)) {
        //         this.y += this._jumpForce;
        //     }
        // }
        // private playAnimation(animation: string) {
        //     if (this._direction == Direction.RIGHT) {
        //         this.Sprite.gotoAndPlay(animation + "Right");
        //     }
        //     else {
        //         this.Sprite.gotoAndPlay(animation + "Left");
        //     }
        //     this._isPlayingAnimation = true;
        // }
        // private playAndStopAnimation(animation: string) {
        //     if (this._direction == Direction.RIGHT) {
        //         this.Sprite.gotoAndStop(animation + "Right");
        //     }
        //     else {
        //         this.Sprite.gotoAndStop(animation + "Left");
        //     }
        //     this._isPlayingAnimation = false;
        // }
        Player.prototype.CheckBoundary = function () {
            _super.prototype.CheckBoundary.call(this);
        };
        Player.prototype.onFinishJump = function () {
            var _this = this;
            createjs.Tween.get(this).to({ y: this.y + this._jumpForce }, 500).call(function () { return _this._action = objects.Action.STANDING; });
        };
        Player.prototype.OnCollisionEnter = function (other) {
            // if (this._action != Action.CLIMBING) {
            //     // if (other.name === "platform") {
            //     //     this.y = other.Collider.Top + this.regY / 2;
            //     // }
            // }
            // else {
            //     if (utils.Util.NotNullOrUndefined(this._lastPlatform) && this._lastPlatform == other) {
            //         this._action = Action.STANDING;
            //     }
            // }
            if (other.name === "platform") {
                console.log("Collided");
                // managers.GameManager.SceneManager.LoadLevel(1);
                // return;
                // managers.GameManager.SceneManager.LoadLevel(1);
                // if ((this.x > other.Collider.Right) && ((this.x && this.y) != other.Collider.Top && (this.x && this.y) != other.Collider.Bottom)) {
                //     console.log("Right Collider");
                //     this.x = other.Collider.Right + this.PivotX ;
                // }
                // else if ((this.x < other.Collider.Left) && ((this.x && this.y) != other.Collider.Top && (this.x && this.y) != other.Collider.Bottom)) {
                //     console.log("Left Collider");
                //     this.x = other.Collider.Left - this.PivotX;
                // }
                // else if ((this.y < other.Collider.Top) && ((this.x && this.y)!=other.Collider.Left && (this.x && this.y)!=other.Collider.Bottom) && (this.x && this.y)!=other.Collider.Right) {
                //     console.log("Top Collider");
                //     this.y = other.Collider.Top - this.Collider.Height;
                // }
                // else if ((this.y < other.Collider.Bottom) && ((this.x && this.y) != other.Collider.Left && (this.x && this.y) != other.Collider.Right && (this.x && this.y) != other.Collider.Top)
                // && (this.x > other.Collider.Left || this.x < other.Collider.Right)) {
                //     console.log("Bottom Collider");
                //     this.y = other.Collider.Bottom  + this.PivotY;
                // }
                if (this.x > other.Collider.Right) {
                    this.x = other.Collider.Right + this.Collider.Width - this.PivotX;
                }
                else if (this.x < other.Collider.Left) {
                    this.x = other.Collider.Left - this.Collider.Width + this.PivotX;
                }
                else if (this.y > other.Collider.Bottom) {
                    this.y = other.Collider.Bottom + this.Collider.Height;
                }
                else if (this.y > other.Collider.Top) {
                    this.y = other.Collider.Top;
                }
                this.ReloadScene();
            }
            if (other.name === "ladder") {
                // if (managers.InputManager.KeyDown(config.Key.UP)) {
                //     this._lastLadder = other;
                //     this.y -= this._movementSpeed;
                //     this._rb2d.GravityScale = 0;
                //     this._action = Action.CLIMBING;
                //     this.Sprite.gotoAndPlay("climbing");
                // }
                // else if (managers.InputManager.KeyDown(config.Key.DOWN)) {
                //     this._lastPlatform = other;
                //     this._action = Action.CLIMBING;
                //     this.Sprite.gotoAndPlay("climbing");
                //     this.y += this._movementSpeed;
                // }
                // let go = levels.Level1.OnLevelCompleted();
                // this._reloadScene.ChangeScene(config.Scene.GameOver);
                // if(this._reloadScene != null){
                //     this._reloadScene.Update();
                // }
                this.GameOverScene();
            }
        };
        Player.prototype.OnCollisionExit = function (other) {
            if (other.name === "ladder" && utils.Util.NotNullOrUndefined(this._lastLadder) && other === this._lastLadder) {
                // //console.log(this.collider.y + " " + other.Collider.y);
                // console.log("Exit");
                // if (this.y < other.y - this.Height) {
                //     this._lastLadder = null;
                //     this._rb2d.GravityScale = 1;
                //     this._isClamping = false;
                // }
            }
        };
        Player.prototype.ReloadScene = function () {
            // managers.GameManager.SceneManager.LoadLevel(1);
            this._sfxBallon = createjs.Sound.play("sfxHit");
            this._sfxBallon.volume = 0.3;
            this.x = 1450;
            this.y = 1100;
        };
        Player.prototype.GameOverScene = function () {
            managers.GameManager.SceneManager.ChangeScene(config.Scene.GameOver);
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map