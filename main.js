const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1-sep-2024')
.then(() => {
    
    const PORT = 3000;
    const app = express();
    app.use(express.json());

    const indexRoute = require('./routes/index.route');
    const courseRoute = require('./routes/course.route');
    const scheduleRoute = require('./routes/schedule.router');
    const enrolRoute = require('./routes/enrollment.route');
    const categoryRoute = require('./routes/category.route');
    const instructorRoute = require('./routes/instructor.route')

    app.use('/api', indexRoute);
    app.use('/course', courseRoute);
    app.use('/schedule', scheduleRoute);
    app.use('/enrollment', enrolRoute);
    app.use('/category', categoryRoute);
    app.use('/instructor', instructorRoute)
    

    app.listen(3000, () => console.log('Application listening on http://localhost:' + PORT));
})
.catch(err => {
    console.error(err)
});
