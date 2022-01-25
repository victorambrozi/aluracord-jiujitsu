const GlobalStyle = () => {
  return <style global jsx>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }

    body {
      font-family: "Open Sans", sans-serif;
    }

    // Ocupar 100% da altura
    html, body, #__next {
      min-height: 100vh;
      display: flex;
      flex: 1;
    }

    #__next {
      flex: 1;
    }

    #__next > * {
      flex: 1;
    }
  `}</style>;
};

const Title = ({ children, Tag = "h1" }) => {
  return (
    <>
      <Tag>{children}</Tag>

      <style jsx>{`
        ${Tag} {
          color: red;
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Title Tag="h2">Boas vindas de volta.</Title>
      <h2>Aluracord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage;
