function Pessoa(){
    if(!Pessoa.instance){
        return Pessoa.instance = this;
    }
    return Pessoa.instance;
}
const p = Pessoa.call({name: 'Neylan'})

const p2 = Pessoa.call({name: 'Custom Name'})

console.log(p);

console.log(p2);
