function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/r8Dh8eFQk/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_green = Math.floor(Math.random() * 255) + 1;
        random_number_red = Math.floor(Math.random() * 255) + 1;
        random_number_blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("hear").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("hear").style.color = "rgb("+random_number_red+", "+random_number_green+", "+random_number_blue+")";

        if(results[0].label == "Barking"){
            document.getElementById("img1").src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-dog-royalty-free-image-505534037-1565105327.jpg";

        }
        else if(results[0].label == "Meowing"){
            document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg";
        }

        else if (results[0].label == "Mooing"){
            document.getElementById("img1").src = "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80";
        }

        else if (results[0].label == "Roar"){
            document.getElementById("img1").src = "https://media.vanityfair.com/photos/5d2750b1abb5c9000873bced/master/pass/lion-king-review.jpg";
        }

        else{
            document.getElementById("img1").src = "https://st2.depositphotos.com/1320097/8126/v/380/depositphotos_81265712-stock-illustration-ear-icon.jpg?forcejpeg=true";
        }
    }
}