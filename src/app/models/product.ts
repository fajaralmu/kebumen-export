const IMAGE_PATH:string = "assets/images/products/";
export class Product {
       
    public imageNames:string[] = [];

    constructor(public name:string, 
                public description:string, 
                public imageName:string)
    {
        this.imageNames = [imageName];
    }

    public addImage(...names:string[]): Product
    {
        for (let i = 0; i < names.length; i++) {
            this.imageNames.push(names[i]);
        }
        return  this;
    }

    public get imageUrls():string[] 
    {
        return this.imageNames.map(i => IMAGE_PATH + i);
    }

    public get imageUrl():string 
    {
        return IMAGE_PATH+this.imageName;
    }
}
