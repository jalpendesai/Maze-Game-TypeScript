module objects {
    export class Player extends objects.GameObject {

        private _movementSpeed: number = 5;
        private _jumpForce: number = 100;

        // GameObject Components
        private _rb2d: components.Rigidbody2D;
        private _hp: components.HealthComponent;
        private _shield: components.HealthComponent;
        private _sfxBallon : createjs.AbstractSoundInstance;


        // private _reloadScene : managers.SceneManager;
        // private _gameOverScene : managers.GameManager;
        // GUI Controls
        // private _healthBar: controls.ProgressBar;
        // private _shieldBar: controls.ProgressBar;

        private _isPlayingAnimation: boolean;

        private _lastLadder: objects.Ladder;
        private _lastPlatform: objects.Platform;

        private _action: objects.Action;
        private _direction: objects.Direction;

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

        constructor() {
            super(1450, 1100, 32, 32,
                {
                    framerate: 1,
                    images: [managers.GameManager.AssetManager.getResult("player")],
                    frames: { width: 32, height: 32 }
                });
            console.log(this.x, this.y);
            this.name = "player";
            this._direction = Direction.LEFT;
            // this.playAndStopAnimation("stand");
            // Add Rigidbody to allow gravity
            this._rb2d = new components.Rigidbody2D(this);
            this.AddComponent(this._rb2d);
            // Add Health
            this._hp = new components.HealthComponent(this, 100);
            this._hp.RegenerateRate = 0.1;
            this.AddComponent(this._hp);
            // Add Shield
            this._shield = new components.HealthComponent(this, 80);
            this._shield.RegenerateRate = 0.1;
            this.AddComponent(this._shield);
            // Add Collider
            this.collider = new components.Collider(this, this.PivotX, this.PivotY, this.Width, this.Height);
            this.AddComponent(this.collider);

            // managers.GameManager.CameraManager.Follow(this);
            // this._healthBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 24, 150, 20, this._hp.Value, "black", "red", 2, "#D3D3D3");
            // this._healthBar.Value = 100;

            // this._shieldBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 54, 150, 20, this._shield.Value, "black", "cyan", 2, "#D3D3D3");
            // this._shieldBar.Value = this._shield.Value;

            // managers.GameManager.CurrentLevel.AddInGameGUIControl(this._healthBar);
            // managers.GameManager.CurrentLevel.AddInGameGUIControl(this._shieldBar);
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height);
            // this._reloadScene = new managers.SceneManager();
            // managers.GameManager.SceneManager = this._reloadScene;
            
        }

        public OnSceneEnter(): void {
            console.log("x=", this.x);
            console.log("y=", this.y);
        }

        public UpdateTransform(): void {

            this.checkMovementInput();
            // this.checkJumpInput();

            // Testing
            // if (managers.InputManager.KeyUp(config.Key.G)) {
            //     this._hp.Reduce(10);
            //     this._healthBar.Value = this._hp.Value;
            // }
            //this.x = managers.GameManager.SceneManager.CurrentStage.mouseX;
            //this.y = managers.GameManager.SceneManager.CurrentStage.mouseY;
        }

        public OnAction(): void {
            switch (this._action) {
                case Action.STANDING:
                    // this.playAndStopAnimation("stand");
                    break;
                case Action.WALKING:
                    if (!this._isPlayingAnimation) {
                        // this.playAnimation("run");
                    }
                    break;
                case Action.JUMPING:
                    if (!this._isPlayingAnimation) {
                        // this.playAndStopAnimation("jump");
                    }
                    break;
                case Action.CLIMBING:
                    if (!this._isPlayingAnimation) {
                        // this.playAnimation("climbing");
                    }
                    break;
                case Action.INTERACTING:
                    break;
            }
        }

        private checkMovementInput() {
            // If not climbing then player can move left or right
            if (this._action != Action.CLIMBING) {
                if (managers.InputManager.KeyDown(config.Key.LEFT)) {
                    this._action = Action.WALKING;
                    this._direction = Direction.LEFT;
                }
                else if (managers.InputManager.KeyDown(config.Key.RIGHT)) {
                    this._action = Action.WALKING;
                    this._direction = Direction.RIGHT;
                }
                else if (managers.InputManager.KeyDown(config.Key.UP)) {
                    this._action = Action.WALKINGy;
                    // this._rb2d.GravityScale = 0;
                    this.y -= this._movementSpeed;
                }
                else if (managers.InputManager.KeyDown(config.Key.DOWN)) {
                    this._action = Action.WALKINGy;
                    this.y += this._movementSpeed;
                }
                else {
                    if (this._action == Action.WALKING) {
                        this._action = Action.STANDING;
                    }
                }
            }
            if (managers.InputManager.KeyDown(config.Key.F)) {
                // this.y -= this._jumpForce;
                console.log("Current X= ", this.x);
                console.log("Current Y= ", this.y);
            }

            if (this._action == Action.WALKING) {
                this.x += this._movementSpeed * this._direction;
            }

        }

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

        public CheckBoundary() {
            super.CheckBoundary();
        }

        public onFinishJump() {
            createjs.Tween.get(this).to({ y: this.y + this._jumpForce }, 500).call(() => this._action = Action.STANDING);
        }

        public OnCollisionEnter(other: objects.GameObject) {


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
        }

        public OnCollisionExit(other: objects.GameObject) {
            if (other.name === "ladder" && utils.Util.NotNullOrUndefined(this._lastLadder) && other === this._lastLadder) {
                // //console.log(this.collider.y + " " + other.Collider.y);
                // console.log("Exit");
                // if (this.y < other.y - this.Height) {
                //     this._lastLadder = null;
                //     this._rb2d.GravityScale = 1;
                //     this._isClamping = false;
                // }
            }

        }

        public ReloadScene() {
            // managers.GameManager.SceneManager.LoadLevel(1);
            this._sfxBallon = createjs.Sound.play("sfxHit");
            this._sfxBallon.volume = 0.3;
            this.x = 1450;
            this.y = 1100;
        }

        private GameOverScene() {
            managers.GameManager.SceneManager.ChangeScene(config.Scene.GameOver);
        }
    }
}
