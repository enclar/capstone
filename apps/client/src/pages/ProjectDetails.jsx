import { useAtom } from "jotai";
import { currProjAtom } from "../components/Projects/ProjectSummary";
import Timeline from "../components/ProjectDetails/Timeline";

const ProjectDetails = () => {
    const [projDetails, setProjDetails] = useAtom(currProjAtom);

    return (
        <div id="project-details" className="mt-20">
            <p className="bg-teal-900 py-2 px-10 rounded-full text-slate-50 tracking-wider text-2xl">{projDetails?.title?.toUpperCase()}</p>
            <Timeline />
        </div>
    )
}

export default ProjectDetails;