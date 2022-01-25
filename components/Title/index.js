import appConfig from "../../config.json";

const Title = ({ children, Tag = "h1" }) => {
  return (
    <>
      <Tag>{children}</Tag>

      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Title;
