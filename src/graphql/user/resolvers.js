const users = () => {
  return [
    {
      id: '1',
      userName: 'Robson 1',
    },
    {
      id: '2',
      userName: 'Robson 2',
    },
    {
      id: '3',
      userName: 'Robson 3',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'Robson',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
