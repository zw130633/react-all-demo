//import React from 'react'
//import { Route } from 'react-router'
//import App from './containers/App'
//import UserPage from './containers/UserPage'
//import RepoPage from './containers/RepoPage'
//
//export default (
//<Route path="/" component={App}>
//  <Route path="/:login/:name"
//         component={RepoPage} />
//  <Route path="/:login"
//         component={UserPage} />
//</Route>
//)
import React from 'react'
import { Route } from 'react-router'
import './stubs/COURSES'
import App from './containers/App'
import Course from './routes/Course/components/Course'
import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
import Announcements from './routes/Course/routes/Announcements/components/Announcements'
import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
import Assignments from './routes/Course/routes/Assignments/components/Assignments'
import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
import CourseGrades from './routes/Course/routes/Grades/components/Grades'
import Calendar from './routes/Calendar/components/Calendar'
import Grades from './routes/Grades/components/Grades'
import Messages from './routes/Messages/components/Messages'
//import Async from './routes/Async/containers/Async'
//import Async from './containers/Async'

/*******************************之前******************************/
/*export default (
  <Route path="/" component={App}>
    <Route path="calendar" component={Calendar} />
    <Route path="course/:courseId" component={Course}>
      <Route path="announcements" components={{
        sidebar: AnnouncementsSidebar,
        main: Announcements
      }}>
        <Route path=":announcementId" component={Announcement} />
      </Route>
      <Route path="assignments" components={{
        sidebar: AssignmentsSidebar,
        main: Assignments
      }}>
        <Route path=":assignmentId" component={Assignment} />
      </Route>
      <Route path="grades" component={CourseGrades} />
    </Route>
    <Route path="grades" component={Grades} />
    <Route path="messages" component={Messages} />
    <Route path="profile" component={Calendar} />
    <Route path="async" component={Async} />
  </Route>
)*/

//import React from 'react'
//import { render } from 'react-dom'
//import { Router, browserHistory, hashHistory } from 'react-router'
//
//import { syncHistoryWithStore } from 'react-router-redux'
//
//import './stubs/COURSES'
//
//const rootRoute = {
//childRoutes: [ {
//  path: '/',
//  component: require('./containers/App'),
//  childRoutes: [
//    require('./routes/Calendar'),
//    require('./routes/Course'),
//    require('./routes/Grades'),
//    require('./routes/Messages'),
//    require('./routes/Async'),
//    require('./routes/Profile')
//  ]
//} ]
//}