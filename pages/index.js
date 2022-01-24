const Title = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>

      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </>
  );
};

function HomePage() {
  return (
    <div>
      <Title>Boas vindas de volta.</Title>
      <h2>Aluracord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage;
