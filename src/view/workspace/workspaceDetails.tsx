import { useMemo } from "react";
import { selectWorkspaceList } from "../../redux/features/workspaces/workSpaceSelector";
import { useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import "./workspaceDetails.css";
const WorkspaceDetails = () => {
    const workspaceList = useAppSelector(selectWorkspaceList);
    const { workSpaceId } = useParams();

    const workspaceDetails = useMemo(() => {
        return workspaceList.find(item => item.id === workSpaceId);
    },[workspaceList,workSpaceId])
    return(
        <div className="workspace-details main-padding d-flex flex-column" style={{minHeight:"80vh"}}>
            <div className="heading1">
            {workspaceDetails?.name}
            
            </div>
            <img  src={`/${workspaceDetails?.images[0]}`} loading="lazy"/>
        </div>
    )
}

export default WorkspaceDetails;