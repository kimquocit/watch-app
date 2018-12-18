var initState = [
    {
        id : 1,
        name : 'Seiko 1',
        price : 600,
        category: 'Seiko'
    },
    {
        id : 2,
        name : 'Seiko 2',
        price : 500,
        category: 'Seiko'
    },
];

const items = (state = initState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default items;