export class Hero{

    hero_id:number;
    hero_super_name:string;
    hero_real_name:string;
    hero_aliases:string;
    gender:string;
    character_type:string;
    powers:string[];
    publisher:string;
     creators:string[];
     image:String;

    constructor(hero_id:number,
        hero_super_name:string,
        hero_real_name:string,
        hero_aliases:string,
        gender:string,
        character_type:string,
        powers:string[],
        publisher:string,
         creators:string[],
         image:String)
         
         {

        this.hero_id=hero_id;
        this.hero_super_name=hero_super_name;
        this.hero_real_name=hero_real_name;
        this.hero_aliases=hero_aliases;
        this. gender=gender;
        this. character_type=character_type;
        this.powers=powers;
        this. publisher=publisher;
        this. creators=creators;
        this.image=image;





    }


}