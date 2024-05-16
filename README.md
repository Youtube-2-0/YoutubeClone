# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



React YouTube Project - Component Map

Component Map
1. Main - App.jsx      (aka Home) define state for videos here
Search - SearchBar.jsx (child of Main)
VideoList - VideoList.jsx (child of Main)
Showpage - ShowPage.jsx (child of Main)
Comment Form - CommentForm.jsx (child component of ShowPage)
About Page - AboutPage.jsx
2. NavBar - NavBar.jsx (child of Main)
3. Sitemap - SiteMap.jsx (child of Main)
7. Readme - README.MD
8. //data/fetch.jsx (not in Components Folder)
9. assets - photos (not in Components Folder)


Priorities
1. Data Fetch- API
2. Main, App.jsx - root, Nav / Search
3. About, Home, Showpage
4. Footer, Sitemap, ReadMe.md, assets- photos


YouTube pages Visuals
1. Homepage (Main aka App.jsx)
	 a. Home page on load
		 Includes:
		 `Navbar`
		 `SearchBar` 
		 `Home` link 
		 `About` link
		 `prompt`  - prompts the user to search for videos on load
		 `Site Map`



Mike: Showpage, search
Steve:About, ReadME.md, , assets, sitemap
Nikki:Data,Navbar,comment Form footer
	
	 
	 
	 b. Home page on search
		 Includes:
		 `Navbar`
		 `SearchBar` 
		 `Home` link 
		 `About` link
		 Videos that appear from API
		 `Site Map`
	
	


2. Show page
		 Includes:
		 `Navbar`
		 `Home` link ,
		 `About` link
		 One video that appear from API ready for viewing
		 `Site Map`
		
	a. Comment Form:
		 Includes:
		 `Name` field
		 `Comment` field
		 `Submit` button
		 Comments as examples
		 
		


