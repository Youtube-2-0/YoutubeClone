
React YouTube Project - Component Map

Component Map
React YouTube Project - Component Map

Component Map
1. Main - App.jsx      (aka Home) define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
		b. VideoList - VideoList.jsx (child of Main)
		c. Showpage - ShowPage.jsx (child of Main)
			    i. Comment Form - CommentForm.jsx (child component of ShowPage)
		d. About Page - AboutPage.jsx
        e. Error Message - ErrorMessage.jsx
		e. Sitemap - SiteMap.jsx (child of Main)
2. Readme - README.MD
3. //data/fetch.jsx (not in Components Folder)
4. assets - photos (not in components Folder)


Priorities
1. Data Fetch- API
2. Main, App.jsx - root, Nav / Search
3. About, Home, Showpage
4. Sitemap, ReadMe.md, assets- photos


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
		 
		


