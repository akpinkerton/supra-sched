# SUPRA SCHEDULE

## Overview
We created a scheduling react application that allows a user to track their schedule and personal tasks.

## Table of Contents
- Install Instructions
- Usage
- Team members
- Screen Captures
- Planning
  - Objectives
  - Layout
  - Goals

## Install Instructions
1. Fork and Clone this repo, *supra-sched*, and our server repo, *supra-sched-bend*
  - Note: These repos will be combined with a 'concurrently' command soon -- stay tuned
2. `npm install` at the root of each directory
3. `npm start` at root of *supra-sched* to start react app on localhost 3000
4. `npm start` at root of *supra-sched-bend* to start server on localhost 3002
5.  In *supra-sched-bend* pull postgres from docker:
  -  `docker exec -it <container-ID> bash`
  -  `psql -U postgres`
6. Create a database called `supra-sched-db`
  - `CREATE DATABASE supra-sched-db;`
7. Spin up knex in *supra-sched-bend*
  - `npx knex migrate:latest` will add a table to your DB
  - `npx knex seed:run` will fill it with some initial values
8. You can add events and tasks to your library. Specify a availability to block that time from being used for future events.
  - NOTE: OCCASIONALLY takes several submits to get the FIRST event to display on the home page.
9. On the home page, you can see all scheduled events.

### Test Install
1. In *supra-sched-bend* create a database called `supra-sched-db_test`
  - `CREATE DATABASE supra-sched-db_test;`
2. `npm test` at root of *supra-sched-bend*
3. In *supra-sched* `npm test` at root.

## Usage

## Team members

Anna Cagle - bend setup, fend-functionality, integration testing, and styling

Briana Ausby - cypress fend testing, unit testing

Felix Zhang - cypress fend testing, unit testing

Mello McCoy - bend setup, SQL setup, fend-functionality

## Screen Captures

*Stay tuned*

## Planning

### ✅ Initial Must Dos
- [X] Input a meeting/timeblock
- [X] Push user inputs to a list
- [X] Post inputs to a server using Express
  - [X] On submit, POST to server with a fecth ()
- [X] Send json data to file path '/events' on localhost
- [X] GET data from '/events' to display for schedule

#### 📱 App Layout
- [X] Navbar
  - Home
    - Personal Calendar

- [X] Home Page
  - [X] Add new event or task
  - [X] Display schedule
  - [X] Display tasks

    - [X] Add event
      - [X] Event name / Task
        -  Event Input Fields
          - [X] Date and Time
            - [X] Blocks already scheduled time
            - [X] Defaults to today
          - [X] Attendees
            - [X] Checkboxes for attendees
          - [X] Location
          - [X] Availability: Busy, Free

- [X] View Personal Calendar
  - [X] Delete event option

### 🏋🏼‍♀️ Stretch goals
- [ ] View Unit Calendar
  - [ ] Search by person/people
  - [ ] Search options:
    - who is working on a certain day
    - who is working on a certain time
    - what is an individuals schedule
    - what is a crew's schedule

- [ ] Edit event option

- [ ] Task Input Fields
    - [ ] Due date
    - [ ] Priority: High, Weekly, Monthly, Free/Idea

- [ ] Log in and post events to personal table

- [ ] Refactor to only have users table and events table with a join users-events table

- [ ] Deploy on AWS or Heroku

#### 💄 Styling
  - Bootstrap
