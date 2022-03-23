import { useParams } from "react-router-dom";

const Job = () => {
    const params = useParams();
    const { jobId } = params;
    return (
        <h1>{'Job id: ' + jobId}</h1>
    );
}
 
export default Job;