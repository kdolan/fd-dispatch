class Location{
    constructor({geoJson, name, raw}){
        this.geoJson = geoJson;
        this.name = name;
        this.raw = raw;
    }
}

module.exports.Location = Location;