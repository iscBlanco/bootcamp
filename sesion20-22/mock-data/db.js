module.exports = {
   books: [
        {
            id:1,
            img: 'https://via.placeholder.com/160x210?text=Book_Image',
            title: 'sancho panza,',
            sold:15,
        },
        {
            id:2,
            img: 'https://via.placeholder.com/160x210?text=Book_Image',
            title: 'sancho panza,',
            sold:15, 
        },
        {
            id:3,
            img: 'https://via.placeholder.com/160x210?text=Book_Image',
            title: 'sancho panza,',
            sold:15,
        },
    ],
    orders:[
        {
            orderId: 787352,
            dateTime: '03/05/2020 05:30:06',
            customer: 'Ethien Salinas',
            amount: 63.96,
            status: 'Success',
            statusClass: 'is-success'
          },
          {
            orderId: 352787,
            dateTime: '03/05/2020 05:30:06',
            customer: 'Ariadna Espinosa',
            amount: 96.33,
            status: 'Warning',
            statusClass: 'is-warning'
          },
          {
            orderId: 527873,
            dateTime: '03/05/2020 05:30:06',
            customer: 'Sara Cortéz',
            amount: 36.69,
            status: 'Danger',
            statusClass: 'is-danger'
          },
    ]
}