require('dotenv').config()
import {ApolloServer} from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import UserAPI from './datasource/UserAPI'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources:() =>({
        authAPI: new AuthAPI({store}),
        userAPI: new UserAPI({store})
    }),
    context: async({req})=>{
        return{
            token: req.headers.authorization || ''
        }
    } 
})
server.listen().then((url)=>{
    console.log(`Server running at ${url}`)
  })