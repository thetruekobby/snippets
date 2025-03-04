// TODO FIX BUILD ERRORS CAUSED BY APOLLO CLIENT
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client"
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      created
    }
  }
`

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations ($name: String!) { 
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantitlyPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`
const GraphQL = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS)

  //passing variables or dynamic values into the query
  const { loading: _, error: __, data: ___ } = useQuery(GET_CHARACTER, { variables: { id: 1 } })

  // get locations name does not matter. it is the function that executest the query
  const [getLocations, { loading: l, error: e, data: d }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: {
      name: "Rick",
    },
  })

  const [createProduct, { loading: lo, error: er, data: da }] = useMutation(CREATE_PRODUCT, {
    variables: {
      name: "something",
      quantityPerUnit: 3,
    },
  })

  return <div>GraphQL</div>
}
export default GraphQL
