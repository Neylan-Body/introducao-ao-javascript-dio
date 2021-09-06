function Pessoa(customProperties) {
    return {
        name : 'Neylan',
        lastName: 'Oliveira',
        ...customProperties
    }
} 

const p = Pessoa({name: 'Custom Name', age: 27})
console.log(p);