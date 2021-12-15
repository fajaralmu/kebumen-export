export class Product {
    
    public name:string = "";
    public description:string = "";
    public price:number = 0.0;
    public imageName:string = "";

    public get imageUrl():string {
        return "assets/images/products/"+this.imageName;
    }
}
