# 🚀 Workshop Setup Guide

Welcome to the Academic Planner Open Source Workshop! This guide will help you get started.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ A GitHub account
- ✅ Git installed on your computer
- ✅ A code editor (VS Code recommended)
- ✅ A modern web browser (Chrome, Firefox, Safari, or Edge)
- ✅ Basic knowledge of HTML, CSS, and JavaScript

## 🛠️ Setup Instructions

### Step 1: Fork the Repository

1. Go to the repository page on GitHub
2. Click the "Fork" button in the top-right corner
3. This creates a copy of the repository under your GitHub account

### Step 2: Clone Your Fork

Open your terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/academic-planner.git
cd academic-planner
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Open the Project

Open the project folder in your code editor:

```bash
code .
```

Or open VS Code and use File → Open Folder to select the project directory.

### Step 4: Run the Application

Since this is a pure HTML/CSS/JavaScript project, you can simply:

**Option A: Open directly in browser**
- Double-click `index.html`
- Or right-click and select "Open with Browser"

**Option B: Use a local server (recommended)**

Using Python:
```bash
python -m http.server 8000
```

Using Node.js:
```bash
npx http-server
```

Using VS Code Live Server extension:
- Install "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

Then open your browser and navigate to `http://localhost:8000`

### Step 5: Explore the Project

Take some time to:
- Click around and understand the features
- Open the browser console (F12) to see logs
- Check out the code structure
- Read through the main files

## 📁 Project Structure Overview

```
academic-planner/
├── index.html          # Main HTML file - start here
├── css/
│   ├── style.css      # Main styles
│   ├── themes.css     # Color themes and variables
│   └── responsive.css # Mobile responsiveness
├── js/
│   ├── app.js         # Main application logic
│   ├── storage.js     # Local storage management
│   ├── ui.js          # UI rendering
│   └── utils.js       # Utility functions
├── README.md          # Project overview
├── CONTRIBUTING.md    # Contribution guidelines
├── ISSUES.md          # Workshop issues
└── SETUP.md           # This file
```

## 🎯 Choosing an Issue

1. Open `ISSUES.md` to see all available issues
2. Choose based on your skill level:
   - **Beginner**: Issues #1-5
   - **Intermediate**: Issues #6-10
   - **Advanced**: Issues #11-20

3. Read the issue carefully and understand:
   - What needs to be done
   - What you'll learn
   - Acceptance criteria

## 💻 Making Changes

### Step 1: Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/issue-number-brief-description
```

Example:
```bash
git checkout -b feature/issue-1-add-favicon
```

### Step 2: Make Your Changes

- Edit the relevant files
- Test your changes frequently
- Check in multiple browsers if possible
- Ensure responsiveness on mobile

### Step 3: Test Thoroughly

- Test all functionality you changed
- Test on different screen sizes
- Check browser console for errors
- Validate HTML/CSS if possible

### Step 4: Commit Your Changes

```bash
git add .
git commit -m "Add favicon to improve branding (#1)"
```

Write clear commit messages that:
- Start with a verb (Add, Fix, Update, Implement)
- Reference the issue number
- Briefly describe what changed

### Step 5: Push to Your Fork

```bash
git push origin feature/issue-1-add-favicon
```

### Step 6: Create a Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request"
3. Select your branch
4. Fill in the PR template:
   - Describe your changes
   - Reference the issue (#1)
   - Add screenshots if UI changed
   - Mention any testing done

## 🔍 Testing Checklist

Before submitting your PR, verify:

- [ ] Code runs without errors
- [ ] Changes work as expected
- [ ] No console errors
- [ ] Works on mobile (responsive)
- [ ] Works in different browsers
- [ ] Code is commented where needed
- [ ] Follows existing code style
- [ ] Git commit messages are clear

## 🆘 Getting Help

If you get stuck:

1. **Read the Documentation**: Check README.md and CONTRIBUTING.md
2. **Check the Code**: Look at similar existing code
3. **Use Browser DevTools**: Console, Elements, Network tabs
4. **Ask for Help**: Comment on the issue or ask in discussions
5. **Google It**: Search for errors or concepts you don't understand

## 🎓 Learning Resources

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [W3Schools](https://www.w3schools.com/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

### Git & GitHub
- [GitHub Guides](https://guides.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [Learn Git Branching](https://learngitbranching.js.org/)

## 🐛 Troubleshooting

### Changes not showing?
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Check if the correct file is being served

### Git issues?
- Make sure you're on the right branch: `git branch`
- Check git status: `git status`
- Pull latest changes: `git pull origin main`

### JavaScript errors?
- Open browser console (F12)
- Read the error message carefully
- Check line numbers mentioned in errors
- Use `console.log()` for debugging

## ✨ Best Practices

1. **Code Style**: Follow the existing code style
2. **Comments**: Add comments for complex logic
3. **Commits**: Make small, focused commits
4. **Testing**: Test before committing
5. **Documentation**: Update docs if needed
6. **Be Patient**: Learning takes time!

## 🎉 After Your First Contribution

1. ⭐ Star the repository
2. 🎯 Try another issue (increase difficulty)
3. 💬 Help others in discussions
4. 📢 Share your experience
5. 🔄 Keep contributing!

## 📞 Contact

- Create an issue for bugs or features
- Use discussions for questions
- Follow contribution guidelines

---

**Happy Coding! Remember, every expert was once a beginner. You've got this! 🚀**
