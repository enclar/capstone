import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { taskAtom } from "./Tasks";
import { staffAtom } from "../../pages/NewProject";

const AddTask = ({ project }) => {
    const [tasks, setTasks] = useAtom(taskAtom);
    const [staff] = useAtom(staffAtom);
    const { register, handleSubmit } = useForm();

    // function to add new task
    const newTask = async (data) => {
        console.log("data:", data);
    };

    return (
        <form
            id="add-checkpoint-form"
            className="flex flex-col gap-3 items-center"
            onSubmit={handleSubmit(newTask)}
            autoComplete="off"
        >
            <legend className="text-slate-50 text-center tracking-wider text-md">add a new task</legend>
            <div className="flex gap-7 items-center">
                <label className="flex gap-2 text-slate-50">
                    due by:
                    <input type="date" {...register("dueBy")} className="text-slate-700 pl-1" required={true} />
                </label>
                <label className="flex gap-2 text-slate-50">
                    task:
                    <input {...register("description")} className="text-slate-700 pl-1" required={true} />
                </label>
                <label className="flex gap-2 text-slate-50">
                    done by:
                    <select {...register("doneBy")} className="text-slate-700 pl-1">
                        <option>{project?.client?.name}</option>
                        { staff?.map((staff, index) => <option key={index}>{staff?.name}</option>) }
                    </select>
                </label>
                <button className="bg-slate-50 ml-2 px-5 rounded-full">add</button>
            </div>
        </form>
    )
}

export default AddTask;