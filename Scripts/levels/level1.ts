module levels {
    export class Level1 extends scenes.Play {

        public _music : scenes.Menu;

        private _backgroundMusic : createjs.AbstractSoundInstance;

    

        public Init(): void {
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
            // }
            
            

            
            // PlatformB
            // this.AddGameObject(new objects.Platform(0, 80, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));

            // Vertical Columns
            this.AddGameObject(new objects.Platform(250, 43, 10, managers.GameManager.CurrentLevel.LevelHeight -30 ));

            this.AddGameObject(new objects.Platform(375, 690, 5, 374 ));

            this.AddGameObject(new objects.Platform(485, 163, 1, 130 ));
            this.AddGameObject(new objects.Platform(485, 490, 1, 243 ));
            this.AddGameObject(new objects.Platform(485, 810, 1, 135 ));

            this.AddGameObject(new objects.Platform(595, 68, 1, 325 ));
            this.AddGameObject(new objects.Platform(595, 590, 1, 225 ));

            this.AddGameObject(new objects.Platform(710, 150, 1, 240 ));
            this.AddGameObject(new objects.Platform(710, 590, 1, 130 ));
            this.AddGameObject(new objects.Platform(710, 930, 1, 100 ));

            this.AddGameObject(new objects.Platform(820, 150, 1, 550 ));
            this.AddGameObject(new objects.Platform(820, 810, 1, 110 ));

            this.AddGameObject(new objects.Platform(940, 45, 1, 580 ));
            this.AddGameObject(new objects.Platform(940, 1030, 1, 110 ));

            this.AddGameObject(new objects.Platform(1040, 370, 1, 355 ));
            this.AddGameObject(new objects.Platform(1040, 810, 1, 250 ));

            this.AddGameObject(new objects.Platform(1155, 480, 1, 130 ));
            this.AddGameObject(new objects.Platform(1155, 930, 1, 210 ));

            this.AddGameObject(new objects.Platform(1265, 255, 1, 120 ));
            this.AddGameObject(new objects.Platform(1265, 590, 1, 470 ));

            this.AddGameObject(new objects.Platform(1370, 45, 1, 1015 ));



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
            //  Game Winning
            this.AddGameObject(new objects.Ladder(247, 0, 135, 90));
            // this.AddGameObject(new objects.Ladder(1700, 334, 64, 207));
        }

        constructor(bg: createjs.Bitmap) {
            super("Floor 1", bg);
        }

        public OnSceneEnter(): void {
            console.log("Loading " + this.Name + "...");
            this.Init();
        }

        public Update(): void {
            super.Update();
        }

        public OnSceneExit(): void {
            // if(this._music.MusicMuted){
                this._backgroundMusic.stop();
            // }
        }

        public OnLevelCompleted(): void {
            // managers.GameManager.SceneManager.LoadLevel(2);
            // managers.GameManager.SceneManager._createNewScene(config.Scene.GameOver);
        }
    }
}