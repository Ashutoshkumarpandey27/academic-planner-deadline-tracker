# 🎓 Academic Planner - Open Source Workshop Issues

This document contains 20 issues designed for an open-source workshop. Issues are categorized by difficulty level to accommodate contributors of all skill levels.

---

## 🟢 BEGINNER ISSUES (Good First Issues)

### Issue #1: Add Favicon to the Application
**Difficulty:** Beginner  
**Labels:** `good first issue`, `beginner`, `documentation`, `html`  
**Estimated Time:** 15-30 minutes

**Description:**  
The application currently doesn't have a favicon (the small icon that appears in the browser tab). Add an appropriate favicon to improve the professional appearance of the app.

**Tasks:**
- Create or find an appropriate academic-themed favicon (e.g., graduation cap, book, calendar icon)
- Add the favicon link to the `<head>` section of `index.html`
- Test in multiple browsers

**Learning Outcomes:**
- Understanding HTML `<head>` section
- Working with favicons and icon formats

**Acceptance Criteria:**
- Favicon appears in browser tabs
- Icon is clear and recognizable at small sizes
- Appropriate academic theme

---

### Issue #2: Improve README.md with Installation Screenshots
**Difficulty:** Beginner  
**Labels:** `good first issue`, `beginner`, `documentation`  
**Estimated Time:** 30 minutes

**Description:**  
Enhance the README.md file by adding screenshots of the application to help new users understand what they're building.

**Tasks:**
- Take screenshots of the main dashboard
- Add screenshots to a new `/docs/images/` folder
- Update README.md to include these screenshots
- Add alt text for accessibility

**Learning Outcomes:**
- Documentation best practices
- Markdown syntax
- Accessibility considerations

**Acceptance Criteria:**
- At least 3 screenshots showing different views
- Images are optimized for web (not too large)
- Proper alt text for all images

---

### Issue #3: Add Footer Links (GitHub, License, etc.)
**Difficulty:** Beginner  
**Labels:** `good first issue`, `beginner`, `html`, `css`  
**Estimated Time:** 30 minutes

**Description:**  
The footer currently only shows copyright text. Add useful links like GitHub repository, license information, and contribution guidelines.

**Tasks:**
- Update the footer in `index.html` with links
- Style the links in `css/style.css`
- Ensure links open in new tabs appropriately
- Make footer links responsive

**Learning Outcomes:**
- HTML link attributes
- CSS styling for navigation elements
- Responsive design considerations

**Acceptance Criteria:**
- Footer contains at least 3-4 useful links
- Links are styled and easy to click
- Footer remains responsive on mobile

---

### Issue #4: Add Color-Coded Priority Badges
**Difficulty:** Beginner  
**Labels:** `good first issue`, `beginner`, `css`, `ui/ux`  
**Estimated Time:** 45 minutes

**Description:**  
Enhance the visual distinction between priority levels by adding styled badges with colors and icons.

**Tasks:**
- Update the priority badge styling in `css/style.css`
- Add appropriate colors (red for high, yellow for medium, green for low)
- Consider adding icons (🔴 🟡 🟢) or emoji
- Ensure good contrast for readability

**Learning Outcomes:**
- CSS styling techniques
- Color theory and accessibility
- Visual hierarchy

**Acceptance Criteria:**
- Priority badges are clearly visible
- Colors meet accessibility standards
- Consistent styling across the application

---

### Issue #5: Create a "Quick Add" Keyboard Shortcut Guide
**Difficulty:** Beginner  
**Labels:** `good first issue`, `beginner`, `documentation`, `html`  
**Estimated Time:** 45 minutes

**Description:**  
Add a help section or tooltip that shows users the available keyboard shortcuts (like Ctrl+K for search).

**Tasks:**
- Create a keyboard shortcuts modal or info section
- Document all available shortcuts
- Add a "?" button in the header to show shortcuts
- Style the shortcuts guide

**Learning Outcomes:**
- Modal/dialog creation
- Documentation writing
- User experience design

**Acceptance Criteria:**
- Shortcuts guide is accessible from the main interface
- All shortcuts are documented
- Clean, easy-to-read format

---

## 🟡 INTERMEDIATE ISSUES

### Issue #6: Implement Drag-and-Drop for Deadline Prioritization
**Difficulty:** Intermediate  
**Labels:** `intermediate`, `javascript`, `feature`, `enhancement`  
**Estimated Time:** 2-3 hours

**Description:**  
Allow users to reorder their deadlines by dragging and dropping deadline cards to change their order or priority.

**Tasks:**
- Implement HTML5 Drag and Drop API
- Update deadline order in local storage
- Add visual feedback during drag
- Handle touch events for mobile

**Learning Outcomes:**
- HTML5 Drag and Drop API
- Event handling
- State management
- Mobile touch events

**Acceptance Criteria:**
- Users can drag deadline cards
- Order persists after page reload
- Works on both desktop and mobile
- Visual feedback during drag operation

---

### Issue #7: Add Task Categories/Tags System
**Difficulty:** Intermediate  
**Labels:** `intermediate`, `javascript`, `feature`, `enhancement`  
**Estimated Time:** 3-4 hours

**Description:**  
Implement a tagging system so users can categorize tasks beyond just courses (e.g., "research", "writing", "presentation", "exam").

**Tasks:**
- Add tags field to task form
- Create tag input with autocomplete
- Update storage to handle tags
- Add tag filtering to the filter system
- Display tags on deadline cards

**Learning Outcomes:**
- Dynamic form inputs
- Array manipulation
- Autocomplete implementation
- Advanced filtering

**Acceptance Criteria:**
- Users can add multiple tags to tasks
- Tags are displayed on task cards
- Can filter tasks by tags
- Tag suggestions based on previous tags

---

### Issue #8: Implement Dark/Light Theme Animation
**Difficulty:** Intermediate  
**Labels:** `intermediate`, `css`, `javascript`, `ui/ux`  
**Estimated Time:** 2 hours

**Description:**  
Add smooth transitions when switching between dark and light themes instead of instant switching.

**Tasks:**
- Add CSS transitions for theme changes
- Implement smooth color transitions
- Add loading state during transition
- Ensure no flickering occurs

**Learning Outcomes:**
- CSS transitions and animations
- Theme management
- Performance optimization
- User experience enhancement

**Acceptance Criteria:**
- Smooth transition between themes (300-500ms)
- No layout shifts or flickering
- All colors transition smoothly
- Maintains accessibility

---

### Issue #9: Add Deadline Reminder Notifications
**Difficulty:** Intermediate  
**Labels:** `intermediate`, `javascript`, `feature`, `notification`  
**Estimated Time:** 3-4 hours

**Description:**  
Implement browser notifications to remind users about upcoming deadlines. Users should be notified at configurable intervals (1 day before, 1 hour before, etc.).

**Tasks:**
- Request notification permissions
- Check for upcoming deadlines
- Trigger browser notifications
- Add settings for notification preferences
- Handle notification clicks to open specific tasks

**Learning Outcomes:**
- Browser Notification API
- Permission handling
- Interval management
- Settings persistence

**Acceptance Criteria:**
- Users can grant/deny notification permission
- Notifications trigger at appropriate times
- Users can configure notification timing
- Clicking notification focuses relevant task

---

### Issue #10: Create Export to Calendar (ICS) Feature
**Difficulty:** Intermediate  
**Labels:** `intermediate`, `javascript`, `feature`, `export`  
**Estimated Time:** 3 hours

**Description:**  
Allow users to export their deadlines as an ICS (iCalendar) file that can be imported into Google Calendar, Outlook, or Apple Calendar.

**Tasks:**
- Research ICS file format
- Generate ICS file from deadline data
- Create download functionality
- Add "Export to Calendar" button
- Test with multiple calendar applications

**Learning Outcomes:**
- File format specifications
- Data transformation
- File generation and download
- Cross-platform compatibility

**Acceptance Criteria:**
- ICS file is correctly formatted
- All deadlines are included with proper dates
- File imports successfully into major calendar apps
- Export includes task descriptions and priorities

---

## 🔴 ADVANCED ISSUES

### Issue #11: Implement Calendar View with Interactive Grid
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `calendar`  
**Estimated Time:** 5-8 hours

**Description:**  
Create a fully functional calendar view that displays deadlines on a monthly calendar grid. Users should be able to click dates to add deadlines and see all deadlines for each day.

**Tasks:**
- Build calendar grid with JavaScript
- Calculate and display correct days for any month
- Show deadlines on their respective dates
- Handle navigation between months
- Add quick-add functionality by clicking dates
- Show deadline count per day
- Make calendar responsive

**Learning Outcomes:**
- Date manipulation in JavaScript
- Complex DOM rendering
- Calendar algorithms
- Event delegation
- Responsive grid layouts

**Acceptance Criteria:**
- Calendar correctly displays all months and years
- Deadlines appear on correct dates
- Clicking a date allows quick-add
- Calendar is responsive on mobile
- Performance is smooth even with many deadlines

---

### Issue #12: Add Data Visualization for Statistics
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `visualization`  
**Estimated Time:** 6-8 hours

**Description:**  
Implement the Statistics view with charts and graphs showing completion rates, tasks by course, upcoming deadlines timeline, and productivity trends.

**Tasks:**
- Choose a chart library (Chart.js, D3.js, or implement custom)
- Create completion rate pie/donut chart
- Add bar chart for tasks by course
- Create timeline view for upcoming deadlines
- Add trend analysis (tasks completed per week/month)
- Make charts responsive and accessible

**Learning Outcomes:**
- Data visualization principles
- Chart library integration
- Data aggregation and analysis
- Canvas or SVG rendering
- Responsive chart design

**Acceptance Criteria:**
- Multiple chart types implemented
- Charts update based on actual data
- Charts are responsive and mobile-friendly
- Color scheme matches application theme
- Charts are accessible (keyboard navigation, screen readers)

---

### Issue #13: Implement Advanced Search with Filters
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `search`  
**Estimated Time:** 4-5 hours

**Description:**  
Enhance the search functionality to include advanced filters: date ranges, multiple priorities, multiple courses, and text search across title and description with highlighting.

**Tasks:**
- Implement advanced filter UI (modal or sidebar)
- Add date range picker
- Allow multi-select for courses and priorities
- Add search result highlighting
- Show search result count
- Save recent searches
- Add search suggestions

**Learning Outcomes:**
- Advanced filtering algorithms
- Complex state management
- Text highlighting techniques
- Date range handling
- UX for complex interactions

**Acceptance Criteria:**
- Multiple filters can be applied simultaneously
- Search highlights matching text
- Date range filtering works correctly
- Filter state is maintained during session
- Clear all filters option available

---

### Issue #14: Add Recurring Deadlines Feature
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `complex`  
**Estimated Time:** 6-10 hours

**Description:**  
Implement recurring deadlines for weekly assignments, monthly projects, etc. Users should be able to set recurrence patterns (daily, weekly, monthly) with options for end dates or occurrence counts.

**Tasks:**
- Design recurrence pattern UI
- Implement recurrence logic (daily, weekly, monthly, custom)
- Generate future deadline instances
- Handle editing and deletion of recurring series
- Add option to edit single instance vs all instances
- Store recurrence rules efficiently

**Learning Outcomes:**
- Complex date calculations
- Recurrence rule algorithms (similar to iCalendar RRULE)
- Data modeling for recurring events
- Complex UI state management
- Database design for recurring data

**Acceptance Criteria:**
- Users can create recurring deadlines
- Multiple recurrence patterns supported
- Can edit/delete single instance or entire series
- Recurring deadlines appear correctly on calendar
- Performance remains good with many recurrences

---

### Issue #15: Implement Collaborative Features (Share Courses/Deadlines)
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `collaboration`  
**Estimated Time:** 8-12 hours

**Description:**  
Add ability to share courses and deadlines with other students via generated links or export codes. This should work without a backend by using encoded data in URLs.

**Tasks:**
- Implement data serialization and compression
- Generate shareable links with encoded data
- Create import functionality from shared links
- Add UI for sharing (copy link, QR code)
- Handle large datasets in URLs
- Add privacy considerations (what data to share)

**Learning Outcomes:**
- Data serialization techniques
- URL encoding and compression
- Cryptographic encoding (Base64, etc.)
- P2P data sharing concepts
- Privacy and security considerations

**Acceptance Criteria:**
- Users can generate shareable links
- Links can be imported by other users
- Data integrity is maintained
- Works with reasonable data sizes
- Clear privacy information shown

---

### Issue #16: Add Progressive Web App (PWA) Support
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `pwa`, `feature`  
**Estimated Time:** 5-7 hours

**Description:**  
Convert the application into a Progressive Web App so users can install it on their devices and use it offline.

**Tasks:**
- Create manifest.json file
- Implement service worker for offline support
- Add install prompt
- Cache static assets
- Handle offline data sync
- Add appropriate icons for different platforms
- Test on multiple devices

**Learning Outcomes:**
- Progressive Web App concepts
- Service Worker API
- Cache strategies
- Offline-first design
- Web app manifest

**Acceptance Criteria:**
- App can be installed on devices
- Works offline with cached data
- Install prompt appears appropriately
- All static assets are cached
- Passes PWA audit in Lighthouse

---

### Issue #17: Implement Undo/Redo Functionality
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `state-management`  
**Estimated Time:** 6-8 hours

**Description:**  
Add undo/redo functionality for all major actions (add, edit, delete tasks and courses) with keyboard shortcuts (Ctrl+Z, Ctrl+Y).

**Tasks:**
- Implement command pattern for actions
- Create action history stack
- Add undo/redo buttons to UI
- Implement keyboard shortcuts
- Handle complex scenarios (undo add after edit)
- Add action history viewer
- Limit history size for performance

**Learning Outcomes:**
- Command pattern
- State history management
- Keyboard event handling
- Complex state restoration
- Memory management

**Acceptance Criteria:**
- Undo/redo works for all major actions
- Keyboard shortcuts work (Ctrl+Z, Ctrl+Y)
- UI shows available undo/redo actions
- History is limited to reasonable size
- Complex scenarios handled correctly

---

### Issue #18: Add Smart Deadline Suggestions Using AI-like Logic
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `ai`, `algorithm`  
**Estimated Time:** 8-10 hours

**Description:**  
Implement intelligent deadline suggestions based on user patterns, course workload, and time until due date. Suggest optimal times to work on assignments.

**Tasks:**
- Analyze user's completion patterns
- Calculate course workload distribution
- Suggest work sessions based on deadline urgency
- Consider user's past performance per course
- Provide "smart schedule" recommendations
- Add settings for work session preferences

**Learning Outcomes:**
- Data analysis algorithms
- Pattern recognition
- Heuristic algorithms
- Time-based calculations
- Machine learning concepts (without external libraries)

**Acceptance Criteria:**
- System suggests work times for upcoming deadlines
- Suggestions consider multiple factors
- User can configure suggestion parameters
- Suggestions improve with usage
- Clear explanation for each suggestion

---

### Issue #19: Implement Multi-Language Support (i18n)
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `internationalization`  
**Estimated Time:** 6-8 hours

**Description:**  
Add internationalization support to make the app available in multiple languages (at minimum: English, Spanish, French).

**Tasks:**
- Create translation file structure
- Extract all text strings from application
- Implement language switching mechanism
- Create translation files for multiple languages
- Handle date/time formatting for different locales
- Add language selector in UI
- Ensure RTL language support

**Learning Outcomes:**
- Internationalization (i18n) principles
- Locale handling
- Text extraction and management
- Date/time localization
- RTL layout considerations

**Acceptance Criteria:**
- At least 3 languages supported
- Language can be changed in settings
- All UI text is translated
- Dates formatted according to locale
- Language preference persists

---

### Issue #20: Build Gamification System with Achievements
**Difficulty:** Advanced  
**Labels:** `advanced`, `javascript`, `feature`, `gamification`, `fun`  
**Estimated Time:** 8-10 hours

**Description:**  
Add a gamification layer with achievements, streaks, and points to motivate students to stay on top of their deadlines.

**Tasks:**
- Design achievement system (badges, points)
- Implement streak tracking (consecutive days with completed tasks)
- Create achievement unlocking logic
- Design and build achievements UI
- Add progress indicators
- Create achievement notifications
- Store achievement data
- Add leaderboard concept (self-competition)

**Learning Outcomes:**
- Gamification principles
- Achievement system design
- Streak calculation algorithms
- Reward/feedback systems
- Motivation psychology
- Animation and celebration effects

**Acceptance Criteria:**
- Multiple achievements available (15-20 different types)
- Achievements unlock based on user actions
- Streak tracking works correctly
- Visual feedback when achievements unlock
- Achievement progress is shown
- System motivates without being annoying

---

## 🏷️ Issue Labels Guide

- **good first issue**: Perfect for newcomers to open source
- **beginner**: Requires basic HTML/CSS/JS knowledge
- **intermediate**: Requires solid understanding of web development
- **advanced**: Requires advanced skills and problem-solving
- **bug**: Something isn't working
- **documentation**: Improvements to documentation
- **feature**: New feature or request
- **enhancement**: Improvement to existing feature
- **help wanted**: Extra attention needed
- **question**: Further information requested
- **ui/ux**: User interface and experience
- **performance**: Performance improvements
- **accessibility**: Accessibility improvements

---

## 📊 Difficulty Distribution

- **Beginner (5 issues)**: Good for learning basics
- **Intermediate (5 issues)**: Build on fundamentals
- **Advanced (10 issues)**: Complex features for experienced developers

## 🎯 Workshop Tips

1. **Start Small**: Begin with beginner issues to understand the codebase
2. **Read Carefully**: Each issue has detailed requirements
3. **Ask Questions**: Use issue comments if anything is unclear
4. **Test Thoroughly**: Test your changes in different scenarios
5. **Document**: Update relevant docs with your changes
6. **Have Fun**: Learning is the goal, perfect code is secondary!

---

**Happy Coding! 🚀**
