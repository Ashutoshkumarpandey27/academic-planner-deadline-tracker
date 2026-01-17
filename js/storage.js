// Local Storage Management for Academic Planner

const STORAGE_KEYS = {
    TASKS: 'academicPlanner_tasks',
    COURSES: 'academicPlanner_courses',
    SETTINGS: 'academicPlanner_settings'
};

/**
 * Storage Manager Object
 */
const StorageManager = {
    /**
     * Get all tasks from local storage
     * @returns {Array} Array of tasks
     */
    getTasks() {
        try {
            const tasks = localStorage.getItem(STORAGE_KEYS.TASKS);
            return tasks ? JSON.parse(tasks) : [];
        } catch (error) {
            console.error('Error loading tasks:', error);
            return [];
        }
    },

    /**
     * Save tasks to local storage
     * @param {Array} tasks - Array of tasks to save
     * @returns {boolean} Success status
     */
    saveTasks(tasks) {
        try {
            localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
            return true;
        } catch (error) {
            console.error('Error saving tasks:', error);
            return false;
        }
    },

    /**
     * Add a new task
     * @param {Object} task - Task object to add
     * @returns {Object} Added task with ID
     */
    addTask(task) {
        const tasks = this.getTasks();
        const newTask = {
            id: generateId(),
            ...task,
            completed: false,
            createdAt: new Date().toISOString()
        };
        tasks.push(newTask);
        this.saveTasks(tasks);
        return newTask;
    },

    /**
     * Update an existing task
     * @param {string} taskId - ID of task to update
     * @param {Object} updates - Object with fields to update
     * @returns {Object|null} Updated task or null if not found
     */
    updateTask(taskId, updates) {
        const tasks = this.getTasks();
        const index = tasks.findIndex(t => t.id === taskId);
        
        if (index === -1) return null;
        
        tasks[index] = {
            ...tasks[index],
            ...updates,
            updatedAt: new Date().toISOString()
        };
        
        this.saveTasks(tasks);
        return tasks[index];
    },

    /**
     * Delete a task
     * @param {string} taskId - ID of task to delete
     * @returns {boolean} Success status
     */
    deleteTask(taskId) {
        const tasks = this.getTasks();
        const filteredTasks = tasks.filter(t => t.id !== taskId);
        
        if (filteredTasks.length === tasks.length) return false;
        
        this.saveTasks(filteredTasks);
        return true;
    },

    /**
     * Toggle task completion status
     * @param {string} taskId - ID of task to toggle
     * @returns {Object|null} Updated task or null
     */
    toggleTaskCompletion(taskId) {
        const tasks = this.getTasks();
        const task = tasks.find(t => t.id === taskId);
        
        if (!task) return null;
        
        return this.updateTask(taskId, { completed: !task.completed });
    },

    /**
     * Get all courses from local storage
     * @returns {Array} Array of courses
     */
    getCourses() {
        try {
            const courses = localStorage.getItem(STORAGE_KEYS.COURSES);
            return courses ? JSON.parse(courses) : this.getDefaultCourses();
        } catch (error) {
            console.error('Error loading courses:', error);
            return this.getDefaultCourses();
        }
    },

    /**
     * Get default courses for initial setup
     * @returns {Array} Default courses
     */
    getDefaultCourses() {
        return [
            {
                id: 'default-1',
                name: 'General',
                code: 'GEN',
                color: '#3b82f6',
                instructor: ''
            }
        ];
    },

    /**
     * Save courses to local storage
     * @param {Array} courses - Array of courses to save
     * @returns {boolean} Success status
     */
    saveCourses(courses) {
        try {
            localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
            return true;
        } catch (error) {
            console.error('Error saving courses:', error);
            return false;
        }
    },

    /**
     * Add a new course
     * @param {Object} course - Course object to add
     * @returns {Object} Added course with ID
     */
    addCourse(course) {
        const courses = this.getCourses();
        const newCourse = {
            id: generateId(),
            ...course,
            createdAt: new Date().toISOString()
        };
        courses.push(newCourse);
        this.saveCourses(courses);
        return newCourse;
    },

    /**
     * Update an existing course
     * @param {string} courseId - ID of course to update
     * @param {Object} updates - Object with fields to update
     * @returns {Object|null} Updated course or null
     */
    updateCourse(courseId, updates) {
        const courses = this.getCourses();
        const index = courses.findIndex(c => c.id === courseId);
        
        if (index === -1) return null;
        
        courses[index] = { ...courses[index], ...updates };
        this.saveCourses(courses);
        return courses[index];
    },

    /**
     * Delete a course
     * @param {string} courseId - ID of course to delete
     * @returns {boolean} Success status
     */
    deleteCourse(courseId) {
        const courses = this.getCourses();
        const filteredCourses = courses.filter(c => c.id !== courseId);
        
        if (filteredCourses.length === courses.length) return false;
        
        this.saveCourses(filteredCourses);
        return true;
    },

    /**
     * Get settings from local storage
     * @returns {Object} Settings object
     */
    getSettings() {
        try {
            const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
            return settings ? JSON.parse(settings) : this.getDefaultSettings();
        } catch (error) {
            console.error('Error loading settings:', error);
            return this.getDefaultSettings();
        }
    },

    /**
     * Get default settings
     * @returns {Object} Default settings
     */
    getDefaultSettings() {
        return {
            theme: 'light',
            notifications: true,
            defaultView: 'dashboard'
        };
    },

    /**
     * Save settings to local storage
     * @param {Object} settings - Settings object to save
     * @returns {boolean} Success status
     */
    saveSettings(settings) {
        try {
            localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
            return true;
        } catch (error) {
            console.error('Error saving settings:', error);
            return false;
        }
    },

    /**
     * Clear all data from local storage
     * @returns {boolean} Success status
     */
    clearAll() {
        try {
            localStorage.removeItem(STORAGE_KEYS.TASKS);
            localStorage.removeItem(STORAGE_KEYS.COURSES);
            localStorage.removeItem(STORAGE_KEYS.SETTINGS);
            return true;
        } catch (error) {
            console.error('Error clearing storage:', error);
            return false;
        }
    },

    /**
     * Export all data
     * @returns {Object} All stored data
     */
    exportAll() {
        return {
            tasks: this.getTasks(),
            courses: this.getCourses(),
            settings: this.getSettings(),
            exportedAt: new Date().toISOString()
        };
    },

    /**
     * Import data
     * @param {Object} data - Data to import
     * @returns {boolean} Success status
     */
    importData(data) {
        try {
            if (data.tasks) this.saveTasks(data.tasks);
            if (data.courses) this.saveCourses(data.courses);
            if (data.settings) this.saveSettings(data.settings);
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }
};

// Make StorageManager available globally
window.StorageManager = StorageManager;
