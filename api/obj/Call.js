const Location = require('./Location').Location;

class Call{
    constructor({id=null, _id, type, department, determinant, location=null, dateTime=new Date(), units=[], attachments=[], notes=""}){
        this.id = _id || id;
        this.type = type;
        this.department = department;
        this.determinant = determinant;
        this.location = location ? new Location(location) : null;
        this.dateTime = new Date(dateTime);
        this.units = units;
        this.attachments = attachments;
        this.notes = notes;
    }

    getForDb(){
        let {["id"]:omit, ...res} = this;
        return res;
    }
}

module.exports.Call = Call;