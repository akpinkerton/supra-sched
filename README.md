# Project Week 2 - Full Stack Idea

## Requirements
  - [ ] ERD
  - [ ] Test using Cypress and Jest / React Testing Lib
  - [X] SPA using React
  - [X] Server - Express
  - [X] SQL - Postgres

### ✅ Initial Must Dos
- [X] Input a meeting/timeblock
- [X] Push user inputs to a list
- [X] Post inputs to a server using express
  - [X] On submit, POST to server with a fecth ()
- [X] Send json data to file path '/Home' on localhost
- [X] GET data from '/Home' to display for schedule

#### 📱 App Layout
- [X] Navbar
  - Home (log in)
  - Personal Calendar
  - Unit Calendar

- [ ] Home Page
  - [ ] login
  - [X] once logged in, display personal calendar with a create event
  button

- [X] Add event
  - [ ] POST as logged in user
  - [X] Event name / Task
    -  Event Input Fields
      - [X] Date and Time
        - [ ] Blocks already scheduled time
          - waiting to account for duration
        - [ ] Remove or refactor initial value dates - added for ease of testing
      - [ ] Find a time?
      - [X] Attendees
        - [ ] Checkboxes and delete times that the attendeess unavailable
        - [ ] Refactor into a visial table that displays the day with available times for everyone
      - [X] Location
      - [X] Availability: Busy, Free
    - Task Input Fields
      - [ ] Due date
      - [ ] Priority: High, Weekly, Monthly, Free/Idea

- [ ] View Personal Calendar
  - [X] Delete event option
  - [ ] Edit event option

- [ ] View Unit Calendar
  - [ ] Search by person/people

### 🏋🏼‍♀️ Stretch goals
  - [ ] Search options:
    - who is working on a certain day
    - who is working on a certain time
    - what is an individuals schedule
    - what is a crew's schedule

  - [ ] Make location a drop down menu for common options to see availability of that area

  - [ ] Find a way to create table by adding a new user without having an existing ind user table created in db

  - [ ] APIs???

  - [ ] Display Unit Cal
    - [ ] Have table with member's flights/sections to be able to search by different criteria

  - [ ] Deploy on AWS or Heroku

#### 💄 Styling
  - Bootstrap

###### README reqs
  - [X] Project Title
  - [ ] Overview
  - [ ] Table of contents
  - [ ] Description
  - [ ] Installation instructions
  - [ ] Usage
  - [ ] Team members and roles
  - [ ] Road-map
  - [ ] Screen captures (gifs) of app in action
    - Resources on how are on Learn

###### Presentation reqs
  - [ ] Demonstrate App
  - [ ] Discuss React, Styling, API
  - Every team member
  - Talking points on Learn

###### NOTES
  - Presentation - Friday, 9 July, after lunch
    - Check out the CAR (Challenge, Action, Result) framework to help structure your presentation → https://thehiredguns.com/car-technique-secret-interviewing-weapon/
  - As an audience member, come up with at least two questions for a team other than your own

###### Initial Ideas
- Scheduler
  - Input a meeting
  - See calendar
  - Find availability for meetings
  - View schedules for a group
    - EX: Unit on shift work# supra-sched
