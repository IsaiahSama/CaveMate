# Cave Mate
Welcome to Cave Mate. A wonderful Tinder-like app, made just for UWI Cavehill Students, by UWI Cavehill student 😀.

For more information on the app itself, check out the Info.md file.
This file will focus more on the structure of the application, along with other development related notes (for my developer peoples.)

## Goal
Cave Mate is designed to be a localized Tinder clone, meant to hopefully bring an extra spice to the data experiences at UWI Cavehill, and perhaps partially level the playing field. 

After reaching out to several random students, thusfar, all of them (30+) agreed that it would be a cool experience, even if just for fun. As such, that's as much of a green light as I need.

## Structure
It's like Tinder, but for UWI Students, as such, some of the information available for display will be granted a bit more emphasis and priority, compared to a generalized dating app. The aim is to bring out as much of the UWI Charm as possible, and perhaps even make the place a bit more inviting and entertaining.

The project will be built using a FIRM (FastAPI, Ionic, React, MongoDB) stack, and therefore will be a web application, capable of running natively on mobile.

### Frontend
The frontend will be designed using React + Ionic Framework. You may view the [wireframe here](https://wireframe.cc/tzkBKC). (Note, I haven't even started on it yet lol.)

### Backend
The backend will be designed using a FastAPI server, and MongoDB for the database.
The design can be viewed on this [wireframe here](https://wireframe.cc/FUQTVj). (Note, I also haven't started this yet.)

## Features (Intended)
- User Authentication / Verification (Need to verify that the users are indeed UWI students for safety + security)
- Member preview  
- Filtering by Major, Department, Year Level, Tags
- Direct Messaging
- Profile Customization
- Good ol' Report and Block
- Feedback Service
- Campus events + Activities
- Matching Algorithm

## Main Pages
- Home (Requires user Login. Displays random list of candidates for card swiping)
- Profile (User can customize their profile here and other basic settings)
- Search (Used for searching and getting specific members based on criteria)
- Matches (Page used for communicating with successful matches.)

## Sub Pages
- Settings
- Chat

### Profile
Fields to change in the profile are:
- Primary Color (Favorite Color)
- Bio
- Brief Description
- Hobbies / Interests
- Profile Picture
- Social Media Links

### Search
Search page will contain input fields to be used as filters. Fields are not required.
Fields:
- Name  
- Major
- Faculty
- Interests
- Nationality