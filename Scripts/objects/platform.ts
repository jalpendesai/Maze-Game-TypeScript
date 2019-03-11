module objects {
    export class Platform extends objects.GameObject {
        public OnAction(): void {
        }

        constructor(x: number, y: number, width: number, height: number) {
            super(x, y, width, height);
            this.x = x;
            this.y = y;
            
            this.name = "platform";
            this.collider = new components.Collider(this, 0, 0, width, height);
            this.AddComponent(this.collider);
        }

        public Init(): void {
        }

        public UpdateTransform(): void {
        }

        public OnCollisionEnter(other: objects.GameObject) {
            if (other.name == "test") {

            }
        }
    }
}