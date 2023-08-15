import { Fragment } from "react"
import testHardware from "../data/test-hardware.json"

export default function Test() {
    


    return (
        <div className="row">
            <div className="col-12">
                {
                    testHardware.map( item =>(
                        <Fragment key={item.id} >
                            <p>
                                {item.pregunta}
                            </p>

                        </Fragment>
                    ) )
                }
            </div>
        </div>
    )
};
