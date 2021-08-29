// In factory pattern you have once class which will be a factory Job of this class is to create new object here MemberFactory which has function createMember which will return the object

// Objects are created for classes SimpleMember, StandardMember and GoldMember

function MemberFactory (){
    this.createMember = function(name, type){
        let member ;

        if(type === 'simple'){
            member = new SimpleMember(name);
        }else if(type === 'standard'){
            member = new StandardMember(name);
        } else if(type === 'gold'){
            member = new GoldMember(name);
        }

        member.type = type;

        member.display = function(){
            console.log(`${member.name} has ${member.type} and it consts ${member.cost}`);
        }

        return member;
    }
}

function SimpleMember(name){
    this.name = name;
    this.cost = '5$';
}
function StandardMember(name){
    this.name = name;
    this.cost = '10$';
}
function GoldMember(name){
    this.name = name;
    this.cost = '15$';
}

let members = [];
let factory = new MemberFactory();

members.push(factory.createMember('Sachin', 'simple'));
members.push(factory.createMember('Vishwas', 'gold'));
members.push(factory.createMember('Pratibha', 'gold'));
members.push(factory.createMember('Dipti', 'standard'));

members.forEach((member)=>{
    member.display();
})