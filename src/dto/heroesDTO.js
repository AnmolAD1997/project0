"use strict";
exports.__esModule = true;
var hero_1 = require("../model/hero");
var HeroesDTO = /** @class */ (function () {
    function HeroesDTO(hero_id, hero_super_name, hero_real_name, hero_aliases, gender, character_type, powers, publisher, creators, image) {
        this.hero_id = hero_id;
        this.hero_super_name = hero_super_name;
        this.hero_real_name = hero_real_name;
        this.hero_aliases = hero_aliases;
        this.gender = gender;
        this.character_type = character_type;
        this.powers = powers;
        this.publisher = publisher;
        this.creators = creators;
        this.image = image;
    }
    return HeroesDTO;
}());
exports.HeroesDTO = HeroesDTO;
function convertToHeroArray(input) {
    var newHero = new hero_1.Hero(input.hero_id, input.hero_super_name, input.hero_real_name, input.hero_aliases, input.gender, input.character_type, input.powers, input.publisher, input.creators, input.image);
    return newHero;
}
exports.convertToHeroArray = convertToHeroArray;
