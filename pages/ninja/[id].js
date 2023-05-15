export const getStaticPaths = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { user: data },
  };
};

const Details = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.suite}</p>
      <p>{user.address.city}</p>
      <p>{user.address.zipcode}</p>
      <p>{user.address.geo.lat}</p>
      <p>{user.address.geo.lng}</p>
    </div>
  );
};

export default Details;
