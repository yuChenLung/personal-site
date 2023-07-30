<script>
    export let option = "default";
    import chipinlogo from "../page-assets/chipinlogo.png";

    let chipinOn = false;
    function toggleChipin() {
        chipinOn = !chipinOn;
    }
    let hscvOn = false;
    function toggleHSCV() {
        hscvOn = !hscvOn;
    }
</script>

<style>
    .teaser-head {
        margin-left: 30px;
        margin-right: 20px;
    }
    .teaser-content {
        margin-left: 20px;
        max-width: 420px;
    }
    .icon-img {
        width: 120px;
    }
    h2 {
        line-height: 1.5em;
        padding: 0;
        margin: 0;
    }
    div {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .extra-content {
        max-width: 730px;
    }
    #extra-content-bullets {
        line-height: 1.5em;
    }
    #hscv-head-content {
        max-width: 300px;
    }
    .dropdown-section {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        margin: 0.6em;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
        width: 800px;
    }
</style>

{#if option == "default" || option == "chipin"}
<button on:click={toggleChipin} class="dropdown-section">
    <div class="flex-horiz vert-align-center horiz-align-center">
        <img class="icon-img" src={chipinlogo} alt="STR's logo"/>
        <div class="teaser-head flex-vert text-align-left">
            <h2>ChipIn</h2>
            Lead Front-End Dev
            <i>April - June 2022</i>
            <i>Los Angeles, CA</i>
        </div>
        <div class="teaser-content flex-vert text-align-left">
            ChipIn is a web application to connect organizations with volunteers for local events. 
            Volunteers and organizations can create new groups and join groups to connect and register for events. 
            Role was dsegin, front-end navigation, scalability, and application of backend capabilities.
        </div>
    </div>
    {#if chipinOn}
    <div class="extra-content text-align-left">
        <hr>
        <b>More Information</b>
        <ul id="extra-content-bullets">
            <li>Developed a full stack React web app to connect organizations looking for volunteers with those looking for
                opportunities.</li>
            <li>Utilizes Google Firebase to store user data and handle log in and implements Google Maps API for a map to
                display events.</li>
            <li>Allows creation of events and groups, sign-ups, volunteer info tracking, and event proximity sorting.</li>
            <li>Organized and implemented flexible user data flow from backend to frontend.</li>
        </ul>
        <b>Technologies Used:</b> React, Google Firebase, Google Maps API, Node.js, Javascript, HTML/CSS
        <br>
        <hr id="extra-button-divide">
        <div class="flex-horiz vert-align-center horiz-align-center">
            <a target="_blank" href="https://drive.google.com/file/d/1QU7wOLk6LNjWFP5zSoBpEw__Jo6VZLeU/view?usp=sharing">
                <button class="small-button">Presentation <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </a>
            <a target="_blank" href="https://github.com/megang33/chipin">
                <button class="small-button">GitHub Repo <i class="fa-brands fa-github"></i></button>
            </a>
        </div>
    </div>
    
    {/if}
</button>
{:else if option="hscvresearch"}
<button on:click={toggleHSCV} class="dropdown-section">
    <div class="flex-horiz vert-align-center horiz-align-center">
        <img class="icon-img" src={chipinlogo} alt="STR's logo"/>
        <div class="teaser-head flex-vert text-align-left">
            <h2>UAlbany UHS Program</h2>
            Student Researcher
            <i>2018-2021</i>
            <i>Ardsley, NY</i>
        </div>
        <div id="hscv-head-content" class="teaser-content flex-vert text-align-left">
            Developed deep learning object detection and segmentation system that elinimates the need for human-annotated training data by using synthetic data. Tested application as automated cashier. 
        </div>
    </div>
    {#if hscvOn}
    <div class="extra-content text-align-left">
        <hr>
        <b>More Information</b>
        <ul id="extra-content-bullets">
            <li>Designed and prototyped an object detection system that reduces reliance on human-annotated, pre-existing datasets by training Mask-RCNN object segmentation model with synthetic data.</li>
            <li>Enabled generalization of the system to different applications by extracting object position data and separately classifying object using fine-tunable MobileNet model layers.</li>
            <li>Applied novel system to build an automated cashier </li>
        </ul>
        <b>Technologies Used:</b> Python, Keras and TensorFlow libraries, Nvidia CUDA
    </div>
    
    {/if}
</button>
{:else}
<h2>Does not exist</h2>
{/if}