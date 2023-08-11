import commonFiles from "../data/common-files.json";

export default function CommonFiles() {




    return (
        <div className="row">
                {
                    commonFiles.map( item => (
                        <div className="col-6 card" key={item.id}>
                            <h4> {item.title} </h4>
                            <div className="card-body">
                                <p>
                                    {item.caption}
                                </p>
                                <img  className="img-fluid" src= {`./files/${item.fileImg}` }  alt="img"  />
                            </div>
                        </div>
                    ) )
                }
        </div>
    )
    
};
