interface SubTitleProps {
  label: string;
}

const SubTitle = (props: SubTitleProps) => {
  return (
    <div>
      <h2 className="subtitle">{props.label}</h2>
    </div>
  );
};

export default SubTitle;
