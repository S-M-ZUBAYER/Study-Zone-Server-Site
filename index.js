const express = require('express')
const app = express();
const courses = require('./data/courses.json');
const port = process.env.port || 5000;
const cors = require('cors')

app.use(cors());
app.get('/', (req, res) => {
    res.send('API data processing!')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const courseId = req.params.id;
    const course = courses.find(item => item.id == courseId);
    res.send(course)
})
app.get('/items/:course_id', (req, res) => {
    const courseId = req.params.course_id;
    const course = courses.find(item => item.course_id == courseId);
    res.send(course)
})

app.listen(port, () => {
    console.log(`Showing the data on ${port}`)
})