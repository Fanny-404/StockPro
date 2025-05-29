
export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 1234567,
    },
    items: [
        {
            id: 1,
            product: 'Tornillo 1/2" x 2"',
            description: 'Rosca standar',
            price: 7,
            quantity: 15,
        },
        {
            id: 2,
            product: 'Tuerca 1/2"',
            description: 'Rosca standar',
            price: 5,
            quantity: 2,

        },
        {
            id: 3,
            product: 'Arandela plana de 1/2"',
            description: 'Arandela plana de 1/2"',
            price: 2,
            quantity: 1,
        },
    ]
}