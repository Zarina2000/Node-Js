const {Sequelize,DataTypes,Op}=require('sequelize')
const sequelize=new Sequelize("experion","root","Experion@123",{
    host:'localhost',
    dialect:'mysql'
});
sequelize.authenticate()
.then(()=>{
    console.log('Connection established successfully')
})
.catch((error)=>{
    console.log('Unable to connect to the database:',error);
})
const User = sequelize.define('User',{

    id: {

        type: DataTypes.INTEGER,

        primaryKey: true,

        autoIncrement: true

    },



    name: {

        type: DataTypes.STRING(50),

        allowNull: false

    },



    email:{

        type: DataTypes.STRING(50),

        allowNull: false

    },

    age:{

        type: DataTypes.INTEGER,

        defaultValue: 18,

        allowNull: false

    },
    // country:{
    //     type:DataTypes.STRING(5),
    //     defaultValue:'IN',
    //     allowNull:false
    // }

});
//User.sync({alter:true});
// User.create({name:'Karthika',email:'kat@gmail.com',age:22})

// .then((user)=>{
//     console.log("Data successfully saved",user.toJSON());
// })
// .catch(err=>{
//     console.log('Error');
// });
// User.findAll().then(function (users) {
//     console.log(users);
// });
User.findAll().then(function (users) {
    users.forEach(function (user) {
        console.log(user.dataValues.id,user.dataValues.name )       
    })
    
});
User.findByPk(1).then(user=>{
    console.log(user.dataValues.id,user.dataValues.name)
})

User.findAll({
    where:{
        id:{
            [Op.gate]:2
        }
    }
}).then(function (users) {
    users.forEach(function (user) {
        console.log(user.dataValues.id,user.dataValues.name )       
    })
})
