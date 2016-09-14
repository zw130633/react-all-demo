/*import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, hashHistory } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

import './stubs/COURSES'*/

/*const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Async'),
      require('./routes/Profile')
    ]
  } ]
}

render((
  <Router
    history={hashHistory}
    routes={rootRoute}
  />
), document.getElementById('example'))*/

 //I've unrolled the recursive directory loop that is happening above to get a
 //better idea of just what this huge-apps Router looks like, or just look at the
 //file system :)

 /*import { Route } from 'react-router'

 import App from './components/App'
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

 render(
   <Router history={hashHistory}>
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
     </Route>
   </Router>,
   document.getElementById('example')
 )*/

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory,hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './routes/Root'
import configureStore from './store/configureStore'
import useBasename from 'history/lib/useBasename'
import App from './containers/App'
require('./style/app')

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

//<Root store={store} history={useBasename(() => history)({ basename: `/react-all-demo/src/index.html` })} />,

render(
  <Root store={store} history={useBasename(() => history)({ basename: `/react-all-demo/src/index.html` })} />,
  document.getElementById('root')
)

