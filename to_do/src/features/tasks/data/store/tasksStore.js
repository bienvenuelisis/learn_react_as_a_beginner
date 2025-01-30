import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: null,
  setTasks: (tasks) => set({ tasks }),

  onDelete: (index) =>
    set((state) => {
      if (!state.tasks) return state;
      const tempTasks = state.tasks.filter((_, i) => i !== index);
      return { tasks: tempTasks };
    }),

  onComplete: (index) =>
    set((state) => {
      if (!state.tasks) return state;
      const tempTasks = state.tasks.map((task, i) => {
        if (index === i) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return { tasks: tempTasks };
    }),
}));

export default useTasksStore;