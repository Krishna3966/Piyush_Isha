/*
This is the most popular option in real-world projects 

video: 'retain-on-failure'
It records videos only when the test cases are failing, but
when the test cases are passing, no video capture.

By default, Playwright captures the video in HD resolution.
The default video resolution in Playwright is 1280 by 720 pixels.

    video: {
      mode: 'on',
      size: {width: 1920, height: 1080}
    }

With this resolution, now the recorded video will be in full HD, which is 1920 by 1080 pixels.

Full HD resolution takes the videos in almost three times the size as HD resolution.

*/