module scenes{
    export class GameOver extends scenes.Scene{

        private _btnRestart: controls.Button;


        

        constructor(bgm: createjs.Bitmap){
            super(config.Scene.GameOver, bgm);
            this.Init();
        }

        public OnSceneEnter(): void {
            console.log("GameOver Scene Enter");
            this.Init();
        }

        public Init() {
            let centerX = managers.GameManager.SceneManager.ScreenWidth / 2;
            let centerY = managers.GameManager.SceneManager.ScreenHeight / 2;

            this._btnRestart = new controls.Button(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnStart"), 
                                centerX, centerY + 40, true);

            this._btnRestart.on('click',this._onRestartClicked);
            this.addChild(this._btnRestart);
            // throw new Error("Method not implemented.");
        }


        public Update(): void {
            // console.log("GameOver Scene Update");
        }
        public OnSceneExit(): void {
            console.log("GameOver Scene Exit");
            this.removeAllChildren();
        }

        private _onRestartClicked(): void{
            console.log("ReStarting Game");
            managers.GameManager.SceneManager.ChangeScene(config.Scene.Menu);
        }
    }
}