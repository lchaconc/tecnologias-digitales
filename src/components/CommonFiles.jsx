import commonFiles from "../data/common-files.json";

export default function CommonFiles() {
  return (
    <div className="row animate__animated animate__fadeInLeft">
      {commonFiles.map((item) => (
        <div className="col-6 card mb-2"  key={item.id}>
          <div className="card-header">
            <h4> {item.title} </h4>
          </div>
          <div className="card-body text-center">
            <p>{item.caption}</p>
            <img className="img-m" src={`./files/${item.fileImg}`} alt="img" />
          </div>
        </div>
      ))}
    </div>
  );
}
