const express = require("express");
const password = document.getElementById("password");
const form = document.getElementById("form"); 
const errorElement = document.getElementById("error");

// Define Routes

//error middleware 
app.use(errorMiddleware);
//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;

App.listen(PORT, () => console.log(`Server started on port ${PORT}`));