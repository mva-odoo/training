var Model = {
    _name: '',
    search: () => 'My search'
}


var ResPartner = Object.create(Model)
ResPartner._name = 'res.partner'
ResPartner.search = () => ResPartner.__proto__.search() + ' redifine'
// ResPartner.search = () => Model.search() + ' redifine'

console.log(ResPartner._name === 'res.partner')
console.log(ResPartner.search() === 'My search redifine')