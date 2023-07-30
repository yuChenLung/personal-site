<script>
    export let option = "default";
    import strlogo from "../page-assets/strlogo.png";
    import ualbanylogo from "../page-assets/ualbanylogo.png";

    let strOn = false;
    function toggleSTR() {
        strOn = !strOn;
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
        text-align: center;
    }
    .teaser-content {
        margin-left: 20px;
        max-width: 420px;
        text-align: center;
    }
    .icon-img {
        width: 120px;
        margin-top: 5px;
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
    .dropdown-section {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        margin: 0.6em;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
        min-width: 40vw;
        max-width: 90vw;
    }
</style>

{#if option == "default" || option == "str"}
<button on:click={toggleSTR} class="dropdown-section">
    <div class="flex-horiz vert-align-center horiz-align-center">
        <img class="icon-img" src={strlogo} alt="STR's logo"/>
        <div class="teaser-head flex-vert text-align-left">
            <h2>STR</h2>
            SWE Intern
            <i>June - August 2023</i>
            <i>San Diego, CA</i>
        </div>
        <div class="teaser-content flex-vert text-align-left">
            Worked on autonomous tactic drone swarm project based on DARPA distributed-system architecture. Developed swarm tactics in Java and created testing regimes to increase system robustness.
        </div>
    </div>
    {#if strOn}
    <div class="extra-content text-align-left">
        <hr>
        <b>More Information</b>
        <ul id="extra-content-bullets">
            <li>Improved drone surveillance tactic to calculate optimal formation positions based on environmental obstacle positions.</li>
            <li>Communicated and collaborated directly with customer and developers from other companies to set up and adapt a
                3D-simulation environment for STR's testing.</li>
            <li>Designed and implemented testing regimens in simulation engine and for field tests to improve system robustness.</li>
            <li>Led first documentation effort of the DARPA distributed-system architecture and its tactic capabilities.</li>
        </ul>
        <b>Technologies Used:</b> Java and JDK, Gradle/Maven, Unreal Engine/Gazebo, MAVLink
    </div>
    
    {/if}
</button>
{:else if option="hscvresearch"}
<button on:click={toggleHSCV} class="dropdown-section">
    <div class="flex-horiz vert-align-center horiz-align-center">
        <img class="icon-img" src={ualbanylogo} alt="STR's logo"/>
        <div class="teaser-head flex-vert text-align-left">
            <h2>University at Albany</h2>
            UHS Research Program
            <i>2018-2021</i>
            <i>Ardsley, NY</i>
        </div>
        <div id="hscv-head-content" class="teaser-content flex-vert text-align-left">
            Worked on autonomous tactic drone swarm project based on DARPA distributed-system architecture. Developed swarm tactics in Java and created testing regimes to increase system robustness.
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
        <br>
        <hr id="extra-button-divide">
        <div class="flex-horiz vert-align-center horiz-align-center">
            <a target="_blank" href="https://drive.google.com/file/d/1j5e01iBXNJ9umSKZJ1q9DUrns3wHQFb_/view?usp=sharing">
                <button class="small-button">Presentation <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </a>
            <a target="_blank" href="https://drive.google.com/file/d/1RdGTM9PijL5TWBuOHQNCzIPpNmB74Rzz/view?usp=sharing">
                <button class="small-button">Paper <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </a>
            <a target="_blank" href="https://github.com/yuChenLung/auto-cashier">
                <button class="small-button">GitHub Repo <i class="fa-brands fa-github"></i></button>
            </a>
        </div>
    </div>
    
    {/if}
</button>
{:else}
<h2>Does not exist</h2>
{/if}