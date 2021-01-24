
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

      const modelParams = {
          flipHorizontal: true,   // flip e.g for video 
          imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
          maxNumBoxes: 20,        // maximum number of boxes to detect
          iouThreshold: 0.5,      // ioU threshold for non-max suppression
          scoreThreshold: 0.79,    // confidence threshold for predictions.
        }
        
      // Select everythin in html
      const video = document.querySelector('#video');
      const audio = document.querySelector('#audio');
      const canvas = document.querySelector('#canvas');
      const context=  canvas.getContext('2d');
      let model;
      
      handTrack.startVideo(video)
          .then(status => {
              if (status){
                  navigator.getUserMedia({video:{}}, stream => {
                      video.srcObject = stream;
                      setInterval(runDetection, 1000);
                  }, 
                  err => console.log(err)
                  );
              }
          })
      
          function runDetection(){
              
            console.log("running predictions");
              model.detect(video)
                  .then(predictions => {
                     console.log("predictions" + predictions);
                      if(predictions.length > 0){
                          console.log("hi")
                        
                          audio.play();
                      }
                      // requestAnimationFrame(runDetection);
      
                      // model.renderPredictions(predictions, canvas, context, video);
              })
          }
      
          handTrack.load(modelParams).then(lmodel => {
              model = lmodel;
          });