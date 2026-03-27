// Updated job description rendering
const JobDescription = ({ description }) => {
  if (Array.isArray(description)) {
    return (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{description}</p>;
};

// More existing code
