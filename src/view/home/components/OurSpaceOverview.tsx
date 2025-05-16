import { useAppSelector } from "../../../redux/store";
import { selectWorkspaceError, selectWorkspaceList, selectWorkspaceStatus } from "../../../redux/features/workspaces/workSpaceSelector";
import WorkspaceCard from "../../../component/card/workspaceCard";
import useCurrentLocation from "../../../helper/hooks";
import type { Workspace } from "../../../api/workspaceApis";
import { useNavigate } from "react-router-dom";

const OurSpaceOverview = () => {
    
    const navigate = useNavigate();

    const workspaceList = useAppSelector(selectWorkspaceList);
    const workspaceStatus = useAppSelector(selectWorkspaceStatus);
    const error = useAppSelector(selectWorkspaceError);

    const location: any = useCurrentLocation();

    const openGoogleMap = (workspace: Workspace) => {
        window.open(workspace.google_maps_url)
    }

    const openWorkSpaceDetails = (workspace: Workspace) => {
        navigate(`workspace/${workspace.id}`)
    }

    return (
        <section className="our-space-overview main-padding">
            <div className="title">
                Our Space Overview
            </div>
            {workspaceStatus === "loading" && (
                <div className="loader-wrapper">
                    Loading......
                </div>
            )}

            {workspaceStatus === "failed" && (
                <div className="error-message">
                    {error || "Something went wrong while fetching workspaces."}
                </div>
            )}
            {workspaceStatus === "succeeded" && <div className="row">
                {
                    workspaceList?.map(workspace => {
                        return <div key={workspace.id} className="force-2-col col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <WorkspaceCard titleClicked={() => {
                                openWorkSpaceDetails(workspace)
                            }} bulkPassDescription={workspace.day_pass_discounts_percentage[10].message} googleMapUrl={workspace.google_maps_url} currentLocation={location} workspaceLocation={{ lattitude: workspace.latitude, longitude: workspace.longitude }} bulkPassDays={12} bulkPassPrice={workspace.bulk_pass_price} bulkPassDiscount={workspace.day_pass_discounts_percentage[10].value || 0} dayPassPrice={workspace.day_pass_price} distance="12"
                                imageUrl={workspace.images[0]} title={workspace.name}
                                navigateButtonClicked={() => { openGoogleMap(workspace) }}
                            />
                        </div>
                    })
                }
            </div>}
        </section>
    )
}

export default OurSpaceOverview;