// Utility Functions for Academic Planner

/**
 * Format a date to a readable string
 * @param {Date|string} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    const d = new Date(date);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return d.toLocaleDateString('en-US', options);
}

/**
 * Format a date to relative time (e.g., "2 days ago", "in 3 hours")
 * @param {Date|string} date - The date to format
 * @returns {string} Relative time string
 */
function formatRelativeTime(date) {
    const d = new Date(date);
    const now = new Date();
    const diffMs = d - now;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffDays > 1) return `in ${diffDays} days`;
    if (diffDays === 1) return 'tomorrow';
    if (diffDays === 0 && diffHours > 0) return `in ${diffHours} hours`;
    if (diffDays === 0 && diffHours === 0 && diffMinutes > 0) return `in ${diffMinutes} minutes`;
    if (diffDays === -1) return 'yesterday';
    if (diffDays < -1) return `${Math.abs(diffDays)} days ago`;
    return 'now';
}

/**
 * Check if a date is overdue
 * @param {Date|string} date - The date to check
 * @returns {boolean} True if overdue
 */
function isOverdue(date) {
    return new Date(date) < new Date();
}

/**
 * Get the status of a task based on completion and due date
 * @param {boolean} completed - Whether the task is completed
 * @param {Date|string} dueDate - The due date
 * @returns {string} Status: 'completed', 'overdue', or 'pending'
 */
function getTaskStatus(completed, dueDate) {
    if (completed) return 'completed';
    if (isOverdue(dueDate)) return 'overdue';
    return 'pending';
}

/**
 * Generate a unique ID
 * @returns {string} Unique ID
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Sort tasks by due date
 * @param {Array} tasks - Array of tasks
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted tasks
 */
function sortTasksByDate(tasks, order = 'asc') {
    return tasks.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
}

/**
 * Filter tasks by various criteria
 * @param {Array} tasks - Array of tasks
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered tasks
 */
function filterTasks(tasks, filters = {}) {
    return tasks.filter(task => {
        // Filter by search query
        if (filters.search) {
            const search = filters.search.toLowerCase();
            const matchesTitle = task.title.toLowerCase().includes(search);
            const matchesDescription = task.description?.toLowerCase().includes(search);
            if (!matchesTitle && !matchesDescription) return false;
        }

        // Filter by priority
        if (filters.priority && filters.priority !== 'all') {
            if (task.priority !== filters.priority) return false;
        }

        // Filter by course
        if (filters.course && filters.course !== 'all') {
            if (task.courseId !== filters.course) return false;
        }

        // Filter by status
        if (filters.status && filters.status !== 'all') {
            const taskStatus = getTaskStatus(task.completed, task.dueDate);
            if (taskStatus !== filters.status) return false;
        }

        return true;
    });
}

/**
 * Calculate statistics from tasks
 * @param {Array} tasks - Array of tasks
 * @returns {Object} Statistics object
 */
function calculateStatistics(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = tasks.filter(t => !t.completed && !isOverdue(t.dueDate)).length;
    const overdue = tasks.filter(t => !t.completed && isOverdue(t.dueDate)).length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
        total,
        completed,
        pending,
        overdue,
        completionRate
    };
}

/**
 * Show a notification (can be extended with a notification library)
 * @param {string} message - Notification message
 * @param {string} type - Notification type: 'success', 'error', 'info'
 */
function showNotification(message, type = 'info') {
    // Simple alert for now - can be replaced with a toast library
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Could implement a custom toast notification here
}

/**
 * Validate form data
 * @param {Object} data - Form data to validate
 * @param {Array} requiredFields - Array of required field names
 * @returns {Object} Validation result with {valid: boolean, errors: Array}
 */
function validateForm(data, requiredFields) {
    const errors = [];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`${field} is required`);
        }
    });

    return {
        valid: errors.length === 0,
        errors
    };
}

/**
 * Export data as JSON file
 * @param {Object} data - Data to export
 * @param {string} filename - Name of the file
 */
function exportToJSON(data, filename = 'academic-planner-data.json') {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatDate,
        formatRelativeTime,
        isOverdue,
        getTaskStatus,
        generateId,
        debounce,
        sortTasksByDate,
        filterTasks,
        calculateStatistics,
        showNotification,
        validateForm,
        exportToJSON
    };
}
