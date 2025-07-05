interface TitleProps {
  label: string;
}

const Title = (props: TitleProps) => {
  return (
    <div>
      <h1 className="title">{props.label}</h1>
    </div>
  );
};

export default Title;
