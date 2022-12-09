import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";

export const currProjAtom = atom({});

const ProjectSummary = ({ project }) => {
    // setting up jotai
    const [currProject, setCurrProject] = useAtom(currProjAtom);

    // setting up navigation
    const navigate = useNavigate();

    // function to set project as current project being viewed
    const viewDetails = () => {
        setCurrProject(project);
        navigate(`/projects/${project.id}`);
    };

    return (
        <div id="proj-summary" className="bg-teal-900 w-96 px-5 py-4 rounded-md hover:cursor-pointer" onClick={viewDetails}>
            <div className="pt-2 pb-3 px-2 border-b-2 text-slate-50 flex items-end justify-between">
                <div className="flex flex-col">
                    <p>#{project.type}</p>
                    <p className="w-3/5 mt-1 text-lg">{project.title}</p>
                </div>
                <div className="w-1/2 text-teal-900 flex flex-col gap-2 items-end">
                    <p className="bg-slate-50 px-1 rounded-sm text-end">{project?.date?.slice(0, 10)}</p>
                    <p className="bg-slate-50 px-1 rounded-sm text-end">{project?.location}</p>
                    <p className="bg-slate-50 px-1 rounded-sm text-end">I/C: {project?.inCharge?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;