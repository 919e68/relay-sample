import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql'

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions
} from 'graphql-relay'

var ownerType = new GraphQLObjectType({
  name: 'Owner',
  fields: {
    id: { 
      type: GraphQLInt 
    },
    name: { 
      type: GraphQLString 
    }
  }
})

var stationType = new GraphQLObjectType({
  name: 'Station',
  fields: {
    brand: { 
      type: GraphQLString 
    }
  }
})

var viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    stations: {
      type: new GraphQLList(stationType),
      resolve: () => {
        return [
          { brand: 'Hello' },
          { brand: 'World' }
        ]
      }
    }
  }
})

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    owner: {
      type: ownerType,
      resolve: () => {
        return { id: 1, name: 'Wilson Anciro' }
      }
    },
    viewer: {
      type: viewerType,
      resolve: () => {
        return { }
      }
    }
  }
})

export var Schema = new GraphQLSchema({
  query: queryType
})
