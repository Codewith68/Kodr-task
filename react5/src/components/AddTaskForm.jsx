import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function AddTaskForm({ addTask }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    addTask({
      ...data,
      id: nanoid(),
      completed: false,
      isRunning: false,
      timeSpent: 0
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-4"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">New Task</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 space-y-2">
          <input
            placeholder="What needs to be done?"
            {...register("title", { required: true })}
            className="w-full p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          {errors.title && <p className="text-red-500 text-xs ml-1">Title is required</p>}
        </div>

        <div className="md:col-span-1">
          <select
            {...register("priority")}
            className="w-full p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium</option>
            <option value="High">High Priority</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <textarea
          placeholder="Add a description (optional)"
          {...register("description")}
          rows="2"
          className="w-full p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
        />
        
        <div className="flex justify-end mt-2">
           <button
            type="submit"
            className="btn-primary px-6 py-2 rounded-lg flex items-center gap-2"
          >
            <span>+ Add Task</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTaskForm;
