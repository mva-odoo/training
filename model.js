class Model {
    _name = '';

    search() {
        return 'My search'
    }
}

class ResPartner extends Model{
    _name = 'res.partner'

    search(){
        return super.search() + ' redifine'
    }
}


Partner = new ResPartner()

console.log(Partner._name === 'res.partner')
console.log(Partner.search() === 'My search redifine')