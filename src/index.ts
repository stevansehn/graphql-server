import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

  type Show {
    title: String
    year: String
    genre: String,
    seasons: String
  }

  type Query {
    series: [Show]
  }
`;

const series = [
  {
    title: "Criminal Code",
    year: "2023",
    genre: "Action",
    seasons: "1 season",
  },
  {
    title: "The Sandman",
    year: "2022",
    genre: "Drama",
    seasons: "1 season",
  },
  {
    title: "Shadow and Bone",
    year: "2021",
    genre: "Drama",
    seasons: "2 seasons",
  },
];

const resolvers = {
  Query: {
    series: () => series,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Servidor pronto e disponível em: ${url}`);
